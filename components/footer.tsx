import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./craft";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="not-prose border-t border-border/10 bg-background">
      <Section className="py-20 md:py-24">
        <Container className="max-w-screen-xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* Brand Section */}
            <div className="md:col-span-8 space-y-8">
              <Link href="/" className="group inline-block">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                  Ian. <span className="text-muted-foreground/40 font-normal italic lowercase tracking-normal">systems & architecture</span>
                </h3>
              </Link>
              <p className="text-lg text-muted-foreground/60 max-w-md leading-relaxed font-medium">
                <Balancer>
                  Engineering high-performance digital solutions with an unwavering focus on architectural integrity.
                </Balancer>
              </p>
            </div>

            {/* Right Section */}
            <div className="md:col-span-4 space-y-8">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">Connect</h4>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="https://github.com/Ianmello10"
                      className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </Link>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-24 pt-8 border-t border-border/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">
                © 2024 — {new Date().getFullYear()} Ian. All rights reserved.
              </p>

              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/20">
                Built for performance
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
