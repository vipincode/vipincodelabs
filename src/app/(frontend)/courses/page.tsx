"use client";

import { ArrowRight, BarChart3, Clock, Star, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description:
        "Learn React from scratch. Build interactive UIs with components, hooks, and state management. Perfect for beginners starting their web development journey.",
      level: "Beginner",
      videos: 24,
      duration: "8 hours",
      students: 5200,
      rating: 4.9,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      skills: ["JavaScript", "React", "Hooks", "State"],
      price: "Free",
    },
    {
      id: 2,
      title: "Advanced TypeScript",
      description:
        "Master TypeScript advanced patterns, generics, and type system for production applications. Learn to write type-safe, scalable code.",
      level: "Advanced",
      videos: 18,
      duration: "6 hours",
      students: 2800,
      rating: 4.8,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      skills: ["TypeScript", "Generics", "Advanced Types", "Patterns"],
      price: "Free",
    },
    {
      id: 3,
      title: "Next.js Full Stack",
      description:
        "Build full-stack applications with Next.js, API routes, databases, and deployment strategies. Master modern web development.",
      level: "Intermediate",
      videos: 32,
      duration: "12 hours",
      students: 4100,
      rating: 4.9,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      skills: ["Next.js", "API Routes", "Databases", "Deployment"],
      price: "Free",
    },
    {
      id: 4,
      title: "Web Performance",
      description:
        "Optimize your web applications for speed, efficiency, and user experience at scale. Learn best practices and modern optimization techniques.",
      level: "Advanced",
      videos: 16,
      duration: "5 hours",
      students: 1800,
      rating: 4.7,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      skills: ["Performance", "Optimization", "Metrics", "Tools"],
      price: "Free",
    },
    {
      id: 5,
      title: "CSS Mastery",
      description:
        "Master modern CSS, layout techniques, animations, and responsive design. Create stunning, performant user interfaces.",
      level: "Beginner",
      videos: 20,
      duration: "7 hours",
      students: 3900,
      rating: 4.8,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      skills: ["CSS", "Flexbox", "Grid", "Animations"],
      price: "Free",
    },
    {
      id: 6,
      title: "JavaScript Deep Dive",
      description:
        "Understand JavaScript fundamentals deeply. Master async/await, closures, prototypes, and modern ES6+ features.",
      level: "Intermediate",
      videos: 28,
      duration: "10 hours",
      students: 4600,
      rating: 4.9,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      skills: ["JavaScript", "Async", "ES6+", "Advanced"],
      price: "Free",
    },
    {
      id: 7,
      title: "Testing & Quality Assurance",
      description:
        "Learn testing frameworks, unit testing, integration testing, and quality assurance practices for production-ready code.",
      level: "Intermediate",
      videos: 22,
      duration: "8 hours",
      students: 2300,
      rating: 4.7,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      skills: ["Testing", "Jest", "React Testing", "QA"],
      price: "Free",
    },
    {
      id: 8,
      title: "Database Design & SQL",
      description:
        "Master relational databases, SQL queries, normalization, and database design patterns for scalable applications.",
      level: "Beginner",
      videos: 26,
      duration: "9 hours",
      students: 3200,
      rating: 4.8,
      instructor: "Vipin",
      image: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      skills: ["SQL", "Databases", "Design", "Normalization"],
      price: "Free",
    },
  ];

  const filteredCourses =
    selectedLevel === "All"
      ? courses
      : courses.filter((course) => course.level === selectedLevel);

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Complete Course
              </span>{" "}
              Catalog
            </h1>

            <p className="text-balance text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Choose from 8+ carefully curated courses designed to take you from
              beginner to expert in web development. Learn at your own pace with
              lifetime access.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {levels.map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedLevel === level
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary/50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group flex flex-col"
              >
                {/* Course Image */}
                <div
                  className={`h-40 ${course.image} bg-cover bg-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mb-4">
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
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 text-pretty text-lg">
                    {course.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">
                    {course.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 2 && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        +{course.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Course Stats */}
                  <div className="space-y-2 mb-4 py-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <BarChart3 className="w-4 h-4" />
                      <span>{course.videos} videos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/videos" className="flex-center">
                      Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-foreground/60 mb-12">
            <p>
              Showing {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Courses Section */}
      <section className="py-20 sm:py-32 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Industry-standard curriculum, expert instruction, and
              comprehensive learning resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Instruction",
                description:
                  "Learn from industry professionals with years of real-world experience.",
              },
              {
                icon: "📚",
                title: "Comprehensive Content",
                description:
                  "Complete courses covering beginner to advanced topics with practical examples.",
              },
              {
                icon: "🚀",
                title: "Hands-on Projects",
                description:
                  "Build real projects and develop a portfolio to showcase your skills.",
              },
              {
                icon: "⏰",
                title: "Learn at Your Pace",
                description:
                  "Lifetime access to course materials. Study whenever and wherever you want.",
              },
              {
                icon: "💬",
                title: "Community Support",
                description:
                  "Connect with thousands of learners and get help from the community.",
              },
              {
                icon: "✅",
                title: "Certificates",
                description:
                  "Earn certificates upon course completion to showcase your achievements.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with
            our courses
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/videos" className="flex-center">
              Explore All Courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
