import { SectionHeading } from '@/components/section-heading';
import { education, workExperience } from '@/lib/data';

export function Experience() {
  return (
    <section id='experience' className='py-24 sm:py-32 border-t border-border'>
      <div className='max-w-5xl mx-auto px-6'>
        <SectionHeading eyebrow='02 — Experience' title='Experience' />

        <div className='relative border-l border-border pl-8 space-y-12'>
          {workExperience.map((job) => (
            <div key={`${job.company}-${job.period}`} className='relative'>
              <span
                className={`absolute -left-[37px] top-2 w-2 h-2 rounded-full ${
                  job.current ? 'bg-primary' : 'bg-border'
                }`}
                aria-hidden='true'
              />
              <div className='flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2 mb-3'>
                <div>
                  <h3 className='text-xl font-semibold text-foreground'>
                    {job.title}
                  </h3>
                  <p className='text-muted-foreground'>
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className='flex items-center gap-3 shrink-0'>
                  <span className='font-mono text-xs text-muted-foreground'>
                    {job.period}
                  </span>
                  {job.current && (
                    <span className='px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/30'>
                      Current
                    </span>
                  )}
                </div>
              </div>
              <ul className='space-y-2'>
                {job.responsibilities.map((responsibility, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-sm sm:text-base text-foreground/90'>
                    <span className='text-primary/70 mt-0.5 select-none'>–</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-20'>
          <h3 className='text-2xl font-semibold text-foreground mb-8'>
            Education &amp; Certifications
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className='bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors'>
                <h4 className='text-lg font-semibold text-foreground'>
                  {edu.degree}
                </h4>
                <p className='text-muted-foreground mt-1'>{edu.school}</p>
                <p className='font-mono text-xs text-muted-foreground mt-2'>
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
