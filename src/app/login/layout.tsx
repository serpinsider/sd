import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In - San Diego Maids',
  description: 'Log in to your San Diego Maids account.',
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
