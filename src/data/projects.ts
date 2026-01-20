import type { Route } from "next";

export interface Project {
  title: string;
  description: string;
  thumbnailPath: string;
  gitHubUrl?: Route;
  projectUrl?: Route;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Seiyuu",
    description: `
The "Shazam for Anime" - a voice recognition ecosystem.
Features a consumer-facing mobile app built with React Native for recording and identifying Japanese voice actors (Seiyuu) in real-time.
Powered by a high-performance Python backend leveraging deep learning and vector similarity search for precise audio fingerprinting.`,
    thumbnailPath: "/projects/seiyuu.png",
    gitHubUrl: "https://github.com/Karume-lab/seiyuu-base",
    projectUrl: "https://seiyuu-app.vercel.app/",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "PyTorch",
      "Qdrant",
      "FFmpeg",
      "Docker",
    ],
  },
  {
    title: "Tawi",
    description: `
An interactive climate education platform that gamifies learning about trees and environmental conservation.  
Users complete lessons, earn points (Matawi), collect badges, and join a growing community committed to real-world impact.  
Includes a responsive web app built with modern UI, and a backend designed to support progress tracking, streaks, and partner-driven environmental actions.`,
    thumbnailPath: "/projects/tawi.png",
    gitHubUrl: "https://github.com/Karume-lab/tawi",
    projectUrl: "https://tawi-ke.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Mantine UI",
      "Zod",
      "Biome",
      "CSS Modules",
      "PostgreSQL",
      "React Hook Form",
      "Typescript",
      "oRPC",
    ],
  },
  {
    title: "Sharahub",
    description: `
A digital affiliate marketing platform enabling users to promote products and track referrals.  
Includes authentication, affiliate dashboards, commission tracking, and reporting tools for marketers and businesses.`,
    thumbnailPath: "/projects/sharahub.png",
    projectUrl: "https://sharahub.vercel.app/",
    technologies: [
      "Next.js",
      "Zod",
      "Mantine UI",
      "CSS Modules",
      "Django",
      "DRF",
      "NextAuth",
      "Python",
      "Typescript",
    ],
  },
  {
    title: "Rastuc",
    description: `
A full-stack healthcare platform connecting doctors and patients.  
Patients can browse and book doctors with ease, while doctors manage their schedules, appointments, and records through intuitive dashboards.  
The system also includes AI-powered search, analytics, and an admin portals for management.`,
    projectUrl: "https://www.rastuc.com/",
    thumbnailPath: "/projects/rastuc.png",
    technologies: [
      "Next.js",
      "Apollo",
      "Tailwind CSS",
      "Mantine UI",
      "shadcn/ui",
      "CSS Modules",
      "Zod",
      "React Hook Form",
      "ESLint",
      "Prettier",
      "Typescript",
    ],
  },
  {
    title: "ORPC Todo",
    description: `
  A minimal full-stack Todo app.
  Implements a type-safe RPC architecture for seamless client-server communication and a simple SQLite database for persistent storage.  
  Includes a dedicated page for sending emails using Nodemailer, demonstrating server-side actions and input validation with Zod.`,
    thumbnailPath: "/projects/orpc-todo-app.png",
    gitHubUrl: "https://github.com/Karume-lab/orpc-todo-app",
    technologies: [
      "Next.js",
      "TypeScript",
      "ORPC",
      "React",
      "Tailwind CSS",
      "Drizzle ORM",
      "Better-SQLite3",
      "Zod",
      "React Query",
      "Nodemailer",
      "Biome",
    ],
  },
  {
    title: "Taska",
    description: `
A minimalist to-do application designed for focus and simplicity.  
Provides a distraction-free interface for creating, tracking, and managing tasks, with smooth animations and a clean design system.`,
    thumbnailPath: "/projects/work-in-progress.png",
    gitHubUrl: "https://github.com/Karume-lab/taska",
    technologies: ["BNA UI", "Typescript"],
  },
  {
    title: "Rastuc Member",
    description: `
A mobile app for users using Rastuc focusing on the patient features.  
Enables users to book doctors, view and manage their appointments, and access healthcare services on the go.  
`,
    thumbnailPath: "/projects/work-in-progress.png",
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.rastuc_technologies.rastuc_patient",
    technologies: [
      "React Native",
      "React Native Reusables",
      "Expo",
      "Nativewind",
      "Apollo",
      "Zod",
      "Zustand",
      "ESLint",
      "Typescript",
      "Prettier",
      "React Hook Form",
      "React Native Actions Sheet",
    ],
  },
  {
    title: "Loans",
    description: `
A modern loan application platform that makes borrowing simple, fast, and transparent.
Users can apply for loans online, track their application status, and manage repayments with ease.  
Designed with accessibility and trust in mind, this platform helps individuals get the financial support they need to achieve their goals.`,

    thumbnailPath: "/projects/loans.png",
    projectUrl: "https://loans.starbasemedia.co.ke/",
    technologies: [
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Typescript",
      "NextAuth",
    ],
  },

  {
    title: "Tushirikiane",
    description: `
An open-source collaboration and task management platform inspired by Trello.  
Supports boards, lists, and cards to help teams organize projects, assign tasks and track progress.`,
    thumbnailPath: "/projects/tushirikiane.png",
    gitHubUrl: "https://github.com/gonpenta/tushirikiane/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Kids Beyond Limit",
    description: `
An NGO website supporting children through educational programs and resources.  
Highlights initiatives and shares stories.`,
    thumbnailPath: "/projects/kids-beyond-limit.png",
    projectUrl: "https://www.kidsbeyondlimit.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Kellian Enterprise",
    description: `
A professional automotive garage website showcasing services, bookings, and company information.  
Built for speed, SEO, and responsiveness, giving customers a smooth experience while exploring offerings.`,
    thumbnailPath: "/projects/kellian-enterprise.png",
    projectUrl: "https://www.kellianenterprise.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Vault",
    description: `
A decentralized file storage platform built on blockchain technology.  
Provides secure, tamper-proof storage where users can upload, organize, and share files with ownership guaranteed on Web3.  
Think of it as a blockchain-powered alternative to Google Drive.`,
    thumbnailPath: "/projects/vault.png",
    gitHubUrl: "https://github.com/Karume-lab/Vault-FE",
    projectUrl: "https://github.com/Karume-lab/Vault-FE/blob/main/README.md",
    technologies: [
      "React.js",
      "Solidity",
      "Tailwind CSS",
      "Hardhat.js",
      "Javascript",
    ],
  },
];
