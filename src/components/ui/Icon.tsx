import {
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  LayoutDashboard,
  Plug,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { IconKey } from '../../types/content';

const icons: Record<IconKey, LucideIcon> = {
  layout: LayoutDashboard,
  server: Server,
  git: GitBranch,
  sparkles: Sparkles,
  shield: ShieldCheck,
  flask: FlaskConical,
  database: Database,
  plug: Plug,
  layers: Layers,
  workflow: Workflow,
};

interface IconProps {
  name: IconKey;
  className?: string;
}

/** Decorative icon resolved from a serializable key so data files stay free of JSX. */
export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
