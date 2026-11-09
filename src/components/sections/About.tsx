import { Section } from '../ui/Section';

export function About({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Section id="about" eyebrow="About" title="Building products across the whole experience">
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
