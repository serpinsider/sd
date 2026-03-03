import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards - San Diego Maids',
  description: 'Give the gift of a clean home. Purchase a San Diego Maids gift card.',
  openGraph: {
    title: 'Gift Cards - San Diego Maids',
    description: 'Give the gift of a clean home with San Diego Maids.',
    url: 'https://sandiegomaids.com/gift-cards',
    siteName: 'San Diego Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Cards - San Diego Maids',
    description: 'Give the gift of a clean home with San Diego Maids.',
    images: ['/ogs-image.jpg'],
  },
  alternates: { canonical: 'https://sandiegomaids.com/gift-cards' },
};

export default function GiftCardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
