"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  ThumbsUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  relatedPosts: {
    slug: string;
    title: string;
  }[];
  content: string;
};
const blogPostsData: Record<string, BlogPost> = {
  "react-hooks-guide": {
    id: 1,
    title: "Complete Guide to React Hooks: From Basics to Advanced Patterns",
    author: "Vipin Kumar",
    date: "2024-03-15",
    readTime: "12 min",
    category: "React",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    tags: ["React", "Hooks", "JavaScript", "Performance", "State Management"],
    relatedPosts: [
      { slug: "typescript-advanced", title: "TypeScript Advanced Types" },
      { slug: "nextjs-app-router", title: "Next.js 15 App Router" },
    ],
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks have fundamentally changed how we write React components. Introduced in React 16.8, they allow you to use state and other React features without writing a class component. This comprehensive guide will take you from complete beginner to advanced hook patterns.</p>

      <h2>What Are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They make code reuse between components easier and help organize your code better by grouping related logic.</p>

      <h2>useState Hook - Managing Component State</h2>
      <p>The useState hook is the most fundamental hook you'll use. It lets you add state to functional components. Unlike class components where you have a single state object, with hooks you can have multiple independent state variables.</p>

      <h3>Basic Syntax</h3>
      <p>const [count, setCount] = useState(0); - This declares a state variable called count with an initial value of 0, and a function to update it.</p>

      <h2>useEffect Hook - Handling Side Effects</h2>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. Side effects are operations that interact with the outside world, like API calls, subscriptions, or DOM manipulation.</p>

      <h2>Custom Hooks - Building Reusable Logic</h2>
      <p>Custom hooks are JavaScript functions whose names start with "use" and may call other hooks. You can build custom hooks to extract component logic into reusable functions. This is one of the most powerful patterns in React development.</p>

      <h2>Advanced Patterns</h2>
      <p>As you become more comfortable with hooks, you'll discover advanced patterns like useReducer for complex state logic, useContext for avoiding prop drilling, and useCallback and useMemo for performance optimization.</p>

      <h2>Conclusion</h2>
      <p>Hooks are a powerful addition to React that make your code cleaner, more reusable, and easier to maintain. Master these patterns and you'll write better React applications.</p>
    `,
  },
  "typescript-advanced": {
    id: 2,
    title: "TypeScript Advanced Types: Generics, Utilities & Type Guards",
    author: "Vipin Kumar",
    date: "2024-03-10",
    readTime: "15 min",
    category: "TypeScript",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    tags: ["TypeScript", "Advanced", "Types", "Generics", "Type Safety"],
    relatedPosts: [
      { slug: "react-hooks-guide", title: "Complete Guide to React Hooks" },
      {
        slug: "api-design-best-practices",
        title: "REST API Design Best Practices",
      },
    ],
    content: `
      <h2>Mastering TypeScript Advanced Types</h2>
      <p>TypeScript's advanced type system is one of its most powerful features. Whether you're building large-scale applications or libraries, understanding these concepts will make you a more effective developer.</p>

      <h2>Generics: Writing Flexible, Reusable Code</h2>
      <p>Generics allow you to create components, functions, and types that work with multiple types while maintaining type safety. They're essential for writing reusable libraries and framework code.</p>

      <h2>Utility Types: Transform Your Types</h2>
      <p>TypeScript provides several utility types that allow you to manipulate types. Pick, Omit, Partial, Required, and many others help you create new types from existing ones without unnecessary duplication.</p>

      <h2>Type Guards: Runtime Type Checking</h2>
      <p>Type guards are expressions that perform a runtime check that guarantees the type in some scope. They help you narrow down types and handle different cases safely.</p>

      <h2>Advanced Patterns</h2>
      <p>Conditional types, mapped types, and template literal types unlock advanced patterns that enable you to build type-safe abstractions and prevent entire categories of bugs.</p>

      <h2>Best Practices</h2>
      <p>Learn when to use generics, how to avoid over-typing, and patterns that help maintain readability while preserving type safety in large codebases.</p>
    `,
  },
  "nextjs-app-router": {
    id: 3,
    title: "Next.js 15 App Router: Complete Migration Guide",
    author: "Vipin Kumar",
    date: "2024-03-05",
    readTime: "18 min",
    category: "Next.js",
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    tags: ["Next.js", "App Router", "Web Development", "Full Stack", "Routing"],
    relatedPosts: [
      { slug: "react-hooks-guide", title: "Complete Guide to React Hooks" },
      { slug: "css-performance-tips", title: "CSS Performance Optimization" },
    ],
    content: `
      <h2>Next.js 15 App Router Overview</h2>
      <p>The App Router is the new, recommended way to build applications with Next.js. It's built on top of React's Server Components and provides a cleaner, more intuitive way to build full-stack applications.</p>

      <h2>Key Features of App Router</h2>
      <p>File-based routing in the app directory, automatic code splitting, built-in optimization, server components by default, and powerful data fetching patterns all make the App Router a game-changer for full-stack development.</p>

      <h2>File-Based Routing Structure</h2>
      <p>The app directory uses a simple file-based routing convention. Directories become route segments, page.tsx files become the UI for those routes, and layout.tsx files define shared layouts across routes.</p>

      <h2>Server Components and Server Actions</h2>
      <p>Server Components are the default in the App Router, reducing JavaScript sent to the browser. Server Actions let you define server-side code inline with your components, seamlessly handling data mutations.</p>

      <h2>Data Fetching Patterns</h2>
      <p>Learn how to fetch data in Server Components, handle loading states with Suspense, and use Incremental Static Regeneration for optimal performance and freshness.</p>

      <h2>Migration from Pages Router</h2>
      <p>If you have an existing application using the Pages Router, we'll walk through the migration process step by step, handling edge cases and ensuring your application continues to work smoothly.</p>
    `,
  },
  "css-performance-tips": {
    id: 4,
    title: "CSS Performance Optimization: Speed Up Your Stylesheets",
    author: "Vipin Kumar",
    date: "2024-02-28",
    readTime: "10 min",
    category: "CSS",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    tags: ["CSS", "Performance", "Web Optimization", "Best Practices", "Tools"],
    relatedPosts: [
      {
        slug: "web-accessibility-guide",
        title: "Web Accessibility for Developers",
      },
      {
        slug: "api-design-best-practices",
        title: "REST API Design Best Practices",
      },
    ],
    content: `
      <h2>CSS Performance Fundamentals</h2>
      <p>CSS performance is crucial for user experience. A large, unoptimized stylesheet can block rendering and hurt your Core Web Vitals. Let's explore practical techniques for writing efficient CSS.</p>

      <h2>Minimize CSS Bundle Size</h2>
      <p>Remove unused CSS with tools like PurgeCSS or Tailwind CSS. Avoid writing unnecessary styles, use CSS variables for repeated values, and consider using utility-first CSS frameworks.</p>

      <h2>CSS-in-JS Performance Considerations</h2>
      <p>While CSS-in-JS is convenient, it comes with runtime overhead. Understand the trade-offs and consider static CSS extraction for production builds to minimize JavaScript execution time.</p>

      <h2>Modern CSS Features for Performance</h2>
      <p>CSS variables, containment properties, and subgrid enable more efficient styling. Learn how to leverage these features to write less CSS and enable better browser optimizations.</p>

      <h2>Animations and Transforms</h2>
      <p>Use transform and opacity for animations instead of changing layout properties. Hardware-accelerated properties like transform are much faster than properties that trigger layout recalculation.</p>

      <h2>Performance Measurement</h2>
      <p>Use browser DevTools and Lighthouse to measure CSS performance. Monitor metrics like First Contentful Paint and Largest Contentful Paint to ensure your optimizations are effective.</p>
    `,
  },
  "api-design-best-practices": {
    id: 5,
    title: "REST API Design Best Practices: Building Scalable APIs",
    author: "Vipin Kumar",
    date: "2024-02-20",
    readTime: "14 min",
    category: "Backend",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    tags: ["API", "Backend", "REST", "Architecture", "Best Practices"],
    relatedPosts: [
      { slug: "typescript-advanced", title: "TypeScript Advanced Types" },
      {
        slug: "web-accessibility-guide",
        title: "Web Accessibility for Developers",
      },
    ],
    content: `
      <h2>REST API Design Principles</h2>
      <p>REST APIs power modern applications. Understanding how to design them properly is crucial for building scalable, maintainable systems. Let's explore the key principles and practices.</p>

      <h2>Resource-Oriented Design</h2>
      <p>Design your API around resources, not actions. Use nouns for endpoints (/users, /posts) rather than verbs (/getUsers, /createPost). Use HTTP methods (GET, POST, PUT, DELETE) to define operations on those resources.</p>

      <h2>Versioning Strategy</h2>
      <p>Plan for API versioning from the start. URL versioning (/api/v1/users) is straightforward and explicit, while header-based versioning allows for more flexible evolution. Choose a strategy and stick with it.</p>

      <h2>Error Handling and Status Codes</h2>
      <p>Use appropriate HTTP status codes. 200 for success, 400 for bad requests, 401 for authentication failures, 403 for authorization failures, 404 for not found, and 500 for server errors. Include descriptive error messages in your response body.</p>

      <h2>Pagination and Filtering</h2>
      <p>For endpoints that return collections, implement pagination to handle large datasets efficiently. Provide filtering and sorting options to reduce the amount of data transferred and improve API usability.</p>

      <h2>Authentication and Security</h2>
      <p>Implement proper authentication using standards like OAuth 2.0 or API keys. Always use HTTPS, implement rate limiting, and validate all inputs to prevent security vulnerabilities.</p>

      <h2>Documentation</h2>
      <p>Write clear, comprehensive API documentation. Tools like OpenAPI/Swagger help you generate interactive documentation that keeps your docs in sync with your API.</p>
    `,
  },
  "web-accessibility-guide": {
    id: 6,
    title: "Web Accessibility for Developers: WCAG 2.1 Compliance Guide",
    author: "Vipin Kumar",
    date: "2024-02-15",
    readTime: "16 min",
    category: "Accessibility",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "HTML", "ARIA"],
    relatedPosts: [
      { slug: "css-performance-tips", title: "CSS Performance Optimization" },
      { slug: "react-hooks-guide", title: "Complete Guide to React Hooks" },
    ],
    content: `
      <h2>Why Web Accessibility Matters</h2>
      <p>Over 1 billion people worldwide have disabilities. Building accessible websites isn't just morally right—it's a legal requirement in many jurisdictions. It also improves user experience for everyone.</p>

      <h2>Semantic HTML</h2>
      <p>Use semantic HTML elements like main, nav, article, section, header, and footer. These elements carry meaning that helps assistive technologies and search engines understand your content structure.</p>

      <h2>ARIA Attributes</h2>
      <p>ARIA (Accessible Rich Internet Applications) attributes enhance accessibility for dynamic content. Use aria-label, aria-describedby, aria-live, and role attributes to provide context for interactive elements.</p>

      <h2>Keyboard Navigation</h2>
      <p>Ensure all functionality is accessible via keyboard. Users with motor disabilities and power users rely on keyboard navigation. Manage focus properly and provide visible focus indicators.</p>

      <h2>Screen Reader Support</h2>
      <p>Test your application with screen readers like NVDA, JAWS, or VoiceOver. Write descriptive alt text for images, use proper heading hierarchy, and structure your forms logically.</p>

      <h2>Color and Contrast</h2>
      <p>Ensure sufficient color contrast (WCAG AA: 4.5:1 for text). Don't rely solely on color to convey information. Consider colorblind users when choosing color schemes.</p>

      <h2>Testing and Continuous Improvement</h2>
      <p>Use automated tools like axe DevTools, but remember they catch only about 30% of accessibility issues. Manual testing with real users and assistive technologies is essential.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];
  const [liked, setLiked] = useState(false);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-foreground/70 mb-8">
            Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div
          className={`absolute top-0 right-0 w-96 h-96 ${post.image} rounded-full blur-3xl opacity-50`}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-foreground/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className={`h-64 sm:h-80 ${post.image} bg-cover bg-center rounded-lg mb-8`}
              />

              <article className="prose prose-invert max-w-none text-foreground">
                <div className="space-y-6 text-lg leading-relaxed">
                  {post.content.split("\n").map((line: string) => {
                    if (line.startsWith("<h2>")) {
                      return (
                        <h2
                          key={line}
                          className="text-3xl font-bold text-foreground mt-8 mb-4"
                        >
                          {line.replace(/<h2>|<\/h2>/g, "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("<h3>")) {
                      return (
                        <h3
                          key={line}
                          className="text-xl font-semibold text-foreground mt-6 mb-3"
                        >
                          {line.replace(/<h3>|<\/h3>/g, "")}
                        </h3>
                      );
                    }
                    if (line.startsWith("<p>")) {
                      return (
                        <p key={line} className="text-foreground/90">
                          {line.replace(/<p>|<\/p>/g, "")}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium">
                    Share this article
                  </span>
                  <button
                    type="button"
                    className="p-2 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Like Section */}
              <div className="sticky top-20 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <button
                    type="button"
                    onClick={() => setLiked(!liked)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      liked
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <ThumbsUp
                      className={`w-5 h-5 ${liked ? "fill-current" : ""}`}
                    />
                    {liked ? "Liked!" : "Like this post"}
                  </button>
                </div>

                {/* Related Posts */}
                {post.relatedPosts && post.relatedPosts.length > 0 && (
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-3">
                      {post.relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block p-3 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium text-pretty"
                        >
                          {relatedPost.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full" />
                    <div>
                      <p className="font-medium text-foreground">
                        {post.author}
                      </p>
                      <p className="text-xs text-foreground/60">
                        Web Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Passionate about teaching web development and sharing
                    knowledge with the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles CTA */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Read More Articles
          </h2>
          <p className="text-foreground/70 mb-8">
            Explore more in-depth guides and tutorials
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/blog" className="flex-center">
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
