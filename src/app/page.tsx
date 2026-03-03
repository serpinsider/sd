import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CallOrTextBar from '@/components/CallOrTextBar';
import QuoteBar from '@/components/QuoteBar';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhatWeCleanSection from '@/components/WhatWeCleanSection';
import AreasWeServeSection from '@/components/AreasWeServeSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'San Diego Maids - House Cleaning & Maid Service in San Diego',
  description: 'Professional house cleaning services in San Diego, La Jolla, Carlsbad, Encinitas, Chula Vista & surrounding areas. Book online in 60 seconds. Trusted, bonded, and insured cleaners.',
  openGraph: {
    title: 'San Diego Maids - House Cleaning & Maid Service in San Diego',
    description: 'Professional house cleaning services in San Diego. Book online in 60 seconds.',
    url: 'https://sandiegomaids.com',
    siteName: 'San Diego Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630, alt: 'San Diego Maids - House Cleaning Services' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Diego Maids - House Cleaning & Maid Service in San Diego',
    description: 'Professional house cleaning services in San Diego. Book online in 60 seconds.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com',
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection location="San Diego" />
      <QuoteBar />
      <ServicesSection location="San Diego" />
      <CallOrTextBar />
      <WhatWeCleanSection />
      <QuoteBar />
      <HowItWorksSection />
      <CallOrTextBar />
      <AreasWeServeSection />
      <QuoteBar />
      <ReviewsSection location="San Diego" />
      <CallOrTextBar />
      <FAQSection location="San Diego" />
      <QuoteBar />
      <ContactSection />
    </main>
  );
}
