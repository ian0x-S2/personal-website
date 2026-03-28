"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "About",   href: "/about" },
  { label: "Writing", href: "/blog" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="w-4 h-4 inline-block" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5" />
      ) : (
        <Moon className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 pt-8">
      <nav className="max-w-2xl mx-auto flex items-center justify-between gap-4 pb-4 border-b border-border">
        <Link
          href="/"
          className="font-serif text-base hover:text-accent transition-colors flex-shrink-0"
        >
          Ian Mello
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex gap-4 sm:gap-6 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-xs tracking-wide transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-foreground underline underline-offset-4"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
