import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '../components/LenisProvider';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishjotsingh.online'),
  title: 'Krishjot Singh | Video Editor & Graphic Designer',
  description:
    'Award-winning portfolio of Krishjot Singh - Video Editor & Graphic Designer. Specializing in cinematic video edits, motion graphics, branding, high CTR thumbnails, and social media content.',
  keywords: [
    'Krishjot Singh',
    'Video Editor',
    'Graphic Designer',
    'Motion Graphics',
    'Thumbnail Design',
    'Premiere Pro',
    'After Effects',
    'Branding',
    'Reels Editor',
    'Portfolio'
  ],
  alternates: {
    canonical: 'https://www.krishjotsingh.online',
  },
  verification: {
    google: 'ossjT3neh0TlGjvJ2rBVdYN9OMgkriAFmRa-x38N3-8',
  },
  openGraph: {
    title: 'Krishjot Singh | Video Editor & Graphic Designer',
    description: 'Crafting visuals that tell stories. Award-winning portfolio in video editing, motion design & branding.',
    url: 'https://www.krishjotsingh.online',
    siteName: 'Krishjot Singh Portfolio',
    images: [
      {
        url: '/images/krishjot_profile.png',
        width: 1200,
        height: 630,
        alt: 'Krishjot Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ossjT3neh0TlGjvJ2rBVdYN9OMgkriAFmRa-x38N3-8" />
      </head>
      <body className="bg-[#050505] text-gray-100 min-h-screen antialiased selection:bg-purple-600 selection:text-white">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
