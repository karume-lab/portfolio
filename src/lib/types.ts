export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  caption?: string;
  tags: string[];
  "TL;DR": string;
  readingTime: string;
}
