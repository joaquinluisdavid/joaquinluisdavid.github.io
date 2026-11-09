import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  /** Open in a new tab (for off-site links). */
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:opacity-90',
  secondary: 'border border-line text-fg hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-fg',
};

export function ButtonLink({ href, variant = 'secondary', children, external = false }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
