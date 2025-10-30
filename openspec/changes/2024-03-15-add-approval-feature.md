---
id: add-approval-feature
title: "Add Approval Feature for Messages and Projects"
status: proposed
author: [Nama Anda]
date: 2024-03-15
impact: medium
---

## Deskripsi
Menambahkan fitur approval untuk pesan dan proyek pada halaman admin. Fitur ini memungkinkan admin untuk menyetujui atau menolak pesan dan proyek sebelum ditampilkan di halaman publik.

## Latar Belakang
Saat ini, pesan dan proyek langsung ditampilkan tanpa proses persetujuan terlebih dahulu. Hal ini dapat menyebabkan konten yang tidak sesuai atau spam muncul di website.

## Tujuan
1. Menambahkan status approval untuk pesan dan proyek
2. Memungkinkan admin untuk menyetujui/menolak konten
3. Hanya menampilkan konten yang sudah disetujui di halaman publik

## Detail Teknis

### Perubahan yang Dibutuhkan

#### 1. Skema Database
- Tambahkan kolom `is_approved` bertipe boolean dengan default `false` pada tabel `messages` dan `projects`

#### 2. MessageTable Component
- Tambahkan tombol untuk approve/reject pesan
- Tampilkan status approval di tabel
- Sertakan filter untuk melihat pesan yang belum/telah disetujui

#### 3. Projects Page
- Modifikasi query untuk hanya menampilkan proyek yang sudah disetujui
- Tambahkan status approval di card proyek

#### 4. Admin Dashboard
- Tambahkan notifikasi untuk konten yang membutuhkan persetujuan
- Tampilkan jumlah konten yang menunggu persetujuan

### Contoh Implementasi

#### MessageTable.tsx
```tsx
// Tambahkan status approval
export interface Message {
  // ... properti yang sudah ada
  is_approved: boolean;
}

// Tambahkan tombol approve/reject
<button 
  onClick={() => onApprove(message.id)}
  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
>
  Approve
</button>
```

#### projects/page.tsx
```tsx
// Modifikasi query untuk hanya menampilkan proyek yang disetujui
const approvedProjects = allProjects.filter(project => project.is_approved);

// Tampilkan badge status approval
{project.is_approved ? (
  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
    Approved
  </span>
) : (
  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
    Pending Approval
  </span>
)}
```

## Dampak
- **Frontend**: Perubahan pada komponen MessageTable dan halaman projects
- **Backend**: Perlu migrasi database untuk menambah kolom baru
- **UI/UX**: Tambahan elemen UI untuk manajemen approval

## Pertimbangan
1. **Keamanan**: Pastikan hanya admin yang dapat mengakses fitur approval
2. **Performa**: Optimalkan query untuk menghindari beban berlebih
3. **Notifikasi**: Kirim notifikasi ke admin ketika ada konten baru yang perlu disetujui

## Langkah Selanjutnya
1. [ ] Buat migrasi database untuk menambah kolom `is_approved`
2. [ ] Update komponen MessageTable dengan fitur approval
3. [ ] Modifikasi halaman projects untuk filter berdasarkan status approval
4. [ ] Tambahkan UI untuk manajemen approval di admin dashboard
5. [ ] Buat dokumentasi untuk fitur baru ini

## Referensi
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Prisma Migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate)
