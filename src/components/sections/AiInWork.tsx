import type { AiContribution } from '../../types/content';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function AiInWork({ contributions }: { contributions: AiContribution[] }) {
  return (
    <Section
      id="ai"
      eyebrow="AI in my work"
      title="Both building with AI and working with AI"
      description="I have contributed to AI-powered product features, and I also use AI coding tools to assist development. These are different kinds of experience, and I describe them separately."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {contributions.map((contribution, index) => (
          <Reveal key={contribution.id} delay={index * 0.06} className="h-full">
            <article
              aria-labelledby={`${contribution.id}-title`}
              className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <h3 id={`${contribution.id}-title`} className="flex items-center gap-3 font-display text-2xl tracking-tight">
                <span className="text-accent">
                  <Icon name={contribution.icon} className="h-6 w-6" />
                </span>
                {contribution.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted">{contribution.summary}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{contribution.contribution}</p>
              <div className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">Technologies</p>
                  <ul className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
                    {contribution.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">What this shows</p>
                  <ul className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
                    {contribution.concepts.map((concept) => <li key={concept}>{concept}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}