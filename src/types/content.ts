export type IconKey =
  | 'layout'
  | 'server'
  | 'git'
  | 'sparkles'
  | 'shield'
  | 'flask'
  | 'database'
  | 'plug'
  | 'layers'
  | 'workflow';

export interface Profile {
  name: string;
  title: string;
  headline: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
  focusAreas: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: IconKey;
  items: string[];
  /** Shown beneath a skill group when context matters. */
  note?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  scope: string;
  summary: string;
  focus: string[];
  icon: IconKey;
}

export interface EngineeringHighlight {
  id: string;
  title: string;
  icon: IconKey;
  challenge: string;
  contribution: string;
  technologies: string[];
  concepts: string[];
}

export interface AiContribution {
  id: string;
  title: string;
  icon: IconKey;
  summary: string;
  examples: string[];
  context: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  url: string;
}

