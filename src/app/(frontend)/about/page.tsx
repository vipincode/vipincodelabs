"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Code2,
  Users,
  Zap,
  Heart,
  Target,
  Award,
} from "lucide-react";

export default function AboutPage() {
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Vipin Code Labs
              </span>
            </h1>

            <p className="text-balance text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Empowering developers to master modern web development through
              expert instruction, practical learning, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 sm:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>

              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                Vipin Code Labs was founded with a simple mission: to make
                high-quality web development education accessible to everyone,
                regardless of their background or location.
              </p>

              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                What started as a passion project on YouTube has grown into a
                thriving community of over 50,000 learners worldwide. Our
                founder, Vipin, began creating tutorial videos to document his
                learning journey and share knowledge with others.
              </p>

              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Today, Vipin Code Labs offers comprehensive courses covering
                React, TypeScript, Next.js, and modern web technologies. Each
                course is carefully crafted with practical examples, real-world
                projects, and best practices from industry experts.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Our community-driven approach means we continuously improve our
                courses based on learner feedback, ensuring our content stays
                relevant and aligned with industry standards.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Meet Vipin
                  </h3>
                  <p className="text-foreground/70">
                    Founder & Lead Instructor
                  </p>
                </div>

                <p className="text-foreground/80 text-center mb-8 leading-relaxed">
                  A passionate developer with 8+ years of experience in building
                  web applications. Vipin has worked with startups and
                  enterprises, mastering React, TypeScript, and modern web
                  technologies.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">
                      Full Stack Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">Tech Educator</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">
                      Open Source Contributor
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">
                      Community Builder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 bg-card/30 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Active Learners" },
              { value: "500+", label: "Video Tutorials" },
              { value: "8+", label: "Complete Courses" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 sm:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              What drives us to create the best learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Quality First",
                description:
                  "Every course is carefully curated and reviewed to ensure the highest quality content and learning outcomes for our students.",
              },
              {
                icon: Users,
                title: "Community Focused",
                description:
                  "We believe in the power of community. Our platform brings developers together to learn, share, and grow together.",
              },
              {
                icon: Zap,
                title: "Practical Learning",
                description:
                  "We focus on hands-on, project-based learning. Every concept is reinforced with real-world examples and challenges.",
              },
              {
                icon: Heart,
                title: "Accessibility",
                description:
                  "Quality education should be accessible to everyone. Our courses are free and designed for learners at all levels.",
              },
              {
                icon: Award,
                title: "Industry Standards",
                description:
                  "Our curriculum is aligned with industry best practices and covers the technologies professionals use every day.",
              },
              {
                icon: Code2,
                title: "Innovation",
                description:
                  "We stay ahead of the curve, constantly updating our courses with the latest technologies and methodologies.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="py-20 sm:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              What makes Vipin Code Labs different
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Expert-Led Content",
                description:
                  "Our courses are created by developers who have worked on real projects at tech companies and startups. You're learning from people who actually use these technologies every day.",
              },
              {
                title: "Continuously Updated",
                description:
                  "The tech landscape changes rapidly. We continuously update our courses to reflect the latest best practices, libraries, and frameworks.",
              },
              {
                title: "Lifetime Access",
                description:
                  "Once you enroll, you have lifetime access to course materials. Learn at your own pace, revisit concepts anytime, and never worry about content expiring.",
              },
              {
                title: "Supportive Community",
                description:
                  "Join a community of passionate developers. Ask questions, share projects, and connect with fellow learners on your journey.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 sm:py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Connect with us and stay updated with the latest content,
              announcements, and community discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { platform: "YouTube", link: "#", users: "50K+" },
              { platform: "Discord", link: "#", users: "Active Community" },
              { platform: "Twitter", link: "#", users: "Daily Updates" },
            ].map((social, index) => (
              <Card
                key={index}
                className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {social.platform}
                </h3>
                <p className="text-foreground/70 mb-6">{social.users}</p>
                <Button
                  variant="outline"
                  className="border-border hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href={social.link}>Follow Us</Link>
                </Button>
              </Card>
            ))}
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
            Explore our courses and join thousands of developers transforming
            their careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/courses" className="flex-center">
                Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <Link href="/videos" className="flex-center">
                Watch Videos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
