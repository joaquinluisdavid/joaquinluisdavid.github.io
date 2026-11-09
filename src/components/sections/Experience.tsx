import type { TimelineEntry } from '../../types/content';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

// Node size grows with each year to make the progression in scope visible.
const nodeSizes = ['h-9 w-9', 'h-10 w-10', 'h-11 w-11', 'h-12 w-12'];

export function Experience({ entries }: { entries: TimelineEntry[] }) {
  return (
    <Section
      id="experience"
      eyebrow="Career journey"
      title="A growing role in shaping complete products"
      description="From interface details and user workflows to connected services and dependable systems, my work has broadened over time."
    >
      <ol className="relative space-y-12 border-l border-line pl-8 sm:pl-12">
        {entries.map((entry, index) => (
          <li key={entry.year} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-0 flex -translate-x-[calc(50%+2rem)] items-center justify-center rounded-full border border-accent bg-bg text-accent sm:-translate-x-[calc(50%+3rem)] ${
                nodeSizes[index] ?? nodeSizes[0]
              }`}
            >
              <Icon name={entry.icon} className="h-4 w-4" />
            </span>
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl tracking-tight">
                  <span className="text-accent">{entry.year}</span> — {entry.title}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-muted">{entry.scope}</span>
              </div>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{entry.summary}</p>
              <ul className="mt-4 grid max-w-3xl gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                {entry.focus.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
