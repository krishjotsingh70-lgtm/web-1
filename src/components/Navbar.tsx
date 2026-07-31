'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Printer, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Quote Calculator', href: '#calculator' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-gold-sm'
          : 'bg-gradient-to-b from-dark-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-0.5 shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                <Printer className="w-5 h-5 text-gold-400" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-heading text-gold-gradient tracking-wide block leading-none">
                PALKI
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase block mt-1">
                Printing Press
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-300 to-gold-600 transition-all duration-300 group-hover:w-4/5 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:8847476527"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold-500/30 text-gold-300 text-sm font-medium hover:bg-gold-500/10 hover:border-gold-500/60 transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>8847476527</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="relative group overflow-hidden px-5 py-2 rounded-full font-semibold text-sm text-dark-950 bg-gold-gradient shadow-gold-sm hover:shadow-gold-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Get a Quote
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-gold-400 hover:bg-dark-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-b border-gold-500/20 px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-200 hover:text-gold-400 hover:bg-dark-800 transition-all text-base font-medium"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gold-500/50" />
              </a>
            ))}

            <div className="pt-4 border-t border-gold-500/10 flex flex-col gap-3">
              <a
                href="tel:8847476527"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-500/30 text-gold-300 font-semibold"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Now: 8847476527</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl font-bold text-dark-950 bg-gold-gradient shadow-gold-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
