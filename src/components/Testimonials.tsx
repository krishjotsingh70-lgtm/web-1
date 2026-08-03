'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Testimonials from creators, agencies, and businesses who entrusted me with their visual storytelling.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-500/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-light italic mb-8">
                "{current.quote}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-400/50">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">{current.name}</h4>
                  <p className="text-xs text-gray-400">
                    {current.role} &bull; <span className="text-cyan-400">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  data-cursor="hover"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-400' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                data-cursor="hover"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                data-cursor="hover"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
