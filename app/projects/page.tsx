// ==========================================
// FILE: app/projects/page.tsx
// ==========================================
"use client";

import Header from '@/app/components/Header'
import Footer from '@/app/components/footer'
import ProjectCard from '@/app/components/ProjectCard'

const allProjects = [
  {
    id: '1',
    title: '🎯 Vue Todo App',
    description: 'Aplikasi Todo sederhana dan modern yang dibangun dengan Vue 3 untuk membantu Anda mengelola tugas sehari-hari dengan mudah. Fitur termasuk tambah, edit, hapus, dan filter tugas.',
    image: '/images/projects/vue-todo-app.webp',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Tailwind CSS'],
    slug: 'https://vue-todo-app-lf7e.vercel.app/',
    featured: true,
    status: 'completed'
  },
  {
    id: '2',
    title: '🎯 LOGSPOT App',
    description: 'LogSpot adalah aplikasi web modern untuk mencatat dan mengelola aktivitas harian dengan antarmuka yang sederhana dan mudah digunakan. Dibangun dengan Vue 3, Vite, dan Tailwind CSS.',
    image: '/images/projects/logspot.webp',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Vue Router', 'Headless UI', 'Tailwind CSS', 'Heroicons'],
    slug: 'https://logspot-gamma.vercel.app/',
    featured: true,
    status: 'completed'
  },
  {
    id: '3',
    title: '🎯 Portfolio Website',
    description: 'Website portfolio responsif yang dibangun dengan teknologi web modern untuk menampilkan karya dan pengalaman. Desain clean dan performa optimal.',
    image: '/images/portfolio-website.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    slug: '/',
    featured: true,
    status: 'completed'
  },
  {
    id: '4',
    title: '🚀 E-Commerce Platform',
    description: 'Platform e-commerce lengkap dengan sistem cart, checkout, dan manajemen produk. Integrasi payment gateway dan dashboard admin.',
    image: '/images/ecommerce-platform.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    slug: '#',
    featured: false,
    status: 'in-progress'
  },
  {
    id: '5',
    title: '📱 Mobile Task Manager',
    description: 'Aplikasi manajemen tugas mobile-first dengan sync cloud, notifikasi, dan kolaborasi tim. Built dengan React Native.',
    image: '/images/task-manager.jpg',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    slug: '#',
    featured: false,
    status: 'planned'
  },
  {
    id: '6',
    title: '🌐 Social Media Dashboard',
    description: 'Dashboard analytics untuk media sosial dengan visualisasi data real-time, scheduling post, dan insights engagement.',
    image: '/images/social-dashboard.jpg',
    technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
    slug: '#',
    featured: false,
    status: 'planned'
  }
];

export default function Projects() {
  const featuredProjects = allProjects.filter(project => project.featured);
  const otherProjects = allProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Koleksi Project & Karya
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jelajahi koleksi project yang telah saya kembangkan, dari web aplikasi modern 
              hingga solusi digital inovatif. Setiap project mencerminkan passion saya dalam 
              menciptakan pengalaman pengguna yang luar biasa.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{allProjects.length}+</div>
              <div className="text-gray-600 text-sm">Total Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {allProjects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-gray-600 text-sm">Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {allProjects.filter(p => p.status === 'in-progress').length}
              </div>
              <div className="text-gray-600 text-sm">In Progress</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {allProjects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-600 text-sm">Featured</div>
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Featured Projects
                  </h2>
                  <p className="text-gray-600">
                    Project unggulan dengan teknologi terkini dan solusi inovatif
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Highlighted</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* All Projects */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                All Projects
              </h2>
              <p className="text-gray-600">
                Semua project yang telah dan sedang saya kerjakan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Tertarik Berkolaborasi?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Saya selalu terbuka untuk project menarik dan peluang kolaborasi. 
                Mari berbicara tentang ide Anda dan bagaimana kita bisa mewujudkannya bersama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Hubungi Saya
                </a>
                <a
                  href="https://github.com/Audyari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Lihat GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}