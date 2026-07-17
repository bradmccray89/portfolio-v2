export type ProjectStatus = 'live' | 'open-source' | 'nda';

export interface Project {
  title: string;
  summary: string;
  bullets: string[];
  tech: string[];
  year: string;
  status: ProjectStatus;
  links: { live?: string; github?: string };
  image?: string;
  nda?: boolean;
}

export interface TechItem {
  name: string;
  detail: string;
  icon: string;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  current: boolean;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export const yearsOfExperience = () => {
  const startYear = 2017;
  const startMonth = 5; // June (0-indexed)
  const now = new Date();
  let years = now.getFullYear() - startYear;
  if (now.getMonth() < startMonth) {
    years -= 1;
  }
  return years;
};

export const personalInfo = {
  name: 'Brandon McCray',
  title: 'Senior Software Engineer',
  location: 'Raleigh, NC',
  email: 'bradmccray89@gmail.com',
  linkedin: 'https://linkedin.com/in/brandon-mccray-8b1b65a9/',
  github: 'https://github.com/bradmccray89',
  resume: '/brandon-mccray-resume.pdf',
  headshot: '/images/headshot.png',
};

export const techStack: TechItem[] = [
  {
    name: 'C# .NET',
    detail: 'Web APIs, Entity Framework, async patterns',
    icon: '/images/dotnet-icon.svg',
  },
  {
    name: 'Angular',
    detail: 'Enterprise apps, component architecture',
    icon: '/images/angular-icon.svg',
  },
  {
    name: 'TypeScript',
    detail: 'Strict typing, advanced features, scalable code',
    icon: '/images/typescript-icon.svg',
  },
  {
    name: 'SQL Server',
    detail: 'Query optimization, stored procedures',
    icon: '/images/sqlserver-icon.svg',
  },
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
    name: 'Azure DevOps',
    detail: 'CI/CD pipelines, automated deployments',
    icon: '/images/azuredevops-icon.svg',
  },
];

export const projects: Project[] = [
  {
    title: 'Lenuvio Business Website',
    summary:
      'Professional business website showcasing modern web development practices. Built with Next.js 15, featuring responsive design, optimized performance, and clean UI.',
    bullets: [
      'Built with Next.js 15 App Router and Server Components',
      'Fully responsive design optimized for all device sizes',
      'Implemented modern web standards and SEO best practices',
      'Deployed on Vercel with global CDN for fast loading worldwide',
    ],
    tech: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    year: '2024',
    status: 'live',
    links: { live: 'https://lenuvio.vercel.app/' },
    image: '/images/lenuvio-screenshot.png',
  },
  {
    title: 'ai-cost-audit',
    summary:
      'AI context cost profiler and linter — know what every AI coding request costs before your developers send it.',
    bullets: [
      'TypeScript CLI runnable with a single npx command — zero-install adoption',
      'Profiles and lints AI context payloads with per-request and per-day cost estimates',
      'Fully offline and deterministic — no API keys, no network calls',
      'Fails CI when the context baseline exceeds budget or grows too fast',
    ],
    tech: ['TypeScript', 'Node.js CLI', 'CI/CD'],
    year: '2026',
    status: 'open-source',
    links: { github: 'https://github.com/bradmccray89/ai-cost-audit' },
  },
  {
    title: 'Compliance Workflow Platform',
    summary:
      'Multi-tenant compliance workflow frontend modeling how regulated firms intake, review, and audit employee outside-business-activity disclosures.',
    bullets: [
      'Schema-driven intake forms rendered from configuration, not hardcoded per tenant',
      'Versioned review workflow with an append-only audit timeline',
      'Role-based access with a persona switcher demonstrating per-role views',
      'Operational dashboards for reviewers and compliance administrators',
    ],
    tech: ['Angular 22', 'TypeScript', 'RBAC', 'Multi-tenant'],
    year: '2026',
    status: 'open-source',
    links: { github: 'https://github.com/bradmccray89/crm-angular' },
  },
  {
    title: 'claude-workflow-kit',
    summary:
      'Shared Claude Code configuration kit that gives Angular and .NET teams a consistent, guard-railed AI development workflow.',
    bullets: [
      'Verification-gate stop hook that blocks task completion until checks pass',
      'Path-protection hook preventing agents from touching restricted files',
      'Session-context hook that loads repo conventions into every session',
      'Plan-first, verify, and docs skills standardizing the AI SDLC across repos',
    ],
    tech: ['Claude Code', 'Shell / Hooks', 'Angular', '.NET'],
    year: '2026',
    status: 'open-source',
    links: { github: 'https://github.com/bradmccray89/claude-sdlc-setup' },
  },
  {
    title: 'ComplianceViews Financial Platform',
    summary:
      'Financial compliance platform supporting risk management, regulatory reporting, audit trails, and client-facing workflows. Owned the full stack using Angular frontend and .NET backend.',
    bullets: [
      'Transformed a bundled internal add-on into a standalone revenue-generating product',
      'Helped scale adoption from ~300 to more than 4,000 users in under two years',
      'Reduced critical page-load times from over eight seconds to under one second',
      'Modernized legacy code and built a usable local development environment',
    ],
    tech: ['Angular', 'C# .NET', 'SQL Server', 'Azure DevOps'],
    year: '2020 – 2025',
    status: 'nda',
    links: {},
    nda: true,
  },
];

export const workExperience: Job[] = [
  {
    title: 'Software Engineer',
    company: 'IT Services and Consulting',
    location: 'Remote / Raleigh, NC',
    period: 'Dec 2025 - Present',
    responsibilities: [
      'Build and improve enterprise applications using Angular, .NET, C#, and SQL',
      'Apply AI and LLM capabilities to internal and customer-facing workflows',
      'Improve reliability of deployments and CI/CD without forcing platform rewrites',
      'Provide technical direction across architecture, code reviews, and mentoring',
    ],
    current: true,
  },
  {
    title: 'Software Engineer / Lead Developer',
    company: 'Viewpoint Partners',
    location: 'Raleigh, NC',
    period: '2020 - Dec 2025',
    responsibilities: [
      'Owned ComplianceViews, a financial compliance platform for risk management, regulatory reporting, and audit trails',
      'Transformed a bundled internal add-on into a standalone revenue product, scaling from ~300 to 4,000+ users in under two years',
      'Reduced critical page-load times from over eight seconds to under one second',
      'Built the full stack with Angular, .NET, C#, SQL Server, and Azure DevOps',
      'Led code reviews, mentored junior developers, and owned features from discovery through release',
    ],
    current: false,
  },
  {
    title: 'Software Engineer',
    company: 'Sharptop',
    location: 'Remote',
    period: '2017 - 2020',
    responsibilities: [
      'Maintained and extended AWS-hosted applications using Groovy and Grails',
      'Managed EC2-based infrastructure, monitoring, scaling, and operational support',
      'Contributed to service-oriented application components and internal tooling',
      'Supported custom client systems in a small cross-functional consulting team',
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

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Liberty University',
    year: '2019',
  },
  {
    degree: 'Microsoft Azure Fundamentals',
    school: 'Microsoft',
    year: 'Certified',
  },
];
