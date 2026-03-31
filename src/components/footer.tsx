import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VC</span>
              </div>
              <span className="font-bold text-foreground">Vipin Code Labs</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Master web development with hands-on tutorials from industry
              experts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; 2024 Vipin Code Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
