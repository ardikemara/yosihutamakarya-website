# Image Asset Checklist - YK Website

Folder ini buat naro semua gambar real yang akan replace placeholder di website. Save dengan **filename persis** seperti list di bawah, ukuran sesuai ratio yang disebut. Format JPG (foto) atau PNG (logo transparan).

---

## 1. Hero (homepage)
| File | Ratio | Suggested px | Konten |
|---|---|---|---|
| `hero.jpg` | 4:5 portrait | 800 × 1000 | Hero shot: sak semen YK, pekerja konstruksi, atau produk dalam aksi. Tone industrial. |

## 2. Trust Bar Logo Klien (homepage)
8 logo klien, format PNG transparan, aspect ratio ~5:2 (landscape).
| File | Ratio | Suggested px |
|---|---|---|
| `clients/client-1.png` ... `client-8.png` | 5:2 | 250 × 100 |

> **Tip:** kalau logo aslinya square, taro di tengah dengan padding agar muat di ratio 5:2. Bisa juga simpan sebagai `.svg` untuk hasil tajam di semua resolusi.

## 3. Persona (homepage)
4 foto persona, aspect ratio 4:3 landscape.
| File | Ratio | Suggested px | Konten |
|---|---|---|---|
| `persona-kontraktor.jpg` | 4:3 | 600 × 450 | Pengecoran beton high-rise / site kontraktor besar |
| `persona-aplikator.jpg` | 4:3 | 600 × 450 | Tukang/aplikator sedang plester atau patching |
| `persona-toko.jpg` | 4:3 | 600 × 450 | Rak/etalase toko bangunan dengan produk YK |
| `persona-rumah.jpg` | 4:3 | 600 × 450 | Renovasi rumah/kamar mandi dengan produk YK |

## 4. Project Showcase (homepage)
3 foto proyek, aspect ratio 16:9.
| File | Ratio | Suggested px | Konten |
|---|---|---|---|
| `proyek-1.jpg` | 16:9 | 1200 × 675 | Facade apartemen high-rise atau scene pengecoran |
| `proyek-2.jpg` | 16:9 | 1200 × 675 | Interior gudang dengan lantai floor hardener |
| `proyek-3.jpg` | 16:9 | 1200 × 675 | Ruko/komersial dengan finishing keramik & waterproofing |

## 5. About Page
| File | Ratio | Suggested px | Konten |
|---|---|---|---|
| `tentang-kantor.jpg` | 16:9 | 1600 × 900 | Facade kantor PT. Yosi Hutama Karya / tim / fasilitas produksi |

## 6. Katalog Produk (produk.html)
Foto kemasan per SKU. Aspect ratio 4:3. Filename sesuai nama produk (lowercase, dash-separated, tanpa simbol ®).

| File | SKU | Konten |
|---|---|---|
| `yk-nn.jpg` | YK NN® | Drum 240kg superplasticizer |
| `yk-fume.jpg` | YK Fume® | Bag 20kg silica fume |
| `yk-accelerator.jpg` | YK Accelerator® | Can 20kg / Drum 200kg |
| `yk-latex.jpg` | YK Latex® | Jerrycan 20kg / Drum 200kg |
| `yk-seal-127.jpg` | YK Seal 127® | Zak 23kg + Can 10kg (2-komponen) |
| `yk-plaster-mix.jpg` | YK Plaster Mix® | Bag 25kg ready mix mortar |
| `yk-proof.jpg` | YK Proof® | Pail coating + roll membran |
| `yk-wp-mortar.jpg` | YK WP Mortar® | Sak 5kg / 25kg |
| `yk-mould-oil.jpg` | YK Mould Oil® | Drum 200 liter |
| `yk-curing.jpg` | YK Curing® | Drum 225kg / Can 20kg |
| `yk-curing-membrane.jpg` | YK Curing Membrane® | Drum 220kg / Can 20kg |
| `yk-floor-hardener.jpg` | YK Floor Hardener® | Sak 25kg + sample 6 warna |
| `yk-grout.jpg` | YK Grout® | Zak 25kg |
| `yk-72-epoxy-grout.jpg` | YK 72 Epoxy Grout® | Set 12kg (A+B+C) |
| `yk-tile-adhesive.jpg` | YK Tile Adhesive® | Zak 25kg |
| `yk-bond.jpg` | YK Bond® | Pail 10kg / 20kg / Drum 200kg |

---

## Cara Ganti Placeholder dengan Foto Real

Setiap placeholder di website pakai class `.img-ph`. Kalau sudah punya foto:

1. Save foto dengan **filename persis** seperti di list di atas
2. Taro di folder `assets/img/` (atau `assets/img/clients/` untuk logo klien)
3. Buka file HTML yang relevan (misal `index.html` untuk Project Showcase)
4. Cari blok `<div class="img-ph">...</div>` yang sesuai
5. Ganti dengan tag `<img>` standard:

```html
<!-- SEBELUM: -->
<div class="img-ph" style="aspect-ratio: 16/9;">
  <div class="ph-name">assets/img/proyek-1.jpg</div>
  <div class="ph-size">1200 × 675 px (16:9)</div>
  <div class="ph-desc">...</div>
</div>

<!-- SESUDAH: -->
<img src="assets/img/proyek-1.jpg" alt="Apartemen 32 Lantai" style="aspect-ratio: 16/9; width: 100%; object-fit: cover;" />
```

---

## Tips Foto

- **Resolusi tinggi**: minimal 2x dari px target (untuk Retina display).
- **Format**: JPG quality 80-90% untuk foto, PNG untuk logo/asset dengan transparan.
- **Compress**: pakai TinyPNG/Squoosh sebelum upload, target < 200KB per foto.
- **Style**: monochrome industrial, high contrast, sesuai brand mood (lihat brand palette: Black + Blue + Cream).
- **Konten manusia**: kalau ada wajah orang, pastikan ada izin/release.
- **Stock photo**: bisa pakai sementara dari Unsplash/Pexels (free, no attribution required), tapi cari yang sesuai konteks Indonesia.

---

Total: **35 image asset** untuk replace semua placeholder (1 hero + 8 logo + 4 persona + 3 proyek + 1 kantor + 16 produk + tambahan).
