# Project Context

## Purpose
Portofolio website pribadi yang menampilkan proyek, blog, dan informasi kontak. Dibangun dengan teknologi modern untuk performa dan pengalaman pengguna yang optimal.

## Tech Stack
- Next.js (App Router)
- TypeScript
- React 18
- Tailwind CSS
- MDX (untuk konten blog)
- Vercel (deployment)

## Project Conventions

### Code Style
- Gunakan TypeScript untuk type safety
- Komponen React menggunakan fungsi, bukan class
- Nama komponen menggunakan PascalCase
- Nama file komponen menggunakan PascalCase
- Gunakan ESLint dan Prettier untuk konsistensi kode
- Gunakan arrow functions untuk komponen
- Gunakan interface untuk tipe props

### Architecture Patterns
- App Router dari Next.js untuk routing
- Komponen yang dapat digunakan ulang di folder `components/`
- Halaman statis untuk performa optimal
- Server Components untuk komponen yang tidak membutuhkan interaktivitas
- Client Components untuk komponen yang membutuhkan interaktivitas

### Testing Strategy
- Gunakan testing library untuk komponen React
- Tes integrasi untuk halaman utama
- End-to-end testing untuk alur kritis

### Git Workflow
- Gunakan Conventional Commits
- Branch naming: `feature/nama-fitur`, `bugfix/nama-perbaikan`
- Pull Request dengan deskripsi yang jelas
- Code review sebelum merge ke main

## Domain Context
- Website ini berfokus pada portofolio pribadi
- Memiliki bagian blog untuk berbagi pengetahuan
- Menampilkan proyek-proyek yang telah dikerjakan
- Memiliki halaman kontak untuk kolaborasi

## Important Constraints
- Harus mobile-friendly
- Performa harus optimal (scor tinggi di Lighthouse)
- Aksesibilitas (a11y) harus diperhatikan
- SEO friendly

## External Dependencies
- Vercel Analytics dan Speed Insights
- Geist Font
- Next.js MDX Remote untuk rendering konten MDX
- Sugar High untuk syntax highlighting
