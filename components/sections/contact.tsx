import { Download, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { personalInfo } from '@/lib/data';

export function Contact() {
  return (
    <section id='contact' className='py-24 sm:py-32 border-t border-border'>
      <div className='max-w-5xl mx-auto px-6'>
        <SectionHeading
          eyebrow='03 — Contact'
          title="Let's build something."
          subtitle='Open to senior engineering opportunities and interesting technical problems.'
        />

        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <Button size='lg' asChild>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className='h-4 w-4' />
              Email me
            </a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'>
              <Linkedin className='h-4 w-4' />
              LinkedIn
            </a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a
              href={personalInfo.resume}
              target='_blank'
              rel='noopener noreferrer'>
              <Download className='h-4 w-4' />
              Resume
            </a>
          </Button>
        </div>

        <p className='mt-6'>
          <a
            href={`mailto:${personalInfo.email}`}
            className='font-mono text-sm text-muted-foreground hover:text-primary transition-colors'>
            {personalInfo.email}
          </a>
        </p>
      </div>
    </section>
  );
}
