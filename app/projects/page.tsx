// app/projects/page.tsx
import Header from '@/app/components/Header'
import Footer from '@/app/components/footer'
import ProjectCard from '@/app/components/ProjectCard'

const allProjects = [
  {
    id: '1',
    title: '🎯 Vue Todo App',
    description: 'Aplikasi Todo sederhana dan modern yang dibangun dengan Vue 3 untuk membantu Anda mengelola tugas sehari-hari dengan mudah.',
    image: '/images/VueTodoApp.JPG',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Tailwind CSS'],
    slug: 'https://vue-todo-app-lf7e.vercel.app/',
  },
  {
    id: '2',
    title: '🎯 LOGSPOT App',
    description: 'LogSpot adalah aplikasi web modern untuk mencatat dan mengelola aktivitas harian dengan antarmuka yang sederhana dan mudah digunakan. Dibangun dengan Vue 3, Vite, dan Tailwind CSS.',
    image: '/images/LogSpot.jpg',
    technologies: ['Vue 3', 'Vite', 'Pinia','Vue Router','Headless UI','Tailwind CSS', 'Heroicons'],
    slug: 'https://logspot-gamma.vercel.app/',
  },
  {
    id: '3',
    title: '🎯 Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    image: '/images/project-3.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    slug: 'portfolio-website',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills 
              and experience in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}