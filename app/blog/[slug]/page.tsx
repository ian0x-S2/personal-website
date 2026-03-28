import { Container, Section, Article } from "@/components/craft";
import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "../utils/posts-utils";
import Toc from "@/components/toc";
import ProgressBar from "@/components/progress-bar";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { PageTransitionWrapper } from "@/components/page-transition-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const revalidate = 604800;
export const dynamicParams = true;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    throw new Error("The post is not valid");
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      type: "article",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: post.frontmatter.title,
    },
  };
}

const formatDate = (date: string | Date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);
};

type TocItem = { level: number };

const calculateReadTime = (toc: TocItem[]): string => {
  const majorSections = toc.filter((item) => item.level <= 2).length;
  const estimatedMinutes = Math.max(Math.ceil(majorSections * 2.2), 3);
  return `${estimatedMinutes} min read`;
};

const PagePost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <PageTransitionWrapper>
      {/* Progress Bar - Fixed at top */}
      <ProgressBar toc={post.toc} />

      <Section className="overflow-visible flex-grow py-20">
        <Container className="max-w-screen-xl mx-auto px-6 md:px-10">
          <Article className="prose dark:prose-invert w-full max-w-none prose-lg">
            <div className="flex flex-col">
              {/* Back Button */}
              <Link href="/blog" className="mb-12 inline-flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 px-0 w-auto text-muted-foreground/60 hover:text-foreground hover:bg-transparent text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Index
                </Button>
              </Link>

              {/* Article Header */}
              <header className="mb-16 not-prose space-y-8">
                {/* Meta Information */}
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                  <div className="flex items-center gap-2">
                    <span>{formatDate(post.frontmatter.publishDate)}</span>
                  </div>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/20" />
                  <div className="flex items-center gap-2">
                    <span>{calculateReadTime(post.toc)}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
                  {post.frontmatter.title}
                </h1>

                {/* Description */}
                {post.frontmatter.description && (
                  <p className="text-xl md:text-2xl text-muted-foreground/60 leading-relaxed font-medium max-w-3xl">
                    {post.frontmatter.description}
                  </p>
                )}

                {/* Tags */}
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {post.frontmatter.tags.map((tag: string, index: number) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-muted/50 text-muted-foreground/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </header>

              {/* Layout with Sidebar for TOC */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Inline TOC - Mobile only or Sidebar Desktop */}
                <div className="lg:col-span-3 lg:sticky lg:top-32 order-2 lg:order-1 space-y-8">
                  <div className="not-prose">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40 mb-6">Contents</h4>
                    <Toc toc={post.toc} />
                  </div>
                </div>

                {/* Article Content */}
                <div className="lg:col-span-9 order-1 lg:order-2 prose-headings:tracking-tight prose-headings:font-bold prose-headings:scroll-mt-32 prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-primary transition-colors prose-pre:rounded-md prose-pre:border-muted/20 prose-blockquote:border-l-foreground prose-blockquote:font-medium">
                  {post.content}
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-24 pt-12 border-t border-border/10 not-prose">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
                    <p>
                      Originally published — {formatDate(post.frontmatter.publishDate)}
                    </p>
                  </div>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 bg-transparent rounded-full px-8 text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      Back to Index
                    </Button>
                  </Link>
                </div>
              </footer>
            </div>
          </Article>
        </Container>
      </Section>
    </PageTransitionWrapper>
  );
};

export default PagePost;
