# Deploy ke Vercel — Quick Guide

Ada **3 cara** deploy website ini ke Vercel, urut dari yang paling cepat:

---

## 🚀 Cara 1 — CLI (paling cepat, 30 detik)

Buka Terminal di Mac, lalu jalankan:

```bash
cd "/Users/ardikemara/Documents/Claude/Projects/WulanSari/yosihutamakarya-prototype"
npx vercel deploy --prod --yes
```

Yang terjadi:
1. `npx` otomatis download Vercel CLI (tidak perlu install global)
2. Pertama kali jalan, browser akan kebuka untuk login Vercel (klik approve)
3. Vercel auto-detect ini static site, langsung deploy
4. Selesai dalam ~30 detik, dapat URL `https://yosihutamakarya-prototype-xxx.vercel.app`

**Setelah deploy pertama**, project akan ter-link otomatis. Setiap kali edit file lalu mau update production:

```bash
npx vercel deploy --prod
```

---

## 🎯 Cara 2 — Dashboard Drag & Drop

1. Buka https://vercel.com/new
2. Login ke account `ardikemara`
3. Klik **"Import Git Repository"** → pilih tab **"Deploy without Git"** (paling bawah)
4. Drag folder `yosihutamakarya-prototype/` ke area drop
5. Klik **Deploy**

Cocok kalau gak mau setup Git dulu.

---

## 🔄 Cara 3 — GitHub Integration (recommended untuk jangka panjang)

Setup sekali, auto-deploy setiap push ke main:

```bash
cd "/Users/ardikemara/Documents/Claude/Projects/WulanSari/yosihutamakarya-prototype"
git init
git add .
git commit -m "Initial commit"
gh repo create yosihutamakarya-website --public --source=. --push
```

Lalu di https://vercel.com/new, import dari GitHub. Setiap commit ke main → auto-deploy.

Cocok kalau mau colaborasi multi-developer atau pakai CI/CD.

---

## Custom Domain `yosihutamakarya.com`

Setelah deploy, di Vercel dashboard:

1. Buka project → **Settings** → **Domains**
2. Add domain: `yosihutamakarya.com`
3. Vercel akan kasih DNS records (A atau CNAME)
4. Di registrar domain (Niagahoster/Cloudflare/etc), set DNS records sesuai instruksi
5. Tunggu propagasi DNS (15 menit - 24 jam)
6. SSL otomatis dari Let's Encrypt

---

## Konfigurasi yang Sudah Diset (`vercel.json`)

- **Clean URLs**: `/produk` works tanpa `.html` ekstension
- **Cache headers**:
  - Assets (image, logo): 1 tahun cache
  - Shared CSS/JS: 1 jam cache
  - HTML: no cache (selalu fresh)
- **Redirects**:
  - `/portal` → `/internal/login.html`
  - `/login` → `/internal/login.html`
  - `/dashboard` → `/internal/dashboard.html`

---

## Tips

- **Preview deployment**: setiap branch dapat URL preview unik (kalau pakai GitHub integration)
- **Environment variables**: nanti dibutuhin kalau migrate ke Next.js + Supabase (set di Vercel dashboard → Settings → Env Variables)
- **Analytics**: enable Vercel Analytics di dashboard untuk traffic insights
- **Speed Insights**: enable untuk monitoring Core Web Vitals

---

**Recommended sekarang**: pakai **Cara 1 (CLI)** untuk deploy pertama, lalu nanti setup GitHub integration kalau team sudah growing.
