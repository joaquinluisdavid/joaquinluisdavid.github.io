import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    items: ['AngularJS', 'TypeScript', 'JavaScript', 'React', 'HTML', 'CSS'],
    note: 'React is a recent focus, learned through this portfolio project rather than professional work.',
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    items: ['Node.js', 'LoopBack', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    items: ['MongoDB'],
  },
  {
    id: 'integrations',
    title: 'AI and Integrations',
    icon: 'plug',
    items: ['OpenAI API', 'OpenAI Responses API', 'GitHub', 'GitLab', 'Bitbucket', 'GitHub Copilot'],
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: 'flask',
    items: ['Jest', 'Mocha', 'Cypress', 'Playwright'],
  },
  {
    id: 'product-delivery',
    title: 'Product & Delivery',
    icon: 'layers',
    items: [
      'Connecting APIs and Services',
      'Secure Access and Permissions',
      'Git Provider Connections',
      'Keeping Shared Data in Sync',
      'Handling Changes Made at the Same Time',
      'CI/CD and Release Workflows',
      'Automated Quality Checks',
      'Reliable Service Workflows',
    ],
  },
];
