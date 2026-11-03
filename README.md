# Web Portfolio — M. Hassanal Mu'izzam Hassanudin

Personal portfolio website — Computer Vision & Frontend Engineer.

## Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Design System (Warm Editorial)
- **Deploy:** Vercel


## Milestone Progress

| No | Milestone | Status |
|---|---|---|
| M1 | Setup & Scaffold | ✅ Selesai |
| M2 | Hero + About + Education | ✅ Selesai |
| M3 | Skills + Projects | ✅ Selesai |
| M4 | Contact + Polish + Responsive | ✅ Selesai |
| M5 | Deployment (Vercel) | ✅ Selesai |

## Struktur Folder

```
web-portfolio/
├── app/
│   ├── layout.tsx       ← metadata, font Google, body class
│   ├── page.tsx         ← single-page entry, assembly semua sections
│   └── globals.css      ← CSS vars Design System, Tailwind base
├── components/
│   ├── Navbar.tsx       ✅ Fixed nav + mobile menu
│   ├── Hero.tsx         (M2)
│   ├── About.tsx        (M2)
│   ├── Education.tsx    (M2)
│   ├── Skills.tsx       (M3)
│   ├── Projects.tsx     (M3)
│   ├── ProjectCard.tsx  (M3)
│   └── Contact.tsx      (M4)
├── data/
│   └── projects.ts      ✅ Type ProjectCard[], 3 proyek awal
├── public/
│   └── (aset statis)
├── tailwind.config.ts   ✅ Design System palette + shadows
├── .hermes.md
├── PRD.md
└── README.md
```

## Cara Jalankan Dev Server

```bash
cd C:/Users/lenovo/hermes-workplace/general/projects/web-portfolio
npm run dev
# → http://localhost:3000
```

## Tambah Project Baru

Edit `data/projects.ts` — tambah satu objek `Project` ke array `projects`.

---

## Troubleshooting — Obstacle M1 & Solusinya

Catatan masalah nyata yang terjadi saat eksekusi M1, beserta solusi yang sudah terbukti bekerja.

---

### O1 — `npm install` gagal: `EALLOWSCRIPTS not allowed`

**Gejala:**
```
npm error code EALLOWSCRIPTS
npm error --allow-scripts is not allowed in project-scoped installs.
```

**Konteks:** Terjadi saat `npx create-next-app` mencoba menjalankan `npm install` di dalam folder project.

**Penyebab:** Konfigurasi npm di environment ini melarang scripts di project-scoped install secara default.

**Solusi:** Buat file `.npmrc` di root folder project sebelum menjalankan install, dengan isi:
```
allow-scripts=true
```

**Pencegahan:** Buat `.npmrc` ini di awal setiap project baru sebelum `npm install` pertama. Sudah ada di repo ini.

---

### O2 — `create-next-app` abort di tengah jalan: scaffold ada, `node_modules` kosong

**Gejala:** Folder project berisi `package.json`, `tailwind.config.ts`, `app/`, dll. — tapi `node_modules` tidak ada. Jalankan `npm run dev` → error `Cannot find module 'next'`.

**Konteks:** Error O1 memotong proses install di tengah jalan. Scaffold file sudah terbuat, tapi dependency belum terinstall.

**Penyebab:** `create-next-app` adalah dua tahap: (1) generate file scaffold, (2) jalankan `npm install`. Tahap 2 gagal karena O1, tapi tahap 1 sudah selesai sehingga folder tidak kosong — membuat `create-next-app` ulang juga gagal karena file conflict.

**Solusi:** Setelah `.npmrc` dibuat, jalankan `npm install` manual di folder project:
```bash
cd path/to/project
npm install
```
Tidak perlu hapus dan ulang `create-next-app`.

---

### O3 — `npm install` timeout di 180 detik

**Gejala:** Terminal mengembalikan exit code 124 (timeout) saat install dependency Next.js.

**Konteks:** Default timeout foreground terminal adalah 180s. Install ~380 package Next.js 14 membutuhkan 3–5 menit tergantung koneksi.

**Penyebab:** Jumlah package besar + koneksi npm registry yang bisa lambat.

**Solusi:** Naikkan `timeout` ke minimal 600 detik saat menjalankan `npm install` untuk Next.js project. Pada Hermes terminal tool, set `timeout=600` secara eksplisit.

---

### O4 — Build gagal: `Cannot find module './parse'` di `picomatch`

**Gejala:**
```
Error: Cannot find module './parse'
Require stack:
- node_modules/picomatch/lib/picomatch.js
- node_modules/tailwindcss/lib/index.js
...
Build failed because of webpack errors
```

**Konteks:** Terjadi setelah `npm install` yang sebelumnya terpotong (lihat O2/O3). `npm run build` dan `npm run dev` sama-sama gagal.

**Penyebab:** Install yang terganggu meninggalkan file-file penting di `node_modules` dalam keadaan di-rename menjadi `*.DELETE.<hash>`. File aslinya ada di disk tapi tidak bisa di-resolve karena namanya berubah. Ini adalah mekanisme rollback npm yang tidak selesai ketika proses install dihentikan paksa.

**File yang terdampak (total 13 di M1):**
```
picomatch/lib/parse.js                          ← paling kritis
postcss-value-parser/lib/parse.js
semver/functions/cmp.js
tinyglobby/package.json
argparse/lib/sub.js
deep-is/index.js
fast-deep-equal/es6/react.js
fast-json-stable-stringify/index.js
has-symbols/test/shams/core-js.js
has-tostringtag/test/shams/core-js.js
napi-postinstall/lib/cli.d.ts
postcss-js/LICENSE
@jridgewell/resolve-uri/dist/resolve-uri.mjs.map
```

**Solusi cepat — restore semua file sekaligus:**
```bash
find node_modules -name "*.DELETE.*" | while read f; do
  original="${f%.DELETE.*}"
  mv "$f" "$original" && echo "Restored: $original"
done
```

**Solusi bersih — hapus dan install ulang:**
```bash
rm -rf node_modules && npm install
```

**Pencegahan:** Jangan hentikan `npm install` di tengah jalan. Jika terpaksa berhenti, selalu jalankan `npm install` ulang sampai selesai penuh sebelum mencoba build.

---

### O5 — `process_manage kill` hang 420 detik, dev server tidak bisa dimatikan

**Gejala:** `process_manage(action='kill')` tidak mengembalikan hasil selama 420 detik (timeout tool).

**Konteks:** Dev server Next.js yang dijalankan sebagai background process di Windows via Hermes.

**Penyebab:** Race condition antara Hermes `process_manage` dan process Node.js di Windows.

**Solusi — matikan via PID langsung:**
```bash
# 1. Cari PID yang menempati port 3000
netstat -ano | grep ":3000" | awk '{print $5}' | sort -u

# 2. Kill by PID (ganti 12345 dengan PID aktual)
taskkill /F /PID 12345
```

**Pencegahan:** Untuk project Next.js di Windows, matikan dev server via `taskkill /F /PID` — lebih reliable dibanding Hermes `process_manage` kill.

---

*Troubleshooting log ini dibuat setelah eksekusi M1. Diupdate setelah M5.*

## Live URL

**Production:** https://website-portfolio-three-indol.vercel.app

Deploy via Vercel Dashboard — import dari GitHub repo `hassanalm22/Website-Portfolio`, branch `main`. Auto-deploy aktif: setiap push ke `main` akan trigger rebuild otomatis.

---

## Troubleshooting — Obstacle M3 & Solusinya

---

### O6 — Build gagal: `Event handlers cannot be passed to Client Component props`

**Gejala:**
```
Error: Event handlers cannot be passed to Client Component props.
  {className: ..., style: ..., onMouseEnter: function onMouseEnter, onMouseLeave: ..., children: ...}
                                             ^^^^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

**Konteks:** Terjadi saat `npm run build` setelah `ProjectCard.tsx` ditulis dengan `onMouseEnter` dan `onMouseLeave` untuk efek hover shadow pada card.

**Penyebab:** Next.js 14 App Router menjalankan semua komponen sebagai **Server Component** secara default. Server Component tidak boleh menerima event handler (fungsi JavaScript) sebagai props karena tidak bisa di-serialize untuk dikirim ke client. `onMouseEnter` dan `onMouseLeave` adalah event handler → build langsung gagal.

**Dua pilihan solusi:**

1. **Tambah `'use client'` directive** di atas file komponen:
   ```tsx
   'use client'
   // ... sisa kode
   ```
   Komponen jadi Client Component — boleh pakai event handler, tapi kehilangan keuntungan Server Component (SSR optimization, zero JS bundle).

2. **Ganti ke pure CSS hover** ← *solusi yang dipakai*:
   - Hapus `onMouseEnter`/`onMouseLeave` dari JSX
   - Tambah CSS class `.project-card` di `globals.css`:
   ```css
   .project-card {
     transition: box-shadow 0.2s ease;
   }
   .project-card:hover {
     box-shadow:
       rgba(0, 0, 0, 0.08) 0px 8px 32px,
       #f0eee6 0px 0px 0px 0px,
       #d1cfc5 0px 0px 0px 1px !important;
   }
   ```

**Alasan memilih opsi 2:** Hover shadow murni visual — tidak butuh state, tidak butuh JS. Pure CSS lebih ringan, komponen tetap Server Component, bundle size tidak bertambah.

**Pencegahan:** Di Next.js 14 App Router, default semua komponen adalah Server Component. Pakai event handler (`onClick`, `onChange`, `onMouseEnter`, dll.) **hanya jika komponen sudah ditandai `'use client'`**. Kalau efek bisa dicapai dengan CSS saja, jangan pakai JS event handler.

---
