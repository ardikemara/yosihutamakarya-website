/* ===========================================
   Role-based access control · single source of truth
   ===========================================
   Roles:
     super_admin  → semua menu
     staff        → surat + library
     finance      → invoice
*/

const ROLE_ACCESS = {
  super_admin: ['dashboard', 'leads', 'surat', 'invoice', 'library', 'settings'],
  staff:       ['surat', 'library'],
  finance:     ['invoice']
};

const ROLE_HOME = {
  super_admin: 'dashboard.html',
  staff:       'surat.html',
  finance:     'invoice.html'
};

const ROLE_LABEL = {
  super_admin: 'Super Admin',
  staff:       'Staff',
  finance:     'Finance'
};

function roleCanAccess(role, page) {
  return (ROLE_ACCESS[role] || []).includes(page);
}

function roleHome(role) {
  return ROLE_HOME[role] || 'login.html';
}

// Page-level guard. Call at the top of every internal page script.
// Redirects to login if not signed in, or to user's home if role lacks access.
function ensureAccess(page) {
  const user = (typeof DB !== 'undefined' && DB.getUser) ? DB.getUser() : null;
  if (!user) { location.href = 'login.html'; return false; }
  if (!roleCanAccess(user.role, page)) {
    alert(`Akses ditolak — role "${ROLE_LABEL[user.role] || user.role}" tidak punya izin untuk halaman ini.`);
    location.href = roleHome(user.role);
    return false;
  }
  return true;
}
