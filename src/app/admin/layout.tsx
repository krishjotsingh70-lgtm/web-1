import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel | Palki Printing Press',
  description: 'Admin dashboard for managing the website',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
