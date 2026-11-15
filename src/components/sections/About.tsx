import { Section } from '../ui/Section';

export function About({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Section id="about" eyebrow="About" title="Building and improving web applications">
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
