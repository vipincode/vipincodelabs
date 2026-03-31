"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border/50 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Vipin Code Labs
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-accent hover:text-accent/90 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </header>

      <div className="flex pt-16 min-h-[calc(100vh-4rem)]">
        {/* Left Side - Gradient + Content */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-accent/20 via-background to-primary/20 border-r border-border/50 items-center justify-center relative overflow-hidden px-8">
          {/* Decorative elements */}
          <div className="absolute top-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-md">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Start learning"
                >
                  <title>Start learning</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.5c0 5.25 3.069 9.01 10 9.01s10-3.76 10-9.01c0-6.502-4.5-11.247-10-11.247z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              Start Learning Today
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join 50,000+ developers who are transforming their careers with
              Vipin Code Labs
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      1
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">
                    Sign up in seconds
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Create your free account in less than a minute
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      2
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">
                    Choose your path
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pick from 50+ courses suited to your level
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      3
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">
                    Start coding
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant access to all materials and community
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-xs text-muted-foreground mb-4">
                TRUSTED BY DEVELOPERS FROM
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="w-20 h-8 bg-card rounded border border-border/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Google
                  </span>
                </div>
                <div className="w-20 h-8 bg-card rounded border border-border/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Meta
                  </span>
                </div>
                <div className="w-20 h-8 bg-card rounded border border-border/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Amazon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Create your account
              </h1>
              <p className="text-muted-foreground text-sm">
                Join Vipin Code Labs and start your coding journey today
              </p>
            </div>

            {/* Social Sign Up */}
            <div className="space-y-3 mb-8">
              <Button
                variant="outline"
                className="w-full h-11 border-border/50 hover:bg-card text-foreground"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  aria-label="Google"
                >
                  <title>Google</title>
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-11 border-border/50 hover:bg-card text-foreground"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="GitHub"
                >
                  <title>GitHub</title>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.834 8.207 11.407.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Sign up with GitHub
              </Button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">
                  Or create with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="h-11 bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    className="h-11 bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="conform_password"
                  className="block text-sm font-medium text-foreground"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="conform_password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-11 bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 mt-0.5 rounded border-border/50 bg-input accent-primary cursor-pointer"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-accent hover:text-accent/90 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-accent hover:text-accent/90 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-6">
              We&apos;ll send a verification email to confirm your account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
