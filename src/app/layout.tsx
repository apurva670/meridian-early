import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/next";
import { CSPostHogProvider } from "@/components/posthog-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Meridian Compass | Institutional Market Frameworks",
  description:
    "Learn to read structure, momentum, and narrative the way institutional PMs do — frameworks refined over 30+ years managing 100's of millions across FX, crypto, and global futures.",
  keywords: [
    "FX trading",
    "crypto trading",
    "futures",
    "institutional trading",
    "market analysis",
    "trading frameworks",
  ],
  authors: [{ name: "Mark Schaefer" }],
  openGraph: {
    title: "Meridian Compass | Institutional Market Frameworks",
    description:
      "Join the waitlist for institutional-grade FX, crypto, and futures analysis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@schaef45809",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
