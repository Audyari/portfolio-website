// app/projects/page.tsx
import Header from '@/app/components/Header'
import Footer from '@/app/components/footer'
import ProjectCard from '@/app/components/ProjectCard'

const allProjects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
    image: '/images/project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    slug: 'ecommerce-platform',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/project-2.jpg',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    slug: 'task-management-app',
  },
  {
    id: '3',
    title: 'Portfolio Website',
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