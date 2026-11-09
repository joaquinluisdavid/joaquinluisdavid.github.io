import { About } from './components/sections/About';
import { AiInWork } from './components/sections/AiInWork';
import { Contact } from './components/sections/Contact';
import { CareerResources } from './components/sections/CareerResources';
import { Experience } from './components/sections/Experience';
import { Expertise } from './components/sections/Expertise';
import { Footer } from './components/sections/Footer';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Highlights } from './components/sections/Highlights';
import { skillGroups } from './data/expertise';
import { aiContributions } from './data/ai-contributions';
import { certificates, cvFileName } from './data/career-resources';
import { timeline } from './data/experience';
import { highlights } from './data/highlights';
import { aboutParagraphs, profile } from './data/profile';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header name={profile.name} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero profile={profile} />
        <About paragraphs={aboutParagraphs} />
        <Expertise groups={skillGroups} />
        <Experience entries={timeline} />
        <AiInWork contributions={aiContributions} />
        <CareerResources cvFileName={cvFileName} certificates={certificates} />
        <Highlights highlights={highlights} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
