'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex justify-between items-center py-4'>
          <a href='#home' className='flex items-baseline gap-2 min-w-0'>
            <span className='font-semibold text-foreground whitespace-nowrap'>
              {personalInfo.name}
            </span>
            <span className='hidden sm:inline font-mono text-xs text-muted-foreground truncate'>
              — {personalInfo.title}
            </span>
          </a>

          <div className='hidden md:flex items-center gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
                {link.label}
              </a>
            ))}
            <Button size='sm' asChild>
              <a href='#contact'>Get in touch</a>
            </Button>
          </div>

          <button
            type='button'
            className='md:hidden text-muted-foreground hover:text-foreground transition-colors'
            aria-expanded={isMenuOpen}
            aria-label='Toggle navigation menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden pb-4 flex flex-col gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-foreground transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
