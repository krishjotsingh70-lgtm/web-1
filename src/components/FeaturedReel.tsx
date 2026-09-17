'use client';

import { motion } from 'framer-motion';
import { Instagram, Sparkles, ExternalLink, Film, Play, Send, CheckCircle2 } from 'lucide-react';

export default function FeaturedReel() {
  const reelUrl = 'https://www.instagram.com/reel/DdQoSUspktp/';
  const embedUrl = 'https://www.instagram.com/reel/DdQoSUspktp/embed';

  return (
    <section id="featured-reel" className="relative py-20 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-600/10 via-purple-600/15 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-purple-500/30 mb-4 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            <Instagram className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-xs font-mono text-pink-300 uppercase tracking-widest font-semibold">
              FEATURED INSTAGRAM REEL
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Watch <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Experience our high-retention, dynamic video editing style engineered for Instagram Reels, TikTok, and YouTube Shorts.
          </p>
        </div>

        {/* Main Reel Card Showcase */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-black border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Instagram Video Frame Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] group">
              <iframe
                src={embedUrl}
                title="Instagram Reel Edit"
                className="w-full h-full border-0"
                allowFullScreen
                scrolling="no"
              />
              
              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT: Reel Information & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-center"
          >
            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                Short-Form Video Edit
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                ⚡ 4K High Quality
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Cinematic Reel & Short-Form Content
              </h3>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed font-light">
                Crafted with fast-paced cuts, sound effects, animated captions, color grading, and dynamic visuals designed to retain viewer attention and drive engagement.
              </p>
            </div>

            {/* Key Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Fast-Paced Dynamic Cutting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Custom Sound Design & SFX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Animated Text Overlays</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Color Grading & FX</span>
              </div>
            </div>

            {/* Tools Used Pills */}
            <div>
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                Editing Software
              </span>
              <div className="flex flex-wrap gap-2">
                {['Adobe Premiere Pro', 'After Effects', 'Photoshop'].map((tool, i) => (
                  <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-purple-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span>Watch directly on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href="#contact"
                data-cursor="hover"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-gray-200 bg-white/5 border border-white/15 rounded-full hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Order Similar Reel Edit</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
