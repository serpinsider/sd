import { Metadata } from 'next';
import { INLINE_STYLES } from '@/styles/colors';
import CarpetQuoteForm from '@/components/CarpetQuoteForm';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Quote - San Diego Maids',
  description: 'Get a free carpet cleaning quote. Professional steam cleaning, stain removal, and deep cleaning in San Diego.',
  openGraph: {
    title: 'Carpet Cleaning Quote - San Diego Maids',
    description: 'Get a free carpet cleaning quote. Professional steam cleaning, stain removal, and deep cleaning in San Diego.',
    url: 'https://sandiegomaids.com/services/carpet-cleaning/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning Quote - San Diego Maids',
    description: 'Get a free carpet cleaning quote. Professional steam cleaning and stain removal in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/carpet-cleaning/quote',
  },
};

export default function CarpetQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={INLINE_STYLES.primary}>
      <CarpetQuoteForm />
    </main>
  );
}
