import type { Route } from "next";

export interface Technology {
  logoPath: string;
  href: Route;
  label: string;
}

export const TECHNOLOGIES: Technology[] = [
  // Web Development (Core Frontend)
  {
    href: "https://developer.mozilla.org/docs/Web/HTML",
    logoPath: "/technologies/html.png",
    label: "HTML",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/CSS",
    logoPath: "/technologies/css.png",
    label: "CSS",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    logoPath: "/technologies/javascript.png",
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/",
    logoPath: "/technologies/typescript.png",
    label: "TypeScript",
  },
  {
    href: "https://react.dev/",
    logoPath: "/technologies/react.png",
    label: "React.js",
  },
  {
    href: "https://nextjs.org/",
    logoPath: "/technologies/next.png",
    label: "Next.js",
  },
  {
    href: "https://next-auth.js.org/",
    logoPath: "/technologies/next-auth.png",
    label: "NextAuth",
  },
  {
    href: "https://tailwindcss.com/",
    logoPath: "/technologies/tailwind.png",
    label: "Tailwind CSS",
  },
  {
    href: "https://mantine.dev/",
    logoPath: "/technologies/mantine.png",
    label: "Mantine UI",
  },
  {
    href: "https://ui.shadcn.com/",
    logoPath: "/technologies/shadcn.png",
    label: "shadcn/ui",
  },
  {
    href: "https://ui.ahmedbna.com/",
    logoPath: "/technologies/bna-ui.png",
    label: "BNA UI",
  },
  {
    href: "https://zustand-demo.pmnd.rs/",
    logoPath: "/technologies/zustand.png",
    label: "Zustand",
  },
  {
    href: "https://zod.dev/",
    logoPath: "/technologies/zod.png",
    label: "Zod",
  },

  // Mobile Development
  {
    href: "https://expo.dev/",
    logoPath: "/technologies/expo.png",
    label: "Expo",
  },
  {
    href: "https://reactnativereusables.com/",
    logoPath: "/technologies/react-native-reusables.png",
    label: "React Native Reusables",
  },

  // Backend & Frameworks
  {
    href: "https://nodejs.org/",
    logoPath: "/technologies/node.png",
    label: "Node.js",
  },
  {
    href: "https://expressjs.com/",
    logoPath: "/technologies/express.png",
    label: "Express.js",
  },
  {
    href: "https://nestjs.com/",
    logoPath: "/technologies/nest.png",
    label: "NestJS",
  },
  {
    href: "https://www.djangoproject.com/",
    logoPath: "/technologies/django.png",
    label: "Django",
  },
  {
    href: "https://www.django-rest-framework.org/",
    logoPath: "/technologies/drf.png",
    label: "Django REST Framework",
  },
  {
    href: "https://orpc.unnoq.com/",
    logoPath: "/technologies/orpc.png",
    label: "ORPC",
  },

  // Databases & ORM
  {
    href: "https://www.postgresql.org/",
    logoPath: "/technologies/postgres.png",
    label: "PostgreSQL",
  },
  {
    href: "https://www.mysql.com/",
    logoPath: "/technologies/mysql.png",
    label: "MySQL",
  },
  {
    href: "https://orm.drizzle.team/",
    logoPath: "/technologies/drizzle.png",
    label: "Drizzle ORM",
  },
  {
    href: "https://www.prisma.io/",
    logoPath: "/technologies/prisma.png",
    label: "Prisma",
  },

  // Authentication
  {
    href: "https://www.better-auth.com/",
    logoPath: "/technologies/better-auth.png",
    label: "Better Auth",
  },

  // Tooling & Package Managers
  {
    href: "https://www.npmjs.com/",
    logoPath: "/technologies/npm.png",
    label: "npm",
  },
  {
    href: "https://bun.sh/",
    logoPath: "/technologies/bun.png",
    label: "Bun",
  },
  {
    href: "https://git-scm.com/",
    logoPath: "/technologies/git.png",
    label: "Git",
  },
  {
    href: "https://github.com/",
    logoPath: "/technologies/github.png",
    label: "GitHub",
  },
  {
    href: "https://github.com/features/actions",
    logoPath: "/technologies/github-actions.png",
    label: "GitHub Actions",
  },
  {
    href: "https://www.docker.com/",
    logoPath: "/technologies/docker.png",
    label: "Docker",
  },
  {
    href: "https://nginx.org/",
    logoPath: "/technologies/nginx.png",
    label: "Nginx",
  },
  {
    href: "https://www.postman.com/",
    logoPath: "/technologies/postman.png",
    label: "Postman",
  },

  // Code Quality / Formatting
  {
    href: "https://biomejs.dev/",
    logoPath: "/technologies/biome.png",
    label: "Biome",
  },
  {
    href: "https://eslint.org/",
    logoPath: "/technologies/eslint.png",
    label: "ESLint",
  },
  {
    href: "https://prettier.io/",
    logoPath: "/technologies/prettier.png",
    label: "Prettier",
  },

  // Blockchain & Web3
  {
    href: "https://soliditylang.org/",
    logoPath: "/technologies/solidity.png",
    label: "Solidity",
  },
  {
    href: "https://hardhat.org/",
    logoPath: "/technologies/hardhat.png",
    label: "Hardhat.js",
  },

  // OS, Scripting & Programming Languages
  {
    href: "https://archlinux.org/",
    logoPath: "/technologies/arch-linux.png",
    label: "i use arch btw",
  },
  {
    href: "https://hyprland.org/",
    logoPath: "/technologies/hyprland.png",
    label: "Hyprland",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    logoPath: "/technologies/bash.png",
    label: "Bash Scripting",
  },
  {
    href: "https://www.python.org/",
    logoPath: "/technologies/python.png",
    label: "Python",
  },

  // Project Management
  {
    href: "https://www.atlassian.com/software/jira",
    logoPath: "/technologies/jira.png",
    label: "Jira",
  },
  {
    href: "https://trello.com/",
    logoPath: "/technologies/trello.png",
    label: "Trello",
  },
];
