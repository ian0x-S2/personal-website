import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const stack = [
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact,      label: "React"      },
  { icon: SiNodedotjs,  label: "Node.js"    },
  { icon: SiNextdotjs,  label: "Next.js"    },
  { icon: SiDocker,     label: "Docker"     },
  { icon: SiPostgresql, label: "PostgreSQL" },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Identity ── */}
      <section className="mb-16">
        <h1 className="font-serif text-5xl mb-6 leading-tight">
          Software developer.
        </h1>
        <p className="text-muted-foreground max-w-sm leading-relaxed">
          Building things that work — from system architecture to the browser.
          Based in São Paulo, Brazil.
        </p>
        <p className="mt-3 text-xs text-accent">Available for new projects.</p>
      </section>

      <div className="border-t border-border mb-12" />

      {/* ── Tech stack ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-5">
          Stack
        </span>
        <div className="flex flex-wrap gap-5">
          {stack.map(({ icon: Icon, label }) => (
            <div
              key={label}
              title={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-5 h-5" aria-label={label} />
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border mb-12" />

      {/* ── Quote ── */}
      <blockquote className="border-l-2 border-border pl-4">
        <p className="font-serif italic text-base leading-relaxed">
          &ldquo;I had no children, I transmitted to no creature the legacy of our misery.&rdquo;
        </p>
        <footer className="mt-3 text-xs text-muted-foreground">
          — <cite>The Posthumous Memoirs of Brás Cubas</cite>
        </footer>
      </blockquote>
    </main>
  );
}
