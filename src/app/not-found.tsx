import Link from 'next/link';
import { Home, ArrowLeft, Film, Palette, Compass, MessageCircle } from 'lucide-react';
import { SERVICES_SEO, SEO_CONFIG } from '../data/seoData';

export const metadata = {
  title: '404 - Page Not Found | Krishjot Singh',
  description: 'The page you are looking for does not exist. Browse our professional video editing and graphic design services or return to homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden selection:bg-purple-600 selection:text-white">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Badge */}
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          ERROR 404
        </span>

        {/* Big Glitch 404 Header */}
        <h1 className="font-heading text-6xl sm:text-8xl font-black tracking-tight text-white mb-4">
          Lost in <span className="text-gradient">Space?</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
          The page or asset you are trying to access has been moved, renamed, or does not exist. Let’s get you back to the right place.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <a
            href={SEO_CONFIG.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 text-gray-200 text-xs sm:text-sm font-semibold transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Suggested Popular Services */}
        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl text-left">
          <h2 className="font-heading text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" /> Explore Popular Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES_SEO.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-200 flex items-center gap-3"
              >
                <span className="text-xl">{service.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </p>
                  <p className="text-[10px] text-gray-400">View service details &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

