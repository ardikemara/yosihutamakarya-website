/* ===========================================
   Mock Database, localStorage wrapper
   For prototype only. Will be replaced by Supabase in production.
   =========================================== */

const DB = {
  KEYS: {
    leads: 'yk_leads',
    invoices: 'yk_invoices',
    surat_log: 'yk_surat_log',
    user: 'yk_user'
  },

  read(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('DB read error', e);
      return [];
    }
  },

  write(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('DB write error', e);
      return false;
    }
  },

  // LEADS
  addLead(lead) {
    const all = this.read(this.KEYS.leads);
    const id = 'LEAD-' + Date.now();
    const entry = { id, createdAt: new Date().toISOString(), status: 'new', ...lead };
    all.unshift(entry);
    this.write(this.KEYS.leads, all);
    return entry;
  },
  listLeads() { return this.read(this.KEYS.leads); },

  // INVOICES
  addInvoice(invoice) {
    const all = this.read(this.KEYS.invoices);
    const id = 'INV-' + Date.now();
    const entry = { id, createdAt: new Date().toISOString(), status: 'unpaid', ...invoice };
    all.unshift(entry);
    this.write(this.KEYS.invoices, all);
    return entry;
  },
  updateInvoiceStatus(id, status) {
    const all = this.read(this.KEYS.invoices);
    const idx = all.findIndex(x => x.id === id || x.invNumber === id);
    if (idx >= 0) {
      all[idx].status = status;
      all[idx].statusUpdatedAt = new Date().toISOString();
      this.write(this.KEYS.invoices, all);
      return all[idx];
    }
    return null;
  },
  deleteInvoice(id) {
    const all = this.read(this.KEYS.invoices).filter(x => x.id !== id);
    this.write(this.KEYS.invoices, all);
  },
  listInvoices() { return this.read(this.KEYS.invoices); },

  // SURAT LOG
  logSurat(entry) {
    const all = this.read(this.KEYS.surat_log);
    const id = 'SRT-' + Date.now();
    all.unshift({ id, createdAt: new Date().toISOString(), ...entry });
    this.write(this.KEYS.surat_log, all);
    return id;
  },
  listSurat() { return this.read(this.KEYS.surat_log); },

  // USER (mock auth)
  setUser(u) { localStorage.setItem(this.KEYS.user, JSON.stringify(u)); },
  getUser() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.user) || 'null'); }
    catch { return null; }
  },
  logout() { localStorage.removeItem(this.KEYS.user); },

  // SEED, populates demo data if empty
  seed() {
    if (this.listLeads().length === 0) {
      this.write(this.KEYS.leads, [
        { id: 'LEAD-1', createdAt: '2026-05-22T08:30:00Z', status: 'qualified', name: 'Bapak Andi Wijaya', company: 'PT. Karya Bangun Persada', phone: '0812-3456-7890', email: 'andi@karyabangun.co.id', product: 'Concrete Admixture', message: 'Butuh penawaran YK NN® 2 ton untuk proyek apartemen.' },
        { id: 'LEAD-2', createdAt: '2026-05-23T14:15:00Z', status: 'new', name: 'Ibu Sri Rahayu', company: 'CV. Mitra Konstruksi', phone: '0813-9876-5432', email: 'sri@mitrakonstruksi.com', product: 'Waterproofing', message: 'Konsultasi waterproofing untuk dak beton 350 m².' },
        { id: 'LEAD-3', createdAt: '2026-05-24T09:00:00Z', status: 'new', name: 'Bapak Hendro', company: 'Toko Bangunan Sejahtera', phone: '0821-2222-3333', email: '', product: 'Bonding Agent', message: 'Jadi distributor YK Bond® di Bekasi, info syaratnya.' }
      ]);
    }
    if (this.listInvoices().length === 0) {
      this.write(this.KEYS.invoices, [
        {
          id: 'INV-1', invNumber: 'INV/2026/05/001', createdAt: '2026-05-15T10:00:00Z',
          clientName: 'PT. Karya Bangun Persada',
          clientAddress: 'Jl. Sudirman No. 45, Jakarta Selatan',
          clientNPWP: '01.234.567.8-901.000',
          items: [
            { desc: 'YK NN® Superplasticizer, Drum 240kg', qty: 2, unit: 'drum', price: 6000000 },
            { desc: 'YK Bond® Pail 20kg', qty: 5, unit: 'pail', price: 350000 }
          ],
          ppnRate: 11,
          dueDate: '2026-06-14',
          status: 'paid', statusUpdatedAt: '2026-05-20T11:00:00Z',
          notes: 'Termin: 30 hari sejak invoice diterbitkan.'
        },
        {
          id: 'INV-2', invNumber: 'INV/2026/05/002', createdAt: '2026-05-18T13:00:00Z',
          clientName: 'CV. Mitra Konstruksi',
          clientAddress: 'Jl. Margonda Raya No. 88, Depok',
          clientNPWP: '02.345.678.9-012.000',
          items: [
            { desc: 'YK Proof® Coating 20kg', qty: 8, unit: 'can', price: 800000 },
            { desc: 'YK WP Mortar® Sak 25kg', qty: 12, unit: 'sak', price: 175000 }
          ],
          ppnRate: 11,
          dueDate: '2026-06-17',
          status: 'unpaid',
          notes: 'Termin: 30 hari sejak invoice diterbitkan.'
        },
        {
          id: 'INV-3', invNumber: 'INV/2026/04/015', createdAt: '2026-04-20T09:00:00Z',
          clientName: 'PT. Sentosa Property',
          clientAddress: 'Jl. Kebon Sirih No. 22, Jakarta Pusat',
          clientNPWP: '03.456.789.0-123.000',
          items: [
            { desc: 'YK Floor Hardener® Natural, Sak 25kg', qty: 40, unit: 'sak', price: 220000 }
          ],
          ppnRate: 11,
          dueDate: '2026-05-20',
          status: 'overdue',
          notes: 'Sudah lewat jatuh tempo, perlu follow-up urgent.'
        }
      ]);
    }
  }
};

// Auto-seed
if (typeof window !== 'undefined') {
  DB.seed();
}
