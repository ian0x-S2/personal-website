"use client";

import { Container } from "@/components/craft";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import logo from "../public/images/foi2.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

type ComponentList = {
  title: string;
  href: string;
};

export default function NavBar() {
  const pathname = usePathname();
  const isBlog = pathname.includes("blog");
  const isHome = !pathname.includes("blog");

  const components: ComponentList[] = [
    { title: isHome ? "" : "Home", href: "/" },
    { title: isBlog ? "" : "Blog", href: "/blog" },
  ];

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="bg-background/50 backdrop-blur-xl border-b border-border/10">
        <Container className="not-prose max-w-screen-xl w-full px-6 md:px-10">
          <nav className="flex items-center justify-between h-12 transition-all">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative overflow-hidden h-6 w-6 rounded-sm bg-muted/20 border border-muted/30">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  width={24}
                  height={24}
                  priority={true}
                  className="grayscale hover:grayscale-0 transition-all duration-700 p-0.5"
                />
              </div>
              <h1 className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
                Ian.
              </h1>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <ul className="list-none flex items-center gap-6">
                {components
                  .filter((component) => component.title !== "")
                  .map((component) => {
                    const isActive = pathname === component.href;

                    return (
                      <li key={component.href}>
                        <Link
                          href={component.href}
                          className={`
                            relative text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300
                            ${
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground/60 hover:text-foreground"
                            }
                          `}
                        >
                          {component.title}
                          {isActive && (
                            <motion.div
                              className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                              layoutId="activeTab"
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="pl-4 border-l border-border/10">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </div>
    </motion.div>
  );
}
