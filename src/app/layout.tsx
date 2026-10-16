import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles.css";
import { AppShell } from "@/components/AppShell";
import { Toaster } from "@/components/ui/sonner";

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
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "4tQee39cT0gFwFqApCS8biFS-YHr3flvFS05UUzAG-4",
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
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KNRP3KPQ');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y14T0JX9D2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y14T0JX9D2');
            `,
          }}
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNRP3KPQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AppShell>{children}</AppShell>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
