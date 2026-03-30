"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, BookOpen, Code, Zap, Users } from "lucide-react";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description:
        "Learn React from scratch. Build interactive UIs with components, hooks, and state management.",
      level: "Beginner",
      videos: 24,
      duration: "8 hours",
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "Advanced TypeScript",
      description:
        "Master TypeScript advanced patterns, generics, and type system for production applications.",
      level: "Advanced",
      videos: 18,
      duration: "6 hours",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      title: "Next.js Full Stack",
      description:
        "Build full-stack applications with Next.js, API routes, databases, and deployment strategies.",
      level: "Intermediate",
      videos: 32,
      duration: "12 hours",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      id: 4,
      title: "Web Performance",
      description:
        "Optimize your web applications for speed, efficiency, and user experience at scale.",
      level: "Advanced",
      videos: 16,
      duration: "5 hours",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
  ];

  const features = [
    {
      id: 1,
      icon: Code,
      title: "Hands-on Coding",
      description:
        "Learn by building real projects with practical examples and coding challenges.",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Comprehensive Content",
      description:
        "Detailed tutorials covering everything from basics to advanced concepts.",
    },
    {
      id: 3,
      icon: Zap,
      title: "Modern Tech Stack",
      description:
        "Learn the latest technologies and best practices used in industry.",
    },
    {
      id: 4,
      icon: Users,
      title: "Community Support",
      description:
        "Connect with other learners and get help from instructors and peers.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-sm font-medium text-primary">
                  Learn Web Development
                </span>
              </div>
            </div>

            <h1 className="text-balance text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Master Modern Web{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Development
              </span>
            </h1>

            <p className="text-balance text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Learn from industry experts. Build real projects. Launch your web
              development career with hands-on tutorials covering React,
              TypeScript, Next.js, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/videos" className="flex-center">
                  Explore Videos <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  500+
                </div>
                <p className="text-foreground/60 text-sm">Video Tutorials</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  50K+
                </div>
                <p className="text-foreground/60 text-sm">Active Learners</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  4.9★
                </div>
                <p className="text-foreground/60 text-sm">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Vipin Code Labs?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need to become a successful web developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 sm:py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Start with our most popular learning paths and advance your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className={`h-32 ${course.image} bg-cover bg-center`} />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        course.level === "Beginner"
                          ? "bg-green-500/10 text-green-400"
                          : course.level === "Intermediate"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 text-pretty">
                    {course.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                    <span>{course.videos} videos</span>
                    <span>{course.duration}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  >
                    <Link href="/videos" className="flex-center">
                      Explore Course
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <Link href="/videos" className="flex-center">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of developers already learning with Vipin Code Labs
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/videos" className="flex-center">
              Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
