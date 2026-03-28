import Link from "next/link";

const projects = [
  {
    title: "Enterprise Fastify Engine",
    year: "2024",
    tags: ["Node.js", "Fastify", "Clean Architecture"],
    description:
      "A robust RESTful system engineered with Node.js and Fastify. Built with Clean Architecture and SOLID principles to deliver a decoupled, testable, and highly maintainable core.",
    href: "https://github.com/ian0x-S2",
  },
  {
    title: "AI Computing Suite",
    year: "2024",
    tags: ["AI", "TensorFlow.js", "GPU Computing"],
    description:
      "A browser-integrated processing engine for real-time image neural-manipulation. Offloads heavy computation to the client to achieve sub-millisecond latency.",
    href: "https://github.com/ian0x-S2",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Header ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-4">
          Work
        </span>
        <h1 className="font-serif text-4xl leading-tight mb-3">
          Selected Projects
        </h1>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
          Systems and architectures focused on technical clarity and scalable
          impact.
        </p>
      </section>

      <div className="border-t border-border mb-0" />

      {/* ── Project list ── */}
      {projects.map((project) => (
        <article key={project.title} className="py-10 border-b border-border">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-serif text-2xl leading-tight">
              {project.title}
            </h2>
            <span className="text-xs text-muted-foreground ml-6 shrink-0 mt-1">
              {project.year}
            </span>
          </div>

          <div className="flex gap-4 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-6">
            {project.description}
          </p>

          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-accent transition-colors underline underline-offset-4"
          >
            View on GitHub →
          </Link>
        </article>
      ))}

      {/* ── CTA ── */}
      <div className="mt-14 pt-2">
        <p className="text-sm text-muted-foreground">
          Have a project in mind?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-accent transition-colors"
          >
            Get in touch.
          </Link>
        </p>
      </div>
    </main>
  );
}
