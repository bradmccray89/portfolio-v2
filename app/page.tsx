import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { SiteFooter } from '@/components/sections/site-footer';
import { SiteNav } from '@/components/sections/site-nav';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
