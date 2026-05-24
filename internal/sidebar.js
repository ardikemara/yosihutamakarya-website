/* Shared sidebar for internal portal */
function renderSidebar(active) {
  const links = [
    { key: 'dashboard', href: 'dashboard.html', label: 'Dashboard', ic: '<path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z"/>' },
    { key: 'leads', href: 'leads.html', label: 'Leads Sales', ic: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { key: 'surat', href: 'surat.html', label: 'Surat Generator', ic: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
    { key: 'invoice', href: 'invoice.html', label: 'Invoice Generator', ic: '<rect x="3" y="4" width="18" height="16" rx="1"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="15" x2="17" y2="15"/>' },
    { key: 'library', href: 'library.html', label: 'Content Library', ic: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
  ];

  const user = DB.getUser() || { name: 'Guest', role: 'No login' };

  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <img class="logo logo-img-dark" src="../assets/yk-logo.svg" alt="YK Logo" style="object-fit: contain;" />
        <div class="sidebar-brand-text">
          Portal Internal
          <small>PT. YOSI HUTAMA KARYA</small>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-label">Main</div>
        ${links.slice(0,2).map(l => `
          <a href="${l.href}" class="sidebar-link ${l.key === active ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${l.ic}</svg>
            <span>${l.label}</span>
          </a>
        `).join('')}
      </div>

      <div class="sidebar-section">
        <div class="sidebar-label">Tools</div>
        ${links.slice(2).map(l => `
          <a href="${l.href}" class="sidebar-link ${l.key === active ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${l.ic}</svg>
            <span>${l.label}</span>
          </a>
        `).join('')}
      </div>

      <div class="sidebar-user">
        <div style="color: #fff; font-weight: 600; font-size: 13px;">${user.name}</div>
        <div style="margin-top: 2px;">${user.role}</div>
        <div style="margin-top: 8px; display: flex; gap: 12px;">
          <a href="../index.html" style="font-size: 11px; color: rgba(255,255,255,0.5);">↗ Website Publik</a>
          <a href="#" onclick="DB.logout(); location.href='login.html'; return false;" style="font-size: 11px; color: rgba(255,255,255,0.5);">Logout →</a>
        </div>
      </div>
    </aside>
  `;
}

function checkAuth() {
  if (!DB.getUser()) {
    location.href = 'login.html';
    return false;
  }
  return true;
}

function mountSidebar(active) {
  if (!checkAuth()) return;
  const mount = document.getElementById('yk-sidebar');
  if (mount) mount.innerHTML = renderSidebar(active);
}
