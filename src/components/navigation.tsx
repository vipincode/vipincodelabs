import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VC</span>
            </div>
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Vipin Code Labs
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/videos"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Videos
            </Link>
            <Link
              href="/courses"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex border-border hover:bg-muted"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
