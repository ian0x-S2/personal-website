import Link from "next/link";
import { Container } from "@/components/craft";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[70vh] max-w-screen-2xl w-full">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl text-muted-foreground">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </Container>
  );
}