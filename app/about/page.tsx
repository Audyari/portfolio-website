// app/about/page.tsx
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";

const experience = [
  {
    company: "Tech Company",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Leading frontend development for customer-facing applications using React, Next.js, and TypeScript.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    company: "Startup Inc",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Developed and maintained web applications using React and Node.js. Implemented RESTful APIs and database design.",
    skills: ["React", "Node.js", "MongoDB", "Express"]
  },
];

const education = [
  {
    institution: "University Name",
    degree: "Bachelor of Computer Science",
    period: "2016 - 2020",
    description: "Focus on Software Engineering and Network Security"
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Git", "Docker"
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Diperbaiki */}
          <section className="text-center mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AW</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Audyari Wiyono
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              15+ years experience in IT infrastructure, now passionate about building 
              modern web applications. Combining network security expertise with 
              full-stack development skills.
            </p>
          </section>

          {/* Updated Journey Section - Diperbaiki */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
              My Journey
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I started my journey in web development during my university
                years, fascinated by the power of code to create interactive
                experiences. Since then, I've worked with various technologies
                and frameworks, always striving to stay current with industry
                trends.
              </p>
              <p>
                My approach combines technical expertise with user-centered
                design principles to deliver solutions that are both functional
                and enjoyable to use.
              </p>
            </div>
          </section>

          {/* Experience Section - Diperbaiki */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full mr-4"></span>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.position}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section - Ditambahkan */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-4 py-2 rounded-lg font-medium border border-purple-100 hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education Section - Diperbaiki */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-4"></span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{edu.period}</span>
                    {edu.description && (
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}