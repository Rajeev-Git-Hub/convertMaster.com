import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import Script from "next/script";
import SchemaMarkup from "../components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "ConvertMaster | Convert Metric, Imperial & Local Units",
    template: "%s | ConvertMaster",
  },
  description: "Free online unit converter for length, weight, temperature, area, volume, time, speed, and more. Supports US, UK, Metric, and Indian units.",
  keywords: ["unit converter", "calculator", "metric conversion", "imperial conversion", "measurement converter", "online tool", "indian units", "bigha", "gaj"],
  authors: [{ name: "Rajeev" }],
  creator: "Rajeev",
  publisher: "Universal Converter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://convertmaster.example.com",
    title: "ConvertMaster",
    description: "Free online unit converter for length, weight, temperature, area, volume, time, speed, and more. Supports US, UK, Metric, and Indian units.",
    siteName: "ConvertMaster",
    images: [
      {
        url: "/unit-conversion/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ConvertMaster - Universal Unit Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertMaster | Universal Unit Converter",
    description: "Free online unit converter for length, weight, temperature, area, volume, time, speed, and more.",
    images: ["/unit-conversion/og-image.svg"],
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* Schema Markup for Website */}
        <SchemaMarkup type="WebSite" />
        {/* Schema Markup for Software Application */}
        <SchemaMarkup type="SoftwareApplication" data={{ name: "ConvertMaster Unit Converter" }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          tabIndex={0}
        >
          Skip to main content
        </a>
        <main id="main-content" className="min-h-screen">
        <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
