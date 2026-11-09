import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Theme } from '../../hooks/useTheme';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'What I bring' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai', label: 'AI in my work' },
  { href: '#credentials', label: 'CV & credentials' },
  { href: '#work', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  name: string;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ name, theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label={`${name} — home`} className="inline-flex items-center gap-3 font-display text-lg tracking-tight">
          <img
            src={`${import.meta.env.BASE_URL}jld-header-mark.png`}
            alt=""
            aria-hidden="true"
            width="40"
            height="40"
            className="h-10 w-10 rounded-md border border-line bg-black object-contain"
          />
          <span>{name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted"
          >
            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="py-3 text-sm text-muted hover:text-fg">
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
