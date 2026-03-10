import { Metadata } from 'next';
import { INLINE_STYLES } from '@/styles/colors';
import PostConstructionQuoteForm from '@/components/PostConstructionQuoteForm';
import { INLINE_STYLES } from '@/styles/colors';

export const metadata: Metadata = {
  title: 'Post-Construction Cleaning Quote - San Diego Maids',
  description: 'Get a free quote for professional post-construction cleaning in San Diego. Debris removal, deep cleaning, and move-in ready preparation.',
  openGraph: {
    title: 'Post-Construction Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional post-construction cleaning in San Diego. Debris removal, deep cleaning, and move-in ready preparation.',
    url: 'https://sandiegomaids.com/services/post-construction/quote',
    siteName: 'San Diego Maids',
    type: 'website',
    images: ['/ogs-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Construction Cleaning Quote - San Diego Maids',
    description: 'Get a free quote for professional post-construction cleaning in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/services/post-construction/quote',
  },
};

export default function PostConstructionQuotePage() {
  return (
    <main className="min-h-screen" style={INLINE_STYLES.primary}>
      <PostConstructionQuoteForm />
    </main>
  );
}
