import type { EngineeringHighlight } from '../../types/content';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

function Detail({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-wider text-accent">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-muted">{children}</dd>
    </div>
  );
}

function TagList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Highlights({ highlights }: { highlights: EngineeringHighlight[] }) {
  return (
    <Section
      id="work"
      eyebrow="Career highlights"
      title="Complex work, explained in practical terms"
      description="Examples of the challenges I have helped address as part of a product team. Recent 2026 implementation work was AI-assisted; I do not present it as entirely handwritten or as a solo-built product."
    >
      <div className="space-y-6">
        {highlights.map((highlight) => (
          <Reveal key={highlight.id}>
            <article
              aria-labelledby={`highlight-${highlight.id}`}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8"
            >
              <h3 id={`highlight-${highlight.id}`} className="flex items-center gap-3 font-display text-2xl tracking-tight">
                <span className="text-accent">
                  <Icon name={highlight.icon} className="h-6 w-6" />
                </span>
                {highlight.title}
              </h3>
              <dl className="mt-6 grid gap-6 md:grid-cols-2">
                <Detail label="The challenge">{highlight.challenge}</Detail>
                <Detail label="My contribution">{highlight.contribution}</Detail>
              </dl>
              <div className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-2">
                <TagList label="Technologies" items={highlight.technologies} />
                <TagList label="What this shows" items={highlight.concepts} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
