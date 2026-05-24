# Yosi Hutama Karya · Website Prototype

**PT. Yosi Hutama Karya**, prototype website lengkap untuk `yosihutamakarya.com`.

Berisi: **info site publik + lead gen + portal internal karyawan** dengan 3 tools (Surat Generator, Invoice Generator, Content Library).

---

## Cara Buka Prototype

1. Buka folder `yosihutamakarya-prototype/`
2. Double-click `index.html`, otomatis terbuka di browser default (Chrome/Safari)
3. Klik link **"Portal Internal →"** di pojok kanan atas untuk masuk ke backend tools
4. Login screen sudah pre-filled, tinggal klik **"Masuk ke Portal"**

> Semua data tersimpan di `localStorage` browser. Belum ada server real, ini prototype murni. Lihat **roadmap migrasi ke production** di bawah.

---

## Struktur File

```
yosihutamakarya-prototype/
├── index.html              ← homepage publik (hero + product grid + value props)
├── produk.html             ← katalog 9 lini produk lengkap
├── tentang.html            ← about + info perusahaan
├── kontak.html             ← lead capture form
├── internal/
│   ├── login.html          ← mock login (demo only)
│   ├── dashboard.html      ← KPI cards + recent leads + overdue invoices
│   ├── leads.html          ← list semua lead dari form publik
│   ├── surat.html          ← ★ Surat Generator (priority tool)
│   ├── invoice.html        ← Invoice Generator + database list view
│   ├── library.html        ← Content Marketing Library
│   └── sidebar.js          ← shared sidebar nav
├── shared/
│   ├── style.css           ← design system (palette, components)
│   ├── data.js             ← produk, surat templates, content library
│   ├── db.js               ← mock database (localStorage wrapper)
│   └── layout.js           ← shared nav + footer untuk halaman publik
└── assets/
    └── logo.svg            ← YK monogram (cadangan, pakai inline SVG di kode)
```

---

## Brand & Identitas (sudah ter-embed)

- **Legal Entity:** PT. YOSI HUTAMA KARYA *(dipakai di kop surat, invoice, dokumen resmi)*
- **Product Brand:** BUILD · PROTECT · PERFORM *(dipakai di hero website, marketing)*
- **Tagline:** `BUILD · PROTECT · PERFORM`
- **Palette:** Monochrome industrial + Royal Blue accent
  - Black `#0A0A0A` · Cream `#F5F2EC` · Royal Blue `#1E40AF`
  - Charcoal `#1F2937` · Concrete Grey `#9CA3AF`
- **Typography:** Inter (geometric sans-serif, bold)
- **Alamat:** Jl. Jend. Ahmad Yani Kav. 3, Pulo Gadung, Jakarta Timur 13210
- **Telepon:** +62 21 475 7386 · Email: info@yosihutamankarya.com

---

## Fitur per Halaman

### Public Site (info & lead gen)

| Halaman | Fitur |
|---|---|
| `index.html` | Hero dengan tagline + 9 produk grid + 6 value props + CTA strip |
| `produk.html` | Detail 9 lini produk (Concrete Admixture s.d. Bonding Agent) dengan dosis, kemasan, stats. Hash-link untuk deep-link (`#concrete-admixture`, dll) |
| `tentang.html` | About company, misi, info legal lengkap |
| `kontak.html` | Form lead capture → data langsung masuk dashboard internal. Query string `?produk=NAMA` auto-fill |

### Portal Internal (backend tools)

**1. Dashboard** (`internal/dashboard.html`)
- KPI: Lead baru, Invoice unpaid/overdue, Outstanding total
- Recent leads (4 terbaru)
- Invoice butuh follow-up
- Quick links ke 3 tools

**2. Leads Sales** (`internal/leads.html`)
- Table semua lead dari form publik
- Quick action: WhatsApp & Email direct

**3. ★ Surat Generator** (`internal/surat.html`), **priority polished**
- 6 template surat siap pakai:
  - Penawaran Harga
  - Tindak Lanjut (follow-up)
  - Konfirmasi PO
  - Permohonan Kunjungan Teknis
  - Pengantar Sample Produk
  - Ucapan Terima Kasih
- Workflow: pilih template → isi form → live preview kop surat → download PDF
- Auto-generate nomor surat dengan format `NNN/YHK/[ROMAN-BULAN]/YYYY`
- PDF pakai html2pdf.js (full kop surat dengan blue band atas-bawah)

**4. Invoice Generator** (`internal/invoice.html`)
- **List view:** semua invoice dengan filter (All / Unpaid / Overdue / Paid)
- **KPI:** Total invoice, paid, unpaid, overdue, outstanding amount
- **Quick actions:** Mark Lunas, Send Reminder (auto-generate WA/email text ke clipboard)
- **Editor view:** form input klien + items dinamis (add/remove rows) + PPN config + live preview
- Auto-save ke mock DB + download PDF
- 3 sample invoice (paid, unpaid, overdue) sudah ter-seed

**5. Content Marketing Library** (`internal/library.html`)
- 14 konten siap pakai dalam 5 kategori:
  - 📷 Caption IG (4 contoh per produk)
  - 💬 WhatsApp Broadcast (promo, follow-up, greeting)
  - ✉️ Email (cold outreach, newsletter)
  - ⚡ Slogan & Tagline (untuk iklan)
  - 🎯 Talking Points (sales objection handling, discovery questions)
- Filter by type + free text search
- Quick copy to clipboard + download .txt
- Detail modal untuk view full content

---

## Yang Mock (Bukan Real)

Karena ini prototype, beberapa hal masih simulated:

1. **Login**, hanya frontend, tidak ada validasi password. Klik tombol langsung masuk.
2. **Database**, pakai `localStorage` browser. Data hilang kalau clear browser data. Per-browser, tidak shared antar user.
3. **PDF generation**, pakai html2pdf.js (client-side). Untuk produksi, lebih reliable pakai server-side (Puppeteer/wkhtmltopdf).
4. **Email/WhatsApp send**, hanya copy ke clipboard (user paste manual ke aplikasi).
5. **Domain**, file lokal, belum di-deploy ke `yosihutamakarya.com`.

---

## Roadmap Migrasi ke Production (Next.js + Supabase)

Sesuai yang sudah disepakati, stack production adalah **Next.js + Supabase**. Roadmap migrasi:

### Phase 1, Infrastructure (1-2 minggu)
- [ ] Setup Next.js 14 (App Router) di Vercel/Netlify
- [ ] Setup Supabase project: Database (Postgres), Auth, Storage
- [ ] Migrate static pages: index, produk, tentang, kontak
- [ ] Setup domain `yosihutamakarya.com` + SSL

### Phase 2, Auth & Database (1 minggu)
- [ ] Supabase Auth dengan email/password untuk karyawan
- [ ] Schema tables: `leads`, `invoices`, `surat_log`, `users`, `products`, `surat_templates`, `content_library`
- [ ] Row Level Security (RLS), sales hanya lihat lead-nya sendiri, finance lihat semua invoice
- [ ] Migrate `db.js` calls → Supabase client

### Phase 3, Form & Lead Pipeline (3-5 hari)
- [ ] Lead form `kontak.html` → POST ke Supabase + send email notif ke sales
- [ ] WhatsApp Business API integration (atau Twilio) untuk auto-greeting
- [ ] Webhook dari form → masuk ke channel Slack/Discord sales

### Phase 4, Surat & Invoice Tools (1-2 minggu)
- [ ] Port Surat Generator ke React/Next.js component
- [ ] Server-side PDF generation (Puppeteer di API route) untuk hasil lebih konsisten
- [ ] Upload PDF hasil ke Supabase Storage, link tersimpan di `surat_log`
- [ ] Invoice tools: CRUD penuh + sequential numbering yang persistent (race-condition safe)
- [ ] **Bonus:** Integrate dengan e-faktur (kalau perlu pajak otomatis)

### Phase 5, Content Library + Admin (3-5 hari)
- [ ] Content library admin: tambah/edit/delete konten dari portal
- [ ] Image upload untuk konten dengan visual (brosur, sticker pack)
- [ ] Permissions: marketing team bisa edit, sales view-only

### Phase 6, Analytics & Reporting (opsional)
- [ ] Dashboard PowerBI-style: revenue per bulan, top produk, sales leaderboard
- [ ] Export laporan ke Excel/PDF untuk finance
- [ ] Integrate Google Analytics 4 di public site

### Estimasi total: **4-6 minggu** dengan 1 developer full-time.

---

## Catatan untuk Developer

- Kode CSS pakai **CSS variables** untuk palette, gampang di-tweak di `:root`
- Tidak pakai framework UI library, tujuan biar mudah di-port ke React/Vue/Svelte nanti
- Data produk di `shared/data.js` adalah copy 1:1 dari `crystal12.netlify.app` dengan rename `Crystal → YK`
- Sample data invoice & lead sudah pre-seeded di `db.js` (auto-load saat first visit)
- Print stylesheet sudah disiapkan (`@media print`), invoice & surat siap diprint langsung dari browser

---

## Pertanyaan yang Masih Open

Hal-hal yang bisa di-iterate di session berikutnya:

1. **Logo final**, saat ini pakai text "YK" dalam circle (placeholder). Punya file final monogram (Y+K fused)?
2. **Nomor telepon WhatsApp**, di prototype masih `0812-XXXX-XXXX`. Nomor sales aktif yang mau ditampilkan?
3. **Foto produk**, apakah ada foto packaging real (sak, drum, pail) untuk halaman produk? Saat ini text-only.
4. **Foto kantor**, untuk halaman Tentang
5. **Testimoni klien**, section ini belum ada. Mau ditambah?
6. **Multi-bahasa**, saat ini ID-only. Perlu EN version?
7. **Domain email**, `yosihutamakarya.com` (web) vs `yosihutamankarya.com` (email, ada N ekstra). Verifikasi mana yang benar sebelum mass-print.

---

© 2026 PT. Yosi Hutama Karya · BUILD · PROTECT · PERFORM
