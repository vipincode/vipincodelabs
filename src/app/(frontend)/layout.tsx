import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/next-theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipincodelabs.com"),

  icons: {
    icon: "/favicon.ico",
  },

  title: {
    default:
      "Vipin Code Labs | Learn Web Development by Building Real Projects",
    template: "%s | Vipin Code Labs",
  },

  description:
    "Learn from industry experts. Build real projects. Launch your web development career with hands-on tutorials covering React, TypeScript, Next.js, and modern web technologies.",

  keywords: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "Programming Tutorials",
  ],

  authors: [{ name: "Vipin Singh" }],
  creator: "Vipin Singh",

  openGraph: {
    title: "Vipin Code Labs",
    description:
      "Learn web development by building real-world projects with React, TypeScript, and Next.js.",
    url: "https://vipincodelabs.com",
    siteName: "Vipin Code Labs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vipin Code Labs",
    description:
      "Learn web development with real projects and modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
