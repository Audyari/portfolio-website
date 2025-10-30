'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({ 
    type: 'idle', 
    message: '' 
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Validasi client-side
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Pesan harus minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error ketika user mulai mengetik
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi sebelum submit
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Harap perbaiki error di atas sebelum mengirim'
      });
      return;
    }

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
        message: data.message || 'Pesan berhasil dikirim! Saya akan segera membalasnya.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Terjadi kesalahan saat mengirim pesan'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Hubungi Kami</h2>
      
      {/* Status Message */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            status.type === 'error' 
              ? 'bg-red-100 text-red-700 border border-red-300' 
              : status.type === 'success'
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-blue-100 text-blue-700 border border-blue-300'
          }`}
        >
          <div className="flex items-center">
            {status.type === 'loading' && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700 mr-2"></div>
            )}
            <span>{status.message}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nama *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Masukkan nama lengkap"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="email@contoh.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Pesan *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tulis pesan Anda di sini..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
          <div className="text-xs text-gray-500 mt-1">
            Minimal 10 karakter ({formData.message.length}/10)
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
            status.type === 'loading'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {status.type === 'loading' ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Mengirim...
            </div>
          ) : (
            'Kirim Pesan'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;