'use client';

import { Printer, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-gray-400 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-500/10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-0.5 shadow-gold-sm">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                  <Printer className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-gold-gradient tracking-wide block leading-none">
                  PALKI
                </span>
                <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase block mt-1">
                  Printing Press
                </span>
              </div>
            </a>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              &ldquo;Quality Printing, Creative Designs & Fast Delivery&rdquo;
            </p>

            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Your premier full-service printing partner for business stationery, wedding invitations, outdoor flex banners, and custom commercial solutions.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">Services (12)</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-gold-400 transition-colors">Instant Quote Calculator</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio & Gallery</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-400 transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Phone / WhatsApp</div>
                  <a href="tel:8847476526" className="text-white font-semibold hover:text-gold-300 transition-colors">
                    8847476526
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Official Email</div>
                  <a href="mailto:krishjotsingh2@gmail.com" className="text-white font-medium hover:text-gold-300 transition-colors break-all">
                    krishjotsingh2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="text-gray-300">Palki Printing Press Studio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Social Links & Back to Top (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Follow Us
            </h4>
            
            <div className="flex items-center gap-3">
              {/* WhatsApp Social */}
              <a
                href="https://wa.me/918847476526"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-dark-950 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.94 9.94 0 001.333 4.993L2 22l5.233-1.371a9.96 9.96 0 004.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2z" />
                </svg>
              </a>

              {/* Instagram Social Placeholder */}
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-dark-950 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook Social Placeholder */}
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-dark-950 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            Copyright © 2026 <strong className="text-gray-300">Palki Printing Press</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
