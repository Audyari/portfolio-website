# Project Context

## Purpose
Portfolio website pribadi yang menampilkan proyek, blog, dan informasi kontak. Website ini bertujuan untuk memamerkan karya dan pengalaman pengembangan web.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Bahasa Pemrograman**: TypeScript
- **Styling**: Tailwind CSS
- **Autentikasi**: NextAuth.js
- **Database**: PostgreSQL (via Vercel Postgres)
- **Deployment**: Vercel
- **Lainnya**:
  - React 18
  - MDX untuk konten blog
  - Resend untuk pengiriman email

## Project Conventions

### Code Style
- Gunakan TypeScript untuk semua komponen dan fungsi
- Gunakan ESLint dan Prettier untuk konsistensi kode
- Nama komponen menggunakan PascalCase (contoh: `MessageTable.tsx`)
- Nama file dan folder menggunakan kebab-case (contoh: `contact-form.tsx`)
- Gunakan arrow functions untuk komponen React

### Architecture Patterns
- **App Router**: Menggunakan Next.js App Router untuk routing
- **Server Components**: Memanfaatkan Server Components untuk performa yang lebih baik
- **API Routes**: Menggunakan Route Handlers untuk API endpoints
- **Layouts**: Menggunakan layout untuk tata letak yang konsisten

### Testing Strategy
- Pengujian komponen dengan React Testing Library
- Pengujian integrasi untuk API routes
- Pengujian end-to-end dengan Cypress (opsional)

### Git Workflow
- **Branch Naming**: 
  - `main` - branch produksi
  - `develop` - pengembangan utama
  - `feature/nama-fitur` - untuk fitur baru
  - `fix/nama-perbaikan` - untuk perbaikan bug
- **Commit Messages**: Menggunakan Conventional Commits
  - `feat:` untuk fitur baru
  - `fix:` untuk perbaikan bug
  - `docs:` untuk perubahan dokumentasi
  - `style:` untuk perubahan formatting
  - `refactor:` untuk perubahan kode yang tidak memperbaiki bug atau menambah fitur
  - `test:` untuk menambah atau memperbaiki test

## Domain Context
- Website ini memiliki beberapa bagian utama:
  - Halaman Beranda: Menampilkan profil dan proyek terbaru
  - Blog: Berisi artikel-artikel teknis
  - Proyek: Daftar proyek yang telah dikerjakan
  - Tentang: Informasi tentang pemilik website
  - Kontak: Formulir untuk menghubungi pemilik website

## Important Constraints
- Harus responsif dan berfungsi dengan baik di perangkat mobile
- Harus memiliki performa yang baik (skor Lighthouse yang tinggi)
- Harus mengikuti praktik aksesibilitas web (WCAG)

## External Dependencies
- **Vercel Postgres**: Untuk penyimpanan data
- **Resend**: Untuk layanan pengiriman email
- **NextAuth.js**: Untuk autentikasi
- **MDX**: Untuk konten blog yang kaya
- **Geist**: Font yang digunakan di website
