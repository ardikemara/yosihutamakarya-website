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
    notes: r.notes,
    // payment lifecycle
    sentAt: r.sent_at,
    paidAt: r.paid_at,
    paymentMethod: r.payment_method,
    paymentProofUrl: r.payment_proof_url,
    paymentProofFilename: r.payment_proof_filename
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
    status: i.status || 'draft',
    notes: i.notes || null
  };
}

function portalUserFromRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    email: r.email,
    name: r.name,
    role: r.role,                       // 'super_admin' | 'staff' | 'finance'
    active: r.active,
    invitedAt: r.invited_at,
    lastLoginAt: r.last_login_at,
    createdAt: r.created_at
  };
}

function suratFromRow(r) {
  if (!r) return null;
  return {
    id: r.id,
    createdAt: r.created_at,
    template: r.template,
    templateName: r.template_name,
    action: r.action,                  // 'pdf' | 'print' | 'save_draft'
    noSurat: r.no_surat,
    recipient: r.recipient,
    recipientCompany: r.recipient_company,
    perihal: r.perihal,
    body: r.body,
    formData: r.form_data || {},
    createdBy: r.created_by
  };
}
function suratToRow(s) {
  return {
    template: s.template,
    template_name: s.templateName || null,
    action: s.action || 'pdf',
    no_surat: s.noSurat || null,
    recipient: s.recipient || null,
    recipient_company: s.recipientCompany || null,
    perihal: s.perihal || null,
    body: s.body || null,
    form_data: s.formData || {},
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
  async updateInvoice(id, invoice) {
    const { data, error } = await sb.from('invoices').update(invoiceToRow(invoice)).eq('id', id).select().single();
    if (error) { console.error('updateInvoice', error); return null; }
    return invoiceFromRow(data);
  },
  async getInvoice(id) {
    const { data, error } = await sb.from('invoices').select('*').eq('id', id).single();
    if (error) { console.error('getInvoice', error); return null; }
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

  // ---------- Invoice lifecycle helpers ----------
  // Called when PDF downloaded / printed — sets status sent + timestamp
  async markInvoiceSent(id) {
    const { data, error } = await sb.from('invoices')
      .update({
        status: 'sent',
        sent_at: new Date().toISOString(),
        status_updated_at: new Date().toISOString()
      })
      .eq('id', id).select().single();
    if (error) { console.error('markInvoiceSent', error); return null; }
    return invoiceFromRow(data);
  },

  // Called when finance confirms payment. file is a File object (image/pdf).
  async markInvoicePaid(id, file, method = 'bank_transfer') {
    let proofUrl = null;
    let proofFilename = null;

    if (file) {
      // upload to storage bucket: payment-proofs/<invoiceId>/<timestamp-filename>
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const path = `${id}/${Date.now()}-${safeName}`;
      const { error: upErr } = await sb.storage.from('payment-proofs')
        .upload(path, file, { contentType: file.type, upsert: false });
      if (upErr) { console.error('upload proof', upErr); return null; }
      // public URL (bucket is public-read in prototype mode)
      const { data: pub } = sb.storage.from('payment-proofs').getPublicUrl(path);
      proofUrl = pub.publicUrl;
      proofFilename = file.name;
    }

    const { data, error } = await sb.from('invoices')
      .update({
        status: 'paid',
        paid_at: new Date().toISOString(),
        payment_method: method,
        payment_proof_url: proofUrl,
        payment_proof_filename: proofFilename,
        status_updated_at: new Date().toISOString()
      })
      .eq('id', id).select().single();
    if (error) { console.error('markInvoicePaid', error); return null; }
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

  // ---------- PORTAL USERS (role-based access management) ----------
  // Sign-in by email = lookup user in portal_users.
  // For mock auth: no password check; just verify email exists & is active.
  async signInByEmail(email) {
    const { data, error } = await sb.from('portal_users')
      .select('*').ilike('email', email.trim()).eq('active', true).maybeSingle();
    if (error) { console.error('signInByEmail', error); return null; }
    if (data) {
      // best-effort last_login update — don't fail sign-in if it errors
      sb.from('portal_users').update({ last_login_at: new Date().toISOString() }).eq('id', data.id).then(() => {});
    }
    return portalUserFromRow(data);
  },

  async listUsers() {
    const { data, error } = await sb.from('portal_users').select('*').order('role').order('name');
    if (error) { console.error('listUsers', error); return []; }
    return data.map(portalUserFromRow);
  },

  async addUser({ email, name, role }) {
    const { data, error } = await sb.from('portal_users').insert({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      role: role,
      active: true,
      invited_at: new Date().toISOString()
    }).select().single();
    if (error) { console.error('addUser', error); return { error: error.message }; }
    return portalUserFromRow(data);
  },

  async updateUser(id, patch) {
    const row = {};
    if (patch.name !== undefined) row.name = patch.name;
    if (patch.role !== undefined) row.role = patch.role;
    if (patch.active !== undefined) row.active = patch.active;
    const { data, error } = await sb.from('portal_users').update(row).eq('id', id).select().single();
    if (error) { console.error('updateUser', error); return { error: error.message }; }
    return portalUserFromRow(data);
  },

  async deleteUser(id) {
    const { error } = await sb.from('portal_users').delete().eq('id', id);
    if (error) { console.error('deleteUser', error); return false; }
    return true;
  },

  // seed() is a no-op — demo data already lives in Supabase
  seed() { /* moved to Supabase migration */ }
};
