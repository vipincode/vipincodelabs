// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Github,
//   Youtube,
//   MessageSquare,
//   Clock,
// } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navigation spacing */}
//       <div className="h-20" />

//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
//             <span className="text-foreground">Get in </span>
//             <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//               Touch
//             </span>
//           </h1>
//           <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
//             Have a question about our courses or want to collaborate? We&apos;d
//             love to hear from you. Reach out to us anytime.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {/* Email */}
//             <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
//                 <Mail className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Email
//               </h3>
//               <a
//                 href="mailto:contact@vipincodelabs.com"
//                 className="text-accent hover:text-primary transition-colors"
//               >
//                 contact@vipincodelabs.com
//               </a>
//               <p className="text-foreground/60 text-sm mt-3">
//                 We&apos;ll respond within 24 hours
//               </p>
//             </div>

//             {/* Phone */}
//             <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
//                 <Phone className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Phone
//               </h3>
//               <a
//                 href="tel:+919876543210"
//                 className="text-accent hover:text-primary transition-colors"
//               >
//                 +91 98765 43210
//               </a>
//               <p className="text-foreground/60 text-sm mt-3">
//                 Mon - Fri, 10 AM - 6 PM IST
//               </p>
//             </div>

//             {/* Location */}
//             <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
//                 <MapPin className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Location
//               </h3>
//               <p className="text-accent">Bangalore, India</p>
//               <p className="text-foreground/60 text-sm mt-3">
//                 Visit us or connect remotely
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Form */}
//             <div className="lg:col-span-2">
//               <h2 className="text-3xl font-bold mb-8 text-foreground">
//                 Send us a message
//               </h2>

//               {submitted ? (
//                 <div className="bg-primary/20 border border-primary rounded-xl p-8 text-center">
//                   <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
//                     <MessageSquare className="w-6 h-6 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-foreground mb-2">
//                     Message Sent!
//                   </h3>
//                   <p className="text-foreground/70">
//                     Thanks for reaching out. We&apos;ll get back to you shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Vipin Kumar"
//                         className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="you@example.com"
//                         className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="block text-sm font-medium text-foreground mb-2"
//                     >
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       placeholder="How can we help?"
//                       className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-foreground mb-2"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       placeholder="Tell us more about your inquiry..."
//                       rows={6}
//                       className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Sidebar with Quick Links */}
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">
//                   Quick Response
//                 </h3>
//                 <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
//                   <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-foreground">
//                       Average Response Time
//                     </p>
//                     <p className="text-sm text-foreground/60">
//                       Within 24 hours
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">
//                   Connect on Social
//                 </h3>
//                 <div className="space-y-3">
//                   <a
//                     href="#"
//                     className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
//                   >
//                     <Youtube className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
//                     <span className="text-foreground/70 group-hover:text-foreground text-sm">
//                       YouTube
//                     </span>
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
//                   >
//                     <Twitter className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
//                     <span className="text-foreground/70 group-hover:text-foreground text-sm">
//                       Twitter/X
//                     </span>
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
//                   >
//                     <Linkedin className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
//                     <span className="text-foreground/70 group-hover:text-foreground text-sm">
//                       LinkedIn
//                     </span>
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
//                   >
//                     <Github className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
//                     <span className="text-foreground/70 group-hover:text-foreground text-sm">
//                       GitHub
//                     </span>
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">FAQ</h3>
//                 <Link
//                   href="#"
//                   className="text-accent hover:text-primary text-sm transition-colors"
//                 >
//                   Check our FAQs
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-foreground">
//               Meet Our Team
//             </h2>
//             <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//               The passionate educators and developers behind Vipin Code Labs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Team Member 1 */}
//             <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-foreground">
//                 VK
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-1">
//                 Vipin Kumar
//               </h3>
//               <p className="text-accent mb-4">Founder & Lead Instructor</p>
//               <p className="text-foreground/70 text-sm mb-6">
//                 Full-stack developer with 10+ years of experience. Passionate
//                 about teaching web development and building tools that help
//                 developers learn faster.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Team Member 2 */}
//             <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-foreground">
//                 AS
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-1">
//                 Arjun Singh
//               </h3>
//               <p className="text-accent mb-4">React Specialist</p>
//               <p className="text-foreground/70 text-sm mb-6">
//                 Expert in modern React patterns and performance optimization.
//                 Creates engaging video content for our React course series.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Team Member 3 */}
//             <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
//               <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-foreground">
//                 PS
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-1">
//                 Priya Sharma
//               </h3>
//               <p className="text-accent mb-4">Community Manager</p>
//               <p className="text-foreground/70 text-sm mb-6">
//                 Builds and nurtures our amazing learning community. Ensures
//                 every student gets the support they need to succeed.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-foreground/60 hover:text-primary transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6 text-foreground">
//             Ready to Start Learning?
//           </h2>
//           <p className="text-lg text-foreground/70 mb-8">
//             Join thousands of students already mastering web development with
//             Vipin Code Labs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/signup"
//               className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
//             >
//               Sign Up Now
//             </Link>
//             <Link
//               href="/courses"
//               className="border-2 border-primary text-primary hover:bg-primary hover:text-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200"
//             >
//               Explore Courses
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";

export default function ContactUs() {
  return <div>Contact us</div>;
}
