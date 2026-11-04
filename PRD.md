# PRD: Web Portfolio — M. Hassanal Mu'izzam Hassanudin

## 1. Latar Belakang & Tujuan
- **Konteks:** Portofolio personal sebagai mahasiswa Teknik Komputer (Computer Vision & ML) yang juga punya pengalaman frontend dari magang di ITpedia Indonesia.
- **Tujuan utama:** Showcase ke rekruter/perusahaan teknologi — menonjolkan dua jalur kompetensi: CV/ML (skripsi YOLO) + frontend engineering (magang & DevBoard).
- **Target audiens:** Rekruter tech company, engineer senior yang me-review kandidat, dosen penguji.

## 2. Fitur Utama (MVP)

### F01 | Hero Section
Nama, tagline singkat, dan dua CTA: "Lihat Proyek" (scroll ke Projects) dan "Kontak Saya" (scroll ke Contact). Foto avatar placeholder.

### F02 | About / Background
Narasi singkat: siapa, jurusan, fokus (CV & ML + frontend), visi karier.

### F03 | Education
Riwayat pendidikan: UNNES Teknik Komputer. Card timeline sederhana.

### F04 | Skills / Kompetensi
Grouped skill tags: Computer Vision, Web, Tools. Tag pill, bukan progress bar.

### F05 | Projects
3 project card awal (YOLO Skripsi, Magang Frontend, DevBoard). Data di `data/projects.ts`.

### F06 | Contact
Email, GitHub, LinkedIn. Form contact via Formspree.

## 3. Fitur Enhancement (Post-MVP)
- Blog/notes section
- Dark mode toggle
- CV/Resume download
- Project filter by tag

## 4. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Design System |
| Contact Form | Formspree |
| Deploy | Vercel |

## 5. Arsitektur
Single-page scroll (satu route `/`). Data proyek di `/data/projects.ts`.

## 6. Daftar Milestone

| No | Milestone | Scope | Status |
|---|---|---|---|
| M1 | Setup & Scaffold | init, Tailwind config, layout, Navbar | ✅ |
| M2 | Hero + About + Education | 3 section pertama | ⏳ |
| M3 | Skills + Projects | tag pills, project cards | ⏳ |
| M4 | Contact + Polish | form, footer, responsive, QA | ⏳ |
| M5 | Deployment | GitHub + Vercel | ⏳ |

## 7. Design Notes
- Aesthetic: Warm Editorial / Literary Tech
- Ref: `C:\Users\lenovo\hermes-workplace\general\general\DESIGN_SYSTEM.md`
- Breakpoints: 375px / 768px / 1280px

## 8. Aturan untuk Agent
- Maks satu milestone per sesi
- Jangan pakai library baru tanpa tanya
- Ambiguitas desain → TANYA dulu
- Selalu baca DESIGN_SYSTEM.md sebelum CSS/HTML
