import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#19354A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ESA Letter Colorado | Licensed Therapist Evaluation",
    template: "%s | ESA Letter Colorado",
  },
  description:
    "Get a Colorado ESA letter from a licensed therapist. Learn your housing rights, how the evaluation works, and whether you qualify for an ESA.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ESA Letter Colorado | Licensed Therapist Evaluation",
    description:
      "Get a Colorado ESA letter from a licensed therapist. Compliant with Colorado HB26-1045, C.R.S. 24-34-502, and the federal Fair Housing Act.",
    images: [
      {
        url: "/esa-letter-colorado-logo-image.png",
        width: 1200,
        height: 630,
        alt: "ESA Letter Colorado - Licensed Clinical Evaluations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESA Letter Colorado | Licensed Therapist Evaluation",
    description:
      "100% compliant Colorado ESA letters issued by state-licensed mental health professionals. No pet rent or pet deposits.",
    images: ["/esa-letter-colorado-logo-image.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

import { Suspense } from "react";
import { PageProgressLoader } from "@/components/page-progress-loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        dmSerifDisplay.variable,
        dmSans.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#24333B]">
        <Suspense fallback={null}>
          <PageProgressLoader />
        </Suspense>
        <JsonLd type="organization" />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
