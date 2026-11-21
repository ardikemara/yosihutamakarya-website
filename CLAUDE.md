# Website Yosi Hutama Karya — panduan kerja

Situs statis (HTML/CSS/JS polos, tanpa build step) untuk https://www.yosihutamakarya.net.

## Alur deploy
- Repo ini tersambung ke Vercel (project `yosihutamakarya-website`, team `ardikemaras-projects`).
- Push ke `main` → Vercel otomatis deploy ke production (yosihutamakarya.net). Tidak perlu `vercel deploy` manual.
- Push ke branch lain → Vercel membuat preview deployment (URL `*.vercel.app`, butuh login Vercel karena SSO protection aktif).
- Alur standar untuk perubahan dari brief: buat branch → commit → push → buka draft PR → kirim link preview ke pemilik → merge ke `main` setelah disetujui.

## Struktur
- Halaman publik: `index.html`, `produk.html`, `produk-detail.html`, `tentang.html`, `kontak.html`, `company-profile.html`, `produk/*.html`, `blog/*.html`.
- Portal internal: `internal/*.html` (pakai Supabase, lihat bawah).
- Shared: `shared/style.css`, `shared/data.js` (data produk), `shared/layout.js` (nav + footer).
  Kalau mengubah file di `shared/`, naikkan query versi di tag `<script>`/`<link>` (mis. `data.js?v=6` → `?v=7`) di semua halaman, karena `/shared/*` di-cache immutable 1 tahun (lihat `vercel.json`).
- Gambar: `assets/img/` (lihat `assets/img/README.md` untuk rasio tiap slot).

## Mengganti gambar
Gambar foto disajikan sebagai WebP responsif + `srcset`, dengan PNG/JPG asli disimpan di sebelahnya.
Contoh hero: `hero.png` (sumber) + `hero-480.webp`, `hero-720.webp`, `hero-960.webp`.
Persona: `-400`/`-720`. Proyek: `-480`/`-800`. Katalog: `-500`/`-800`.

Saat mengganti gambar:
1. Crop ke rasio slot (lihat `assets/img/README.md`).
2. Buat ulang semua varian lebar dengan nama yang sama, mis.
   `convert sumber.jpg -resize 720x -quality 80 assets/img/hero-720.webp`.
3. Simpan sumber dengan nama dasar yang sama (`hero.png`/`.jpg`).
4. Karena nama file sama dan `/assets/*` di-cache immutable, tambahkan `?v=N` di `src`/`srcset`/preload yang memakai gambar itu, atau pakai nama file baru, supaya pengunjung lama tidak melihat gambar lama.
5. Periksa juga `og:image`, `twitter:image`, dan JSON-LD kalau gambar hero diganti.

## Supabase
Project ref `avqpyvikrtoutejblynu` (dipakai bersama schema `domanic` milik Domanic Scent — jangan sentuh schema itu).
Tabel portal ada di schema `public`: `leads`, `lead_activities`, `invoices`, `surat_log`, `portal_users`.
PERHATIAN: policy RLS masih "prototype anon all" dan login portal masih mock — lihat `SUPABASE-MIGRATION.md`.
