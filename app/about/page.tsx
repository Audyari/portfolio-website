// app/about/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkillBadge from '@/components/SkillBadge'

const experience = [
  {
    company: 'Tech Company',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for customer-facing applications.',
  },
  {
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using React and Node.js.',
  },
]

const education = [
  {
    institution: 'University Name',
    degree: 'Bachelor of Computer Science',
    period: '2016 - 2020',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with 4+ years of experience creating 
              digital solutions that make a difference.
            </p>
          </section>

          {/* Bio Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                I started my journey in web development during my university years, 
                fascinated by the power of code to create interactive experiences. 
                Since then, I've worked with various technologies and frameworks, 
                always striving to stay current with industry trends.
              </p>
              <p>
                My approach combines technical expertise with user-centered design 
                principles to deliver solutions that are both functional and enjoyable to use.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                  <p className="text-lg text-gray-700 mb-1">{job.company}</p>
                  <p className="text-gray-500 mb-3">{job.period}</p>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}