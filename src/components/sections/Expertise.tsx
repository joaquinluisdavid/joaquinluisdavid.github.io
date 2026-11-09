import type { SkillGroup } from '../../types/content';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Expertise({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section
      id="expertise"
      eyebrow="What I bring"
      title="A broad toolkit for making digital products"
      description="From shaping the interface to connecting services and checking the details, I work across the layers needed to deliver a complete experience."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <li key={group.id} className={group.id === 'product-delivery' ? 'sm:col-span-2 lg:col-span-3' : undefined}>
            <Reveal delay={index * 0.05} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                <h3 className="flex items-center gap-2.5 font-medium">
                  <span className="text-accent">
                    <Icon name={group.icon} />
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
                {group.note ? <p className="mt-4 text-xs leading-relaxed text-muted">{group.note}</p> : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
