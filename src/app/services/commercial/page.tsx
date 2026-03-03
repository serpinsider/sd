import { Metadata } from 'next';
import CommercialCleaningService from '@/components/CommercialCleaningService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Commercial Cleaning in San Diego - San Diego Maids",
  description: "Office and commercial cleaning services in San Diego. Daily, weekly, monthly cleaning for offices, retail spaces, and businesses. Licensed & insured.",
  openGraph: {
    title: "Commercial Cleaning in San Diego - San Diego Maids",
    description: "Office cleaning services for businesses in San Diego. Reliable, thorough, and flexible scheduling for commercial spaces.",
    url: "https://sandiegomaids.com/services/commercial",
    siteName: "San Diego Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cleaning in San Diego - San Diego Maids",
    description: "Office and commercial cleaning for businesses in San Diego. Flexible scheduling and reliable service.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://sandiegomaids.com/services/commercial",
  },
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
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <CommercialCleaningService />
    </main>
  );
}


