import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllPosts } from "./utils/posts-utils";
import { PageTransitionWrapper } from "@/components/page-transition-wrapper";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function Page() {
  const allPosts = await getAllPosts();

  return (
    <PageTransitionWrapper>
      <Section className="overflow-hidden min-h-screen py-24">
        <Container className="not-prose max-w-screen-xl px-6 md:px-10">
          {/* Header Section */}
          <div className="mb-24 space-y-8">
            <div className="flex items-center gap-4 text-muted-foreground/60">
               <span className="h-px w-10 bg-muted-foreground/20" />
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
              Notes & <br /> <span className="text-muted-foreground/20 italic font-serif tracking-normal">Perspectives.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl font-medium leading-snug tracking-tight">
              Discussions on software architecture, frontend engineering, and building robust digital products.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block space-y-6"
              >
                <article className="space-y-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between border-b border-border/10 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
                      {new Date(post.frontmatter.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-primary/80 transition-colors duration-500">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-muted-foreground/70 text-lg leading-relaxed font-medium line-clamp-3">
                      {post.frontmatter.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {post.frontmatter.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary/60 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {allPosts.length === 0 && (
            <div className="py-24 text-center border-t border-muted/20">
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">No posts published yet.</p>
            </div>
          )}
        </Container>
      </Section>
    </PageTransitionWrapper>
  );
}
