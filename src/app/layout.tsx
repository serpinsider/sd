import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ConditionalLayout from "@/components/ConditionalLayout";
import ScrollRestoration from "@/components/ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sandiegomaids.com'),
  title: {
    default: "San Diego Maids - House Cleaning & Maid Service in San Diego",
    template: "%s"
  },
  description: "Professional house cleaning services in San Diego, La Jolla, Carlsbad, Encinitas, Chula Vista & surrounding areas. Book online in 60 seconds. Trusted, bonded, and insured cleaners.",
  authors: [{ name: "San Diego Maids" }],
  creator: "San Diego Maids",
  publisher: "San Diego Maids",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandiegomaids.com",
    title: "San Diego Maids - Professional House Cleaning Services",
    description: "Professional house cleaning and maid service in San Diego, La Jolla, Carlsbad, Encinitas, Chula Vista & surrounding areas.",
    siteName: "San Diego Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "San Diego Maids - House Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Maids - House Cleaning & Maid Service in San Diego",
    description: "Professional house cleaning and maid service in San Diego, La Jolla, Carlsbad, Encinitas & Chula Vista. Same-day service available.",
    creator: "@sandiegomaids",
    images: ["/ogs-image.jpg"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Fathom - beautiful, simple website analytics */}
        <Script 
          src="https://cdn.usefathom.com/script.js" 
          data-site="QJHZPKBB" 
          strategy="afterInteractive"
        />
            <ScrollRestoration />
        <StructuredData type="local-business" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="faq" />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>

      </body>
    </html>
  );
}