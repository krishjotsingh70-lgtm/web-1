'use client';

import { motion } from 'framer-motion';
import { Film, Sparkles, Image, PenTool, Layout, Layers, Sliders, Zap, Shield, Compass, Share2 } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

const ICON_MAP: Record<string, any> = {
  Film,
  Sparkles,
  Image,
  PenTool,
  Layout,
  Layers,
  Sliders,
  Zap,
  Shield,
  Compass,
  Share2,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            TECHNICAL & CREATIVE MASTERY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Tools & <span className="text-gradient">Skill Arsenal</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Equipped with industry-standard creative software and specialized expertise to bring any vision to life.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.icon] || Sparkles;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.04, y: -6 }}
                data-cursor="hover"
                className="relative group p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-purple-500/50 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-cyan-900/10 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glowing border highlight on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 group-hover:text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-purple-300 group-hover:border-purple-500/30">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>

                {/* Level Progress Bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_10px_#06b6d4]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
