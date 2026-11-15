import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'planurse',
    name: 'Planurse',
    status: 'Personal product · 2026 · AI-assisted implementation',
    summary: 'A private planning and learning workspace for nursing students and registered nurses.',
    description:
      'Planurse brings responsibilities, reminders, account onboarding, calendar planning, and notebook entries into one calm workflow. It is designed for general learning organization, not clinical documentation or patient records.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Vitest', 'Tailwind CSS'],
    focus: ['Privacy-aware workflows', 'Accessible forms', 'Account-scoped data', 'Responsive product design'],
    demoUrl: 'https://joaquinluisdavid.github.io/planurse/demo',
    appUrl: 'https://joaquinluisdavid.github.io/planurse/',
    sourceUrl: 'https://github.com/joaquinluisdavid/planurse',
  },
];
