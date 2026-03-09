import { Metadata } from 'next';
import CommercialQuoteForm from '@/components/CommercialQuoteForm';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Quote - San Diego Maids',
  description: 'Get a free quote for professional commercial cleaning in San Diego. Office cleaning, retail spaces, and business facilities.',
  openGraph: {
    title: 'Commercial Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional commercial cleaning in San Diego. Office cleaning, retail spaces, and business facilities.',
    url: 'https://sandiegomaids.com/services/commercial/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional commercial cleaning in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/commercial/quote',
  },
};

export default function CommercialQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(15, 23, 42, 1)' }}>
      <CommercialQuoteForm />
    </main>
  );
}
