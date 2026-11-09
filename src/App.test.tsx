import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { timeline } from './data/experience';
import { skillGroups } from './data/expertise';
import { highlights } from './data/highlights';
import { aiContributions } from './data/ai-contributions';
import { certificates, cvFileName } from './data/career-resources';
import { aboutParagraphs, profile } from './data/profile';

describe('App', () => {
  it('renders the hero headline and primary calls to action', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: profile.headline })).toBeInTheDocument();
    expect(document.querySelector('header img')?.getAttribute('src')).toMatch(/jld-header-mark\.png$/);
    expect(screen.getByRole('img', { name: /portrait of joaquin luis m\. david/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn profile' })).toHaveAttribute('href', profile.linkedin);
    expect(profile.linkedin).toMatch(/^https:\/\//);
    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: /explore my experience/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute('href', '#contact');
  });

  it('renders every section as a labelled landmark', () => {
    render(<App />);
    for (const name of [/building products across the whole experience/i, /broad toolkit/i, /shaping complete products/i, /both building with AI/i, /more about my experience/i, /complex work/i, /what you’re building/i]) {
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    }
  });

  it('links the current CV and certificate verification page', () => {
    render(<App />);
    const section = screen.getByRole('region', { name: /more about my experience/i });
    const cvHref = `/${cvFileName}`;

    expect(within(section).getByRole('link', { name: /view cv/i })).toHaveAttribute('href', cvHref);
    expect(within(section).getByRole('link', { name: /download pdf/i })).toHaveAttribute('download');
    expect(within(section).getByRole('link', { name: /verify certificate/i })).toHaveAttribute(
      'href',
      certificates[0]?.url,
    );
  });

  it('distinguishes AI product contributions from AI-assisted development', () => {
    render(<App />);
    const section = screen.getByRole('region', { name: /both building with AI/i });
    expect(within(section).getByRole('heading', { name: 'AI features in products' })).toBeInTheDocument();
    expect(within(section).getByRole('heading', { name: 'AI-assisted development' })).toBeInTheDocument();
    expect(aiContributions[1]?.summary).toMatch(/not autonomous/i);
  });

  it('renders one timeline entry per year in order', () => {
    render(<App />);
    const section = screen.getByRole('region', { name: /shaping complete products/i });
    const items = within(section).getAllByRole('heading', { level: 3 });
    expect(items.map((item) => item.textContent?.slice(0, 4))).toEqual(['2023', '2024', '2025', '2026']);
  });

  it('renders all five engineering highlights with their detail sections', () => {
    render(<App />);
    expect(highlights).toHaveLength(5);
    for (const highlight of highlights) {
      expect(screen.getByRole('article', { name: highlight.title })).toBeInTheDocument();
    }
  });

  it('starts in light mode, toggles to dark, and persists the choice', async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(document.documentElement).not.toHaveClass('dark');

    await user.click(screen.getAllByRole('button', { name: /switch to dark theme/i })[0]!);
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('opens and closes the mobile navigation', async () => {
    render(<App />);
    const user = userEvent.setup();
    const toggle = screen.getByRole('button', { name: /open menu/i });

    await user.click(toggle);
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument();
  });
});

describe('content', () => {
  const allContent = JSON.stringify({ profile, aboutParagraphs, skillGroups, timeline, highlights, aiContributions, certificates });

  it('never mentions proprietary names, issue keys, or internal identifiers', () => {
    const forbidden = [/bellini/i, /toro/i, /lonti/i, /BLN-\d+/i, /\b[0-9a-f]{40}\b/i, /bitbucket\.org/i];
    for (const pattern of forbidden) {
      expect(allContent).not.toMatch(pattern);
    }
  });

  it('does not present React as professional experience', () => {
    const frontend = skillGroups.find((group) => group.id === 'frontend');
    expect(frontend?.note).toMatch(/portfolio project/i);
    expect(timeline.some((entry) => entry.focus.join(' ').toLowerCase().includes('react'))).toBe(false);
  });

  it('avoids unsupported seniority claims', () => {
    expect(allContent).not.toMatch(/\b(senior|lead|principal|manager|junior|beginner)\b/i);
  });

  it('clearly describes recent implementation as AI-assisted', () => {
    expect(timeline[3]?.scope).toMatch(/AI-assisted/i);
    expect(timeline[3]?.summary).toMatch(/AI-assisted/i);
    expect(aboutParagraphs.join(' ')).toMatch(/do not claim every line was handwritten/i);
  });

  it('uses product-oriented labels instead of engineering jargon in visible sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Product & Delivery' })).toBeInTheDocument();
    expect(screen.getAllByText('The challenge')).toHaveLength(highlights.length);
  });
});
