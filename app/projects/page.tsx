"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Server,
  ImageIcon,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Enterprise Fastify Engine",
    description:
      "A robust RESTful system engineered with Node.js and Fastify. Leveraging Clean Architecture and SOLID principles to deliver a decoupled, testable, and highly maintainable core.",
    icon: Server,
    githubUrl: "https://github.com/Ianmello10/fastify-rest-api",
    tags: ["Node.js", "Fastify", "Infrastructure"],
  },
  {
    id: 2,
    title: "AI Computing Suite",
    description:
      "A browser-integrated processing engine for real-time image neural-manipulation. Focused on offloading heavy computation to the client to achieve sub-millisecond latency.",
    icon: ImageIcon,
    githubUrl: "https://github.com/Ianmello10/ai-browser-image-tools",
    tags: ["AI", "TensorFlow.js", "GPU Computing"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-10 py-24 max-w-screen-xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 space-y-8"
        >
          <div className="flex items-center gap-4 text-muted-foreground/60">
             <span className="h-px w-10 bg-muted-foreground/20" />
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
            Selected <br /> <span className="text-muted-foreground/20 italic font-serif tracking-normal">Works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl font-medium leading-snug tracking-tight">
            A curation of systems and architectures focused on technical excellence and scalable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-24 md:gap-y-32"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={project.githubUrl} target="_blank" className="block space-y-6">
                  <div className="relative aspect-[16/10] bg-muted/30 rounded-lg overflow-hidden border border-muted/20 transition-all duration-500 group-hover:border-primary/20 group-hover:bg-muted/50">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-16 w-16 text-muted-foreground/20 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-700" />
                     </div>
                     <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <div className="h-10 w-10 rounded-full bg-background border border-muted/20 flex items-center justify-center">
                           <ArrowUpRight className="h-4 w-4" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">{tag}</span>
                       ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground/70 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-48 pt-24 border-t border-muted/20 text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Let&apos;s build something <br /> <span className="text-muted-foreground/30">extraordinary.</span>
          </h2>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "h-14 px-10 rounded-full font-bold uppercase text-[10px] tracking-[0.2em]" })}>
             Start a Conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
