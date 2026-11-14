import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '../components/LenisProvider';
import JsonLd from '../components/JsonLd';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://krishjotsingh.online'),
  title: {
    default: 'Krishjot Singh | Professional Video Editor & Graphic Designer in Ludhiana',
    template: '%s | Krishjot Singh',
  },
  description:
    'Looking for a professional video editor and graphic designer? Krishjot Singh offers cinematic video editing, wedding films, Instagram Reels, YouTube thumbnails and graphic design services in India.',
  keywords: [
    'Krishjot Singh',
    'Video Editor in Ludhiana',
    'Freelance Video Editor India',
    'Graphic Designer in Ludhiana',
    'Professional Video Editor India',
    'Wedding Video Editor',
    'Wedding Video Editor Punjab',
    'Instagram Reels Video Editor',
    'YouTube Video Editing Services',
    'YouTube Thumbnail Designer',
    'Motion Graphics Designer',
    'Professional Video Editing Services',
    'Freelance Graphic Designer',
    'Social Media Designer',
    'Video Editing Ludhiana',
    'Video Editor Punjab',
    'Graphic Design Ludhiana Punjab',
    'Premiere Pro Video Editor India',
    'After Effects Motion Graphics',
  ],
  authors: [{ name: 'Krishjot Singh', url: 'https://krishjotsingh.online' }],
  creator: 'Krishjot Singh',
  publisher: 'Krishjot Singh',
  alternates: {
    canonical: 'https://krishjotsingh.online',
  },
  verification: {
    google: 'ossjT3neh0TlGjvJ2rBVdYN9OMgkriAFmRa-x38N3-8',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://krishjotsingh.online',
    siteName: 'Krishjot Singh Portfolio',
    title: 'Krishjot Singh | Professional Video Editor & Graphic Designer in Ludhiana',
    description:
      'Looking for a professional video editor and graphic designer? Krishjot Singh offers cinematic video editing, wedding films, Instagram Reels, YouTube thumbnails and graphic design services in India.',
    images: [
      {
        url: '/images/krishjot_about.jpg',
        width: 1200,
        height: 630,
        alt: 'Krishjot Singh - Professional Video Editor and Graphic Designer in Ludhiana, Punjab, India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishjot Singh | Professional Video Editor & Graphic Designer in Ludhiana',
    description:
      'Looking for a professional video editor and graphic designer? Krishjot Singh offers cinematic video editing, wedding films, Instagram Reels, YouTube thumbnails and graphic design services in India.',
    images: ['/images/krishjot_about.jpg'],
    creator: '@krishjotsingh',
  },
};

const globalSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://krishjotsingh.online/#person',
    name: 'Krishjot Singh',
    jobTitle: 'Professional Video Editor & Graphic Designer',
    url: 'https://krishjotsingh.online',
    image: 'https://krishjotsingh.online/images/krishjot_about.jpg',
    telephone: '+918847476526',
    email: 'krishjotsingh2@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://instagram.com',
      'https://youtube.com',
      'https://linkedin.com',
      'https://behance.net',
    ],
    knowsAbout: [
      'Video Editing',
      'Graphic Design',
      'Wedding Video Editing',
      'Instagram Reels Video Editing',
      'YouTube Thumbnail Design',
      'Motion Graphics',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://krishjotsingh.online/#business',
    name: 'Krishjot Singh - Video Editing & Graphic Design Services',
    image: 'https://krishjotsingh.online/images/krishjot_about.jpg',
    url: 'https://krishjotsingh.online',
    telephone: '+918847476526',
    email: 'krishjotsingh2@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.901,
      longitude: 75.8573,
    },
    areaServed: [
      { '@type': 'City', name: 'Ludhiana' },
      { '@type': 'AdministrativeArea', name: 'Punjab' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Worldwide' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://krishjotsingh.online/#website',
    url: 'https://krishjotsingh.online',
    name: 'Krishjot Singh Portfolio',
    description:
      'Professional Video Editor and Graphic Designer in Ludhiana, Punjab, India.',
    publisher: {
      '@id': 'https://krishjotsingh.online/#person',
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ossjT3neh0TlGjvJ2rBVdYN9OMgkriAFmRa-x38N3-8" />
        <JsonLd data={globalSchemas} />
      </head>
      <body className="bg-[#050505] text-gray-100 min-h-screen antialiased selection:bg-purple-600 selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
