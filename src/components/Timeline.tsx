'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            CAREER MILESTONES
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            My professional journey crafting high-impact visual media across agencies, startups, and creators.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-32 space-y-12">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Glowing Timeline Dot Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#050505] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_#8b5cf6] group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
              </div>

              {/* Year Label (Absolute Left on Desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-1.5 mb-2 sm:mb-0 text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block">
                {item.year}
              </div>

              {/* Glass Card Content */}
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                    {item.company}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-4">
                  {item.description}
                </p>

                {/* Milestone Bullet Points */}
                <div className="space-y-2 border-t border-white/5 pt-3">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
