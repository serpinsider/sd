import { Metadata } from 'next';
import BookingKoalaEmbed from '@/components/BookingKoalaEmbed';

export const metadata: Metadata = {
  title: 'Book Your Cleaning - San Diego Maids',
  description: 'Schedule your cleaning service with San Diego Maids. Our easy booking system lets you customize your cleaning needs and find the perfect time slot for your schedule.',
  openGraph: {
    title: 'Book Your Cleaning - San Diego Maids',
    description: 'Book your home cleaning service in minutes. Choose your cleaning type, schedule your preferred date and time, and let San Diego Maids take care of the rest.',
    url: 'https://sandiegomaids.com/booking',
    siteName: 'San Diego Maids',
    images: [
      {
        url: '/ogs-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book a Cleaning Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Cleaning - San Diego Maids',
    description: 'Schedule your cleaning service with San Diego Maids. Easy booking, flexible scheduling.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/booking',
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <BookingKoalaEmbed />
    </main>
  );
}

