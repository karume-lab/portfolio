# Portfolio Website

A modern, full-featured portfolio website built with Next.js, React, and TypeScript.

## Features

- **Portfolio Showcase**: Display your projects with descriptions and links
- **Blog System**: MDX-powered blogging with syntax highlighting
- **Resume & Experience**: Timeline view of your professional experience
- **Certifications Grid**: Organized display of your certifications
- **Contact Form**: Email-based contact system using Nodemailer
- **Business Card**: Digital business card with QR code
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **SEO Optimized**: Sitemap, robots.txt, Open Graph images, and Twitter card support
- **Smooth Animations**: Framer Motion for beautiful transitions

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.7
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Code Quality**: [Biome](https://biomejs.dev/) for linting and formatting
- **Icons**: [Lucide React](https://lucide.dev/) + [Simple Icons](https://simpleicons.org/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── (pages)/        # Page routes with layout
│   ├── api/            # API routes (contact form, etc.)
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── core/          # Core reusable components
│   ├── home/          # Home page components
│   ├── blogs/         # Blog-related components
│   ├── projects/      # Project showcase components
│   ├── rates/         # Pricing calculator components
│   └── ui/            # Shadcn UI component library
├── data/              # Static data
│   ├── certifications.ts
│   ├── experiences.ts
│   ├── projects.ts
│   ├── rates.ts
│   └── ...
├── lib/               # Utilities and helpers
│   ├── blogs.tsx     # Blog processing
│   ├── pricing.ts    # Pricing logic
│   └── utils.ts      # General utilities
├── hooks/             # React hooks
└── styles/            # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- bun or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karume-lab/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables (if needed for email):
```bash
# Create a .env.local file with your configuration
```

### Development

Start the development server with Turbopack:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building

```bash
bun run build
bun start
```

### Code Quality

Format your code with Biome:
```bash
bun run format
```

Lint your code:
```bash
bun run lint
```
