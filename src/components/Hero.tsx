'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Send, Film, Palette, Eye, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Graphic Accents */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute top-32 left-12 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center gap-3 shadow-2xl"
      >
        <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
          <Film className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-white">Cinematic Edits</p>
          <p className="text-[10px] text-gray-400">4K Color & FX</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute bottom-36 right-12 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md items-center gap-3 shadow-2xl"
      >
        <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
          <Palette className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-white">Bold Branding</p>
          <p className="text-[10px] text-gray-400">High CTR Designs</p>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>AVAILABLE FOR FREELANCE & FULL-TIME</span>
        </motion.div>

        {/* Name Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-gray-400 mb-3"
        >
          {PERSONAL_INFO.name}
        </motion.h2>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Video Editor & <br />
          <span className="text-gradient">Graphic Designer</span>
        </motion.h1>

        {/* Subtitle & Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 font-light mb-4"
        >
          "{PERSONAL_INFO.tagline}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl text-xs sm:text-sm text-gray-400 mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <a
            href="#portfolio"
            data-cursor="hover"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:scale-105 transition-all duration-300 group"
          >
            <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>View Portfolio</span>
          </a>

          <a
            href="#contact"
            data-cursor="hover"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-full hover:border-purple-500/50 hover:text-white transition-all duration-300"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Hire Me</span>
          </a>
        </motion.div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="font-heading font-extrabold text-2xl sm:text-4xl text-gradient">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Arrow */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-12 text-gray-500 hover:text-purple-400 transition-colors p-2"
        aria-label="Scroll to About"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
