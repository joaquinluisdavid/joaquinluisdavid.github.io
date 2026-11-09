import type { EngineeringHighlight } from '../types/content';

export const highlights: EngineeringHighlight[] = [
  {
    id: 'scm',
    title: 'Connecting Products to External Platforms',
    icon: 'git',
    challenge:
      'Connecting a product to several services means handling different rules, access requirements, and outages without making the overall experience confusing or fragile.',
    contribution:
      'Contributed to GitHub, GitLab, and Bitbucket connections, including repository and branch features, sign-in and reconnection, and more predictable handling of service responses and changes.',
    technologies: ['TypeScript', 'Node.js', 'LoopBack', 'GitHub / GitLab / Bitbucket APIs'],
    concepts: ['Third-party integrations', 'Access and recovery', 'Consistent updates', 'Clear failure handling'],
  },
  {
    id: 'ai',
    title: 'Bringing AI into Applications',
    icon: 'sparkles',
    challenge:
      'AI features need to fit real user workflows. Their responses must be useful to the application, tools must be used safely, and conversation context should remain coherent.',
    contribution:
      'Contributed to an AI-assisted support experience and OpenAI API connections, including structured responses, tool validation and routing, and conversation-history handling.',
    technologies: ['OpenAI API', 'OpenAI Responses API', 'TypeScript', 'Node.js'],
    concepts: ['AI application features', 'Structured responses', 'Tool integration', 'Conversation context'],
  },
  {
    id: 'editing',
    title: 'Creating Flexible Application Experiences',
    icon: 'layout',
    challenge:
      'Complex applications need interfaces that help people organize content, adjust settings, preview changes, and keep working without losing progress.',
    contribution:
      'Built and maintained interactive editing workflows, reusable components, configuration forms, content suggestions, previews, automatic saving, and change history.',
    technologies: ['AngularJS', 'TypeScript', 'HTML', 'CSS'],
    concepts: ['User-centered interfaces', 'Reusable components', 'Change history', 'Live previews'],
  },
  {
    id: 'state',
    title: 'Making Shared Workflows More Dependable',
    icon: 'shield',
    challenge:
      'Shared resources and remote services make it possible for updates to conflict or for a request’s outcome to be unclear. The product needs to preserve work and recover safely.',
    contribution:
      'Contributed to safer shared updates, conflict handling, recovery when service outcomes are uncertain, coordinated data changes, and diagnostics for interrupted workflows. Recent implementation was AI-assisted and validated with targeted tests.',
    technologies: ['TypeScript', 'MongoDB', 'Node.js', 'WebSockets'],
    concepts: ['Data consistency', 'Concurrent changes', 'Recovery', 'Operational visibility'],
  },
  {
    id: 'testing',
    title: 'Improving Product Quality and Delivery',
    icon: 'flask',
    challenge:
      'Teams need confidence that changes work across real user journeys, connected services, and data workflows—not just in isolated examples.',
    contribution:
      'Added and maintained automated checks at several levels, investigated failing tests, improved pipeline feedback, and tested behavior involving transactions and simultaneous updates.',
    technologies: ['Jest', 'Mocha', 'Cypress', 'Playwright', 'MongoDB'],
    concepts: ['Regression prevention', 'End-to-end quality', 'Faster feedback', 'Realistic data testing'],
  },
];
