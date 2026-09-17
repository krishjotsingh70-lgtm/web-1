'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ColorCustomizer from './ColorCustomizer';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'MY Work', href: '#my-work' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Badge */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            data-cursor="hover"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08080c] rounded-[11px] flex items-center justify-center font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                KS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white tracking-wide text-base group-hover:text-purple-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> Editor & Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Customize Colors & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Customize Colors Option at the very top */}
            <ColorCustomizer />

            <a
              href="#contact"
              data-cursor="hover"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="hover"
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-gray-200 hover:text-purple-400 py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl shadow-lg"
              >
                Hire Me Now
              </a>
              <div className="text-center text-xs text-gray-400 font-mono">
                📞 {PERSONAL_INFO.phone} | ✉ {PERSONAL_INFO.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
