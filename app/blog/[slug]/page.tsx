import { Article } from "@/components/craft";
import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "../utils/posts-utils";
import Link from "next/link";

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
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return {
    title: `${post.frontmatter.title} — Ian Mello`,
    description: post.frontmatter.description,
  };
}

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(typeof date === "string" ? new Date(date) : date);

const PagePost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Back ── */}
      <Link
        href="/blog"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-12 block"
      >
        ← Writing
      </Link>

      {/* ── Header ── */}
      <header className="mb-12">
        <div className="flex items-baseline gap-4 mb-5 text-xs text-muted-foreground">
          <span>{formatDate(post.frontmatter.publishDate)}</span>
          {post.frontmatter.tags?.length > 0 && (
            <>
              <span>·</span>
              <span>{post.frontmatter.tags.join(", ")}</span>
            </>
          )}
        </div>

        <h1 className="font-serif text-3xl leading-tight mb-4">
          {post.frontmatter.title}
        </h1>

        {post.frontmatter.description && (
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            {post.frontmatter.description}
          </p>
        )}
      </header>

      <div className="border-t border-border mb-12" />

      {/* ── Content ── */}
      <Article className="prose dark:prose-invert max-w-none prose-sm prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-foreground prose-a:underline-offset-4 prose-pre:border prose-pre:border-border prose-blockquote:border-l-border prose-blockquote:not-italic">
        {post.content}
      </Article>

      {/* ── Footer ── */}
      <div className="mt-16 pt-6 border-t border-border">
        <Link
          href="/blog"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Writing
        </Link>
      </div>
    </main>
  );
};

export default PagePost;
