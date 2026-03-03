import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - San Diego Maids',
  description: 'Create your San Diego Maids account.',
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
