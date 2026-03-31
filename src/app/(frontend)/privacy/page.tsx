"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70 text-lg">Last updated: March 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Introduction
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Vipin Code Labs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;
              or &quot;Company&quot;) operates the vipincodelabs.com website
              (hereinafter referred to as the &quot;Service&quot;).
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data. This Privacy
              Policy for Vipin Code Labs is created to better serve those who
              are concerned with how their &quot;Personally Identifiable
              Information&quot; (PII) is being used online.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Information Collection and Use
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground/90">
              Types of Data Collected
            </h3>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">
                  Personal Data
                </h4>
                <p className="text-foreground/80 mb-3">
                  While using our Service, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you (&quot;Personal Data&quot;). This
                  may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">
                  Usage Data
                </h4>
                <p className="text-foreground/80">
                  We may also collect information about how you access and use
                  the Service (&quot;Usage Data&quot;). This may include
                  information such as your computer&apos;s Internet Protocol
                  address (e.g. IP address), browser type, browser version, the
                  pages you visit, the time and date of your visit, the time
                  spent on those pages, and other diagnostic data.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">
                  Tracking & Cookies Data
                </h4>
                <p className="text-foreground/80 mb-3">
                  We use cookies and similar tracking technologies to track
                  activity on our Service and we hold certain information. You
                  can instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
                <p className="text-foreground/80">
                  Examples of Cookies we use include: Session Cookies (We use
                  Session Cookies to operate our Service), Preference Cookies
                  (We use Preference Cookies to remember your preferences and
                  various settings).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Use of Data
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Vipin Code Labs uses the collected data for various purposes:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To provide and maintain our Service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To notify you about changes to our Service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  To allow you to participate in interactive features of our
                  Service when you choose to do so
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To provide customer care and support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  To gather analysis or valuable information to improve our
                  Service
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To monitor the usage of our Service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  To detect, prevent and address technical and security issues
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Security of Data
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Changes to This Privacy Policy
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date at the top of this
              Privacy Policy.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Contact Us
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                privacy@vipincodelabs.com
              </p>
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold text-foreground">Website:</span>{" "}
                vipincodelabs.com
              </p>
              <p className="text-foreground/80">
                <span className="font-semibold text-foreground">Address:</span>{" "}
                India
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
