// components/ProjectCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import SkillBadge from './SkillBadge'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video relative bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500 self-center">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <Link
          href={`${project.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1"
        >
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}