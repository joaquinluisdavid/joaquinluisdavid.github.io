import { Container } from '../ui/Container';

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
