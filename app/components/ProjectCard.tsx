// ==========================================
// FILE: app/components/ProjectCard.tsx
// ==========================================
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  // Style classes untuk konsistensi
  const imageContainerClass = "relative h-48 overflow-hidden bg-gray-100 cursor-zoom-in group";
  const imageClass = `
    w-full h-full object-cover transition-all duration-500 ease-in-out
    ${!imageLoaded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
    group-hover:scale-110
  `;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Image Container dengan styling baru */}
      <div
        className={imageContainerClass}
        onClick={() => setIsLightboxOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsLightboxOpen(true);
          }
        }}
        aria-label={`View ${project.title} image in larger size`}
      >
        {imageError ? (
          // Placeholder untuk gambar error
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 p-4">
            <div className="w-16 h-16 mb-3 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-500 text-sm text-center font-medium">
              Gambar tidak tersedia
            </span>
          </div>
        ) : (
          <>
            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Image dengan Next.js Image Optimization */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={imageClass}
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority={project.featured}
            />

            {/* Overlay effect dengan transisi yang lebih smooth */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Lightbox yang ditingkatkan */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Container */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!imageError ? (
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    onError={handleImageError}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 p-16 min-h-[400px]">
                  <svg
                    className="w-24 h-24 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg font-medium mb-2">Gambar tidak tersedia</p>
                  <p className="text-sm text-gray-500">Preview untuk {project.title}</p>
                </div>
              )}
              
              {/* Caption */}
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Informasi project */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link
          href={project.slug}
          target={project.slug.startsWith('http') ? '_blank' : '_self'}
          rel={project.slug.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 hover:shadow-md"
        >
          View Project
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}