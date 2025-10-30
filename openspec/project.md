# Project Context

## Purpose
Portfolio website pribadi untuk menampilkan karya, pengalaman, dan keterampilan dalam pengembangan web. Website ini bertujuan untuk memberikan gambaran profesional dan kreatif tentang portofolio pengembangan web.

## Tech Stack
- Next.js (dengan App Router)
- TypeScript
- React 18
- Tailwind CSS
- Geist UI
- Vercel Analytics & Speed Insights

## Project Conventions

### Code Style
- Gunakan TypeScript untuk type safety
- Komponen React menggunakan fungsi komponen (function components)
- Gunakan konvensi penamaan PascalCase untuk komponen dan camelCase untuk fungsi/variabel
- Gunakan ESLint dan Prettier untuk konsistensi kode
- Gunakan arrow functions untuk komponen dan handler

### Architecture Patterns
- App Router Next.js untuk routing
- Komponen modular dan reusable
- Server Components untuk performa optimal
- Client Components hanya ketika diperlukan (interaktivitas, efek samping, hooks)

### Testing Strategy
- Unit testing dengan Jest dan React Testing Library
- Komponen testing menggunakan @testing-library/react
- Integration testing untuk alur kunci
- E2E testing dengan Cypress (opsional)

### Git Workflow
- Gunakan Git Flow untuk manajemen cabang
- Commit messages mengikuti Conventional Commits
- PR diperlukan sebelum merge ke main branch
- Gunakan semantic versioning untuk release

## Domain Context
- Fokus pada pengembangan web modern
- Menampilkan proyek, keterampilan, dan pengalaman
- Desain yang responsif dan aksesibel
- Performa dan SEO yang optimal

## Important Constraints
- Target browser modern (Chrome, Firefox, Safari, Edge versi terbaru)
- Mobile-first approach
- Performa (Lighthouse score minimal 90)
- Aksesibilitas (WCAG 2.1 AA)

## External Dependencies
- Vercel untuk hosting dan deployment
- Vercel Analytics untuk analitik
- Vercel Speed Insights untuk monitoring performa
- Geist UI untuk komponen antarmuka pengguna
