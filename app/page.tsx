'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  ArrowRight,
  Eye,
  Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const yearsOfExperience = () => {
    const startYear = 2017;
    const startMonth = 5; // June (0-indexed, so 5 is June)
    const now = new Date();
    let years = now.getFullYear() - startYear;
    if (now.getMonth() < startMonth) {
      years -= 1;
    }
    return years;
  };

  const personalInfo = {
    name: 'Brandon McCray',
    title: 'Software Engineer',
    location: 'Raleigh, NC',
    email: 'bradmccray89@gmail.com',
    linkedin: 'https://linkedin.com/in/brandon-mccray-8b1b65a9/',
    github: 'https://github.com/bradmccray89',
    resume: '/brandon-mccray-resume.pdf',
    headshot: '/images/brandon-mccray-headshot-superhero.png',
  };

  const techStack = [
    {
      name: 'Next.js',
      detail: 'App Router, Server Components, production apps',
      icon: '/images/nextjs-icon.svg',
    },
    {
      name: 'React',
      detail: 'Hooks, performance optimization, modern patterns',
      icon: '/images/react-icon.svg',
    },
    {
      name: 'TypeScript',
      detail: 'Strict typing, advanced features, scalable code',
      icon: '/images/typescript-icon.svg',
    },
    {
      name: 'Angular',
      detail: 'Enterprise apps, component architecture',
      icon: '/images/angular-icon.svg',
    },
    {
      name: 'C# .NET',
      detail: 'Web APIs, Entity Framework, async patterns',
      icon: '/images/dotnet-icon.svg',
    },
    {
      name: 'SQL Server',
      detail: 'Query optimization, stored procedures',
      icon: '/images/sqlserver-icon.svg',
    },
    {
      name: 'Azure DevOps',
      detail: 'CI/CD pipelines, automated deployments',
      icon: '/images/azuredevops-icon.svg',
    },
  ];

  const projects = [
    {
      title: 'Lenuvio Business Website',
      description:
        'Professional business website showcasing modern web development practices. Built with Next.js 15, featuring responsive design, optimized performance, and clean UI.',
      image: '/images/lenuvio-screenshot.png',
      github: '',
      live: 'https://lenuv.io',
      accomplishments: [
        'Built with Next.js 15 App Router and Server Components',
        'Fully responsive design optimized for all device sizes',
        'Implemented modern web standards and SEO best practices',
        'Deployed on Vercel with global CDN for fast loading worldwide',
      ],
      tech: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      year: '2024',
      status: 'Live Production Website',
      featured: true,
    },
    {
      title: 'EchoForge AI Platform',
      description:
        'AI-powered personality modeling platform with secure user authentication. Features real-time AI analysis, modern gradient UI, and seamless user experience.',
      image: '/images/echoforge-screenshot.png',
      github: '',
      live: 'https://echoforge.lenuv.io',
      accomplishments: [
        'Integrated AI/ML capabilities for personality trait analysis',
        'Built secure JWT-based authentication system',
        'Created modern, gradient-based UI with smooth interactions',
        'Deployed live platform with user registration and analysis features',
      ],
      tech: [
        'Next.js 15',
        'React 18',
        'TypeScript',
        'AI/ML Integration',
        'Authentication',
      ],
      year: '2024',
      status: 'Live Beta Platform',
      featured: true,
    },
    {
      title: 'ComplianceViews Financial Platform',
      description:
        'Enterprise financial compliance platform for Viewpoint Partners. Primary developer responsible for full-stack development using Angular frontend and .NET backend.',
      image: '/placeholder.svg?height=200&width=400&text=Enterprise+Platform',
      github: '',
      live: '',
      accomplishments: [
        'Sole developer responsible for frontend and backend architecture',
        'Built comprehensive CI/CD pipeline using Azure DevOps',
        'Implemented performance optimizations and caching strategies',
        'Developed local development environment with API routing',
      ],
      tech: ['Angular', 'C# .NET', 'SQL Server', 'Azure DevOps'],
      year: '2020-Present',
      status: 'Internal Enterprise Application',
      nda: true,
      featured: false,
    },
  ];

  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'Viewpoint Partners',
      location: 'Raleigh, NC',
      period: '2020 - Present',
      responsibilities: [
        'Primary developer for ComplianceViews financial compliance platform',
        'Built and maintained Angular frontend with .NET backend architecture',
        'Established CI/CD pipeline using Azure DevOps for automated deployments',
        'Handle all aspects of development from database design to user interface',
      ],
      current: true,
    },
    {
      title: 'Software Engineer',
      company: 'Sharptop',
      location: 'Remote',
      period: '2017 - 2020',
      responsibilities: [
        'Maintained AWS-hosted applications using Groovy and Grails framework',
        'Managed EC2 instance scaling and production monitoring',
        'Developed RESTful APIs and service-oriented architecture components',
        'Collaborated with cross-functional teams using Agile development practices',
      ],
      current: false,
    },
    {
      title: 'Electronics Technician',
      company: 'U.S. Navy',
      location: 'Various Deployments',
      period: '2011 - 2015',
      responsibilities: [
        'Maintained and operated complex radar and communications systems',
        'Performed advanced troubleshooting and repair procedures under pressure',
        'Led technical teams in high-stakes operational environments',
        'Ensured critical system reliability during deployments and operations',
      ],
      current: false,
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Liberty University',
      year: '2019',
    },
    {
      degree: 'Independent Research - AI-Powered Developer Tools',
      school: 'Lenuvio (Founder)',
      year: '2024 - Present',
    },
  ];

  // Separate featured and other projects
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      {/* Fixed CTA for Mobile */}
      <div className='fixed bottom-4 right-4 z-50 md:hidden'>
        <Button
          size='lg'
          className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold shadow-2xl'
          asChild>
          <a href='#contact'>{`Let's Talk`}</a>
        </Button>
      </div>

      {/* Navigation */}
      <nav className='border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-40'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-4 sm:py-6'>
            <div className='text-xl sm:text-2xl font-bold text-green-400'>
              {personalInfo.name}
            </div>

            <div className='hidden md:flex space-x-6 lg:space-x-8 items-center'>
              <a
                href='#home'
                className='text-gray-300 hover:text-green-400 transition-colors font-medium'>
                Home
              </a>
              <a
                href='#projects'
                className='text-gray-300 hover:text-blue-400 transition-colors font-medium'>
                Projects
              </a>
              <a
                href='#experience'
                className='text-gray-300 hover:text-amber-400 transition-colors font-medium'>
                Experience
              </a>
              <a
                href='#contact'
                className='text-gray-300 hover:text-green-400 transition-colors font-medium'>
                Contact
              </a>
              <Button
                size='sm'
                className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold'
                asChild>
                <a href='#contact'>{`Let's Talk`}</a>
              </Button>
            </div>

            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-green-400 hover:bg-green-400/10'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>

          {isMenuOpen && (
            <div className='md:hidden pb-4 border-t border-gray-800 mt-4 pt-4'>
              <div className='flex flex-col space-y-3'>
                <a
                  href='#home'
                  className='text-gray-300 hover:text-green-400 transition-colors font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a
                  href='#projects'
                  className='text-gray-300 hover:text-blue-400 transition-colors font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
                <a
                  href='#experience'
                  className='text-gray-300 hover:text-amber-400 transition-colors font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}>
                  Experience
                </a>
                <a
                  href='#contact'
                  className='text-gray-300 hover:text-green-400 transition-colors font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='py-16 sm:py-24 lg:py-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            <div className='space-y-6 sm:space-y-8'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='flex items-center space-x-2 text-green-400 font-medium'>
                  <MapPin className='h-4 w-4 sm:h-5 sm:w-5' />
                  <span className='text-sm sm:text-base'>
                    {personalInfo.location}
                  </span>
                </div>

                <div>
                  <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6'>
                    <span className='text-white'>Full-Stack Engineer</span>
                    <span className='block text-green-400 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2'>
                      Who Ships Fast
                    </span>
                  </h1>
                  <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium'>
                    Navy-trained problem solver. I write clean code, love code
                    reviews, and actually enjoy debugging complex problems.
                  </p>
                </div>

                <div className='bg-gray-900 border border-green-500/20 rounded-xl p-4 sm:p-6'>
                  <p className='text-base sm:text-lg text-gray-200 leading-relaxed'>
                    Software Engineer at{' '}
                    <span className='text-green-400 font-semibold'>
                      Viewpoint Partners
                    </span>
                    , building financial compliance tools for enterprise
                    clients. Over {yearsOfExperience()} years of experience
                    across modern web platforms and scalable systems. U.S. Navy
                    veteran with a technical background in electronics and
                    communications.
                  </p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <Button
                  size='lg'
                  className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4'>
                  <a href='#projects' className='flex items-center'>
                    See Live Projects
                    <ArrowRight className='ml-2 h-4 w-4 sm:h-5 sm:w-5' />
                  </a>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-950 bg-transparent font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4'
                  asChild>
                  <a
                    href={personalInfo.resume}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Download className='mr-2 h-4 w-4 sm:h-5 sm:w-5' />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='relative group transition duration-300'>
                <div className='max-w-[320px] w-full bg-gray-900 rounded-2xl overflow-hidden border-2 border-green-400 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-green-500/30'>
                  <Image
                    src={personalInfo.headshot || '/placeholder.svg'}
                    alt={`${personalInfo.name} - Software Engineer`}
                    className='w-full h-auto object-contain transition duration-300 group-hover:contrast-125 group-hover:brightness-105 group-hover:scale-110'
                    width={800}
                    height={800}
                    priority
                  />
                </div>

                {/* Corner indicators stay the same */}
                <div className='absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 transition duration-300 bg-green-400 rounded-full group-hover:scale-150'></div>
                <div className='absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 transition duration-300 bg-blue-400 rounded-full group-hover:scale-175'></div>
              </div>
            </div>
          </div>
          {/* Tech Stack */}
          <div className='mt-10 sm:mt-12 lg:mt-14'>
            <p className='text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider'>
              Technologies I Actually Use
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className='bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-green-400/50 transition-colors flex items-center gap-3'>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className='w-10 h-10 sm:w-12 sm:h-12 object-contain bg-white rounded-full p-1'
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className='font-semibold text-white text-sm'>
                      {tech.name}
                    </div>
                    <div className='text-gray-400 text-xs mt-1'>
                      {tech.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id='projects' className='py-16 sm:py-24 lg:py-32 bg-gray-900/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
              <span className='text-white'>Live</span>
              <span className='text-blue-400 ml-4'>Projects</span>
            </h2>
            <p className='text-gray-300 text-lg sm:text-xl'>
              Applications you can try right now
            </p>
          </div>

          <div className='space-y-12 sm:space-y-16'>
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className='bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-400/30 transition-colors'>
                <div className='grid lg:grid-cols-2 gap-0'>
                  <div className='aspect-video lg:aspect-auto relative'>
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={`${project.title} interface`}
                      className='object-cover'
                      fill
                      priority={index === 0}
                    />
                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity'>
                      <Button
                        className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-lg px-6 py-3'
                        asChild>
                        <a
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Eye className='mr-2 h-5 w-5' />
                          Try It Live
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className='p-6 sm:p-8 lg:p-10'>
                    <div className='space-y-4 sm:space-y-6'>
                      <div>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2'>
                          <span className='px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full border border-green-500/30 w-fit'>
                            {project.year} • LIVE
                          </span>
                          <Button
                            size='sm'
                            className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-sm w-fit'
                            asChild>
                            <a
                              href={project.live}
                              target='_blank'
                              rel='noopener noreferrer'>
                              <ExternalLink className='h-4 w-4 mr-2' />
                              Visit Site
                            </a>
                          </Button>
                        </div>

                        <h3 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white'>
                          {project.title}
                        </h3>
                        <p className='text-gray-200 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg'>
                          {project.description}
                        </p>

                        <ul className='space-y-2 sm:space-y-3 mb-4 sm:mb-6'>
                          {project.accomplishments.map(
                            (accomplishment, accIndex) => (
                              <li
                                key={accIndex}
                                className='text-gray-200 flex items-start text-sm sm:text-base'>
                                <span className='text-green-400 mr-2 sm:mr-3 mt-1 text-base sm:text-lg'>
                                  ▸
                                </span>
                                {accomplishment}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 text-gray-200 text-xs sm:text-sm font-medium rounded-lg border border-gray-700'>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Prominent CTA */}
                      <div className='pt-4 border-t border-gray-700'>
                        <div className='flex flex-col sm:flex-row gap-3'>
                          <Button
                            size='lg'
                            className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold flex-1 py-2 sm:py-3'
                            asChild>
                            <a
                              href={project.live}
                              target='_blank'
                              rel='noopener noreferrer'>
                              <Eye className='mr-2 h-4 w-4' />
                              Try This Live
                            </a>
                          </Button>
                          <Button
                            size='lg'
                            variant='outline'
                            className='border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-950 bg-transparent font-bold'
                            asChild>
                            <a href='#contact'>Discuss This Project</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className='mt-20'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-300'>
                Other Work
              </h3>
              <div className='space-y-8'>
                {otherProjects.map((project, index) => (
                  <Card
                    key={index}
                    className='bg-gray-900/50 border-gray-700 p-6 sm:p-8 hover:border-amber-400/30 transition-colors'>
                    <div className='flex items-start gap-4'>
                      {project.nda && (
                        <Lock className='h-6 w-6 text-amber-400 mt-1 flex-shrink-0' />
                      )}
                      <div className='flex-1'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2'>
                          <h4 className='text-xl font-bold text-white'>
                            {project.title}
                          </h4>
                          <div className='flex items-center gap-2'>
                            <span className='px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30'>
                              {project.year}
                            </span>
                            {project.nda && (
                              <span className='px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full'>
                                NDA Protected
                              </span>
                            )}
                          </div>
                        </div>
                        <p className='text-gray-300 mb-4 leading-relaxed'>
                          {project.description}
                        </p>
                        <ul className='space-y-1 mb-4'>
                          {project.accomplishments
                            .slice(0, 2)
                            .map((accomplishment, accIndex) => (
                              <li
                                key={accIndex}
                                className='text-gray-400 flex items-center text-sm mt-2'>
                                <span className='text-amber-400 mr-2'>▸</span>
                                {accomplishment}
                              </li>
                            ))}
                        </ul>
                        <div className='flex flex-wrap gap-2'>
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-16 sm:py-24 lg:py-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
              <span className='text-white'>Work</span>
              <span className='text-amber-400 ml-4'>Experience</span>
            </h2>
          </div>

          <div className='space-y-8 sm:space-y-12'>
            {workExperience.map((job, index) => (
              <div key={index} className='relative'>
                <div className='flex items-start gap-4 sm:gap-6'>
                  <div className='w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div className='flex-1 bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-amber-400/30 transition-colors'>
                    <div className='space-y-3 sm:space-y-4'>
                      <div>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 sm:mb-3 gap-2'>
                          <div>
                            <h3 className='text-xl sm:text-2xl font-bold text-white'>
                              {job.title}
                            </h3>
                            <p className='text-lg sm:text-xl text-gray-200 font-medium'>
                              {job.company} • {job.location}
                            </p>
                          </div>
                          <div className='flex items-center gap-2 sm:gap-3'>
                            <span className='px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700'>
                              {job.period}
                            </span>
                            {job.current && (
                              <span className='px-2 sm:px-3 py-1 bg-green-500 text-gray-950 text-xs sm:text-sm font-bold rounded-full'>
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <ul className='space-y-2 sm:space-y-3'>
                        {job.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className='text-gray-200 flex items-center text-sm sm:text-base'>
                              <span className='text-amber-400 mr-2 sm:mr-3 text-base sm:text-lg'>
                                ▸
                              </span>
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < workExperience.length - 1 && (
                  <div className='w-0.5 bg-gray-700 h-6 sm:h-8 ml-1.5 sm:ml-2 mt-4'></div>
                )}
              </div>
            ))}
          </div>

          {/* Education */}
          <div className='mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-gray-800'>
            <h3 className='text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center'>
              <span className='text-white'>Education &</span>
              <span className='text-blue-400 ml-2'>Certifications</span>
            </h3>
            <div className='grid md:grid-cols-2 gap-6 sm:gap-8'>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className='bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-blue-400/30 transition-colors'>
                  <div className='space-y-2 sm:space-y-3'>
                    <h4 className='text-lg sm:text-xl font-bold text-white'>
                      {edu.degree}
                    </h4>
                    <p className='text-base sm:text-lg font-semibold text-blue-400'>
                      {edu.school}
                    </p>
                    <p className='text-gray-400 font-medium text-sm sm:text-base'>
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 sm:py-24 lg:py-32 bg-gray-900/50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='text-white'>Impressed by what you see?</span>
            <span className='text-green-400 ml-4 block sm:inline mt-2 sm:mt-0'>
              {`Let's build something together.`}
            </span>
          </h2>
          <p className='text-gray-200 mb-12 sm:mb-16 max-w-2xl mx-auto text-lg sm:text-xl'>
            {`I'm available for software engineering opportunities. Let's discuss
            how I can help solve your technical challenges with proven results.`}
          </p>

          <div className='grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 max-w-2xl mx-auto'>
            <a
              href={`mailto:${personalInfo.email}`}
              className='block group bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-green-400/50 transition-colors'>
              <Mail className='h-10 w-10 sm:h-12 sm:w-12 mx-auto text-green-400 mb-3 sm:mb-4' />
              <h3 className='font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white'>
                Email
              </h3>
              <p className='text-gray-300 group-hover:text-green-400 transition-colors text-base sm:text-lg font-medium'>
                {personalInfo.email}
              </p>
            </a>

            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='block group bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-blue-400/50 transition-colors'>
              <Image
                src='/images/linkedin-icon.svg'
                alt='LinkedIn Icon'
                className='h-10 w-10 sm:h-16 sm:w-16 mx-auto text-blue-400 mb-3 sm:mb-4'
                width={40}
                height={40}
              />
              <h3 className='font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white'>
                LinkedIn
              </h3>
              <p className='text-gray-300 group-hover:text-blue-400 transition-colors text-base sm:text-lg font-medium'>
                Connect
              </p>
            </a>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center'>
            <Button
              size='lg'
              className='bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-lg px-8 py-4'
              asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className='mr-2 h-5 w-5' />
                {`Let's Talk`}
              </a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-950 bg-transparent font-bold text-lg px-8 py-4'
              asChild>
              <a
                href={personalInfo.resume}
                target='_blank'
                rel='noopener noreferrer'>
                <Download className='mr-2 h-5 w-5' />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 sm:py-12 border-t border-gray-800 bg-gray-950'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='font-bold text-xl sm:text-2xl text-green-400 mb-4 sm:mb-6 md:mb-0'>
              {personalInfo.name}
            </div>
            <div className='flex items-center space-x-6 sm:space-x-8'>
              <a
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-amber-400 transition-colors'
                aria-label='GitHub Profile'>
                <Image
                  src='/images/github-icon.svg'
                  alt='GitHub Icon'
                  className='h-4 w-4 sm:h-8 sm:w-8'
                  width={40}
                  height={40}
                />
              </a>
              <a
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-400 transition-colors'
                aria-label='LinkedIn Profile'>
                <Image
                  src='/images/linkedin-icon.svg'
                  alt='LinkedIn Icon'
                  className='h-6 w-6 sm:h-12 sm:w-12'
                  width={40}
                  height={40}
                />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className='text-gray-400 hover:text-green-400 transition-colors'
                aria-label='Send Email'>
                <Mail className='h-6 w-6 sm:h-10 sm:w-10' />
              </a>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base'>
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
