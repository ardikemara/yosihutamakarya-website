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
          <a href="/produk-detail?slug=${p.slug}" class="nav-dd-item">
            <span class="nav-dd-num">${p.num}</span>
            <span class="nav-dd-text">
              <span class="nav-dd-name">${p.name}</span>
              <span class="nav-dd-audience">${p.audience}</span>
            </span>
          </a>
        `).join('')}
      </div>
      <a href="/produk" class="nav-dd-all">Lihat semua produk →</a>
    </div>
  ` : '';

  const links = [
    { key: 'home', href: '/', label: 'Beranda', dropdown: '' },
    { key: 'produk', href: '/produk', label: 'Produk', dropdown: produkDropdown },
    { key: 'tentang', href: '/tentang', label: 'Tentang', dropdown: '' },
    { key: 'kontak', href: '/kontak', label: 'Kontak', dropdown: '' },
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
        <a href="/" class="nav-brand">
          <img class="logo" src="assets/yk-logo.svg" alt="YK Logo" />
          <div class="nav-brand-text">
            YOSI HUTAMA KARYA
            <small>BUILD · PROTECT · PERFORM</small>
          </div>
        </a>
        <div class="nav-links">
          ${linksHTML}
          <a href="/internal/login" class="nav-internal" style="color: var(--yk-blue); font-weight: 600; font-size: 13px;">Portal Internal →</a>
          <a href="/kontak" class="nav-cta">Minta Penawaran</a>
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
                CV. YOSI HUTAMA KARYA
                <div style="font-size: 11px; color: rgba(255,255,255,0.5); letter-spacing: 0.1em; margin-top: 4px;">BUILD · PROTECT · PERFORM</div>
              </div>
            </div>
            <p>Solusi aditif konstruksi dari pondasi sampai finishing, dipercaya kontraktor, ready-mix, & precaster di Indonesia.</p>
          </div>
          <div>
            <h5>Produk</h5>
            <ul>
              <li><a href="/produk#concrete-admixture">Concrete Admixture</a></li>
              <li><a href="/produk#waterproofing">Waterproofing</a></li>
              <li><a href="/produk#floor-treatments">Floor Treatments</a></li>
              <li><a href="/produk#bonding-agent">Bonding Agent</a></li>
              <li><a href="/produk">Lihat semua →</a></li>
            </ul>
          </div>
          <div>
            <h5>Perusahaan</h5>
            <ul>
              <li><a href="/tentang">Tentang Kami</a></li>
              <li><a href="/kontak">Kontak Sales</a></li>
              <li><a href="/internal/login">Portal Internal</a></li>
            </ul>
          </div>
          <div>
            <h5>Hubungi</h5>
            <ul>
              <li>📞 +62 877-2200-4970</li>
              <li>✉️ info@yosihutamakarya.net</li>
              <li>🌐 yosihutamakarya.net</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 CV. Yosi Hutama Karya. Hak Cipta Dilindungi.</div>
          <div>KP. Kaum Tengah, Jl. Transyogi Cibubur – Cileungsi, Kab. Bogor 16820</div>
        </div>
      </div>
    </footer>
  `;
}

function renderWaFloat() {
  const waNumber = '6287722004970';
  const waText = 'Halo CV. Yosi Hutama Karya, saya mau tanya produk & minta penawaran harga. Bisa dibantu?';
  const waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(waText);
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <style>
      .wa-float {
        position: fixed; bottom: 24px; right: 24px; z-index: 9999;
        display: flex; align-items: center; gap: 10px;
        background: #25D366; color: #fff; text-decoration: none;
        padding: 12px 20px 12px 14px; border-radius: 999px;
        font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        transition: transform 0.15s, box-shadow 0.15s;
      }
      .wa-float:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
      .wa-float svg { width: 26px; height: 26px; flex-shrink: 0; }
      @media (max-width: 640px) {
        .wa-float { padding: 14px; bottom: 16px; right: 16px; }
        .wa-float .wa-label { display: none; }
      }
    </style>
    <a class="wa-float" href="${waUrl}" target="_blank" rel="noopener" aria-label="Chat WhatsApp CV. Yosi Hutama Karya">
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.6 2.5.9 3.8.9 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.4c-1.2 0-2.4-.3-3.5-.8l-.6-.3-4.9.9 1-4.7-.4-.6c-.9-1.5-1.4-3.2-1.4-4.9 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.4-9.8 9.4zm5.4-7.1c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>
      <span class="wa-label">Chat Sales</span>
    </a>`;
  document.body.appendChild(wrap);
  // Lacak klik sebagai event GA4
  wrap.querySelector('.wa-float').addEventListener('click', function() {
    if (typeof gtag === 'function') gtag('event', 'whatsapp_click', { page: location.pathname });
  });
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
  renderWaFloat();
}
