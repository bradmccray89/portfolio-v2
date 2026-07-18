import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { personalInfo } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer className='border-t border-border py-8'>
      <div className='max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()}{' '}
          <span className='text-foreground'>{personalInfo.name}</span>
        </p>
        <div className='flex items-center gap-5'>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-muted-foreground hover:text-foreground transition-colors'>
            <GithubIcon className='h-5 w-5' />
          </a>
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-muted-foreground hover:text-foreground transition-colors'>
            <LinkedinIcon className='h-5 w-5' />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label='Email'
            className='text-muted-foreground hover:text-foreground transition-colors'>
            <Mail className='h-5 w-5' />
          </a>
        </div>
      </div>
    </footer>
  );
}
