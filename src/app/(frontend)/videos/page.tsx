"use client";

import { Calendar, Clock, Play, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const videos = [
    {
      id: 1,
      title: "React Hooks Explained - useState & useEffect",
      description:
        "Learn how React hooks work and master useState and useEffect for managing component state and side effects.",
      category: "React",
      duration: "15:32",
      date: "2024-03-15",
      views: "12.5K",
      thumbnail: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "TypeScript Generics Deep Dive",
      description:
        "Master TypeScript generics for creating reusable and type-safe components and functions.",
      category: "TypeScript",
      duration: "22:15",
      date: "2024-03-14",
      views: "8.3K",
      thumbnail: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Building a Full Stack App with Next.js 14",
      description:
        "Create a complete full-stack application with Next.js 14, including API routes and database integration.",
      category: "Next.js",
      duration: "45:20",
      date: "2024-03-12",
      views: "18.9K",
      thumbnail: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use Each",
      description:
        "Understanding the differences between CSS Grid and Flexbox and how to choose the right one for your layout.",
      category: "CSS",
      duration: "18:45",
      date: "2024-03-10",
      views: "25.1K",
      thumbnail: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "React Context API for State Management",
      description:
        "Learn how to use React Context API for managing global state without external libraries.",
      category: "React",
      duration: "19:30",
      date: "2024-03-08",
      views: "14.2K",
      thumbnail: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Web Performance Optimization Techniques",
      description:
        "Improve your website performance with practical optimization techniques and tools.",
      category: "Performance",
      duration: "27:15",
      date: "2024-03-06",
      views: "9.8K",
      thumbnail: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "JavaScript Async/Await Mastery",
      description:
        "Master async/await for handling asynchronous operations and promises in JavaScript.",
      category: "JavaScript",
      duration: "21:10",
      date: "2024-03-04",
      views: "16.5K",
      thumbnail: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Docker for Developers: Getting Started",
      description:
        "Introduction to Docker and containerization for web development projects.",
      category: "DevOps",
      duration: "33:45",
      date: "2024-03-02",
      views: "11.3K",
      thumbnail: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "Testing React Components with Jest",
      description:
        "Learn how to write effective unit tests for React components using Jest and React Testing Library.",
      category: "Testing",
      duration: "26:50",
      date: "2024-02-28",
      views: "7.6K",
      thumbnail: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 10,
      title: "REST APIs vs GraphQL: Choose Wisely",
      description:
        "Compare REST APIs and GraphQL architectures to understand when to use each approach.",
      category: "Backend",
      duration: "24:30",
      date: "2024-02-26",
      views: "13.1K",
      thumbnail: "bg-gradient-to-br from-rose-500/20 to-red-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 11,
      title: "Custom React Hooks - Build Your Own",
      description:
        "Create reusable logic with custom React hooks for cleaner and more maintainable components.",
      category: "React",
      duration: "20:15",
      date: "2024-02-24",
      views: "10.2K",
      thumbnail: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 12,
      title: "SEO Best Practices for Modern Web Apps",
      description:
        "Implement SEO best practices in your modern web applications for better search engine visibility.",
      category: "SEO",
      duration: "19:45",
      date: "2024-02-22",
      views: "8.9K",
      thumbnail: "bg-gradient-to-br from-lime-500/20 to-green-500/20",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const categories = [
    "all",
    ...Array.from(new Set(videos.map((v) => v.category))),
  ];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === "all" || video.category === selectedCategory;
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Video Library
          </h1>
          <p className="text-lg text-foreground/70">
            {filteredVideos.length}{" "}
            {filteredVideos.length === 1 ? "video" : "videos"} available
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border py-8 sticky top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative h-40 ${video.thumbnail} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <span className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                        {video.category}
                      </span>
                      <span className="text-xs text-foreground/60">
                        {video.views} views
                      </span>
                    </div>

                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-pretty">
                      {video.title}
                    </h3>

                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(video.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <Link
                          href={`#video-${video.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const modal = document.getElementById(
                              `modal-${video.id}`,
                            );
                            if (modal) modal.click();
                          }}
                        >
                          Watch
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No videos found
              </h3>
              <p className="text-foreground/70">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
