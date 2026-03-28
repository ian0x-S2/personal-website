"use client";

import type React from "react";
import type { Toc } from "@/@types/md";

interface TocComponentProps {
  toc: Toc[];
}

const TableOfContents: React.FC<TocComponentProps> = ({ toc }) => {
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (!element) return;

    const offset = 100;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollTo = elementTop - offset;

    window.scrollTo({
      top: Math.max(0, scrollTo),
      behavior: "smooth",
    });
  };

  if (!toc || toc.length === 0) return null;

  return (
    <nav className="space-y-4">
      <ul className="space-y-3">
        {toc.map((item) => {
          const paddingLeft = (item.level - 1) * 12;

          return (
            <li key={item.slug}>
              <button
                onClick={() => scrollToSection(item.slug)}
                className={`
                  text-left text-[11px] font-medium tracking-tight transition-colors duration-200
                  hover:text-foreground text-muted-foreground/60
                  ${item.level === 1 ? "uppercase tracking-[0.1em]" : ""}
                `}
                style={{ paddingLeft: `${paddingLeft}px` }}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
