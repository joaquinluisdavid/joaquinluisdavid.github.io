import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'planurse',
    name: 'Planurse',
    status: 'Personal project · 2026',
    summary: 'A pet project showcasing private planning and learning workspace for nursing students and registered nurses.',
    description:
      'Planurse brings responsibilities, reminders, account onboarding, calendar planning, and notebook entries into one workflow. It is designed for general learning organization, not clinical documentation or patient records.',
    imageUrl: `${import.meta.env.BASE_URL}planurse-dashboard.png`,
    technologies: ['React', 'TypeScript', 'Supabase', 'Vitest', 'Tailwind CSS'],
    focus: ['Privacy-aware workflows', 'Accessible forms', 'Account-scoped data', 'Responsive product design'],
    demoUrl: 'https://joaquinluisdavid.github.io/planurse/demo',
    appUrl: 'https://joaquinluisdavid.github.io/planurse/',
    sourceUrl: 'https://github.com/joaquinluisdavid/planurse',
  },
  {
    id: 'bao-and-co',
    name: 'Bao & Co.',
    status: 'Demo project · 2026',
    summary: 'A polished marketing website created for Bao & Co., a bao food stall serving the Angeles City community.',
    description:
      'The site presents Bao & Co.’s menu, story, gallery, promotions, and location in a warm, food-focused experience designed to help customers discover and visit the business.',
    imageUrl: `${import.meta.env.BASE_URL}bao-and-co-homepage.png`,
    technologies: ['React', 'TypeScript', 'Vite', 'Responsive design'],
    focus: ['Brand-led visual design', 'Menu discovery', 'Responsive layouts', 'Business storytelling'],
    appUrl: 'https://baoandcoph.vercel.app',
    sourceUrl: 'https://github.com/joaquinluisdavid/baoandcoph',
  },
];
