/* ===========================================
   YK DB · Supabase backend (drop-in replacement for db.js)
   ===========================================
   Same API surface as the localStorage version, but ASYNC.
   All read/write methods now return Promises.

   Call sites must use:
     const leads = await DB.listLeads();
     await DB.addLead({...});

   Loading order in HTML:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="../shared/supabase-config.js"></script>
     <script src="../shared/db.supabase.js"></script>
   =========================================== */

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- field-name mappers (snake_case <-> camelCase) ----------
function leadFromRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    createdAt: r.created_at,
    status: r.status,
    stage: r.stage || 'new',
    name: r.name,
    company: r.company,
    phone: r.phone,
    email: r.email,
    product: r.product,
    volume: r.volume,
    message: r.message,
    notes: r.notes,
    assignedTo: r.assigned_to,
    lastContactedAt: r.last_contacted_at,
    lastContactMethod: r.last_contact_method,
    lastContactNote: r.last_contact_note
  };
}
function leadToRow(l) {
  return {
    status: l.status || 'new',
    name: l.name,
    company: l.company || null,
    phone: l.phone || null,
    email: l.email || null,
    product: l.product || null,
    volume: l.volume || null,
    message: l.message || null,
    notes: l.notes || null,
    assigned_to: l.assignedTo || null
  };
}

function invoiceFromRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    invNumber: r.inv_number,
    createdAt: r.created_at,
    clientName: r.client_name,
    clientAddress: r.client_address,
    clientNPWP: r.client_npwp,
    items: r.items || [],
    ppnRate: Number(r.ppn_rate),
    dueDate: r.due_date,
    status: r.status,
    statusUpdatedAt: r.status_updated_at,
    notes: r.notes
  };
}
function invoiceToRow(i) {
  return {
    inv_number: i.invNumber,
    client_name: i.clientName,
    client_address: i.clientAddress || null,
    client_npwp: i.clientNPWP || null,
    items: i.items || [],
    ppn_rate: i.ppnRate ?? 11,
    due_date: i.dueDate || null,
    status: i.status || 'unpaid',
    notes: i.notes || null
  };
}

function suratFromRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    createdAt: r.created_at,
    template: r.template,
    noSurat: r.no_surat,
    recipient: r.recipient,
    perihal: r.perihal,
    body: r.body,
    createdBy: r.created_by
  };
}
function suratToRow(s) {
  return {
    template: s.template,
    no_surat: s.noSurat || null,
    recipient: s.recipient || null,
    perihal: s.perihal || null,
    body: s.body || null,
    created_by: s.createdBy || null
  };
}

// ---------- DB API (same shape as db.js, but async) ----------
const DB = {
  // LEADS
  async addLead(lead) {
    const { data, error } = await sb.from('leads').insert(leadToRow(lead)).select().single();
    if (error) { console.error('addLead', error); return null; }
    return leadFromRow(data);
  },
  async listLeads() {
    const { data, error } = await sb.from('leads').select('*').order('created_at', { ascending: false });
    if (error) { console.error('listLeads', error); return []; }
    return data.map(leadFromRow);
  },
  async updateLeadStatus(id, status) {
    const { data, error } = await sb.from('leads').update({ status }).eq('id', id).select().single();
    if (error) { console.error('updateLeadStatus', error); return null; }
    return leadFromRow(data);
  },

  // ---------- Sales pipeline ----------
  async updateLeadStage(id, newStage, opts = {}) {
    // 1. read current stage so we can log the transition
    const { data: before, error: e1 } = await sb.from('leads').select('stage').eq('id', id).single();
    if (e1) { console.error('updateLeadStage read', e1); return null; }
    const from = before?.stage;
    if (from === newStage) return before;

    // 2. update stage
    const { data: after, error: e2 } = await sb.from('leads')
      .update({ stage: newStage }).eq('id', id).select().single();
    if (e2) { console.error('updateLeadStage update', e2); return null; }

    // 3. log transition (won't update last_contacted_at — trigger ignores method=stage_change)
    const u = this.getUser();
    await sb.from('lead_activities').insert({
      lead_id: id,
      method: 'stage_change',
      from_stage: from,
      to_stage: newStage,
      note: opts.note || null,
      created_by: u?.name || null
    });

    return leadFromRow(after);
  },

  async logActivity(leadId, method, note) {
    const u = this.getUser();
    const { data, error } = await sb.from('lead_activities').insert({
      lead_id: leadId,
      method: method,                    // 'whatsapp' | 'email' | 'call' | 'meeting' | 'note'
      note: note || null,
      created_by: u?.name || null
    }).select().single();
    if (error) { console.error('logActivity', error); return null; }
    return data;
  },

  async listActivities(leadId) {
    const { data, error } = await sb.from('lead_activities')
      .select('*').eq('lead_id', leadId).order('created_at', { ascending: false });
    if (error) { console.error('listActivities', error); return []; }
    return data.map(r => ({
      id: r.id,
      createdAt: r.created_at,
      method: r.method,
      note: r.note,
      fromStage: r.from_stage,
      toStage: r.to_stage,
      createdBy: r.created_by
    }));
  },

  // INVOICES
  async addInvoice(invoice) {
    const { data, error } = await sb.from('invoices').insert(invoiceToRow(invoice)).select().single();
    if (error) { console.error('addInvoice', error); return null; }
    return invoiceFromRow(data);
  },
  async updateInvoiceStatus(idOrNumber, status) {
    // accept either UUID id or inv_number (matches old db.js behaviour)
    const column = idOrNumber.includes('/') ? 'inv_number' : 'id';
    const { data, error } = await sb.from('invoices')
      .update({ status, status_updated_at: new Date().toISOString() })
      .eq(column, idOrNumber).select().single();
    if (error) { console.error('updateInvoiceStatus', error); return null; }
    return invoiceFromRow(data);
  },
  async deleteInvoice(id) {
    const { error } = await sb.from('invoices').delete().eq('id', id);
    if (error) console.error('deleteInvoice', error);
  },
  async listInvoices() {
    const { data, error } = await sb.from('invoices').select('*').order('created_at', { ascending: false });
    if (error) { console.error('listInvoices', error); return []; }
    return data.map(invoiceFromRow);
  },

  // SURAT LOG
  async logSurat(entry) {
    const { data, error } = await sb.from('surat_log').insert(suratToRow(entry)).select().single();
    if (error) { console.error('logSurat', error); return null; }
    return data.id;
  },
  async listSurat() {
    const { data, error } = await sb.from('surat_log').select('*').order('created_at', { ascending: false });
    if (error) { console.error('listSurat', error); return []; }
    return data.map(suratFromRow);
  },

  // USER (mock auth · localStorage, will move to Supabase Auth later)
  setUser(u) { localStorage.setItem('yk_user', JSON.stringify(u)); },
  getUser() {
    try { return JSON.parse(localStorage.getItem('yk_user') || 'null'); }
    catch { return null; }
  },
  logout() { localStorage.removeItem('yk_user'); },

  // seed() is a no-op — demo data already lives in Supabase
  seed() { /* moved to Supabase migration */ }
};
