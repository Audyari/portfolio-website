# Proposal: Implementasi Fungsi Pengiriman Form Kontak

## Ringkasan
Mengimplementasikan fungsi pengiriman form kontak yang mengirim data ke API endpoint dan menampilkan feedback ke pengguna.

## Latar Belakang
Saat ini, form kontak hanya menampilkan pesan alert sederhana tanpa benar-benar mengirim data ke server. Kita perlu mengintegrasikan dengan layanan backend untuk menangani pengiriman pesan.

## Rencana Implementasi

### 1. Membuat API Endpoint
- Buat file `app/api/contact/route.ts` untuk menangani request pengiriman pesan
- Validasi input data
- Simpan pesan ke database atau kirim email

### 2. Memperbarui Komponen Form
- Update fungsi `handleSubmit` untuk mengirim data ke API
- Tambahkan state untuk menangani status pengiriman
- Tampilkan feedback visual (loading, sukses, error)

### 3. Validasi Form
- Validasi client-side untuk email dan field wajib
- Tampilkan pesan error yang jelas

## Detail Teknis

### API Endpoint (`app/api/contact/route.ts`)
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validasi data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Di sini bisa ditambahkan logika untuk mengirim email
    // atau menyimpan ke database
    console.log('Pesan baru:', body);

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan' },
      { status: 500 }
    );
  }
}
```

### Perubahan pada Komponen Form
1. Update state untuk menangani status pengiriman dan pesan error:
```typescript
const [status, setStatus] = useState<{
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}>({ type: 'idle', message: '' });
```

2. Update fungsi `handleSubmit`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus({ type: 'loading', message: 'Mengirim pesan...' });

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Gagal mengirim pesan');
    }

    setStatus({
      type: 'success',
      message: 'Pesan berhasil dikirim! Saya akan segera membalasnya.',
    });
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    setStatus({
      type: 'error',
      message: error instanceof Error ? error.message : 'Terjadi kesalahan',
    });
  }
};
```

3. Tambahkan komponen untuk menampilkan status:
```tsx
{status.type !== 'idle' && (
  <div
    className={`p-4 rounded-lg mb-4 ${
      status.type === 'error' 
        ? 'bg-red-100 text-red-700' 
        : 'bg-green-100 text-green-700'
    }`}
  >
    {status.message}
  </div>
)}
```

## Langkah-langkah Implementasi

1. Buat direktori dan file API endpoint
2. Update komponen form dengan logika pengiriman baru
3. Tambahkan validasi form
4. Tambahkan feedback visual untuk pengguna
5. Testing menyeluruh

## Testing
- [ ] Form validasi berfungsi dengan benar
- [ ] Pesan sukses ditampilkan setelah pengiriman
- [ ] Error handling berfungsi dengan baik
- [ ] Loading state terlihat saat pengiriman
- [ ] Form reset setelah pengiriman berhasil

## Catatan Tambahan
- Pertimbangkan untuk menambahkan rate limiting di API endpoint
- Tambahkan validasi tambahan untuk mencegah spam
- Pertimbangkan untuk menambahkan CAPTCHA jika diperlukan
