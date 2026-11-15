import type { AiContribution, EngineeringHighlight, Project, TimelineEntry } from '../../types/content';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { ButtonLink } from '../ui/ButtonLink';

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

function Detail({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-wider text-accent">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-muted">{children}</dd>
    </div>
  );
}

export function Projects({
  projects,
  timeline,
  highlights,
  aiContributions,
}: {
  projects: Project[];
  timeline: TimelineEntry[];
  highlights: EngineeringHighlight[];
  aiContributions: AiContribution[];
}) {
  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title="Projects"
      description="Projects, experience, and practical examples of the work I can contribute to a product team."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article
              aria-labelledby={`project-${project.id}`}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.status}</p>
                  <h3 id={`project-${project.id}`} className="mt-3 font-display text-3xl tracking-tight">
                    {project.name}
                  </h3>
                </div>
              </div>
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={`${project.name} dashboard preview`}
                  className="mt-6 w-full rounded-xl border border-line object-cover"
                />
              )}
              <p className="mt-6 text-lg leading-relaxed text-fg">{project.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              {(project.demoUrl || project.appUrl || project.sourceUrl) && (
                <div className="mt-6 mb-6 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <ButtonLink href={project.demoUrl} external variant="primary">
                      Demo preview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  )}
                    {project.appUrl && (
                      <ButtonLink href={project.appUrl} external>
                        Live app <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </ButtonLink>
                    )}
                    {project.sourceUrl && (
                      <ButtonLink href={project.sourceUrl} external>
                        Source code <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </ButtonLink>
                    )}
                </div>
              )}
              <div className="mt-auto grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                <TagList label="Technologies" items={project.technologies} />
                <TagList label="Focus" items={project.focus} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div id="career-journey" className="scroll-mt-24 mt-20 border-t border-line pt-12">
        <h3 className="font-display text-3xl tracking-tight">Career journey</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted">
          How my frontend experience has grown through different product and delivery responsibilities.
        </p>
        <ol className="relative mt-10 space-y-10 border-l border-line pl-8 sm:pl-12">
          {timeline.map((entry) => (
            <li key={entry.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-0 flex h-9 w-9 -translate-x-[calc(50%+2rem)] items-center justify-center rounded-full border border-accent bg-bg text-accent sm:-translate-x-[calc(50%+3rem)]"
              >
                <Icon name={entry.icon} className="h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h4 className="font-display text-2xl tracking-tight">
                  <span className="text-accent">{entry.year}</span> — {entry.title}
                </h4>
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
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-20 border-t border-line pt-12">
        <h3 className="font-display text-3xl tracking-tight">Career highlights</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted">
          Examples of challenges I have helped address as part of a product team. Recent implementation work was AI-assisted.
        </p>
        <div className="mt-10 space-y-6">
          {highlights.map((highlight) => (
            <Reveal key={highlight.id}>
              <article
                aria-labelledby={`highlight-${highlight.id}`}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <h4 id={`highlight-${highlight.id}`} className="flex items-center gap-3 font-display text-2xl tracking-tight">
                  <span className="text-accent">
                    <Icon name={highlight.icon} className="h-6 w-6" />
                  </span>
                  {highlight.title}
                </h4>
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
          {aiContributions.map((contribution) => (
            <Reveal key={contribution.id}>
              <article
                aria-labelledby={`${contribution.id}-title`}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <h4 id={`${contribution.id}-title`} className="flex items-center gap-3 font-display text-2xl tracking-tight">
                  <span className="text-accent">
                    <Icon name={contribution.icon} className="h-6 w-6" />
                  </span>
                  {contribution.title}
                </h4>
                <p className="mt-5 text-sm leading-relaxed text-muted">{contribution.summary}</p>
                <dl className="mt-6">
                  <Detail label="My contribution">{contribution.contribution}</Detail>
                </dl>
                <div className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-2">
                  <TagList label="Technologies" items={contribution.technologies} />
                  <TagList label="What this shows" items={contribution.concepts} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
