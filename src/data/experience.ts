import type { TimelineEntry } from '../types/content';

// Scope labels describe the breadth of the work; they are not job titles.
export const timeline: TimelineEntry[] = [
  {
    year: '2023',
    title: 'Building Better Application Experiences',
    scope: 'Product features and quality',
    summary:
      'Began by improving how people use a complex web application: refining interface behavior, fixing navigation and component issues, and building a stronger safety net with automated UI tests.',
    focus: [
      'Cypress coverage for important user workflows',
      'Interface improvements and issue resolution',
      'Navigation and reusable component behavior',
      'Foundations for consistent product testing',
    ],
    icon: 'flask',
  },
  {
    year: '2024',
    title: 'Expanding Product Capabilities',
    scope: 'Applications and services',
    summary:
      'Took on broader application features, improving editing, reusable components, and deployment workflows while making complex interactions easier to maintain.',
    focus: [
      'Interactive application and component experiences',
      'Organizing pages, resources, and reusable elements',
      'Reliable change history and live previews',
      'Deployment and release improvements',
      'Test coverage, maintainability, and dependency updates',
    ],
    icon: 'layout',
  },
  {
    year: '2025',
    title: 'Connecting Products and Adding Intelligence',
    scope: 'Cross-platform capabilities',
    summary:
      'Worked across application and service boundaries to add secure access, external service connections, source-control workflows, and AI-assisted product capabilities.',
    focus: [
      'Secure access and authorization features',
      'GitHub, GitLab, and Bitbucket connections',
      'Repository, branch, and deployment workflows',
      'AI-assisted technical support and OpenAI API integration',
      'Features spanning user experience, services, and external platforms',
    ],
    icon: 'plug',
  },
  {
    year: '2026',
    title: 'Making Complex Workflows More Dependable',
    scope: 'Reliability and AI-assisted delivery',
    summary:
      'Focused on dependable integrations and data: handling failures, conflicting changes, and uncertain outcomes. This year’s implementation work was AI-assisted; coding tools helped develop changes and tests, with outcomes checked through targeted validation.',
    focus: [
      'More recoverable connections to external providers',
      'Consistent data when people or processes make changes at the same time',
      'Safer repository updates and clearer conflict handling',
      'Better handling of provider errors, cancellations, and retries',
      'Diagnostics that help explain and recover interrupted operations',
      'OpenAI Responses API capabilities',
      'Faster feedback from automated test pipelines',
      'AI-assisted implementation with test-based validation',
    ],
    icon: 'shield',
  },
];
