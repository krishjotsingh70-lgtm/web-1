'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { MY_WORK_ITEMS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function WorkSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<typeof MY_WORK_ITEMS[0] | null>(null);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 4000; // 4 seconds per slide

  const WORK_CATEGORIES = ['All MY Work', 'Wedding Invitations', 'Posters'];
  const [activeCategory, setActiveCategory] = useState('All MY Work');

  const filteredItems = activeCategory === 'All MY Work'
    ? MY_WORK_ITEMS
    : MY_WORK_ITEMS.filter((item) => item.category === activeCategory);

  // Handle slide change
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
    setProgress(0);
  };

  // Timer logic for progress bar & auto-play
  useEffect(() => {
    if (!isPlaying) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex, activeCategory]);

  const currentWork = filteredItems[currentIndex] || filteredItems[0] || MY_WORK_ITEMS[0];

  return (
    <section id="my-work" className="relative py-20 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              AUTOMATIC SHOWCASE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            MY Work <span className="text-gradient">Poster Slideshow</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Auto-cycling column showcase featuring wedding invitations, high-definition admission posters, and event banners designed for clients.
          </p>

          {/* Category Filter Pills (Different Columns / Categories) */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mt-8">
            {WORK_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-xs font-semibold font-mono rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat === 'Wedding Invitations' ? '💍 Wedding Invitations' : cat === 'Posters' ? '🎨 Posters' : '✨ All MY Work'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Left Interactive Column & Right Main Slideshow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN: Vertical My Work Thumbnails List */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                {activeCategory} ({filteredItems.length})
              </span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                0{currentIndex + 1} / 0{filteredItems.length}
              </span>
            </div>

            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-600/30">
              {filteredItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => goToSlide(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 ${
                      isActive
                        ? 'bg-purple-950/40 border-purple-500/60 shadow-[0_0_25px_rgba(139,92,246,0.25)]'
                        : 'bg-white/[0.03] border-white/10 hover:border-purple-500/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0 border border-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-purple-600/20 backdrop-blur-[1px] flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white drop-shadow" />
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono text-purple-300">
                          {item.stats}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold mt-1.5 truncate transition-colors ${
                        isActive ? 'text-purple-300' : 'text-white group-hover:text-purple-200'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 truncate mt-0.5 font-light">
                        {item.client}
                      </p>
                    </div>

                    {/* Active Bar Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSlideIndicator"
                        className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-l"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Auto-Sliding Vertical Poster Frame & Controls */}
          <div 
            className="lg:col-span-8 order-1 lg:order-2"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 via-white/[0.03] to-black border border-white/15 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">

              {/* Progress Bar Top */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-5">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Poster Slideshow Area */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWork.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentWork.image}
                      alt={currentWork.title}
                      fill
                      priority
                      className="object-contain bg-slate-950/80"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Top Overlay Badge & Action */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-black/60 border border-cyan-500/30 text-cyan-300 backdrop-blur-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        {currentWork.category}
                      </span>

                      <button
                        onClick={() => setSelectedProject(currentWork)}
                        className="p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 backdrop-blur-md shadow-lg"
                        title="Expand Image Preview"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Caption Overlay inside slide */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="max-w-xl bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl">
                        <span className="text-[11px] font-mono text-purple-400">
                          Client: {currentWork.client}
                        </span>
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mt-1">
                          {currentWork.title}
                        </h3>
                        <p className="text-xs text-gray-300 mt-1 line-clamp-2 font-light">
                          {currentWork.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Control Bar */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                {/* Play/Pause & Counter */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-white" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                        <span>Auto Play</span>
                      </>
                    )}
                  </button>

                  <span className="text-xs text-gray-400 font-mono">
                    Slide {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {filteredItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-7 bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_10px_#8b5cf6]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next / Prev Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
