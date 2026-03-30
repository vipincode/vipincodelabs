"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Calendar, User, Search, Tag } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      slug: "react-hooks-guide",
      title: "Complete Guide to React Hooks: From Basics to Advanced Patterns",
      excerpt:
        "Learn everything about React Hooks. Master useState, useEffect, useContext, and create custom hooks for production applications.",
      content:
        "React Hooks revolutionized how we write React components. This comprehensive guide covers all built-in hooks, their use cases, and advanced patterns for building scalable applications. From managing state with useState to handling side effects with useEffect, we'll explore practical examples and best practices that will transform your React development workflow.",
      author: "Vipin Kumar",
      date: "2024-03-15",
      readTime: "12 min",
      category: "React",
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      tags: ["React", "Hooks", "JavaScript"],
    },
    {
      id: 2,
      slug: "typescript-advanced",
      title: "TypeScript Advanced Types: Generics, Utilities & Type Guards",
      excerpt:
        "Master advanced TypeScript concepts including generics, utility types, conditional types, and type guards for type-safe code.",
      content:
        "TypeScript's advanced type system is powerful but can be overwhelming. This guide breaks down complex concepts into digestible lessons. We'll explore generics for reusable components, utility types for transforming types, and conditional types for flexible type definitions. Learn how to create type-safe abstractions that prevent bugs at compile time.",
      author: "Vipin Kumar",
      date: "2024-03-10",
      readTime: "15 min",
      category: "TypeScript",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      tags: ["TypeScript", "Advanced", "Types"],
    },
    {
      id: 3,
      slug: "nextjs-app-router",
      title: "Next.js 15 App Router: Complete Migration Guide",
      excerpt:
        "Everything you need to know about Next.js 15 App Router. Learn file-based routing, server components, API routes, and deployment.",
      content:
        "Next.js 15 introduces the new App Router with powerful features like automatic code splitting, built-in optimization, and server components. This guide walks through migrating from the Pages Router, setting up file-based routing, creating API routes, and deploying to production. Discover how the App Router simplifies full-stack development.",
      author: "Vipin Kumar",
      date: "2024-03-05",
      readTime: "18 min",
      category: "Next.js",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      tags: ["Next.js", "App Router", "Web Development"],
    },
    {
      id: 4,
      slug: "css-performance-tips",
      title: "CSS Performance Optimization: Speed Up Your Stylesheets",
      excerpt:
        "Practical tips and techniques for optimizing CSS performance, reducing bundle size, and improving page load times.",
      content:
        "CSS performance directly impacts user experience. Learn techniques for writing efficient stylesheets, minimizing CSS-in-JS overhead, using CSS Grid and Flexbox effectively, and avoiding common pitfalls. We'll explore CSS variables, containment properties, and modern optimization strategies that browsers use.",
      author: "Vipin Kumar",
      date: "2024-02-28",
      readTime: "10 min",
      category: "CSS",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      tags: ["CSS", "Performance", "Web Optimization"],
    },
    {
      id: 5,
      slug: "api-design-best-practices",
      title: "REST API Design Best Practices: Building Scalable APIs",
      excerpt:
        "Learn professional API design patterns, versioning strategies, error handling, and authentication for production APIs.",
      content:
        "Building well-designed APIs requires careful planning and adherence to best practices. This guide covers REST principles, naming conventions, status codes, error handling, pagination, and authentication. We'll explore how to version your API, handle deprecated endpoints, and design for scalability.",
      author: "Vipin Kumar",
      date: "2024-02-20",
      readTime: "14 min",
      category: "Backend",
      image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      tags: ["API", "Backend", "REST"],
    },
    {
      id: 6,
      slug: "web-accessibility-guide",
      title: "Web Accessibility for Developers: WCAG 2.1 Compliance Guide",
      excerpt:
        "Comprehensive guide to building accessible web applications following WCAG 2.1 standards and best practices.",
      content:
        "Accessibility is not a feature; it's a requirement. This guide covers WCAG 2.1 standards, semantic HTML, ARIA attributes, keyboard navigation, and screen reader support. Learn how to audit your applications, test for accessibility, and create inclusive digital experiences for all users.",
      author: "Vipin Kumar",
      date: "2024-02-15",
      readTime: "16 min",
      category: "Accessibility",
      image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      tags: ["Accessibility", "WCAG", "Inclusive Design"],
    },
  ];

  const categories = [
    "all",
    "React",
    "TypeScript",
    "Next.js",
    "CSS",
    "Backend",
    "Accessibility",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-10 right-5 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Web Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Blog
              </span>
            </h1>
            <p className="text-balance text-lg text-foreground/70 max-w-2xl mx-auto">
              Deep dives into React, TypeScript, Next.js, and modern web
              development. Learn from industry experts and elevate your skills.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground/70 hover:border-primary hover:text-foreground"
                }`}
              >
                {category === "all" ? "All Articles" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 sm:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="bg-card border-border overflow-hidden hover:border-primary/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
                    <div
                      className={`h-40 ${post.image} bg-cover bg-center group-hover:opacity-90 transition-opacity`}
                    />

                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-accent/80">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-foreground/60">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70 mb-4">
                No articles found matching your search.
              </p>
              <Button
                variant="outline"
                className="border-border hover:bg-muted"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-foreground/70 mb-6">
            Get the latest articles delivered to your inbox every week
          </p>

          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
