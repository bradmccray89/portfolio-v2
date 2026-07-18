import { ExternalLink, Lock } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live') {
    return (
      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/30'>
        <span className='w-1.5 h-1.5 rounded-full bg-primary' />
        Live
      </span>
    );
  }
  if (status === 'open-source') {
    return (
      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border'>
        <GithubIcon className='h-3 w-3' />
        Open source
      </span>
    );
  }
  return (
    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border'>
      <Lock className='h-3 w-3' />
      NDA · Enterprise
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className='bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-foreground/20 transition-colors'>
      {project.image && (
        <a
          href={project.links.live}
          target='_blank'
          rel='noopener noreferrer'
          className='block aspect-video relative rounded-lg border border-border overflow-hidden mb-6'>
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            className='object-cover object-top'
            fill
            sizes='(max-width: 1024px) 100vw, 896px'
          />
        </a>
      )}

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4'>
        <h3 className='text-xl sm:text-2xl font-semibold text-foreground'>
          {project.title}
        </h3>
        <div className='flex items-center gap-3'>
          <span className='font-mono text-xs text-muted-foreground'>
            {project.year}
          </span>
          <StatusBadge status={project.status} />
        </div>
      </div>

      <p className='text-muted-foreground leading-relaxed mb-5'>
        {project.summary}
      </p>

      <ul className='space-y-2 mb-6'>
        {project.bullets.map((bullet, i) => (
          <li
            key={i}
            className='flex items-start gap-3 text-sm sm:text-base text-foreground/90'>
            <span className='text-primary/70 mt-0.5 select-none'>–</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className='flex flex-wrap gap-2 mb-6'>
        {project.tech.map((tech) => (
          <span
            key={tech}
            className='px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground border border-border'>
            {tech}
          </span>
        ))}
      </div>

      {project.status === 'nda' ? (
        <p className='text-sm text-muted-foreground italic'>
          Proprietary platform — details available in conversation.
        </p>
      ) : (
        <div className='flex flex-wrap gap-3'>
          {project.links.live && (
            <Button size='sm' asChild>
              <a
                href={project.links.live}
                target='_blank'
                rel='noopener noreferrer'>
                <ExternalLink className='h-4 w-4' />
                Visit site
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button size='sm' variant='outline' asChild>
              <a
                href={project.links.github}
                target='_blank'
                rel='noopener noreferrer'>
                <GithubIcon className='h-4 w-4' />
                View on GitHub
              </a>
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
