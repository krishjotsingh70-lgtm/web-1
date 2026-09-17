'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  X,
  ExternalLink,
  Play,
  Instagram,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const getInstagramEmbedUrl = (url?: string) => {
  if (!url) return null;
  const match = url.match(/instagram\.com\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed`;
  }
  return null;
};

export default function ProjectModal({ project, onClose, onPrev, onNext }: ProjectModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom when project changes
  useEffect(() => {
    setZoomLevel(1);
  }, [project]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isFullscreen, onClose, onPrev, onNext]);

  if (!project) return null;

  const instagramEmbedUrl = getInstagramEmbedUrl(project.videoUrl);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative z-10 w-full bg-[#080811] border border-white/15 shadow-2xl transition-all duration-300 flex flex-col ${
            isFullscreen
              ? 'fixed inset-0 rounded-none max-w-none h-screen w-screen p-3 sm:p-5'
              : 'max-w-5xl rounded-3xl max-h-[92vh] p-0'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02] flex-shrink-0 gap-3">
            {/* Left: Category & Stats */}
            <div className="flex items-center gap-2 sm:gap-3 truncate min-w-0">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 truncate">
                {project.category}
              </span>
              {project.stats && (
                <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ⚡ {project.stats}
                </span>
              )}
            </div>

            {/* Center Controls: Zoom Buttons (for images) */}
            {!instagramEmbedUrl && (
              <div className="flex items-center gap-1 sm:gap-2 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-xs font-mono">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-1 rounded text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-purple-300 px-1 font-semibold text-[11px] min-w-[36px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2.5}
                  className="p-1 rounded text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={handleResetZoom}
                    className="p-1 text-cyan-400 hover:text-white ml-1 border-l border-white/10 pl-1.5 transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Right Controls: Navigation, Fullscreen & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Prev / Next Buttons */}
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Previous Project (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Next Project (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-400 transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close Viewer (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* MAIN VIEWER LAYOUT: Separate Artwork Area & Info Panel */}
          {isFullscreen ? (
            /* FULLSCREEN LAYOUT (Cleanly structured for remaining screen space) */
            <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden p-2 sm:p-4">
              
              {/* Left / Center: Artwork Viewport */}
              <div className="flex-1 h-full relative rounded-2xl bg-black/90 border border-white/10 flex items-center justify-center min-h-0 overflow-hidden group">
                {instagramEmbedUrl ? (
                  <div className="w-full max-w-md aspect-[9/16] max-h-full rounded-xl overflow-hidden border border-purple-500/30 bg-black">
                    <iframe
                      src={instagramEmbedUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      allowFullScreen
                      scrolling="no"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center overflow-auto p-3">
                    <div
                      className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar: Separate Information Panel (Never Overlaps Artwork) */}
              <div className="w-full md:w-80 lg:w-96 h-auto md:h-full overflow-y-auto p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5 flex-shrink-0">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    PROJECT DETAILS
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                    {project.title}
                  </h2>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {project.description}
                </p>

                {project.client && (
                  <div>
                    <span className="text-gray-400 uppercase tracking-widest block font-mono text-[10px] mb-1">Client</span>
                    <span className="font-semibold text-white text-sm">{project.client}</span>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <span className="text-gray-400 uppercase tracking-widest block font-mono text-[10px] mb-1">Turnaround</span>
                    <span className="font-semibold text-cyan-300 text-xs">{project.duration}</span>
                  </div>
                )}

                <div>
                  <span className="text-gray-400 uppercase tracking-widest block font-mono text-[10px] mb-1.5">Software & Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded text-[11px]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div>
                    <span className="text-gray-400 uppercase tracking-widest block font-mono text-[10px] mb-1.5">Tags</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <div className="pt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl block hover:opacity-90 transition-opacity"
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>

            </div>
          ) : (
            /* STANDARD MODAL LAYOUT (Scrollable body with separate Artwork and Info Panel) */
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1 min-h-0">
              
              {/* Separate Artwork Viewport Box */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/95 border border-white/10 shadow-2xl flex items-center justify-center min-h-[280px] max-h-[60vh] sm:max-h-[65vh] group">
                {instagramEmbedUrl ? (
                  <div className="w-full max-w-md aspect-[9/16] max-h-[500px] p-2 my-2 rounded-xl overflow-hidden border border-purple-500/30 bg-black">
                    <iframe
                      src={instagramEmbedUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      allowFullScreen
                      scrolling="no"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] overflow-auto flex items-center justify-center p-3 bg-[#050508]">
                    <div
                      className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Separate Project Information Panel (Below Artwork, Never Overlaps) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                {/* Left Info Column (2 Cols) */}
                <div className="md:col-span-2 space-y-4">
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    {project.title}
                  </h2>

                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Specs Card Column (1 Col) */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 text-xs">
                  {project.client && (
                    <div>
                      <span className="text-gray-400 uppercase tracking-widest block font-mono mb-1">Client</span>
                      <span className="font-semibold text-white text-sm">{project.client}</span>
                    </div>
                  )}

                  {project.duration && (
                    <div>
                      <span className="text-gray-400 uppercase tracking-widest block font-mono mb-1">Turnaround</span>
                      <span className="font-semibold text-cyan-300">{project.duration}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-gray-400 uppercase tracking-widest block font-mono mb-1">Software & Tools</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded text-[11px]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.videoUrl && (
                    <div>
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Watch on Instagram</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/10">
                    <a
                      href="#contact"
                      onClick={onClose}
                      className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl block hover:opacity-90 transition-opacity"
                    >
                      Request Similar Project
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
