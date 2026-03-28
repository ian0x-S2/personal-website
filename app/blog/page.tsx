import Link from "next/link";
import { getAllPosts } from "./utils/posts-utils";

export const revalidate = 3600;
export const dynamic = "force-static";

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* ── Header ── */}
      <section className="mb-12">
        <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-4">
          Writing
        </span>
        <h1 className="font-serif text-4xl leading-tight">Notes & Articles</h1>
      </section>

      <div className="border-t border-border mb-0" />

      {/* ── Post list ── */}
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-6 border-b border-border hover:text-accent transition-colors"
          >
            <div className="flex justify-between items-baseline mb-1.5">
              <h2 className="font-serif text-xl group-hover:underline underline-offset-4">
                {post.frontmatter.title}
              </h2>
              <span className="text-xs text-muted-foreground ml-4 shrink-0">
                {new Date(post.frontmatter.publishDate).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short" }
                )}
              </span>
            </div>
            {post.frontmatter.description && (
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {post.frontmatter.description}
              </p>
            )}
            {post.frontmatter.tags?.length > 0 && (
              <div className="flex gap-3 mt-2">
                {post.frontmatter.tags.map((tag: string) => (
                  <span key={tag} className="text-xs text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))
      ) : (
        <p className="py-10 text-xs text-muted-foreground">
          No posts published yet.
        </p>
      )}
    </main>
  );
}
