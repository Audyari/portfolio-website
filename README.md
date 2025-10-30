# 🚀 Portfolio Website

> A modern, responsive portfolio website built with Next.js and React

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0-blue)](https://reactjs.org/)

## 📋 Deskripsi

Portfolio website ini dirancang untuk menampilkan proyek, keterampilan, dan pengalaman profesional dengan tampilan yang modern dan responsif. Dibangun menggunakan teknologi web terkini untuk performa optimal dan pengalaman pengguna yang luar biasa.

## ✨ Fitur Utama

- 🎨 **Desain Modern & Responsif** - Tampilan yang menarik di semua ukuran layar
- ⚡ **Performa Tinggi** - Optimasi dengan Next.js untuk loading cepat
- 🌙 **Dark Mode** - Tema gelap dan terang
- 📱 **Mobile-First Design** - Pengalaman mobile yang sempurna
- 🎯 **SEO Optimized** - Meta tags dan struktur yang SEO-friendly
- 💼 **Portfolio Showcase** - Galeri proyek dengan detail lengkap
- 📧 **Contact Form** - Form kontak terintegrasi
- 🔄 **Smooth Animations** - Transisi dan animasi yang halus

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js 14** - React framework untuk production
- **React 18** - Library UI untuk membangun interface
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi untuk React

### Tools & Services
- **Vercel** - Platform deployment
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Persyaratan Sistem

- Node.js 18.x atau lebih tinggi
- npm atau yarn atau pnpm
- Git

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/Audyari/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Setup Environment Variables

Buat file `.env.local` di root folder dan tambahkan:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Optional: Jika menggunakan analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### 4. Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📜 Available Scripts

```bash
npm run dev          # Menjalankan development server
npm run build        # Build aplikasi untuk production
npm run start        # Menjalankan production server
npm run lint         # Menjalankan ESLint
npm run format       # Format code dengan Prettier
```

## 📁 Struktur Direktori

```
portfolio-website/
├── public/              # Static files
│   ├── images/         # Gambar dan asset
│   └── icons/          # Icon dan favicon
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── ...         # Pages lainnya
│   ├── components/     # React components
│   │   ├── common/     # Komponen umum
│   │   ├── sections/   # Section components
│   │   └── ui/         # UI components
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
├── .env.local          # Environment variables (tidak di-commit)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies dan scripts
```

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

Atau gunakan Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Environment Variables untuk Production

Pastikan set environment variables berikut di Vercel:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🎨 Kustomisasi

### Mengubah Konten

Edit file-file berikut untuk mengkustomisasi konten:

- `src/app/page.tsx` - Home page content
- `src/components/sections/` - Section components
- `public/images/` - Gambar dan asset

### Mengubah Styling

- Edit `tailwind.config.js` untuk mengubah theme
- Modify `src/styles/globals.css` untuk global styles
- Update component-specific styles di masing-masing komponen

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan ikuti langkah berikut:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Kontak

Audyari Wiyono - [@audyari](https://facebook.com/audyari) - audy123ari@gmail.com

Project Link: [https://github.com/Audyari/portfolio-website](https://github.com/Audyari/portfolio-website)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel](https://vercel.com)

---

⭐ Jangan lupa beri star jika repository ini membantu Anda!