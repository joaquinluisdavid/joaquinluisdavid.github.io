import { ArrowDownToLine, ArrowUpRight, BadgeCheck, FileText } from 'lucide-react';
import type { Certificate } from '../../types/content';
import { ButtonLink } from '../ui/ButtonLink';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

interface CareerResourcesProps {
  cvFileName: string;
  certificates: Certificate[];
}

export function CareerResources({ cvFileName, certificates }: CareerResourcesProps) {
  const cvUrl = `${import.meta.env.BASE_URL}${cvFileName}`;

  return (
    <Section
      id="credentials"
      eyebrow="CV & credentials"
      title="More about my experience"
      description="View or download my current CV, and verify my AI certification through its issuer."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="text-accent"><FileText className="h-6 w-6" aria-hidden="true" /></span>
            <h3 className="mt-4 font-display text-2xl tracking-tight">Curriculum vitae</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A concise overview of my work experience, education, skills, and certificates.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <ButtonLink href={cvUrl} external>
                View CV <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Download PDF <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>

        {certificates.map((certificate, index) => (
          <Reveal key={certificate.url} delay={0.06 * (index + 1)} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <span className="text-accent"><BadgeCheck className="h-6 w-6" aria-hidden="true" /></span>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{certificate.issuer}</p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{certificate.title}</h3>
              <div className="mt-auto pt-6">
                <ButtonLink href={certificate.url} external>
                  Verify certificate <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}