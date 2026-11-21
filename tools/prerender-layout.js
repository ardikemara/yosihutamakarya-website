#!/usr/bin/env node
/*
 * Tulis menu (nav) + footer langsung ke HTML setiap halaman publik.
 *
 * Kenapa: sebelumnya nav/footer hanya disuntik oleh shared/layout.js setelah
 * halaman dimuat. Bot AI (GPTBot, PerplexityBot, ClaudeBot) dan sebagian crawler
 * tidak menjalankan JavaScript, jadi tidak melihat link ke produk, dan halaman
 * "loncat" saat menu muncul (layout shift).
 *
 * Sumber kebenaran tetap renderNav()/renderFooter() di shared/layout.js dan
 * PRODUCTS di shared/data.js. Jalankan ulang skrip ini setiap kali mengubah
 * nav, footer, atau daftar produk:
 *
 *   node tools/prerender-layout.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

const ctx = {
  document: { addEventListener() {}, getElementById() { return null; } },
  location: { pathname: '/', href: 'https://www.yosihutamakarya.net/', origin: 'https://www.yosihutamakarya.net' },
  console,
};
vm.createContext(ctx);
// const/let di level atas tidak menjadi properti context, jadi ekspor manual.
vm.runInContext(read('shared/data.js') + '\n;globalThis.PRODUCTS = PRODUCTS;', ctx);
vm.runInContext(read('shared/layout.js') + '\n;globalThis.__nav = renderNav; globalThis.__foot = renderFooter;', ctx);

const squeeze = (html) => html.replace(/\n\s*\n/g, '\n').trim();

const files = execSync('git ls-files "*.html"', { cwd: root }).toString().split('\n')
  .filter((f) => f && !f.startsWith('internal/'));

let changed = 0;
for (const f of files) {
  const src = read(f);
  const m = src.match(/mountLayout\(\s*['"]([^'"]*)['"]\s*\)/);
  if (!m) continue;
  const key = m[1];
  const nav = squeeze(ctx.__nav(key));
  const foot = squeeze(ctx.__foot());
  let out = src.replace(/<div id="yk-nav"[^>]*>(?:<!--yk:nav-->[\s\S]*?<!--\/yk:nav-->)?<\/div>/,
    `<div id="yk-nav" data-track="nav"><!--yk:nav-->\n${nav}\n<!--/yk:nav--></div>`);
  out = out.replace(/<div id="yk-footer"[^>]*>(?:<!--yk:footer-->[\s\S]*?<!--\/yk:footer-->)?<\/div>/,
    `<div id="yk-footer" data-track="footer"><!--yk:footer-->\n${foot}\n<!--/yk:footer--></div>`);
  if (out !== src) {
    fs.writeFileSync(path.join(root, f), out);
    changed++;
    console.log('prerendered', f, `(${key || '-'})`);
  }
}
console.log(`${changed} file diperbarui`);
