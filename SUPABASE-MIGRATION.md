# Supabase Migration · yk-internal-portal

## Project info
- **Name:** yk-internal-portal
- **Region:** ap-southeast-1 (Singapore)
- **Project ref:** `avqpyvikrtoutejblynu`
- **URL:** https://avqpyvikrtoutejblynu.supabase.co
- **Anon key:** `sb_publishable_c09xYHGqFvxTlQdgpdy0_g_G-hQ8NDX`
- **Dashboard:** https://supabase.com/dashboard/project/avqpyvikrtoutejblynu

## What's already done
- Tables created: `leads`, `invoices`, `surat_log`, `portal_users`
- Demo data seeded (3 leads + 3 invoices + Ardi as admin)
- RLS enabled, prototype policy: anon full access (TODO: lock down before launch)
- Drop-in client written: `shared/db.supabase.js` + `shared/supabase-config.js`

## To wire it in (per page)

### 1. Update `<head>` script tags
**Before:**
```html
<script src="../shared/db.js"></script>
```
**After:**
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="../shared/supabase-config.js"></script>
<script src="../shared/db.supabase.js"></script>
```
(For public pages like `kontak.html`, drop the `../` prefix.)

### 2. Add `await` to every DB call
Every `DB.listLeads()`, `DB.addLead()`, `DB.addInvoice()`, etc. is now async.

Wrap page scripts in an async IIFE:
```js
(async () => {
  const leads = await DB.listLeads();
  // ...rest of page logic
})();
```

### Files that need updating
- `kontak.html` — `DB.addLead(lead)` → `await DB.addLead(lead)`
- `internal/dashboard.html` — wrap script block in `async (() => { ... })()`
- `internal/leads.html` — same
- `internal/invoice.html` — same
- `internal/surat.html` — same

## Before going live (TODO)
1. Tighten RLS:
   - `leads`: anon `INSERT` only (for public form); authenticated `SELECT`/`UPDATE`
   - `invoices`, `surat_log`, `portal_users`: authenticated only
2. Migrate login to Supabase Auth (replace mock `DB.setUser`).
3. Rotate keys if anon key has leaked anywhere public.
