import type { AiContribution } from '../types/content';

export const aiContributions: AiContribution[] = [
  {
    id: 'ai-product-features',
    title: 'AI features in products',
    icon: 'sparkles',
    summary:
      'AI capabilities were integrated into application workflows rather than treated as a standalone model-building exercise.',
    contribution:
      'Contributed to AI-assisted technical-support features and OpenAI integrations, including structured responses, tool validation and routing, conversation history, and safe handling of provider outcomes.',
    technologies: ['OpenAI API', 'OpenAI Responses API', 'TypeScript', 'Node.js'],
    concepts: ['AI product integration', 'Structured responses', 'Tool routing', 'Conversation context'],
  },
  {
    id: 'ai-assisted-development',
    title: 'AI-assisted development',
    icon: 'workflow',
    summary:
      'For recent 2026 work, AI coding tools assisted with development changes and tests. The work was collaborative with AI—not wholly handwritten and not autonomous.',
    contribution:
      'Used AI coding tools while investigating implementation tasks, reviewing suggested changes against the product context, and validating the result with focused tests, type checks, and builds.',
    technologies: ['AI coding tools', 'TypeScript', 'Jest', 'Vitest', 'Playwright'],
    concepts: ['Human-directed development', 'Iterative validation', 'Regression prevention', 'Transparent delivery'],
  },
];