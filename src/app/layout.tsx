import type { Metadata } from "next";
import { DM_Sans, Urbanist } from "next/font/google";

import "./globals.css";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: `${site.brand.name} — Consultoria em Engenharia de Software, Cloud e DevOps`,
  description: site.hero.description,
  icons: [{ rel: "icon", url: "/logo.png" }],
  openGraph: {
    title: `${site.brand.name} — Engenharia & Performance em Tecnologia`,
    description: site.hero.description,
    type: "website",
  },
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn(dmSans.variable, urbanist.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

