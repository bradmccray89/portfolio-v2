import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { personalInfo, techStack, yearsOfExperience } from '@/lib/data';

export function Hero() {
  return (
    <section id='home' className='py-24 sm:py-32'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <p className='font-mono text-sm text-primary'>
                {personalInfo.location} · U.S. Navy veteran
              </p>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight'>
                <span className='text-foreground'>Senior Software Engineer</span>
                <span className='block text-muted-foreground text-2xl sm:text-3xl lg:text-4xl mt-3 font-normal'>
                  for enterprise platforms and AI-enabled systems.
                </span>
              </h1>

              <p className='text-lg text-muted-foreground leading-relaxed max-w-prose'>
                Over {yearsOfExperience()} years across SaaS and financial
                regulatory technology — designing, modernizing, and owning
                enterprise systems in .NET, Angular, and SQL, and putting AI to
                work in real production workflows. I still ship fast; I&apos;ve
                just been doing it long enough to make it look calm.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3'>
              <Button size='lg' asChild>
                <a href='#projects'>
                  View work
                  <ArrowRight className='h-4 w-4' />
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
          </div>

          <div className='flex justify-center lg:justify-end'>
            <div className='relative max-w-[240px] w-full'>
              <div
                className='absolute -inset-0 rounded-xl border border-border/50 translate-x-3 translate-y-3 -z-10'
                aria-hidden='true'
              />
              <div className='rounded-xl border border-border bg-card overflow-hidden'>
                <Image
                  src={personalInfo.headshot}
                  alt={`${personalInfo.name} — ${personalInfo.title}`}
                  className='w-full h-auto object-contain'
                  width={480}
                  height={480}
                  sizes='240px'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 sm:mt-20'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4'>
            Core stack
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className='bg-card border border-border rounded-lg p-3 hover:border-foreground/20 transition-colors flex items-center gap-3'>
                <span className='flex items-center justify-center w-9 h-9 shrink-0 rounded-md bg-secondary p-1.5'>
                  <Image
                    src={tech.icon}
                    alt=''
                    className='w-full h-full object-contain'
                    width={28}
                    height={28}
                  />
                </span>
                <div>
                  <div className='font-medium text-foreground text-sm'>
                    {tech.name}
                  </div>
                  <div className='text-muted-foreground text-xs mt-0.5'>
                    {tech.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
