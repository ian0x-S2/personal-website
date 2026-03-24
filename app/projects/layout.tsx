import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ian - Software Developer",
  description:
    "A showcase of personal projects spanning web development, mobile design, and creative digital solutions.",
  openGraph: {
    title: "Projects | Ian - Software Developer",
    description:
      "A showcase of personal projects spanning web development, mobile design, and creative digital solutions.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}