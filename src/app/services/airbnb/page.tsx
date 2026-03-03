import { Metadata } from 'next';
import AirbnbCleaningService from '@/components/AirbnbCleaningService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Airbnb Cleaning in San Diego - San Diego Maids",
  description: "Airbnb and vacation rental cleaning in San Diego. Fast turnover cleaning, restocking, and guest-ready guarantee. Same-day service available.",
  openGraph: {
    title: "Airbnb Cleaning in San Diego - San Diego Maids",
    description: "Trusted Airbnb turnover cleaning with same-day service. Guest-ready guarantee for vacation rentals in San Diego.",
    url: "https://sandiegomaids.com/services/airbnb",
    siteName: "San Diego Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Airbnb Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Cleaning in San Diego - San Diego Maids",
    description: "Fast Airbnb turnover cleaning with guest-ready guarantee. Same-day service in San Diego.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://sandiegomaids.com/services/airbnb",
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

export default function AirbnbPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <AirbnbCleaningService />
    </main>
  );
}


