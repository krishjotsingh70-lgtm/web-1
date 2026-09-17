'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, ExternalLink, Play, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const CATEGORIES = [
  'All',
  'Wedding Invitations',
  'Video Editing',
  'Posters',
  'Branding',
  'Logo Design',
  'Thumbnails',
  'Motion Graphics',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            SHOWCASE GALLERY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Featured <span className="text-gradient">Portfolio Work</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Explore a curated selection of cinematic video edits, bold branding, posters, and YouTube thumbnail designs.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                data-cursor="hover"
                className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-purple-500/50 shadow-xl cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Stats Pill */}
                  {project.stats && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 backdrop-blur-md">
                        {project.stats}
                      </span>
                    </div>
                  )}

                  {/* Center Play Icon for Videos */}
                  {(project.category === 'Video Editing' || project.category === 'Motion Graphics') && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400 text-white flex items-center justify-center shadow-[0_0_20px_#8b5cf6]">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Trigger Bar */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {project.tools.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-cyan-300 transition-colors">
                      <span>View Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={() => {
          if (!selectedProject) return;
          const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id);
          const prevIdx = (idx - 1 + filteredProjects.length) % filteredProjects.length;
          setSelectedProject(filteredProjects[prevIdx]);
        }}
        onNext={() => {
          if (!selectedProject) return;
          const idx = filteredProjects.findIndex((p) => p.id === selectedProject.id);
          const nextIdx = (idx + 1) % filteredProjects.length;
          setSelectedProject(filteredProjects[nextIdx]);
        }}
      />
    </section>
  );
}
