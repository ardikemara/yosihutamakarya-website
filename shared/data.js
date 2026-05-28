/* ===========================================
   Yosi Hutama Karya, Shared Data
   Product catalog, brand info, templates, content library
   =========================================== */

const BRAND = {
  legal: 'PT. YOSI HUTAMA KARYA',
  product: 'BUILD · PROTECT · PERFORM',
  tagline: 'BUILD · PROTECT · PERFORM',
  address: 'Jl. Jend. Ahmad Yani Kav. 3, Kel. Kayu Putih, Kec. Pulo Gadung, Jakarta Timur 13210, Indonesia',
  phone: '+62 21 475 7386',
  fax: '+62 21 475 7387',
  email: 'info@yosihutamankarya.com',
  web: 'www.yosihutamakarya.com',
  npwp: '91.567.890.1-234.000',
  bank: {
    name: 'Bank Mandiri',
    account: '123-00-9876543-2',
    holder: 'PT. YOSI HUTAMA KARYA'
  }
};

const PRODUCTS = [
  {
    slug: 'mould-curing',
    num: '01',
    name: 'Mould Release & Curing',
    audience: 'Kontraktor pengecoran · Precaster · Ready-mix',
    headline: 'Lepas cetakan & jaga kelembaban beton.',
    description: 'Mempermudah lepas cetakan dan jaga kelembaban beton baru agar tidak retak.',
    skus: ['YK Mould Oil®', 'YK Curing®'],
    items: [
      { name: 'YK Mould Oil®', type: 'Form Release', desc: 'Minyak bekisting siap pakai untuk lepas cetakan kayu/logam/plastik.', stats: ['1L = 25 m² kayu', 'Permukaan halus', 'Cocok semua cetakan'], dose: '1L = 25 m² kayu / 40 m² logam', pack: 'Drum 200 liter', tds: 'TDS-YK-Mould-Oil-charcoal.html' },
      { name: 'YK Curing®', type: 'Polyolefins', desc: 'Curing compound untuk jalan raya, landasan, apron, dermaga, & roof deck.', stats: ['Cegah retak plastis', 'Tidak mudah terbakar', 'Hemat tenaga'], dose: '0.15 – 0.20 kg/m²', pack: 'Drum 225kg / Can 20kg', tds: 'TDS-YK-Curing-charcoal.html' }
    ]
  },
  {
    slug: 'bonding-agent',
    num: '02',
    name: 'Bonding Agent',
    audience: 'Kontraktor renovasi · Perbaikan struktur',
    headline: 'Perekat beton lama ↔ baru, plester, & keramik.',
    description: 'PVA emulsion bonding agent multi-fungsi, 5 aplikasi dalam 1 produk: beton lama-baru, primer plester, plester kasar, acian halus, perekat keramik.',
    skus: ['YK Bond®'],
    items: [
      { name: 'YK Bond®', type: 'PVA Bonding Agent', desc: 'Bahan perekat berbasis Polyvinyl Acetate Emulsion. Kompatibel semua tipe semen.', stats: ['5 aplikasi 1 produk', 'Tambah daya rekat', 'Kurangi retak rambut'], dose: 'Campur air 1:1 sampai 1:3', pack: 'Pail 10kg, Pail 20kg, Drum 200kg', tds: 'TDS-YK-Bond-charcoal.html' }
    ]
  },
  {
    slug: 'grouting',
    num: '03',
    name: 'Grouting',
    audience: 'Kontraktor sipil · Pabrik · Engineering',
    headline: 'Isi celah presisi tinggi untuk mesin, angkur, & struktur.',
    description: 'Material isi celah dengan presisi tinggi, tidak menyusut, kekuatan awal cepat, tahan getaran & kimia.',
    skus: ['YK Grout®'],
    items: [
      { name: 'YK Grout®', type: 'Semen Grouting', desc: 'Grouting siap pakai untuk angkur, pondasi mesin, dudukan bearing pad, perbaikan struktur kelautan.', stats: ['No shrink (CRD C-621)', 'Setting 4-8 jam', 'Tahan getaran & korosi'], dose: '± 1.920 kg/m³ mortar', pack: 'Zak 25kg', tds: 'TDS-YK-Grout-charcoal.html' }
    ]
  },
  {
    slug: 'mortar-admixture',
    num: '04',
    name: 'Mortar Admixture',
    audience: 'Tukang batu · Kontraktor renovasi · Toko bangunan',
    headline: 'Tambal bocor seketika, daya rekat tinggi.',
    description: 'Aditif mortar untuk tambal bocor seketika, daya rekat tinggi, dan mortar bebas retak.',
    skus: ['YK Accelerator®'],
    items: [
      { name: 'YK Accelerator®', type: 'Penyumbat Bocor', desc: 'Aditif penyumbat bocor seketika: basement, watertank, retakan tekanan tinggi.', stats: ['Setting seketika', 'Daya rekat kuat', 'Susut kecil'], dose: 'Rasio 1:2 – 1:5 dengan air', pack: 'Drum 200kg / Can 20kg', tds: 'TDS-YK-Accelerator-charcoal.html' }
    ]
  },
  {
    slug: 'ready-mix-mortar',
    num: '05',
    name: 'Ready Mix Mortar',
    audience: 'Kontraktor finishing · Developer · Renovasi',
    headline: 'Mortar siap pakai, tinggal tambah air.',
    description: 'Mortar siap pakai untuk plesteran dinding & pemasangan batu bata, mutu konsisten tiap batch, hemat waktu kerja di lapangan.',
    skus: ['YK Plaster Mix®'],
    items: [
      { name: 'YK Plaster Mix®', type: 'Ready Mix Mortar', desc: 'Mortar siap pakai untuk plesteran dinding & pemasangan batu bata.', stats: ['Tinggal tambah air', 'Mencegah retak susut', 'Fungsi ganda'], dose: '3.8 – 4.0 L air per bag 25kg', pack: 'Bag 25kg', tds: 'TDS-YK-Plaster-Mix-charcoal.html' }
    ]
  },
  {
    slug: 'waterproofing',
    num: '06',
    name: 'Waterproofing',
    audience: 'Pemilik rumah · Kontraktor · Aplikator',
    headline: 'Anti bocor atap, dinding, kamar mandi.',
    description: 'Lapisan kedap air tahan UV, lentur, dan menutup pori beton, solusi anti bocor jangka panjang.',
    skus: ['YK Water Proofing®'],
    items: [
      { name: 'YK Water Proofing®', type: 'Coating Akrilik', desc: 'Lapisan kedap air emulsi akrilik untuk atap beton, sambungan tembok-atap, dinding parapet.', stats: ['Tahan UV & cuaca', 'Sangat lentur', 'Non-toksik anti jamur'], dose: '0.3 – 0.35 kg/m² per lapis', pack: 'Coating 1/4/20kg + Membran 10m×1m', tds: 'TDS-YK-Water-Proofing-charcoal.html' }
    ]
  },
  {
    slug: 'floor-treatments',
    num: '07',
    name: 'Floor Treatments',
    audience: 'Gudang · Pabrik · Parkiran · Bengkel',
    headline: 'Lantai beton tahan abrasi, oli, & debu. 6 warna.',
    description: 'Lantai beton tahan abrasi, anti debu, & tahan oli, sekali pasang awet bertahun-tahun, dengan 6 pilihan warna untuk zonasi area kerja.',
    skus: ['YK Floor Hardener®'],
    items: [
      { name: 'YK Floor Hardener®', type: 'Floor Hardener Bubuk', desc: 'Bubuk pengeras lantai beton untuk gudang, pelabuhan, jalur kendaraan, parkir, bengkel.', stats: ['Lapisan 2-3 mm', 'Tahan oli & abrasi', '6 pilihan warna'], dose: '3 kg/m² (ringan) – 6 kg/m² (berat)', pack: 'Sak 25kg' }
    ]
  },
  {
    slug: 'tile-adhesive',
    num: '08',
    name: 'Tile Adhesive',
    audience: 'Kontraktor finishing · Toko bangunan · Renovasi',
    headline: 'Perekat keramik, marmer, granit, bisa pasang on-tile.',
    description: 'Perekat siap pakai dengan daya rekat tinggi, setting cepat, dan bisa on-tile (langsung di atas keramik lama).',
    skus: ['YK Tile Adhesive®'],
    items: [
      { name: 'YK Tile Adhesive®', type: 'Perekat Keramik Siap Pakai', desc: 'Untuk merekatkan keramik, marmer, & granit pada permukaan lantai & dinding. Bisa on-tile.', stats: ['Setting 30 menit', 'On-tile (tanpa bongkar)', 'Keramik · marmer · granit'], dose: '± 6-7 m² per 25kg (tebal 2mm)', pack: 'Zak 25kg · 6.25 L air per bag' }
    ]
  },
  {
    slug: 'concrete-admixture',
    num: '09',
    name: 'Concrete Admixture',
    audience: 'Kontraktor · Ready-mix Plant · Precaster',
    headline: 'Beton kuat tekan tinggi, setting cepat.',
    description: 'Bahan tambah beton untuk kuat tekan tinggi, setting cepat, dan durability maksimal, siap pakai untuk pelat, pondasi, kolom, jembatan, dan precast.',
    skus: ['YK NN®'],
    items: [
      { name: 'YK NN®', type: 'Superplasticizer', desc: 'Pengurang air & percepatan setting beton.', stats: ['−20% air', '+40% kuat tekan', '12 jam kekuatan tinggi'], dose: '0.30 – 2.30% berat semen', pack: 'Drum 240kg / Bulk 1000kg', tds: 'TDS-YK-NN-charcoal.html' }
    ]
  }
];

/* PRODUCT DETAIL — pain points & solver cards per produk */
const PRODUCT_DETAILS = {
  'concrete-admixture': {
    painHeadline: 'Masalah Klasik di Setiap Proyek Beton',
    pains: [
      { label: 'Beton lambat mengeras', desc: 'Setting time lama, bekisting tidak bisa cepat dibongkar.', consequence: 'Jadwal proyek molor, biaya sewa alat & tenaga membengkak.' },
      { label: 'Mutu kurang konsisten', desc: 'Kuat tekan tidak tercapai, hasil test core melenceng.', consequence: 'Risiko struktur, klaim dari owner, reputasi kontraktor turun.' },
      { label: 'Boros air', desc: 'Workability dipaksa dengan air, w/c ratio naik.', consequence: 'Kekuatan tekan turun, beton mudah retak, rework biaya tinggi.' },
      { label: 'Korosi tulangan', desc: 'Resapan klorin & air tinggi menembus pori beton menuju tulangan.', consequence: 'Umur pakai struktur pendek, maintenance & klaim garansi mahal.' }
    ],
    summary: 'Bahan tambah beton untuk kuat tekan tinggi, setting cepat, & durability maksimal, siap pakai untuk kontraktor, ready-mix plant, dan precaster.',
    solverHeadline: 'Bagaimana Concrete Admixture Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Beton lambat mengeras', headline: 'Reaksi pengerasan dipercepat tanpa perlu retarder.', proofNumber: '12 JAM', proofText: 'kuat tekan tinggi sudah tercapai', outcome: 'Bekisting cepat dibongkar, jadwal proyek tetap on-track.', tag: 'YK NN®' },
      { problem: 'Mutu kurang konsisten', headline: 'Reduksi air maksimal + kepadatan beton ditingkatkan.', proofNumber: '+40%', proofText: 'kuat tekan di 28 hari', outcome: 'Mutu beton stabil tiap pengecoran, hasil test core terjamin.', tag: 'YK NN®' },
      { problem: 'Boros air', headline: 'Superplasticizer jaga workability tinggi dengan air lebih sedikit.', proofNumber: '−20%', proofText: 'kebutuhan air saat mixing', outcome: 'w/c ratio turun, susut & retak minim, kuat tekan justru naik.', tag: 'YK NN®' },
      { problem: 'Korosi tulangan', headline: 'Formula bebas klorin + w/c ratio rendah mengunci pori beton.', proofNumber: '0% Cl⁻', proofText: '+ resapan air & gas ↓', outcome: 'Tulangan terlindungi, umur pakai struktur jauh lebih panjang.', tag: 'YK NN®' }
    ]
  },
  'mortar-admixture': {
    painHeadline: 'Masalah Klasik di Pekerjaan Mortar & Waterproofing',
    pains: [
      { label: 'Bocor air aktif', desc: 'Air terus mengalir dari basement, dak, atau watertank, mortar biasa tidak bisa nempel.', consequence: 'Aktivitas proyek terganggu, finishing rusak, biaya perbaikan berulang.' },
      { label: 'Retak basement & watertank pecah lagi', desc: 'Tambalan mortar biasa pecah karena tekanan air balik dari belakang dinding.', consequence: 'Repair berulang, biaya & waktu terbuang.' },
      { label: 'Tambalan lepas di permukaan basah', desc: 'Mortar biasa tidak nempel di permukaan basah/lembab, langsung lepas.', consequence: 'Patching ulang berkali-kali, tukang kerja 2x, biaya naik.' },
      { label: 'Repair urgent tertunda berjam-jam', desc: 'Mortar biasa butuh waktu lama untuk set, repair darurat tidak bisa cepat.', consequence: 'Downtime operasional mahal di pabrik, gedung, atau infrastruktur.' }
    ],
    summary: 'Aditif mortar untuk tambal bocor seketika, siap pakai untuk tukang batu, kontraktor renovasi, dan toko bangunan.',
    solverHeadline: 'Bagaimana Mortar Admixture Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Bocor air aktif', headline: 'YK Accelerator® set seketika, tambal sambil air masih mengalir.', proofNumber: 'SEKETIKA', proofText: 'set di rasio 1:2 sampai 1:5', outcome: 'Bocor langsung berhenti, basement & watertank kering.', tag: 'YK Accelerator®' },
      { problem: 'Retak basement & watertank pecah lagi', headline: 'Set keras seketika di dalam celah, tahan tekanan air balik.', proofNumber: 'TAHAN TEKAN', proofText: 'set di dalam celah retak', outcome: 'Basement & watertank kering permanen, tidak pecah ulang.', tag: 'YK Accelerator®' },
      { problem: 'Tambalan lepas di permukaan basah', headline: 'Daya rekat kuat langsung di permukaan basah, tidak perlu kering.', proofNumber: 'DAYA REKAT ↑', proofText: 'nempel di permukaan basah', outcome: 'Patching satu kali jalan, hasil tahan lama.', tag: 'YK Accelerator®' },
      { problem: 'Repair urgent tertunda berjam-jam', headline: 'Atur kecepatan setting via rasio 1:2 sampai 1:5 dengan air.', proofNumber: 'RASIO 1:2–1:5', proofText: 'atur kecepatan setting', outcome: 'Repair selesai dalam menit, operasional langsung jalan.', tag: 'YK Accelerator®' }
    ]
  },
  'ready-mix-mortar': {
    painHeadline: 'Masalah Klasik di Plesteran Dinding & Pemasangan Bata',
    pains: [
      { label: 'Adukan manual boros', desc: 'Tukang sering boros pasir & semen, proporsi naik-turun tiap batch.', consequence: 'Material terbuang, biaya membengkak, mutu finishing inkonsisten.' },
      { label: 'Plesteran retak susut', desc: 'Adukan manual tidak terkontrol, plester retak rambut setelah kering.', consequence: 'Rework cat & finishing, klien komplain berulang kali.' },
      { label: 'Mutu plester beda-beda tiap tukang', desc: 'Tiap tukang campur sendiri, proporsi naik-turun, hasil plester tidak seragam antar tembok.', consequence: 'Finishing cat belang-belang, harus rework di area yang mutunya beda.' },
      { label: 'Butuh adukan beda untuk plester & pasang bata', desc: 'Tukang biasa pakai 2 jenis adukan: 1 untuk plester, 1 untuk pasang batu bata — repot, boros stok.', consequence: 'Stok material dobel, manajemen lapangan ribet, waktu kerja lebih lama.' }
    ],
    summary: 'Mortar siap pakai untuk plesteran dinding & pemasangan batu bata, mutu konsisten tiap batch, hemat waktu kerja di lapangan.',
    solverHeadline: 'Bagaimana YK Plaster Mix® Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Adukan manual boros', headline: 'YK Plaster Mix® proporsi terstandar pabrik, tinggal tambah air.', proofNumber: '3.8 L', proofText: 'air per bag 25kg, mutu sama', outcome: 'Tukang gak boros material, hemat waktu campur, mutu konsisten tiap batch.', tag: 'YK Plaster Mix®' },
      { problem: 'Plesteran retak susut', headline: 'YK Plaster Mix® mencegah retak susut, hasil dinding lebih halus.', proofNumber: 'Retak ↓↓', proofText: '+ dinding halus tanpa rework', outcome: 'Plesteran rapi & kuat, gak perlu acian ekstra atau perbaikan ulang.', tag: 'YK Plaster Mix®' },
      { problem: 'Mutu plester beda-beda tiap tukang', headline: 'YK Plaster Mix® mutu pabrik konsisten — tiap bag identik.', proofNumber: 'MUTU SAMA', proofText: 'tiap bag 25kg, batch ke batch', outcome: 'Plester rata di seluruh proyek, finishing cat hasilnya seragam.', tag: 'YK Plaster Mix®' },
      { problem: 'Butuh adukan beda untuk plester & pasang bata', headline: 'YK Plaster Mix® fungsi ganda — pasang batu bata + plester dalam 1 produk.', proofNumber: '1 PRODUK', proofText: 'plester + pasang batu bata', outcome: 'Stok material lebih simple, tukang gak perlu campur 2 jenis, kerja lebih cepat.', tag: 'YK Plaster Mix®' }
    ]
  },
  'waterproofing': {
    painHeadline: 'Masalah Klasik di Pekerjaan Waterproofing',
    pains: [
      { label: 'Atap bocor saat hujan', desc: 'Lapisan waterproofing pecah, air menetes ke plafon bawah.', consequence: 'Plafon & cat rusak, biaya perbaikan terus berulang.' },
      { label: 'Lapisan kena UV lapuk', desc: 'Lapisan biasa tidak tahan matahari, cepat retak & rontok.', consequence: 'Aplikasi ulang tiap tahun, biaya material membengkak.' },
      { label: 'Sambungan atap rembes', desc: 'Celah genting/asbestos ke tembok parapet susah disegel rapat.', consequence: 'Air merembes ke dinding interior, jamur tumbuh subur.' },
      { label: 'Pori beton rembes', desc: 'Beton porous menyerap air, balkon & kamar mandi terus rembes.', consequence: 'Air rembes ke unit bawah, klaim & rework biaya mahal.' }
    ],
    summary: 'Lapisan kedap air tahan UV, lentur, & menutup pori beton, solusi anti bocor jangka panjang untuk atap, dinding, balkon, & kamar mandi.',
    solverHeadline: 'Bagaimana YK Water Proofing® Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Atap bocor saat hujan', headline: 'YK Water Proofing® coating akrilik sangat lentur, anti retak akibat cuaca.', proofNumber: 'TANPA PRIMER', proofText: 'lentur & daya rekat sangat baik', outcome: 'Atap kedap air permanen, tidak bocor walau hujan deras & pergerakan struktur.', tag: 'YK Water Proofing®' },
      { problem: 'UV/cuaca mengelupas', headline: 'YK Water Proofing® formula akrilik tahan UV & segala cuaca tropis.', proofNumber: 'TAHAN UV', proofText: '+ non-toksik & anti jamur', outcome: 'Tidak retak, tidak mengelupas, tidak butuh aplikasi ulang setiap tahun.', tag: 'YK Water Proofing®' },
      { problem: 'Sambungan rembes', headline: 'YK Water Proofing® + Raintite Membrane (polyester) untuk hasil maksimal.', proofNumber: 'COMBO MAX', proofText: 'coating + membran polyester', outcome: 'Celah genting/asbestos ke tembok tersegel rapat, anti rembes jangka panjang.', tag: 'YK Water Proofing® + Raintite' },
      { problem: 'Pori beton merembes', headline: 'YK Water Proofing® coating akrilik lentur menutup pori beton dari atas.', proofNumber: 'LAPISAN KEDAP', proofText: 'film akrilik elastis di permukaan', outcome: 'Balkon, teras, & kamar mandi anti rembes, finishing tahan lama.', tag: 'YK Water Proofing®' }
    ]
  },
  'mould-curing': {
    painHeadline: 'Masalah Klasik di Pengecoran & Curing Beton',
    pains: [
      { label: 'Beton susah lepas', desc: 'Beton lengket di cetakan, dibongkar paksa, cetakan rusak.', consequence: 'Cetakan cepat rusak, biaya ganti bekisting tinggi.' },
      { label: 'Permukaan kasar bernoda', desc: 'Beton setelah dibongkar muncul noda & tekstur tidak rata.', consequence: 'Butuh finishing ekstra, biaya acian & cat naik.' },
      { label: 'Retak plastis beton baru', desc: 'Beton baru kehilangan air cepat, muncul retak permukaan.', consequence: 'Kuat tekan turun, durability struktur jangka panjang anjlok.' },
      { label: 'Curing tidak bisa dicat', desc: 'Permukaan beton sudah di-curing susah dilapis cat atau finishing.', consequence: 'Harus sandblasting/solvent dulu, biaya finishing membengkak.' }
    ],
    summary: 'Produk pelengkap pengecoran beton, lepas cetakan mudah, permukaan halus, & beton baru terjaga kelembabannya.',
    solverHeadline: 'Bagaimana Mould Release & Curing Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Beton susah lepas', headline: 'YK Mould Oil® siap pakai, oles ke cetakan sebelum cor.', proofNumber: '1 L = 25 m²', proofText: 'cetakan kayu/plywood', outcome: 'Cetakan mudah dibongkar tanpa rusak, awet untuk pengecoran berulang.', tag: 'YK Mould Oil®' },
      { problem: 'Permukaan kasar bernoda', headline: 'YK Mould Oil® hasil permukaan beton halus, tidak bernoda.', proofNumber: 'HALUS', proofText: '+ cocok untuk steam curing', outcome: 'Tidak perlu finishing ekstra, langsung siap dicat atau exposed.', tag: 'YK Mould Oil®' },
      { problem: 'Retak plastis beton baru', headline: 'YK Curing® cegah kehilangan air, alternatif siram manual.', proofNumber: 'ANTI RETAK', proofText: '+ hemat tenaga vs siram air', outcome: 'Cocok jalan raya, apron, dermaga, & roof deck, kuat tekan terjaga.', tag: 'YK Curing®' },
      { problem: 'Curing tidak bisa dicat', headline: 'YK Curing® bisa dibersihkan saat permukaan siap untuk cat atau finishing.', proofNumber: 'CLEAN-READY', proofText: '+ surface prep ringan sebelum cat', outcome: 'Pas untuk bangunan & industri yang butuh finishing cat — curing maksimal, cat tetap nempel.', tag: 'YK Curing®' }
    ]
  },
  'floor-treatments': {
    painHeadline: 'Masalah Klasik di Lantai Beton Industri',
    pains: [
      { label: 'Lantai cepat aus', desc: 'Lantai beton gudang/parkir cepat terkikis akibat lalu lintas & beban berat.', consequence: 'Permukaan rusak, re-coating tiap tahun, biaya maintenance tinggi.' },
      { label: 'Debu lantai mengganggu', desc: 'Lantai beton biasa banyak debu, ganggu produksi & kesehatan kerja.', consequence: 'Karyawan komplain, mesin cepat kotor, pembersihan rutin mahal.' },
      { label: 'Oli & pelumas merusak', desc: 'Tumpahan oli/pelumas mudah meresap, merusak permukaan beton bengkel.', consequence: 'Lantai jadi licin, noda permanen, risiko keselamatan kerja tinggi.' },
      { label: 'Lantai polos jelek', desc: 'Lantai abu-abu polos sulit untuk zonasi area kerja atau jalur kendaraan.', consequence: 'Marking cat cepat rontok, manajemen area & safety jadi sulit.' }
    ],
    summary: 'Bubuk pengeras lantai beton untuk tahan abrasi, anti debu, tahan oli, & estetis, solusi sekali pasang awet bertahun-tahun.',
    solverHeadline: 'Bagaimana Floor Hardener Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Lantai cepat aus', headline: 'YK Floor Hardener® bikin lapisan perkuatan 2-3mm di permukaan beton.', proofNumber: '2-3 MM', proofText: 'lapisan perkuatan ekstra keras', outcome: 'Tahan lalu lintas kendaraan & beban berat tanpa aus, hemat re-coating.', tag: 'YK Floor Hardener®' },
      { problem: 'Debu lantai', headline: 'YK Floor Hardener® memadatkan permukaan, mengurangi debu signifikan.', proofNumber: 'ANTI DEBU', proofText: '+ permukaan lebih keras & padat', outcome: 'Area produksi lebih bersih, mesin awet, karyawan nyaman bekerja.', tag: 'YK Floor Hardener®' },
      { problem: 'Oli & pelumas', headline: 'YK Floor Hardener® tahan minyak, pelumas, & benturan.', proofNumber: 'TAHAN OLI', proofText: '+ cocok bengkel & garasi', outcome: 'Tumpahan oli mudah dibersihkan, lantai bengkel tetap rapi & aman.', tag: 'YK Floor Hardener®' },
      { problem: 'Estetika lantai', headline: 'YK Floor Hardener® tersedia dalam 6 pilihan warna fungsional.', proofNumber: '6 WARNA', proofText: '+ zonasi visual jelas', outcome: 'Estetika naik, area kerja rapi, zonasi safety jelas, branding kuat.', tag: 'YK Floor Hardener®' }
    ]
  },
  'grouting': {
    painHeadline: 'Masalah Klasik di Grouting & Pemasangan Mesin',
    pains: [
      { label: 'Grout biasa menyusut', desc: 'Grout konvensional menyusut saat kering, celah baut/mesin tidak terisi penuh.', consequence: 'Mesin goyang, fondasi tidak presisi, biaya re-pekerjaan tinggi.' },
      { label: 'Setting time lambat', desc: 'Grout perlu berhari-hari sampai siap diuji, mesin lama bisa dioperasikan.', consequence: 'Jadwal pemasangan mundur, downtime produksi mahal.' },
      { label: 'Mesin berat bergetar', desc: 'Grout standar tidak tahan getaran tinggi dari mesin berat & rel kereta.', consequence: 'Fondasi retak, mesin perlu re-grouting berkali-kali.' },
      { label: 'Lingkungan korosif rusak', desc: 'Area pelabuhan, kimia, atau lembab merusak grout konvensional cepat.', consequence: 'Perbaikan struktur berulang, biaya maintenance jangka panjang tinggi.' }
    ],
    summary: 'Material grouting presisi tinggi, tidak menyusut, kekuatan awal cepat, tahan getaran & kimia, sekali pasang awet jangka panjang.',
    solverHeadline: 'Bagaimana YK Grout® Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Grout biasa menyusut', headline: 'YK Grout® formula tidak menyusut, memenuhi standar internasional.', proofNumber: 'NO SHRINK', proofText: 'CRD C-621 + ASTM C-1107', outcome: 'Celah baut & mesin terisi penuh, fondasi presisi sekali pasang.', tag: 'YK Grout®' },
      { problem: 'Setting time lambat', headline: 'YK Grout® setting awal cepat, mudah mengalir, konsistensi bisa diatur.', proofNumber: '4-8 JAM', proofText: 'setting awal @ 27°C', outcome: 'Mesin atau struktur bisa cepat digunakan, downtime minim.', tag: 'YK Grout®' },
      { problem: 'Mesin berat bergetar', headline: 'YK Grout® tahan getaran tinggi — formula stabil untuk fondasi mesin & rel.', proofNumber: 'TAHAN GETARAN', proofText: '+ no shrink, fondasi presisi', outcome: 'Mesin berat, rel crane, & rel kereta stabil tanpa re-grouting berulang.', tag: 'YK Grout®' },
      { problem: 'Lingkungan korosif rusak', headline: 'YK Grout® tahan korosi & kimia, awet di area pelabuhan & industri.', proofNumber: 'TAHAN KIMIA', proofText: '+ struktur kelautan & pabrik', outcome: 'Cocok area pelabuhan, kelautan, & industri kimia, awet jangka panjang.', tag: 'YK Grout®' }
    ]
  },
  'tile-adhesive': {
    painHeadline: 'Masalah Klasik di Pemasangan Keramik & Renovasi',
    pains: [
      { label: 'Keramik gampang lepas', desc: 'Pasangan dengan semen biasa daya rekatnya kurang, keramik lepas dalam bulan.', consequence: 'Klaim dari klien, biaya perbaikan & ganti material membengkak.' },
      { label: 'Bongkar keramik mahal', desc: 'Renovasi butuh bongkar keramik dulu, banyak debu, puing, & biaya tukang ekstra.', consequence: 'Proyek lambat, biaya buang puing tinggi, klien lama menunggu.' },
      { label: 'Adukan manual inkonsisten', desc: 'Semen + pasir manual takaran beda-beda, mutu daya rekat tidak konsisten.', consequence: 'Sebagian keramik kuat, sebagian lepas, hasil akhir tidak rata.' },
      { label: 'Marmer & granit sulit', desc: 'Material keras seperti marmer & granit susah nempel di permukaan halus.', consequence: 'Tukang sulit kerja, hasil tidak rapi, perlu re-pasang ulang.' }
    ],
    summary: 'Perekat siap pakai dengan daya rekat tinggi, setting cepat, & bisa on-tile, hemat biaya bongkar & kerja jauh lebih cepat.',
    solverHeadline: 'Bagaimana Tile Adhesive Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Keramik gampang lepas', headline: 'YK Tile Adhesive® formula epoxy modified, daya rekat sangat baik.', proofNumber: 'DAYA REKAT ↑', proofText: '+ siap pakai, mudah diaplikasi', outcome: 'Keramik menempel kuat permanen, tidak lepas walau dipakai jangka panjang.', tag: 'YK Tile Adhesive®' },
      { problem: 'Bongkar mahal', headline: 'YK Tile Adhesive® bisa pasang LANGSUNG di atas keramik lama.', proofNumber: 'ON-TILE', proofText: 'tanpa bongkar keramik lama', outcome: 'Renovasi 3x lebih cepat, hemat biaya bongkar, debu, puing, & tukang.', tag: 'YK Tile Adhesive®' },
      { problem: 'Adukan manual inkonsisten', headline: 'YK Tile Adhesive® proporsi terstandar pabrik, tinggal tambah air.', proofNumber: '6.25 L / 25 KG', proofText: '± 6-7 m² coverage', outcome: 'Mutu konsisten tiap batch, daya rekat merata di seluruh area pemasangan.', tag: 'YK Tile Adhesive®' },
      { problem: 'Marmer & granit sulit', headline: 'YK Tile Adhesive® cocok untuk keramik, marmer, & granit. Setting cepat.', proofNumber: '30 MENIT', proofText: 'setting awal, kerja efisien', outcome: 'Material keras nempel kuat di permukaan halus, tukang kerja lebih cepat.', tag: 'YK Tile Adhesive®' }
    ]
  },
  'bonding-agent': {
    painHeadline: 'Masalah Klasik di Perekatan & Perbaikan Struktur',
    pains: [
      { label: 'Plesteran sering retak', desc: 'Tukang sering keluhin plester retak rambut beberapa hari setelah kering.', consequence: 'Rework cat & finishing, klien komplain, garansi pekerjaan tergerus.' },
      { label: 'Beton baru gak nempel', desc: 'Lapisan beton baru tidak nempel ke beton lama, gampang lepas dalam waktu singkat.', consequence: 'Patching ulang berkali-kali, biaya membengkak, struktur lemah.' },
      { label: 'Acian mengelupas', desc: 'Lapisan acian halus di permukaan dinding mengelupas sebelum di-cat.', consequence: 'Tukang harus acian ulang, jadwal cat mundur, biaya tenaga naik.' },
      { label: 'Adukan kurang lecak', desc: 'Workability adukan rendah, tukang susah aplikasi, hasil tidak rata.', consequence: 'Pekerjaan lambat, mutu finishing inkonsisten, banyak rework.' }
    ],
    summary: 'Hero product renovasi, tambah daya rekat, perbaiki kelecakan, & kurangi retak, untuk beton lama-baru, plester, & keramik.',
    solverHeadline: 'Bagaimana Bonding Agent Menyelesaikan 4 Masalah Itu',
    solvers: [
      { problem: 'Plesteran retak', headline: 'YK Bond® mengurangi retak & perbaiki kelecakan adukan.', proofNumber: 'ANTI RETAK', proofText: '+ kelecakan adukan naik', outcome: 'Plesteran rapi tanpa retak rambut, finishing cat awet jangka panjang.', tag: 'YK Bond®' },
      { problem: 'Beton baru gak nempel', headline: 'YK Bond® perekat beton lama ke baru, kuas selagi basah lalu tuang.', proofNumber: 'BOND 1:1', proofText: 'perekat beton lama ↔ baru', outcome: 'Lapisan beton baru nempel kuat permanen, perbaikan struktur awet.', tag: 'YK Bond®' },
      { problem: 'Acian mengelupas', headline: 'YK Bond® untuk acian halus, campur semen + Bond = 1:1.', proofNumber: 'ACIAN KUAT', proofText: '+ tebal 0-2mm, finishing halus', outcome: 'Acian nempel kuat, siap dicat, gak mengelupas walau jangka panjang.', tag: 'YK Bond®' },
      { problem: 'Adukan kurang lecak', headline: 'YK Bond® memperbaiki kelecakan adukan, mudah diaplikasi.', proofNumber: 'WORKABILITY ↑', proofText: '+ mudah dicairkan dengan air', outcome: 'Tukang kerja lebih cepat, hasil finishing rata, kualitas konsisten.', tag: 'YK Bond®' }
    ]
  }
};

/* SURAT TEMPLATES, bahan untuk Surat Generator */
const SURAT_TEMPLATES = [
  {
    id: 'penawaran',
    name: 'Surat Penawaran Harga',
    desc: 'Penawaran produk ke calon klien / proyek',
    icon: 'tag',
    perihal: 'Penawaran Harga Produk Yosi Hutama Karya',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true, placeholder: 'PT. Karya Bangun Persada' },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text', placeholder: 'Bapak Andi Wijaya' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea', placeholder: 'Jl. Sudirman No. 45, Jakarta Selatan' },
      { key: 'project_name', label: 'Nama Proyek', type: 'text', placeholder: 'Proyek Apartemen Sky Garden' },
      { key: 'product_list', label: 'Produk Ditawarkan', type: 'textarea', required: true, placeholder: 'YK NN®, 500 kg @ Rp 25.000\nYK Bond® Pail 20kg, 10 pail @ Rp 350.000' },
      { key: 'validity', label: 'Masa Berlaku Penawaran', type: 'text', placeholder: '30 hari dari tanggal surat' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true, placeholder: 'Ardi Kemara' },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true, placeholder: 'Sales Manager' }
    ],
    body: (d) => `Dengan hormat,

Sehubungan dengan rencana ${d.project_name ? `pengadaan material untuk **${d.project_name}**` : 'pengadaan material konstruksi'}, bersama ini kami sampaikan penawaran harga produk YK sebagai berikut:

${d.product_list || '-'}

Harga di atas belum termasuk PPN 11% dan biaya pengiriman.

Penawaran ini berlaku selama ${d.validity || '30 hari dari tanggal surat'}.

Untuk pemesanan, informasi teknis lebih lanjut, atau jadwal demo produk di lokasi proyek, mohon hubungi tim sales kami di ${BRAND.phone}.

Demikian penawaran ini kami sampaikan. Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.`
  },
  {
    id: 'tindak-lanjut',
    name: 'Surat Tindak Lanjut',
    desc: 'Follow-up setelah meeting / penawaran sebelumnya',
    icon: 'chat',
    perihal: 'Tindak Lanjut Penawaran',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true, placeholder: 'PT. Karya Bangun Persada' },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text', placeholder: 'Bapak Andi Wijaya' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea' },
      { key: 'previous_ref', label: 'Referensi Surat / Meeting Sebelumnya', type: 'text', placeholder: 'Surat Penawaran No. 045/YHK/V/2026 tanggal 10 Mei 2026' },
      { key: 'body_extra', label: 'Catatan Tambahan (opsional)', type: 'textarea', placeholder: 'Kami juga menyiapkan sample produk YK NN® untuk uji lab di proyek Anda...' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true }
    ],
    body: (d) => `Dengan hormat,

Menindaklanjuti ${d.previous_ref || 'komunikasi kami sebelumnya'} mengenai pengadaan material konstruksi, bersama ini kami sampaikan beberapa hal:

1. Kami siap membantu kebutuhan teknis & sample produk untuk pengujian di proyek Bapak/Ibu.
2. Tim sales & teknis kami dapat melakukan kunjungan lokasi untuk konsultasi gratis sesuai jadwal yang Bapak/Ibu tentukan.
3. Untuk pengadaan volume besar, tersedia penyesuaian harga khusus dan termin pembayaran yang fleksibel.

${d.body_extra ? '\n' + d.body_extra + '\n' : ''}
Kami mohon konfirmasi tindak lanjut paling lambat 7 (tujuh) hari kerja sejak surat ini diterima. Untuk diskusi lebih lanjut, mohon hubungi kami di ${BRAND.phone} atau email ${BRAND.email}.

Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.`
  },
  {
    id: 'po-konfirmasi',
    name: 'Konfirmasi Purchase Order',
    desc: 'Konfirmasi penerimaan & jadwal pengiriman PO',
    icon: 'check',
    perihal: 'Konfirmasi Penerimaan Purchase Order',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea' },
      { key: 'po_number', label: 'Nomor PO Klien', type: 'text', required: true, placeholder: 'PO-2026-0042' },
      { key: 'po_date', label: 'Tanggal PO', type: 'text', placeholder: '15 Mei 2026' },
      { key: 'order_items', label: 'Detail Pesanan', type: 'textarea', required: true, placeholder: 'YK NN®, 500 kg\nYK Bond® Pail 20kg, 10 pail' },
      { key: 'delivery_date', label: 'Jadwal Pengiriman', type: 'text', placeholder: '5-7 hari kerja sejak pembayaran DP diterima' },
      { key: 'delivery_address', label: 'Alamat Pengiriman', type: 'textarea' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true }
    ],
    body: (d) => `Dengan hormat,

Kami telah menerima Purchase Order No. ${d.po_number || '-'}${d.po_date ? ' tertanggal ' + d.po_date : ''} dari ${d.recipient_company || 'perusahaan Bapak/Ibu'}, dengan rincian pesanan sebagai berikut:

${d.order_items || '-'}

Dengan ini kami konfirmasikan:

1. Pesanan telah kami terima dan akan diproses sesuai jadwal.
2. Jadwal pengiriman: ${d.delivery_date || '5-7 hari kerja sejak DP diterima'}.
3. Alamat pengiriman: ${d.delivery_address || 'sesuai alamat di PO'}.
4. Invoice resmi akan kami terbitkan setelah pengiriman dilakukan.

Mohon untuk segera mengirimkan bukti transfer DP (Down Payment) sebesar 50% dari total nilai PO ke rekening:

${BRAND.bank.name}, ${BRAND.bank.account}
a.n. ${BRAND.bank.holder}

Untuk koordinasi pengiriman, mohon hubungi tim logistik kami di ${BRAND.phone}.

Atas kepercayaan dan kerjasamanya, kami ucapkan terima kasih.`
  },
  {
    id: 'kunjungan',
    name: 'Permohonan Kunjungan Teknis',
    desc: 'Request site visit / technical consultation',
    icon: 'pin',
    perihal: 'Permohonan Kunjungan Teknis & Konsultasi',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea' },
      { key: 'project_name', label: 'Nama Proyek (jika ada)', type: 'text' },
      { key: 'visit_purpose', label: 'Tujuan Kunjungan', type: 'textarea', required: true, placeholder: 'Konsultasi pemilihan produk waterproofing untuk basement Tower B...' },
      { key: 'preferred_date', label: 'Tanggal yang Diusulkan', type: 'text', placeholder: 'Senin, 25 Mei 2026 (atau menyesuaikan jadwal Bapak/Ibu)' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true }
    ],
    body: (d) => `Dengan hormat,

Sehubungan dengan ${d.project_name ? `proyek **${d.project_name}**` : 'rencana pengadaan material konstruksi'} yang sedang Bapak/Ibu jalankan, kami dari PT. Yosi Hutama Karya bermaksud mengajukan permohonan kunjungan teknis ke lokasi.

Tujuan kunjungan:
${d.visit_purpose || '-'}

Tim teknis kami terdiri dari aplikator berpengalaman dan engineer produk yang akan memberikan konsultasi gratis terkait pemilihan produk, dosis aplikasi, dan estimasi material untuk proyek Bapak/Ibu.

Waktu yang kami usulkan: ${d.preferred_date || 'menyesuaikan jadwal Bapak/Ibu'}.

Mohon konfirmasi ketersediaan jadwal melalui telepon ${BRAND.phone} atau email ${BRAND.email}. Apabila waktu yang diusulkan tidak memungkinkan, kami terbuka untuk menyesuaikan dengan jadwal Bapak/Ibu.

Atas perhatian dan kesempatan yang diberikan, kami ucapkan terima kasih.`
  },
  {
    id: 'pengantar',
    name: 'Surat Pengantar Sample',
    desc: 'Pengantar sample produk untuk uji lapangan',
    icon: 'box',
    perihal: 'Pengantar Sample Produk untuk Pengujian',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea' },
      { key: 'sample_list', label: 'Daftar Sample Dikirim', type: 'textarea', required: true, placeholder: 'YK NN®, 1 jerrycan 5L\nYK Bond®, 1 pail 10kg\nTechnical Data Sheet (TDS) lengkap' },
      { key: 'purpose', label: 'Tujuan Pengujian', type: 'textarea', placeholder: 'Uji compressive strength pada beton K-400...' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true }
    ],
    body: (d) => `Dengan hormat,

Bersama surat ini, kami mengirimkan sample produk YK untuk keperluan pengujian sebagai berikut:

${d.sample_list || '-'}

${d.purpose ? 'Tujuan pengujian:\n' + d.purpose + '\n' : ''}
Apabila membutuhkan asistensi teknis dalam proses pengujian, tim teknis kami siap memberikan pendampingan langsung di lokasi atau via telepon ${BRAND.phone}.

Kami menantikan hasil pengujian dari Bapak/Ibu dan akan dengan senang hati mendiskusikan hasil tersebut untuk menentukan langkah selanjutnya.

Demikian surat pengantar ini kami sampaikan. Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.`
  },
  {
    id: 'ucapan-terima-kasih',
    name: 'Surat Ucapan Terima Kasih',
    desc: 'After-sales / setelah project selesai',
    icon: 'heart',
    perihal: 'Ucapan Terima Kasih atas Kepercayaan',
    fields: [
      { key: 'recipient_company', label: 'Nama Perusahaan Penerima', type: 'text', required: true },
      { key: 'recipient_attn', label: 'Up. (Person)', type: 'text' },
      { key: 'recipient_address', label: 'Alamat Penerima', type: 'textarea' },
      { key: 'project_name', label: 'Nama Proyek', type: 'text', required: true },
      { key: 'custom_message', label: 'Pesan Tambahan (opsional)', type: 'textarea' },
      { key: 'signer_name', label: 'Nama Penanda Tangan', type: 'text', required: true },
      { key: 'signer_title', label: 'Jabatan Penanda Tangan', type: 'text', required: true }
    ],
    body: (d) => `Dengan hormat,

Atas nama keluarga besar PT. Yosi Hutama Karya, perkenankan kami menyampaikan rasa terima kasih yang sebesar-besarnya atas kepercayaan Bapak/Ibu menggunakan produk YK pada **${d.project_name || 'proyek Bapak/Ibu'}**.

Kerjasama yang terjalin merupakan kehormatan bagi kami, dan menjadi motivasi untuk terus memberikan kualitas produk serta pelayanan terbaik.

${d.custom_message ? d.custom_message + '\n' : ''}
Kami senantiasa siap mendukung kebutuhan material konstruksi Bapak/Ibu di proyek-proyek selanjutnya, dengan komitmen kualitas yang sama. Layanan konsultasi teknis & garansi after-sales tetap kami berikan tanpa biaya tambahan.

Sekali lagi, terima kasih atas kepercayaan dan kerjasamanya. Sampai jumpa di proyek berikutnya.`
  }
];

/* CONTENT MARKETING LIBRARY */
const CONTENT_LIBRARY = [
  // Caption IG / FB
  { id: 'ig-1', type: 'caption_ig', category: 'Concrete Admixture', title: 'Beton Lebih Kuat 40%', text: `🏗️ Beton kuat tekan tinggi bukan mitos.

YK NN® Superplasticizer:
✓ Reduksi air 20%
✓ Kuat tekan +40% di 28 hari
✓ Setting cepat 12 jam
✓ Bebas klorin, aman untuk tulangan

Cocok untuk kontraktor, ready-mix, & precaster yang gak mau kompromi soal mutu.

Info & sample: 0812-XXXX-XXXX
#YKChemicalConstruction #BuildProtectPerform #Beton #Konstruksi` },
  { id: 'ig-2', type: 'caption_ig', category: 'Waterproofing', title: 'Atap Bocor? Solusi 1x Pasang', text: `☔ Musim hujan, atap mulai rembes? Saatnya YK Water Proofing®!

✓ Tahan UV & cuaca tropis Indonesia
✓ Sangat lentur, anti-retak
✓ Bisa untuk atap beton, parapet, genting
✓ Tanpa primer, langsung aplikasi

Sekali pasang, awet bertahun-tahun. Hemat biaya re-coating tahunan.

DM kami atau hubungi 0812-XXXX-XXXX
#WaterProof #AntiBocor #YKProof #Renovasi` },
  { id: 'ig-3', type: 'caption_ig', category: 'Tile Adhesive', title: 'Renovasi Tanpa Bongkar', text: `🔨 Mau renovasi keramik tapi takut bongkar?

YK Tile Adhesive® punya fitur **ON-TILE**, pasang keramik baru LANGSUNG di atas keramik lama.

✓ Tanpa bongkar, tanpa debu, tanpa puing
✓ Setting 30 menit, kerja cepat
✓ 3x lebih hemat biaya tukang & buang material

Cocok untuk renovasi rumah, ruko, & kantor.

Sales: 0812-XXXX-XXXX | yosihutamakarya.com
#OnTile #Renovasi #TileAdhesive #YK` },
  { id: 'ig-4', type: 'caption_ig', category: 'Bonding Agent', title: 'Hero Product Tukang', text: `🛠️ 1 produk, 5 fungsi. Itulah YK Bond®.

1️⃣ Perekat beton lama ↔ baru
2️⃣ Primer plesteran
3️⃣ Plester kasar
4️⃣ Acian halus
5️⃣ Perekat keramik

Bonding agent berbasis PVA emulsion yang gak pernah ketinggalan di toolbox kontraktor profesional.

Drum 200kg untuk proyek besar, Pail 10kg untuk renovasi.
Pesan: 0812-XXXX-XXXX
#YKBond #BondingAgent #ToolboxWajib` },

  // WhatsApp Broadcast
  { id: 'wa-1', type: 'whatsapp', category: 'Promo Umum', title: 'Broadcast Promo Cash Discount', text: `*Promo Akhir Bulan, Yosi Hutama Karya*

Selamat siang Bapak/Ibu,

Kami dari PT. Yosi Hutama Karya ingin info-kan promo khusus akhir bulan:

✅ Diskon cash 5% untuk pemesanan di atas 500kg
✅ Free konsultasi & site visit aplikator
✅ Bonus 1 pail YK Bond® setiap pembelian 1 ton YK NN®

Berlaku sampai 31 Mei 2026.

Untuk quotation & info teknis, balas pesan ini atau telp:
📞 0812-XXXX-XXXX
🌐 yosihutamakarya.com

Terima kasih 🙏` },
  { id: 'wa-2', type: 'whatsapp', category: 'Follow Up', title: 'Follow Up Pasca Penawaran', text: `Selamat siang Bapak/Ibu,

Saya [NAMA] dari YK (PT. Yosi Hutama Karya).

Mohon ijin follow up terkait penawaran produk yang kami kirim minggu lalu untuk proyek [NAMA_PROYEK].

Apakah ada pertanyaan teknis atau ada hal yang masih perlu kami klarifikasi? Tim teknis kami siap kunjungan ke lokasi proyek apabila Bapak/Ibu butuh konsultasi langsung.

Terima kasih atas waktunya 🙏` },
  { id: 'wa-3', type: 'whatsapp', category: 'Greeting', title: 'Ucapan Hari Raya / Hari Besar', text: `*Selamat [HARI_RAYA]*

Segenap keluarga besar PT. Yosi Hutama Karya, Yosi Hutama Karya, mengucapkan:

"Selamat [HARI_RAYA], mohon maaf lahir dan batin."

Terima kasih atas kepercayaan dan kerjasama yang telah terjalin selama ini. Semoga di tahun ini, semua proyek Bapak/Ibu lancar dan sukses.

📞 +62 21 475 7386
🌐 yosihutamakarya.com

#BuildProtectPerform` },

  // Email
  { id: 'email-1', type: 'email', category: 'Cold Outreach', title: 'Email Perkenalan ke Kontraktor', text: `Subject: Yosi Hutama Karya, Solusi Aditif Beton untuk Proyek [NAMA_PROYEK]

Yth. Bapak/Ibu [NAMA],

Perkenalkan, kami dari PT. Yosi Hutama Karya, produsen lokal aditif konstruksi merek YK. Kami melihat bahwa [NAMA_PERUSAHAAN] sedang menggarap proyek [NAMA_PROYEK], dan ingin menawarkan dukungan material konstruksi yang mungkin relevan:

• YK NN® Superplasticizer, reduksi air 20%, kuat tekan +40%
• YK Water Proofing® Waterproofing, tahan UV, anti bocor jangka panjang

Kami menyediakan layanan teknis lengkap: site visit gratis, sample untuk uji lab, dan konsultasi aplikasi di lapangan.

Boleh saya jadwalkan 15 menit untuk diskusi singkat di minggu depan? Bapak/Ibu lebih nyaman via telpon atau ketemu langsung di kantor?

Salam hangat,
[NAMA], Sales Manager
PT. Yosi Hutama Karya
+62 21 475 7386 | info@yosihutamankarya.com
www.yosihutamakarya.com` },
  { id: 'email-2', type: 'email', category: 'Newsletter', title: 'Newsletter Bulanan Tips Konstruksi', text: `Subject: [Edisi Mei] 3 Tips Anti Bocor untuk Musim Hujan + Promo Bulan Ini

Halo Bapak/Ibu,

Selamat datang di newsletter bulanan Yosi Hutama Karya.

**3 Tips Mencegah Bocor di Musim Hujan**

1. **Cek atap rutin**, periksa retakan, sambungan tembok-atap, dan area parapet sebelum hujan deras turun.

2. **Pilih waterproofing yang tahan UV**, banyak produk murah cepat lapuk kena matahari. YK Water Proofing® formula akrilik tahan UV tropis Indonesia.

3. **Aplikasikan 2 lapis dengan jeda yang cukup**, jeda minimum 4 jam antar lapis. Buru-buru = hasil bocor.

**Promo Bulan Ini**
✓ Diskon 5% untuk pembelian YK Water Proofing® di atas 100kg
✓ Free membran polyester 1 roll per pembelian 4 pail
✓ Konsultasi gratis aplikator senior

Berlaku sampai akhir bulan. Hubungi kami: +62 21 475 7386

Salam,
Tim Yosi Hutama Karya` },

  // Slogan / Tagline
  { id: 'slogan-1', type: 'slogan', category: 'Tagline Umum', title: 'BUILD · PROTECT · PERFORM', text: `BUILD · PROTECT · PERFORM

Tagline utama Yosi Hutama Karya.

Penggunaan:
• Hero website
• Kop surat & business card
• Header social media
• Brosur produk
• Sticker kemasan` },
  { id: 'slogan-2', type: 'slogan', category: 'Headline Iklan', title: 'Headline untuk Iklan Banner', text: `1. "Beton Kuat. Atap Kering. Lantai Awet."
2. "Konstruksi Tanpa Kompromi"
3. "Aditif yang Dipercaya Kontraktor Indonesia"
4. "1 Brand untuk Semua Kebutuhan Konstruksi Anda"
5. "Bangun Sekali, Kuat Selamanya, Yosi Hutama Karya"
6. "Standar Industri, Harga Lokal"
7. "Solusi Beton & Mortar, dari Pondasi sampai Finishing"` },

  // Talking Points (untuk sales call)
  { id: 'tp-1', type: 'talking_points', category: 'Objection Handling', title: 'Klien Bilang Harga Mahal', text: `**Objection: "Harga YK terlalu mahal dibanding [kompetitor]"**

**Jawaban:**

1. **Hitung TCO, bukan harga per kg.**
   "Pak/Bu, mari kita hitung total cost. YK NN® reduksi air 20%, artinya volume semen yang sama bisa menghasilkan beton lebih kuat, atau, kuat tekan sama bisa dicapai dengan semen lebih sedikit. Hemat semen ini bisa kompensasi harga aditif."

2. **Garansi & after-sales.**
   "Harga YK include layanan teknis: site visit aplikator senior, konsultasi mix design, dan garansi hasil. Kompetitor murah sering gak ada support, kalau ada masalah aplikasi, biaya re-work jauh lebih besar dari selisih harga."

3. **Track record proyek.**
   "Produk kami sudah dipakai di [SEBUTKAN PROYEK]. Mau saya share TDS + hasil uji compressive strength? Kalau perlu, saya antar sample untuk uji di lab Bapak/Ibu."

4. **Negosiasi termin.**
   "Kalau price-point yang jadi concern, kita bisa diskusi termin pembayaran. Untuk proyek besar, tersedia program 30/60/90 hari." ` },
  { id: 'tp-2', type: 'talking_points', category: 'Discovery', title: 'Pertanyaan Discovery Awal', text: `**Pertanyaan Discovery untuk Project Mapping**

Goal: pahami kebutuhan klien sebelum penawaran.

1. **Project context**
   • Proyek apa yang sedang/akan dikerjakan?
   • Berapa volume beton/mortar/finishing per bulan?
   • Timeline proyek (start, peak, completion)?

2. **Current vendor**
   • Saat ini pakai brand apa untuk admixture/waterproofing/dll?
   • Sudah berapa lama? Puas?
   • Apa pain point yang paling sering muncul?

3. **Decision making**
   • Yang putuskan pembelian material di proyek ini siapa?
   • Apakah ada spec engineering yang harus dipenuhi (compressive strength target, dll)?
   • Budget per square meter / per kubik beton sekitar berapa?

4. **Logistik**
   • Lokasi proyek? (untuk hitung ongkir)
   • Storage di lapangan memadai? (drum, pail, sak)
   • Tukang sudah biasa pakai aditif atau perlu pendampingan aplikator?

5. **Closing**
   • Mau saya antar sample untuk uji minggu depan?
   • Atau, jadwalkan site visit aplikator senior?` }
];

/* Helper functions */
const fmtIDR = (n) => 'Rp ' + (n || 0).toLocaleString('id-ID');
const todayID = () => {
  const d = new Date();
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
const generateRef = (prefix) => {
  const d = new Date();
  const roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  const rand = String(Math.floor(Math.random() * 900) + 100);
  return `${rand}/${prefix}/${roman[d.getMonth()]}/${d.getFullYear()}`;
};
