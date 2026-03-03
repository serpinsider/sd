import { Metadata } from 'next';
import CarpetCleaningService from '@/components/CarpetCleaningService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Carpet Cleaning in San Diego - San Diego Maids",
  description: "Expert carpet and upholstery cleaning in San Diego. Deep steam cleaning, pet stain removal, odor elimination, and carpet protection. Same-day service available.",
  openGraph: {
    title: "Carpet Cleaning in San Diego - San Diego Maids",
    description: "Carpet cleaning with deep steam cleaning, stain removal, and odor elimination. Serving San Diego County.",
    url: "https://sandiegomaids.com/services/carpet-cleaning",
    siteName: "San Diego Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carpet Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning in San Diego - San Diego Maids",
    description: "Expert carpet cleaning with steam cleaning, stain removal, and odor elimination. Same-day service in San Diego.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://sandiegomaids.com/services/carpet-cleaning",
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

export default function CarpetCleaningPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <CarpetCleaningService />
    </main>
  );
}


