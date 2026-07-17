import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id='projects' className='py-24 sm:py-32 border-t border-border'>
      <div className='max-w-5xl mx-auto px-6'>
        <SectionHeading
          eyebrow='01 — Work'
          title='Featured Work'
          subtitle='Live products, open source, and enterprise platforms.'
        />
        <div className='space-y-6'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
