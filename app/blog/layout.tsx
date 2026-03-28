import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ian Mello",
  description: "Notes, articles, and thinking out loud.",
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
