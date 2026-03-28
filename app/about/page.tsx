import type { Metadata } from "next";
import Link from "next/link";
import { DitherImage } from "@/components/dither-image";

export const metadata: Metadata = {
  title: "About — Ian Mello",
  description: "Software developer based in São Paulo, Brazil.",
};

const focus = [
  "System Architecture",
  "Frontend Engineering",
  "Cloud Infrastructure",
  "Distributed Systems",
];

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Header ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-4">
          About
        </span>
        <h1 className="font-serif text-4xl leading-tight">Ian Mello</h1>
      </section>

      <div className="border-t border-border mb-12" />

      {/* ── Dithered portrait ── */}
      <div className="mb-12">
        <DitherImage
          src="/images/foi2.png"
          alt="Ian Mello"
          width={480}
          height={320}
          className="border border-border"
          revealOnHover={true}
        />
        <p className="text-xs text-muted-foreground mt-2">
          Hover to reveal. São Paulo, 2024.
        </p>
      </div>

      {/* ── Bio ── */}
      <div className="space-y-5 text-sm leading-relaxed mb-12">
        <p>
          Software developer focused on building functional and intuitive
          systems — from the architecture down to the interface. Based in
          São Paulo, Brazil.
        </p>
        <p>
          I care about the whole process: the internal structure, the external
          surface, and the space in between. I like things that work quietly
          and well.
        </p>
        <p>
          Currently interested in distributed systems, the intersection of AI
          and web architectures, and finding the simplest form that solves a
          hard problem.
        </p>
      </div>

      <div className="border-t border-border mb-12" />

      {/* ── Focus areas ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-5">
          Focus
        </span>
        <ul className="space-y-3 text-sm">
          {focus.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-1 h-1 shrink-0 block bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-border mb-8" />

      <p className="text-xs text-muted-foreground">
        Available for new projects —{" "}
        <Link
          href="/contact"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          get in touch.
        </Link>
      </p>
    </main>
  );
}
