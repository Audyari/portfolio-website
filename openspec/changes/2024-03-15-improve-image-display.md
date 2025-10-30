---
id: improve-image-display
title: "Perbaikan Tampilan Gambar di Project Card dan Message Table"
status: proposed
author: [Nama Anda]
date: 2024-03-15
impact: low
---

## Deskripsi
Memperbaiki tampilan gambar di Project Card dan Message Table untuk meningkatkan pengalaman pengguna dan konsistensi visual.

## Masalah yang Dipecahkan
1. Gambar di Project Card tidak konsisten dalam ukuran dan aspek rasio
2. Tidak ada placeholder yang baik saat gambar gagal dimuat
3. Perlu penanganan error yang lebih baik untuk gambar yang tidak tersedia
4. Efek hover dan transisi yang kurang menarik

## Solusi yang Diusulkan

### 1. Perbaikan Project Card

#### Komponen ProjectCard.tsx
```tsx
// Tambahkan style untuk container gambar
const imageContainerClass = "relative h-48 overflow-hidden rounded-t-lg bg-gray-100";

// Tambahkan style untuk gambar
const imageClass = `
  w-full h-full object-cover transition-transform duration-500 ease-in-out
  ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
  hover:scale-105
`;

// Tambahkan placeholder saat gambar loading/error
{imageError ? (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
    <span className="text-gray-500">Gambar tidak tersedia</span>
  </div>
) : (
  <Image
    src={project.image}
    alt={project.title}
    fill
    className={imageClass}
    onError={handleImageError}
    onLoad={() => setImageLoaded(true)}
    priority={project.featured}
  />
)}
```

### 2. Perbaikan Message Table

#### Komponen MessageTable.tsx
```tsx
// Tambahkan komponen untuk menampilkan gambar di modal detail
{selectedMessage?.imageUrl && (
  <div className="mt-4 border rounded-lg overflow-hidden">
    <Image
      src={selectedMessage.imageUrl}
      alt="Lampiran pesan"
      width={600}
      height={400}
      className="w-full h-auto"
      onError={(e) => {
        e.currentTarget.src = '/images/placeholder-image.jpg';
      }}
    />
  </div>
)}
```

### 3. Rekomendasi Ukuran dan Format Gambar
- **Project Thumbnails**: 800x600px, format WebP/JPEG
- **Message Attachments**: Maksimal 1200x800px, format WebP/JPEG
- **Placeholder Image**: Siapkan gambar default untuk placeholder

### 4. Optimasi Performa
- Gunakan komponen `next/image` untuk optimasi gambar otomatis
- Tambahkan lazy loading untuk gambar di bawah fold
- Gunakan format WebP untuk kompresi yang lebih baik

## Dampak
- **Frontend**: Perubahan pada komponen ProjectCard dan MessageTable
- **Aset**: Mungkin perlu menyiapkan gambar placeholder default
- **Performa**: Loading gambar yang lebih cepat dan penggunaan bandwidth yang lebih efisien

## Langkah Implementasi
1. [ ] Update komponen ProjectCard dengan styling baru
2. [ ] Tambahkan penanganan error yang lebih baik
3. [ ] Implementasikan placeholder yang menarik
4. [ ] Optimasi ukuran dan format gambar yang ada
5. [ ] Tambahkan efek hover dan transisi

## Contoh Hasil
```
📂 public/
  └── images/
      ├── projects/
      │   ├── project-1.webp
      │   └── project-2.webp
      └── placeholders/
          ├── project-placeholder.svg
          └── image-error.svg
```

## Catatan Tambahan
- Pastikan semua gambar dioptimalkan sebelum diunggah
- Gunakan alt text yang deskriptif untuk aksesibilitas
- Pertimbangkan untuk menggunakan CDN untuk penyimpanan gambar
