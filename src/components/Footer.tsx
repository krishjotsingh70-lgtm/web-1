'use client';

import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-3 group" data-cursor="hover">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#08080c] rounded-[11px] flex items-center justify-center font-heading font-black text-xs text-gradient">
                  KS
                </div>
              </div>
              <span className="font-heading font-bold text-white text-lg">{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs text-gray-400 mt-2 font-light">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          {/* Direct Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
            <span>📞 {PERSONAL_INFO.phone}</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>✉ {PERSONAL_INFO.email}</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center">
          <p className="flex items-center justify-center gap-1">
            Designed & Developed with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by{' '}
            <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
          </p>

          <p className="font-mono">
            &copy; {new Date().getFullYear()} Krishjot Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
