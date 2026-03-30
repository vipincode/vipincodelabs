"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, ChevronDown, MessageSquare } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // Courses & Learning
  {
    id: "courses-1",
    category: "Courses & Learning",
    question: "How do I get started with my first course?",
    answer:
      "Getting started is easy! Sign up for a free account, browse our course catalog, and enroll in any course you're interested in. You'll gain immediate access to all course materials including videos, projects, and resources. No credit card required to get started.",
  },
  {
    id: "courses-2",
    category: "Courses & Learning",
    question: "What if I'm a complete beginner?",
    answer:
      'Our courses are designed for all skill levels! We have dedicated beginner courses that start from the fundamentals. Each course includes step-by-step instructions, real-world examples, and hands-on projects. We recommend starting with our "Web Development Fundamentals" course.',
  },
  {
    id: "courses-3",
    category: "Courses & Learning",
    question: "How long does it take to complete a course?",
    answer:
      "Course duration varies depending on the course complexity and your pace. Most beginner courses take 4-8 weeks, intermediate courses take 8-12 weeks, and advanced courses take 12-16 weeks. However, you can learn at your own pace with lifetime access.",
  },
  {
    id: "courses-4",
    category: "Courses & Learning",
    question: "Do you offer certificates after completing a course?",
    answer:
      "Yes! Upon completing a course and its final project, you'll receive a completion certificate. These certificates are shareable on LinkedIn and your portfolio. They validate your new skills and demonstrate your commitment to professional development.",
  },
  {
    id: "courses-5",
    category: "Courses & Learning",
    question: "Can I download course materials for offline learning?",
    answer:
      "Most course materials including videos and code files can be downloaded for offline access. This allows you to learn anywhere, anytime, even without an internet connection. Notes and project files are available for download in your course dashboard.",
  },
  {
    id: "courses-6",
    category: "Courses & Learning",
    question: "What technologies do your courses cover?",
    answer:
      "We cover modern web development technologies including React, TypeScript, Next.js, Node.js, Express, MongoDB, PostgreSQL, CSS, and more. Our curriculum is continuously updated to reflect industry standards and the latest best practices in web development.",
  },

  // Account & Access
  {
    id: "account-1",
    category: "Account & Access",
    question: "How do I reset my password?",
    answer:
      "You can reset your password from the login page. Click \"Forgot Password,\" enter your email address, and we'll send you a secure reset link. Follow the link in the email to create a new password. If you don't receive the email, check your spam folder.",
  },
  {
    id: "account-2",
    category: "Account & Access",
    question: "Can I access my courses on multiple devices?",
    answer:
      "Absolutely! Your account and all course progress sync across all your devices. You can start a lesson on your computer and continue on your tablet or smartphone. Your progress is automatically saved and synchronized.",
  },
  {
    id: "account-3",
    category: "Account & Access",
    question: "Is there a refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all course purchases. If you're not satisfied with the course quality or content, simply contact our support team within 30 days of enrollment for a full refund, no questions asked.",
  },
  {
    id: "account-4",
    category: "Account & Access",
    question: "Can I share my account with others?",
    answer:
      "Course enrollments are personal to each learner. While you cannot share your account, you can encourage others to sign up. We offer group discounts for teams and organizations interested in bulk enrollments.",
  },
  {
    id: "account-5",
    category: "Account & Access",
    question: "How do I update my profile information?",
    answer:
      "Login to your account and navigate to the Profile Settings section. Here you can update your name, email, profile picture, and other personal information. Changes are saved automatically.",
  },
  {
    id: "account-6",
    category: "Account & Access",
    question: "How do I delete my account?",
    answer:
      'You can request account deletion from the Account Settings page. Select "Delete Account" and follow the confirmation process. Please note this is permanent and cannot be undone. Your course progress will be lost, but you can re-enroll anytime.',
  },

  // Technical Support
  {
    id: "support-1",
    category: "Technical Support",
    question: "What should I do if a video won't load?",
    answer:
      "First, try refreshing the page or clearing your browser cache. Ensure you have a stable internet connection - we recommend at least 2 Mbps for smooth video playback. If the issue persists, try a different browser or device. Contact support if the problem continues.",
  },
  {
    id: "support-2",
    category: "Technical Support",
    question: "Is there a mobile app?",
    answer:
      "Currently, we offer a mobile-responsive website that works seamlessly on all devices including smartphones and tablets. You can access all courses and lessons through your mobile browser. A dedicated mobile app is in development and coming soon!",
  },
  {
    id: "support-3",
    category: "Technical Support",
    question: "What browsers are supported?",
    answer:
      "We support all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience. Some older versions of Internet Explorer may have compatibility issues.",
  },
  {
    id: "support-4",
    category: "Technical Support",
    question: "How do I report a technical issue?",
    answer:
      "You can report technical issues through our support contact form on the Contact page. Provide detailed information including your browser, device type, and what you were trying to do when the issue occurred. Our support team will investigate and respond within 24 hours.",
  },
  {
    id: "support-5",
    category: "Technical Support",
    question: "Are there any system requirements?",
    answer:
      "No special system requirements! All you need is a modern web browser and an internet connection. The platform works on Windows, macOS, Linux, iOS, and Android. Code editors like VS Code are helpful for completing projects.",
  },

  // Pricing & Payments
  {
    id: "pricing-1",
    category: "Pricing & Payments",
    question: "Are the courses free?",
    answer:
      "Many of our courses are completely free! We offer free access to our extensive video library, and several beginner courses. Premium courses unlock advanced content, projects, and certificates. Choose what works best for your learning goals.",
  },
  {
    id: "pricing-2",
    category: "Pricing & Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express), Google Pay, Apple Pay, and digital wallets. All payments are processed securely through industry-standard encryption.",
  },
  {
    id: "pricing-3",
    category: "Pricing & Payments",
    question: "Do you offer subscription plans?",
    answer:
      "Yes! We offer flexible pricing options including pay-as-you-go for individual courses and monthly/yearly subscription plans for unlimited access to all courses. Subscriptions include new courses as they're released.",
  },
  {
    id: "pricing-4",
    category: "Pricing & Payments",
    question: "Are there discounts for annual plans?",
    answer:
      "Yes! Annual subscription plans offer a significant discount compared to monthly plans - typically 40-50% savings. Additionally, we frequently run promotions during holidays and special events. Subscribe to our newsletter to stay updated on current deals.",
  },
  {
    id: "pricing-5",
    category: "Pricing & Payments",
    question: "Do you offer student discounts?",
    answer:
      "Yes! Students get special pricing on all courses. Verify your student status with a valid student email or ID, and you'll receive a 50% discount on all premium courses. Contact us for more details.",
  },

  // Community & Support
  {
    id: "community-1",
    category: "Community & Support",
    question: "Is there a community forum or Discord server?",
    answer:
      "Yes! We have an active Discord community where learners help each other, share projects, and discuss course content. You'll get the Discord link after signing up. Our community is moderated and incredibly supportive.",
  },
  {
    id: "community-2",
    category: "Community & Support",
    question: "How do I get help if I'm stuck on a project?",
    answer:
      "You can ask for help in our Discord community, where instructors and experienced learners are active. For specific issues, you can also contact our support team. We encourage peer learning - often your fellow learners have great insights!",
  },
  {
    id: "community-3",
    category: "Community & Support",
    question: "Can I interact directly with instructors?",
    answer:
      "Instructors are active in our community Discord and often answer questions. For detailed one-on-one help, we offer optional mentorship sessions. Email contact@vipincodelabs.com for mentorship inquiries.",
  },
  {
    id: "community-4",
    category: "Community & Support",
    question: "How can I contribute to the community?",
    answer:
      "We love community contributions! Share your projects, help other learners, write blog posts, or contribute to our open-source initiatives. Active community members get recognized and may receive special badges or opportunities.",
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  // Filter FAQs based on search
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqData;
    }

    const query = searchQuery.toLowerCase();
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Group filtered FAQs by category
  const groupedFAQs = useMemo(() => {
    const grouped: { [key: string]: FAQItem[] } = {};
    filteredFAQs.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, [filteredFAQs]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Questions
              </span>
            </h1>

            <p className="text-balance text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about courses, accounts, pricing,
              and more. Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="text-accent hover:text-primary transition-colors font-semibold"
              >
                Contact us
              </Link>
              .
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery && filteredFAQs.length === 0 ? (
            // No Results
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No results found
              </h3>
              <p className="text-foreground/70 mb-6">
                We couldn&apos;t find answers matching &quot;{searchQuery}
                &quot;. Try different keywords or browse all categories below.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-accent hover:text-primary transition-colors font-semibold"
              >
                Clear search
              </button>
            </div>
          ) : (
            // FAQ Categories
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryFAQs = groupedFAQs[category];
                if (!categoryFAQs || categoryFAQs.length === 0) return null;

                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                      {category}
                    </h2>

                    <div className="space-y-4">
                      {categoryFAQs.map((faq) => (
                        <div
                          key={faq.id}
                          className="bg-card border border-border rounded-lg hover:border-primary/50 transition-colors overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedId(
                                expandedId === faq.id ? null : faq.id,
                              )
                            }
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors text-left"
                          >
                            <span className="font-semibold text-foreground pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                expandedId === faq.id ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedId === faq.id && (
                            <div className="px-6 py-4 border-t border-border bg-card/50">
                              <p className="text-foreground/80 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            We&apos;re here to help! Reach out to our support team and
            we&apos;ll get back to you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Contact Support
            </Link>
            <Link
              href="/courses"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
