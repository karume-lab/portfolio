import AnimatedCursor from "react-animated-cursor";
import {
  BackToTopButton,
  BlogsProvider,
  Footer,
  NavigationPill,
  ScrollProgress,
} from "@/components";
import OpenInLargeScreenPopover from "@/components/core/OpenInLargeScreenPopover";
import { getBlogs } from "@/lib/blogs";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default async function PagesLayout({ children }: PagesLayoutProps) {
  const blogs = await getBlogs();

  return (
    <BlogsProvider blogs={blogs}>
      <NavigationPill />
      <div className="hidden lg:block">
        <AnimatedCursor
          color="0, 0, 0"
          innerSize={24}
          outerSize={48}
          outerScale={1.5}
          trailingSpeed={8}
        />
      </div>
      <ScrollProgress />
      <BackToTopButton />
      <OpenInLargeScreenPopover />
      <main className="flex-1">{children}</main>
      <Footer />
    </BlogsProvider>
  );
}
