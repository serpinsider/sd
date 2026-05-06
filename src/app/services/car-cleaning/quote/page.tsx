import { Metadata } from 'next';
import { INLINE_STYLES } from '@/styles/colors';
import CarCleaningQuoteForm from '@/components/CarCleaningQuoteForm';

export const metadata: Metadata = {
  title: 'Car Cleaning Quote - San Diego Maids',
  description: 'Get a free quote for professional mobile car detailing in San Diego. Interior and exterior cleaning, leather conditioning, and more.',
  openGraph: {
    title: 'Car Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional mobile car detailing in San Diego. Interior and exterior cleaning, leather conditioning, and more.',
    url: 'https://sandiegomaids.com/services/car-cleaning/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional mobile car detailing in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/car-cleaning/quote',
  },
};

export default function CarCleaningQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={INLINE_STYLES.primary}>
      <CarCleaningQuoteForm />
    </main>
  );
}
