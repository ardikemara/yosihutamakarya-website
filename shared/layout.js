/* ===========================================
   Shared layout, nav, footer, toast
   Auto-injects to pages that include #yk-nav and #yk-footer
   =========================================== */

function renderNav(activeKey) {
  // Build product dropdown from PRODUCTS array (loaded from shared/data.js)
  const produkDropdown = (typeof PRODUCTS !== 'undefined' && PRODUCTS.length) ? `
    <div class="nav-dropdown">
      <div class="nav-dropdown-inner">
        ${PRODUCTS.map(p => `
          <a href="produk-detail.html?slug=${p.slug}" class="nav-dd-item">
            <span class="nav-dd-num">${p.num}</span>
            <span class="nav-dd-text">
              <span class="nav-dd-name">${p.name}</span>
              <span class="nav-dd-audience">${p.audience}</span>
            </span>
          </a>
        `).join('')}
      </div>
      <a href="produk.html" class="nav-dd-all">Lihat semua produk →</a>
    </div>
  ` : '';

  const links = [
    { key: 'home', href: 'index.html', label: 'Beranda', dropdown: '' },
    { key: 'produk', href: 'produk.html', label: 'Produk', dropdown: produkDropdown },
    { key: 'tentang', href: 'tentang.html', label: 'Tentang', dropdown: '' },
    { key: 'kontak', href: 'kontak.html', label: 'Kontak', dropdown: '' },
  ];
  const linksHTML = links.map(l => {
    const activeCls = l.key === activeKey ? 'active' : '';
    if (l.dropdown) {
      return `<div class="has-dropdown">
        <a href="${l.href}" class="${activeCls}">${l.label} <span class="nav-caret">▾</span></a>
        ${l.dropdown}
      </div>`;
    }
    return `<a href="${l.href}" class="${activeCls}">${l.label}</a>`;
  }).join('');

  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <img class="logo" src="assets/yk-logo.svg" alt="YK Logo" />
          <div class="nav-brand-text">
            YOSI HUTAMA KARYA
            <small>BUILD · PROTECT · PERFORM</small>
          </div>
        </a>
        <div class="nav-links">
          ${linksHTML}
          <a href="internal/login.html" class="nav-internal" style="color: var(--yk-blue); font-weight: 600; font-size: 13px;">Portal Internal →</a>
          <a href="kontak.html" class="nav-cta">Minta Penawaran</a>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="assets/yk-logo.svg" alt="YK Logo" width="48" height="48" class="logo-img-dark" style="object-fit: contain;" />
              <div style="color: #fff; font-weight: 800; line-height: 1.1;">
                PT. YOSI HUTAMA KARYA
                <div style="font-size: 11px; color: rgba(255,255,255,0.5); letter-spacing: 0.1em; margin-top: 4px;">BUILD · PROTECT · PERFORM</div>
              </div>
            </div>
            <p>BUILD · PROTECT · PERFORM<br/>Solusi aditif konstruksi dari pondasi sampai finishing, dipercaya kontraktor, ready-mix, & precaster di Indonesia.</p>
          </div>
          <div>
            <h5>Produk</h5>
            <ul>
              <li><a href="produk.html#concrete-admixture">Concrete Admixture</a></li>
              <li><a href="produk.html#waterproofing">Waterproofing</a></li>
              <li><a href="produk.html#floor-treatments">Floor Treatments</a></li>
              <li><a href="produk.html#bonding-agent">Bonding Agent</a></li>
              <li><a href="produk.html">Lihat semua →</a></li>
            </ul>
          </div>
          <div>
            <h5>Perusahaan</h5>
            <ul>
              <li><a href="tentang.html">Tentang Kami</a></li>
              <li><a href="kontak.html">Kontak Sales</a></li>
              <li><a href="internal/login.html">Portal Internal</a></li>
            </ul>
          </div>
          <div>
            <h5>Hubungi</h5>
            <ul>
              <li>📞 +62 21 475 7386</li>
              <li>📠 +62 21 475 7387</li>
              <li>✉️ info@yosihutamankarya.com</li>
              <li>🌐 yosihutamakarya.com</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 PT. Yosi Hutama Karya. Hak Cipta Dilindungi.</div>
          <div>Jl. Jend. Ahmad Yani Kav. 3, Pulo Gadung, Jakarta Timur 13210</div>
        </div>
      </div>
    </footer>
  `;
}

function showToast(msg, type) {
  type = type || 'success';
  let t = document.getElementById('yk-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'yk-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => { t.className = 'toast ' + type; }, 3000);
}

function mountLayout(activeKey) {
  const navMount = document.getElementById('yk-nav');
  const footMount = document.getElementById('yk-footer');
  if (navMount) navMount.innerHTML = renderNav(activeKey);
  if (footMount) footMount.innerHTML = renderFooter();
}
