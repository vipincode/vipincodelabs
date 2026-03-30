"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-foreground/70 text-lg">Last updated: March 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              1. Agreement to Terms
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              By accessing and using this website and our services, you accept
              and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service. Vipin Code Labs reserves the right to make
              changes to our site and these terms and conditions at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              2. Use License
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Vipin Code Labs&apos;s
              website for personal, non-commercial transitory viewing only. This
              is the grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Modify or copying the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Using the materials for any commercial purpose or for any
                  public display
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Attempting to decompile or reverse engineer any software
                  contained on Vipin Code Labs&apos;s website
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Removing any copyright or other proprietary notations from the
                  materials
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Transferring the materials to another person or
                  &quot;mirroring&quot; the materials on any other server
                </span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Vipin Code Labs at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              3. Disclaimer
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              The materials on Vipin Code Labs&apos;s website are provided
              &quot;as is&quot;. Vipin Code Labs makes no warranties, expressed
              or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Further, Vipin Code Labs does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its Internet web site
              or otherwise relating to such materials or on any sites linked to
              this site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              4. Limitations
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              In no event shall Vipin Code Labs or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption,) arising out of
              the use or inability to use the materials on Vipin Code
              Labs&apos;s website, even if Vipin Code Labs or a Vipin Code Labs
              authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              5. Accuracy of Materials
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              The materials appearing on Vipin Code Labs&apos;s website could
              include technical, typographical, or photographic errors. Vipin
              Code Labs does not warrant that any of the materials on its
              website are accurate, complete, or current. Vipin Code Labs may
              make changes to the materials contained on its website at any time
              without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              6. Links
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Vipin Code Labs has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Vipin Code Labs of the site. Use of any such linked website is at
              the user&apos;s own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              7. Modifications
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Vipin Code Labs may revise these terms of service for its website
              at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of
              service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              8. Governing Law
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              9. User Accounts
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. Failure to
              do so constitutes a breach of the Terms, which may result in
              immediate termination of your account on our Service.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You are responsible for safeguarding the password that you use to
              access the Service and you are fully responsible for all
              activities that occur under your account. You must immediately
              notify Vipin Code Labs of any unauthorized uses of your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              10. Content and Intellectual Property
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              All content included in the Service, including but not limited to
              text, graphics, logos, images, audio clips, and software, is the
              property of Vipin Code Labs or its content suppliers and is
              protected by international copyright laws.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You agree that you will not reproduce, duplicate, copy, sell,
              resell or exploit any portion of the Service, use of the Service,
              or access to the Service without the express written permission of
              Vipin Code Labs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              11. User Conduct
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              You agree that you will not:
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Engage in any conduct that restricts or inhibits anyone&apos;s
                  use or enjoyment of the Service
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Post, upload, or transmit any unlawful, threatening, abusive,
                  defamatory, obscene, or otherwise objectionable material
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Harass, abuse, or harm another person</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>
                  Impersonate any person or entity, including any employee or
                  representative of Vipin Code Labs
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              12. Contact Information
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                support@vipincodelabs.com
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
