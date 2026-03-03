import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Team - San Diego Maids',
  description: 'Join the San Diego Maids team. We\'re hiring professional house cleaners in San Diego.',
  openGraph: {
    title: 'Join Our Team - San Diego Maids',
    description: 'We\'re hiring professional house cleaners in San Diego.',
    url: 'https://sandiegomaids.com/join-our-team',
    siteName: 'San Diego Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Team - San Diego Maids',
    description: 'We\'re hiring professional house cleaners in San Diego.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://sandiegomaids.com/join-our-team',
  },
};

export default function JoinOurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}







