# Project Context

## Purpose
Personal portfolio website to showcase projects, blog posts, and professional information. The site serves as a digital resume and a platform to share knowledge through blog posts.

## Tech Stack
- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with CSS Modules
- **Type Safety**: TypeScript
- **UI Components**: React 18
- **Deployment**: Vercel
- **Database**: Vercel Postgres (Neon)
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Performance**: Vercel Speed Insights

## Project Conventions

### Code Style
- TypeScript with strict mode enabled
- Functional components with React Hooks
- ESLint and Prettier for code formatting
- Component files use PascalCase (e.g., `ProjectCard.tsx`)
- Utility functions and hooks use camelCase
- CSS Modules for component-scoped styling

### Architecture Patterns
- App Router for file-based routing
- Server Components by default, Client Components when needed
- Layout components for consistent page structures
- Reusable UI components in `/app/components`
- API routes in `/app/api`
- Utility functions in `/app/lib`

### Testing Strategy
- Unit tests for utility functions and components
- Integration tests for critical user flows
- End-to-end tests for main features
- Testing Library for React component testing

### Git Workflow
- Feature branches for new features (`feature/feature-name`)
- Pull requests for code review
- Conventional Commits specification
- Main branch protected, requires PR approval
- Semantic versioning for releases

## Domain Context
- Personal branding and professional presentation
- Technical blog content
- Project showcase with case studies
- Contact form for professional inquiries
- Responsive design for all device sizes

## Important Constraints
- Performance optimization for fast loading
- SEO best practices implementation
- Accessibility (WCAG) compliance
- Mobile-first responsive design
- Security best practices for forms and API routes

## External Dependencies
- **Vercel Platform** for hosting and deployment
- **Neon** for PostgreSQL database
- **Resend** for email functionality
- **Geist** for typography
- **Sugar High** for syntax highlighting
- **next-mdx-remote** for MDX content rendering
