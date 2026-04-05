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
        <ChangeMetadataTitleOnBlur />
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
