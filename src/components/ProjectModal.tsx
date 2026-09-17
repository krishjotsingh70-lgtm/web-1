'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Play, Tag, Clock, Award, Wrench, Instagram } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const getInstagramEmbedUrl = (url?: string) => {
  if (!url) return null;
  const match = url.match(/instagram\.com\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed`;
  }
  return null;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const instagramEmbedUrl = getInstagramEmbedUrl(project.videoUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#0c0c14] border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.category}
              </span>
              {project.stats && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ⚡ {project.stats}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              data-cursor="hover"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Visual Banner or Video Player */}
            {instagramEmbedUrl ? (
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/90 border border-white/15 shadow-2xl p-4 flex flex-col items-center justify-center">
                <div className="w-full max-w-md aspect-[9/16] max-h-[520px] rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] bg-black">
                  <iframe
                    src={instagramEmbedUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                    scrolling="no"
                  />
                </div>
              </div>
            ) : (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-inner group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent opacity-60" />
                
                {project.category === 'Video Editing' || project.category === 'Motion Graphics' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_30px_#8b5cf6] group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Details (2 Cols) */}
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

              {/* Right Specs Card (1 Col) */}
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
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-[11px]">
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

