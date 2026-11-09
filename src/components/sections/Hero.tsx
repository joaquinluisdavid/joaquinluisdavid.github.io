import { ArrowRight, Github, Linkedin } from 'lucide-react';
import portrait from '../../assets/profile-portrait.png';
import type { Profile } from '../../types/content';
import { ButtonLink } from '../ui/ButtonLink';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" aria-labelledby="hero-heading" className="py-20 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{profile.title}</p>
          <h1 id="hero-heading" className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <p className="mt-6 text-sm text-muted">
            <span className="text-fg">{profile.name}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#work" variant="primary">
              View My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#experience">Explore My Experience</ButtonLink>
            <ButtonLink href="#contact">Contact Me</ButtonLink>
          </div>

          <div className="mt-6 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2">
              <img
                src={portrait}
                alt="Portrait of Joaquin Luis M. David"
                width="1012"
                height="1020"
                className="aspect-[4/5] w-full rounded-xl object-cover object-[center_30%]"
              />
            </div>
            <aside aria-label="Current focus" className="mt-4 rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Current focus</p>
              <ul className="mt-5 space-y-4">
                {profile.focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span className="text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
