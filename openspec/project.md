# Project Context

## Purpose
Membangun portfolio website pribadi yang modern dan interaktif untuk menampilkan proyek, keterampilan, dan pengalaman profesional.

## Tech Stack
- Next.js (App Router)
- TypeScript
- React 18
- Tailwind CSS
- Geist UI
- Vercel Analytics & Speed Insights
- MDX untuk konten blog

## Project Conventions

### Code Style
- Menggunakan TypeScript dengan konfigurasi ketat
- Komponen React menggunakan functional components dengan TypeScript
- Penamaan komponen menggunakan PascalCase
- Hooks dan fungsi menggunakan camelCase
- Menggunakan ESLint dan Prettier untuk konsistensi kode

### Architecture Patterns
- Menggunakan App Router dari Next.js untuk routing
- Komponen UI yang dapat digunakan kembali di folder `components/`
- Halaman statis untuk performa optimal
- Menggunakan Server Components untuk performa yang lebih baik

### Testing Strategy
- Pengujian komponen dengan React Testing Library
- Pengujian integrasi untuk alur utama
- Mengutamakan pengujian komponen kritis

### Git Workflow
- Menggunakan Git Flow untuk manajemen cabang
- Format pesan commit: `type(scope): deskripsi`
- Contoh: `feat(header): add responsive navigation`
- Tipe commit: feat, fix, docs, style, refactor, test, chore

## Domain Context
- Website ini berfokus pada portofolio pengembangan web
- Menampilkan proyek, keterampilan, dan pengalaman profesional
- Blog untuk berbagi pengetahuan dan tutorial

## Important Constraints
- Harus mobile-friendly dan aksesibel
- Performa harus optimal (Lighthouse score tinggi)
- Konten harus mudah diupdate

## External Dependencies
- Vercel untuk hosting dan deployment
- Vercel Analytics untuk analitik
- Vercel Speed Insights untuk monitoring performa
- Geist UI untuk komponen antarmuka pengguna
