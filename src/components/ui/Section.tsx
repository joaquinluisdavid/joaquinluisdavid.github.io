import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

/** Landmark section with a labelled heading; `scroll-mt` clears the sticky header. */
export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-16 border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p> : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
