import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ian Mello",
  description: "Get in touch with Ian Mello.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Header ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-4">
          Contact
        </span>
        <h1 className="font-serif text-4xl leading-tight mb-6">
          Get in touch.
        </h1>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          For project inquiries, collaborations, or just to say hello. I read
          everything and respond within a few days.
        </p>
      </section>

      <div className="border-t border-border mb-12" />

      {/* ── Elsewhere ── */}
      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-3">
          Elsewhere
        </span>
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/ian0x-S2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors hover:underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
