# Project Context

## Purpose
Membangun website portfolio pribadi yang menampilkan proyek-proyek, keterampilan, dan informasi kontak. Tujuannya adalah untuk memamerkan karya dan pengalaman profesional dalam format yang modern dan interaktif.

## Tech Stack
- Next.js (App Router)
- TypeScript
- React 18
- Tailwind CSS
- Geist Design System
- Vercel Analytics & Speed Insights

## Project Conventions

### Code Style
- Gunakan TypeScript untuk type safety
- Komponen React menggunakan functional components
- Gunakan arrow functions untuk komponen
- Nama komponen menggunakan PascalCase
- Nama file komponen menggunakan PascalCase
- Gunakan ESLint dan Prettier untuk konsistensi kode

### Architecture Patterns
- App Router dari Next.js untuk routing
- Komponen yang dapat digunakan kembali di folder `components/`
- Halaman di dalam folder `app/`
- Gunakan Server Components secara default, gunakan Client Components hanya jika diperlukan

### Testing Strategy
- Belum diimplementasikan (akan menggunakan Jest dan React Testing Library)

### Git Workflow
- Branch `main` untuk produksi
- Buat branch fitur untuk pengembangan fitur baru (contoh: `feature/navbar`)
- Gunakan Conventional Commits untuk pesan commit
- Lakukan pull request untuk menggabungkan perubahan ke `main`

## Domain Context
- Website portfolio pribadi yang menampilkan:
  - Halaman beranda dengan pengenalan singkat
  - Daftar proyek yang telah dikerjakan
  - Informasi kontak dan media sosial
  - Blog pribadi (dalam pengembangan)

## Important Constraints
- Performa website harus optimal (skor tinggi di Lighthouse)
- Harus responsif di berbagai perangkat
- Harus aksesibel (memenuhi standar WCAG)

## External Dependencies
- Vercel untuk hosting dan deployment
- Vercel Analytics untuk analisis pengunjung
- Vercel Speed Insights untuk memantau performa
