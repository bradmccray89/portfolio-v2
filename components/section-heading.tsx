interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className='mb-12 sm:mb-16'>
      <p className='font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3'>
        {eyebrow}
      </p>
      <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-foreground'>
        {title}
      </h2>
      {subtitle && (
        <p className='mt-3 text-base sm:text-lg text-muted-foreground max-w-prose'>
          {subtitle}
        </p>
      )}
    </div>
  );
}
