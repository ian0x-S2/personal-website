export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 mt-20">
      <div className="max-w-2xl mx-auto border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Ian</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/ian0x-S2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
