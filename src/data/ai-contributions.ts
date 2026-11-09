import type { AiContribution } from '../types/content';

export const aiContributions: AiContribution[] = [
  {
    id: 'ai-product-features',
    title: 'AI features in products',
    icon: 'sparkles',
    summary:
      'Contributed to bringing AI capabilities into software experiences, connecting model APIs to practical product workflows rather than building or training models.',
    examples: [
      'AI-assisted technical-support features',
      'OpenAI API and Responses API integration',
      'Structured responses and tool validation/routing',
      'Conversation history and response handling',
    ],
    context: 'Product contribution: integrating AI capabilities for application users.',
  },
  {
    id: 'ai-assisted-development',
    title: 'AI-assisted development',
    icon: 'workflow',
    summary:
      'For recent 2026 work, AI coding tools assisted with development changes and tests. The work was collaborative with AI—not wholly handwritten and not autonomous.',
    examples: [
      'Used AI assistance while working through implementation tasks',
      'Reviewed and refined suggested changes against the task context',
      'Ran focused tests, type checks, and builds to validate results',
    ],
    context: 'Development practice: AI assisted the workflow; I remained responsible for direction and validation.',
  },
];