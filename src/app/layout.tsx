import "@/styles";

import { Geist, Geist_Mono } from "next/font/google";
import ChangeMetadataTitleOnBlur from "@/components/core/ChangeMetadataTitleOnBlur";
import SEOConfig, { metadataConfig } from "@/components/core/SEOConfig";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = metadataConfig;

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

import { NuqsAdapter } from "nuqs/adapters/next/app";

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <SEOConfig />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        id="root"
      >
        <NuqsAdapter>
          <ChangeMetadataTitleOnBlur />
          <Toaster richColors />
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;
