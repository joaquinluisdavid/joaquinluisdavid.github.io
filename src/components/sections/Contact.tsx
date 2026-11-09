import { Github, Linkedin, Mail } from 'lucide-react';
import type { Profile } from '../../types/content';
import { ButtonLink } from '../ui/ButtonLink';
import { Section } from '../ui/Section';

export function Contact({ profile }: { profile: Profile }) {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about what you’re building"
      description="I am open to opportunities where I can help shape useful products, connect services, add thoughtful AI features, and make everyday workflows more dependable."
    >
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`} variant="primary">
          <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
        </ButtonLink>
        <ButtonLink href={profile.github} external>
          <Github className="h-4 w-4" aria-hidden="true" /> GitHub
        </ButtonLink>
        <ButtonLink href={profile.linkedin} external>
          <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
        </ButtonLink>
      </div>
    </Section>
  );
}
