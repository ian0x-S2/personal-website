"use client";

import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface PropsWeather {
  loc: string;
  condition: string;
  temp: number;
}

const Feature = ({ props }: { props: PropsWeather }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out expo
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[90vh] flex items-center"
    >
      <Section className="w-full py-20 md:py-24">
        <Container className="max-w-screen-xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-12">
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-4 text-muted-foreground/60">
                   <span className="h-px w-10 bg-muted-foreground/20" />
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Based in {props.loc}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] text-foreground">
                  Building 
                  <br />
                  <span className="text-muted-foreground/20">Future-Proof</span>
                  <br />
                  Systems.
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-xl">
                <p className="text-xl md:text-2xl text-muted-foreground/80 leading-snug font-medium tracking-tight">
                  I specialize in engineering high-performance digital products where 
                  architectural precision meets exceptional user experience.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                <Link href="/projects" className={buttonVariants({ size: "lg", className: "h-14 px-10 rounded-lg shadow-sm font-bold uppercase text-[10px] tracking-[0.2em] group" })}>
                  View Selected Works
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                
                <div className="flex items-center gap-2">
                   {[
                    { icon: Github, href: "https://github.com/ian0x-S2" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/lucas-i-67041b272/" },

                   ].map((social, i) => (
                      <Link 
                        key={i}
                        href={social.href} 
                        className={buttonVariants({ variant: "ghost", size: "icon", className: "h-12 w-12 rounded-lg border border-transparent hover:border-border/30 hover:bg-muted/30" })}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                   ))}
                </div>
              </motion.div>
            </div>

            {/* Expertise Sidebar */}
            <div className="lg:col-span-4 lg:pt-24">
              <motion.div 
                variants={itemVariants}
                className="p-8 border-l border-muted/20 space-y-10"
              >
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40">Expertise</h3>
                  <ul className="space-y-3 font-medium text-lg">
                    <li>System Architecture</li>
                    <li>Frontend Engineering</li>
                    <li>Cloud Infrastructure</li>
                    <li>Product Strategy</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40">Status</h3>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-wider">Available for new ventures</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-muted/10">
                   <p className="text-xs text-muted-foreground/40 leading-relaxed">
                     Currently focused on distributed systems and the intersection of AI with web architectures.
                   </p>
                </div>
              </motion.div>
            </div>

          </div>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Feature;
