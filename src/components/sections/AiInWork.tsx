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
              <ul className="mt-5 space-y-3">
                {contribution.examples.map((example) => (
                  <li key={example} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">{contribution.context}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}