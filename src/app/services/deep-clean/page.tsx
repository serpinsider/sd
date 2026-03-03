import { Metadata } from 'next';
import DeepCleanService from '@/components/DeepCleanService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Deep Cleaning Services in San Diego - San Diego Maids",
  description: "Professional deep cleaning in San Diego. Tackle tough dirt, grime & buildup with our thorough process. Perfect for seasonal cleaning, heavily soiled homes, or when your space needs intensive attention. Same-day service, satisfaction guaranteed. Book online!",
  keywords: [
    'deep cleaning San Diego',
    'deep house cleaning service',
    'thorough cleaning San Diego',
    'spring cleaning San Diego County',
    'deep clean service San Diego',
    'detailed house cleaning',
    'intensive cleaning service',
    'deep cleaning near me',
    'deep cleaning services san diego',
    'san diego deep cleaning',
    'heavily soiled home cleaning',
    'seasonal cleaning service'
  ],
  openGraph: {
    title: "Deep Cleaning Services in San Diego - San Diego Maids",
    description: "Professional deep cleaning in San Diego. Tackle tough dirt, grime & buildup with our thorough process. Same-day service, satisfaction guaranteed.",
    url: "https://sandiegomaids.com/services/deep-clean",
    siteName: "San Diego Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deep Cleaning Services - San Diego Maids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Services in San Diego - San Diego Maids",
    description: "Professional deep cleaning services in San Diego. Thorough cleaning for a complete home refresh.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://sandiegomaids.com/services/deep-clean",
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

export default function DeepCleanPage() {
  return (
    <>
      <DeepCleanService />
      <ScrollToTop />
    </>
  );
}

