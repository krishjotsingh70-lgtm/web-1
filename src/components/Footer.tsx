'use client';

import { ArrowUp, Heart, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SERVICES_SEO, BLOG_POSTS } from '../data/seoData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info & Local SEO */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#08080c] rounded-[11px] flex items-center justify-center font-heading font-black text-sm text-gradient">
                  KS
                </div>
              </div>
              <span className="font-heading font-bold text-white text-lg">{PERSONAL_INFO.name}</span>
            </Link>

            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Professional Video Editor & Graphic Designer based in <strong className="text-gray-300">Ludhiana, Punjab, India</strong>. Crafting cinematic edits, wedding films, viral reels, and high-CTR thumbnails for clients worldwide.
            </p>

            <div className="space-y-2 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Ludhiana, Punjab, India (141001)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated SEO Service Landing Pages */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {SERVICES_SEO.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Blog & Resources */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400" /> Guides & Articles
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {BLOG_POSTS.slice(0, 5).map((post) => (
                <li key={post.slug} className="truncate">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-cyan-300 transition-colors"
                    title={post.title}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/blog"
                  className="text-xs font-bold text-purple-400 hover:text-white transition-colors"
                >
                  View All Blog Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">About Krishjot</Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio Gallery</Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">All Services</Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-white transition-colors">Client Reviews</Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">Hire Me & Contact</Link>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                data-cursor="hover"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center">
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by{' '}
            <span className="text-white font-medium">{PERSONAL_INFO.name}</span> • Ludhiana, Punjab, India
          </p>

          <p className="font-mono">
            &copy; {new Date().getFullYear()} Krishjot Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
