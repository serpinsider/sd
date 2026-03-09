import { Metadata } from 'next';
import AirbnbQuoteForm from '@/components/AirbnbQuoteForm';

export const metadata: Metadata = {
  title: 'Airbnb Cleaning Quote - San Diego Maids',
  description: 'Get a free quote for professional Airbnb and vacation rental cleaning in San Diego. Fast turnovers, reliable service.',
  openGraph: {
    title: 'Airbnb Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional Airbnb and vacation rental cleaning in San Diego. Fast turnovers, reliable service.',
    url: 'https://sandiegomaids.com/services/airbnb/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional Airbnb and vacation rental cleaning in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/airbnb/quote',
  },
};

export default function AirbnbQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(15, 23, 42, 1)' }}>
      <AirbnbQuoteForm />
    </main>
  );
}
