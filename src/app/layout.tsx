import type { Metadata } from 'next';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Palki Printing Press | Quality Printing, Creative Designs & Fast Delivery',
  description:
    'Palki Printing Press provides high-quality printing services for business cards, wedding invitations, flex banners, brochures, bill books, letterheads, and digital/offset solutions. Contact: 8847476527.',
  keywords: [
    'Palki Printing Press',
    'Visiting Cards',
    'Wedding Cards',
    'Flex Banner Printing',
    'Pamphlets Flyers',
    'Bill Books Printing',
    'Offset Printing',
    'Digital Printing',
    'Palki Press Phone 8847476527'
  ],
  authors: [{ name: 'Palki Printing Press' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-950 text-gray-100 min-h-screen antialiased selection:bg-gold-500 selection:text-dark-950">
        {children}
      </body>
    </html>
  );
}
