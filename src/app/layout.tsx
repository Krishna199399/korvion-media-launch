import type { Metadata, Viewport } from "next";
import "@/styles.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookACallProvider } from "@/context/BookACallContext";

export const metadata: Metadata = {
  title: "Korvion Media — We Build Brands That Print Revenue",
  description:
    "Full-stack growth partner. Branding, performance marketing, content, web & automation engineered into revenue systems.",
  authors: [{ name: "Korvion Media" }],
  openGraph: {
    title: "Korvion Media — We Build Brands That Print Revenue",
    description:
      "Full-stack growth partner. Branding, performance marketing, content, web & automation engineered into revenue systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@korvionmedia",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Belagavi, Bengaluru",
    "geo.position": "15.8497;74.4977",
    ICBM: "15.8497, 74.4977",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="overflow-x-hidden w-full relative bg-background text-foreground">
        <BookACallProvider>
          <SmoothScroll>
            <Nav />
            <main className="overflow-x-hidden w-full">{children}</main>
            <Footer />
            <CustomCursor />
          </SmoothScroll>
        </BookACallProvider>
      </body>
    </html>
  );
}
