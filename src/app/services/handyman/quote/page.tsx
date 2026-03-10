import { Metadata } from 'next';
import HandymanQuoteForm from '@/components/HandymanQuoteForm';

export const metadata: Metadata = {
  title: 'Handyman Services Quote - San Diego Maids',
  description: 'Get a free quote for professional handyman services in San Diego. Repairs, installations, and home improvement.',
  openGraph: {
    title: 'Handyman Services Quote - San Diego Maids',
    description: 'Get a free quote for professional handyman services in San Diego. Repairs, installations, and home improvement.',
    url: 'https://sandiegomaids.com/services/handyman/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Services Quote - San Diego Maids',
    description: 'Get a free quote for professional handyman services in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/handyman/quote',
  },
};

export default function HandymanQuotePage() {
  return (
    <main className="min-h-screen" style={{ background: 'rgba(15, 23, 42, 1)' }}>
      <HandymanQuoteForm />
    </main>
  );
}
