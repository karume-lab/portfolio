import * as React from "react";
import { cn } from "@/lib/utils";

/* H1 */
export const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-12 mb-6",
      className
    )}
    {...props}
  />
));
TypographyH1.displayName = "TypographyH1";

/* H2 */
export const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "scroll-m-20 text-3xl font-semibold tracking-tight mt-10 mb-4",
      className
    )}
    {...props}
  />
));
TypographyH2.displayName = "TypographyH2";

/* H3 */
export const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-3",
      className
    )}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";

/* H4 */
export const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2", className)}
    {...props}
  />
));
TypographyH4.displayName = "TypographyH4";

/* H5 */
export const TypographyH5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("scroll-m-20 text-lg font-semibold tracking-tight mt-4 mb-1", className)}
    {...props}
  />
));
TypographyH5.displayName = "TypographyH5";

/* H6 */
export const TypographyH6 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn("scroll-m-20 text-base font-semibold tracking-tight mt-4 mb-1", className)}
    {...props}
  />
));
TypographyH6.displayName = "TypographyH6";

/* Paragraph */
export const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-7", className)} {...props} />
));
TypographyP.displayName = "TypographyP";

/* Blockquote */
export const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("mt-6 mb-6 border-l-2 pl-6 italic text-muted-foreground", className)}
    {...props}
  />
));
TypographyBlockquote.displayName = "TypographyBlockquote";

/* Inline Code */
export const TypographyInlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm font-mono",
      className
    )}
    {...props}
  />
));
TypographyInlineCode.displayName = "TypographyInlineCode";

/* Lead */
export const TypographyLead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xl text-muted-foreground mt-4 mb-4", className)}
    {...props}
  />
));
TypographyLead.displayName = "TypographyLead";

/* Large */
export const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-lg font-semibold mt-4 mb-4", className)} {...props} />
));
TypographyLarge.displayName = "TypographyLarge";

/* Small */
export const TypographySmall = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <small
    ref={ref}
    className={cn("text-sm font-medium leading-none mt-2 mb-2", className)}
    {...props}
  />
));
TypographySmall.displayName = "TypographySmall";

/* Muted */
export const TypographyMuted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground mt-2 mb-2", className)} {...props} />
));
TypographyMuted.displayName = "TypographyMuted";

/* Unordered List */
export const TypographyUL = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("mt-6 mb-6 ml-6 list-disc [&>li]:mt-2", className)}
    {...props}
  />
));
TypographyUL.displayName = "TypographyUL";


/* Ordered List */
export const TypographyOL = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("mt-6 mb-6 ml-6 list-decimal [&>li]:mt-2", className)}
    {...props}
  />
));
TypographyOL.displayName = "TypographyOL";

/* Table */
export const TypographyTable = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn(
      "w-full caption-bottom text-sm border-collapse mt-6 mb-6 [&_th]:font-semibold [&_td]:p-2 [&_th]:p-2 [&_tr]:border-b",
      className
    )}
    {...props}
  />
));
TypographyTable.displayName = "TypographyTable";
