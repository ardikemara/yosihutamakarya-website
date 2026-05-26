# Catalog Product Images

Folder ini berisi foto produk untuk halaman katalog (`/produk`).

## Naming convention
Filename mengikuti slug produk: `yk-{nama-produk}.jpg`

## Spec
- Ratio: **4:3** (landscape)
- Resolusi: **800 × 600 px** minimum
- Format: **.jpg** (preferred, lebih ringan)

## Fallback chain
Code akan coba: `.jpg` → `.png` → placeholder (kalau dua-duanya gagal)

## Daftar filename
- yk-mould-oil.jpg
- yk-curing.jpg
- yk-bond.jpg
- yk-nn.jpg
- yk-accelerator.jpg
- yk-seal-127.jpg
- yk-plaster-mix.jpg
- yk-proof.jpg
- yk-wp-mortar.jpg
- yk-floor-hardener.jpg
- yk-grout.jpg
- yk-72-epoxy-grout.jpg
- yk-tile-adhesive.jpg

## Beda dengan folder utama?
- `assets/img/yk-*.png` → foto packshot square (1:1) untuk halaman **detail produk**
- `assets/img/katalog/yk-*.jpg` → foto landscape (4:3) untuk halaman **katalog**

Pisah biar bisa pakai foto/angle berbeda per page tanpa konflik.
