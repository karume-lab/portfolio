import { Code2, Globe, Server, Smartphone, Users } from "lucide-react";
import type { TimelineElement } from "@/components/ui/timeline";

export const experiences: TimelineElement[] = [
  {
    id: 12,
    title: "Backend Developer - Rastuc Technologies Limited",
    date: "Jun 2024 - Nov 2024",
    description: `
Maintained and built new endpoints for Django APIs using Strawberry GraphQL.
Wrote unit tests and updated API documentation.`,
    status: "completed",
    icon: <Server />,
  },
  {
    id: 11,
    title: "Frontend Developer - Rastuc Technologies Limited",
    date: "Jul 2024 - Sep 2025",
    description: `
Built responsive web interfaces using Next.js, styled with Mantine UI.
Connected components to backend services using Apollo Client and GraphQL.`,
    status: "completed",
    icon: <Code2 />,
  },
  {
    id: 10,
    title: "Web Developer - CodeYetu",
    date: "May 2025 - Present",
    description: `
Built and maintained the platform for Code Yetu hackathons using Next.js and Express.
Handled end-to-end integration for project submissions and user registration.`,
    status: "in-progress",
    icon: <Globe />,
  },
  {
    id: 9,
    title: "Lead Mobile Developer - Rastuc Technologies Limited",
    date: "May 2025 - Sep 2025",
    description: `
Built, styled, and deployed cross-platform mobile apps using React Native.
Managed builds, key store signing, and published updates to the Play Store.`,
    status: "completed",
    icon: <Smartphone />,
  },
  {
    id: 8,
    title: "Web Development Trainer - CodeYetu",
    date: "Oct 2025 - Present",
    description: `
Designed and delivered beginner-friendly lessons covering HTML, CSS, JavaScript.
Guided students through practical projects to build confidence and problem-solving skills.`,
    status: "in-progress",
    icon: <Users />,
  },
  {
    id: 7,
    title: "Mobile & Web Developer - Baykart",
    date: "Oct 2025 - Dec 2025",
    description: `
Refactored the React Native app for better performance and maintainability.
Refactored the admin dashboard using TanStack Router and Mantine UI.`,
    status: "completed",
    icon: <Smartphone />,
  },
  {
    id: 6,
    title: "Full-Stack Developer - Semantrix",
    date: "Mar 2026 - Present",
    description: `
Built a browser extension to fix web accessibility issues for screen readers.
Integrated LangChain to automatically parse and improve dynamic web page elements.`,
    status: "in-progress",
    icon: <Code2 />,
  },
  {
    id: 5,
    title: "Mobile Developer - Xapxap",
    date: "May 2026 - Present",
    description: `
Built features for a cross-platform social media app using React Native.
Configured local offline data sync with Drizzle ORM and Supabase.`,
    status: "in-progress",
    icon: <Smartphone />,
  },
  {
    id: 4,
    title: "Full-Stack & DevOps Engineer - Hailerz",
    date: "May 2026 - Present",
    description: `
Built a community and marketplace platform featuring creator tools.
Integrated Paystack payment channels and configured user authentication using Better Auth.`,
    status: "in-progress",
    icon: <Server />,
  },
  {
    id: 3,
    title: "Full-Stack & DevOps Engineer - Vaunt",
    date: "May 2026 - Present",
    description: `
Built a multi-tenant e-commerce platform using Next.js, Mantine UI, and ElysiaJS.
Managed schemas and pipelines with Drizzle ORM, Docker, and Caddy.`,
    status: "in-progress",
    icon: <Server />,
  },
  {
    id: 2,
    title: "Software Developer - JKUAT",
    date: "Jun 2026 - Aug 2026",
    description: `
Redesigned and improved web interfaces using Next.js and shadcn/ui.
Connected client components to an ElysiaJS backend using Eden RPC for type-safe API communication.`,
    status: "completed",
    icon: <Code2 />,
  },
  {
    id: 1,
    title: "Full-Stack Engineer - LastMile",
    date: "Jul 2026 - Jul 2026",
    description: `
Built a cashless, borderless cross-border transfer platform backed by the Stellar Blockchain network.
Integrated Africa's Talking USSD APIs with an Express backend for feature phone users.`,
    status: "completed",
    icon: <Globe />,
  },
];
