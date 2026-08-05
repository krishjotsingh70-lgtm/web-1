'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Film, Palette, Sparkles, Award, CheckCircle2, Zap, Target, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const HIGHLIGHTS = [
  { icon: Film, title: 'Passion for Editing', desc: 'Crafting seamless cuts, pacing, and emotional rhythm.' },
  { icon: Zap, title: 'Motion Graphics', desc: 'Bringing static ideas to life with dynamic keyframes.' },
  { icon: Palette, title: 'Branding & Identity', desc: 'Designing memorable visual systems and typography.' },
  { icon: Target, title: 'Thumbnail Optimization', desc: 'Psychology-backed CTR designs that drive massive clicks.' },
  { icon: Star, title: 'Social Media Content', desc: 'High retention reels, shorts, and carousel graphics.' },
  { icon: Sparkles, title: 'Creative Storytelling', desc: 'Transforming raw footage into unforgettable stories.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            DISCOVER MY JOURNEY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            About <span className="text-gradient">Krishjot Singh</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            A dedicated Video Editor & Graphic Designer obsessive about pixel perfection, cinematic storytelling, and visual impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Card Container (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Glass Card Outer Frame */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-purple-500/20 via-white/5 to-cyan-500/20 border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
              
              {/* Profile Image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src="/images/krishjot_profile.jpg"
                  alt="Krishjot Singh"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Krishjot Singh</h3>
                    <p className="text-xs text-cyan-400 font-mono">Editor & Visual Artist</p>
                  </div>
                  <div className="flex gap-1 text-purple-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-purple-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Description & Skill Grid (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am a passionate <strong className="text-white font-semibold">Graphic Designer and Video Editor</strong> with a creative eye for detail. I specialize in creating modern, attractive, and impactful visual designs. My expertise includes logo design, branding, social media graphics, and marketing materials. I also edit high-quality videos for YouTube, social media, and business promotions.
              </p>
              <p>
                I focus on delivering creative solutions that match each client's vision and goals. I am skilled in <strong className="text-purple-400 font-semibold">Adobe Photoshop, Illustrator, Premiere Pro, and After Effects</strong>. I believe that great design and storytelling leave a lasting impression.
              </p>
              <p>
                I am committed to providing professional, high-quality work with on-time delivery. My goal is to help brands and businesses stand out through creative visuals and engaging videos. <strong className="text-cyan-400 font-semibold">Let's work together to bring your ideas to life with creativity and excellence.</strong>
              </p>
            </div>

            {/* Highlights 6-box grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {HIGHLIGHTS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Line */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">
                  Ready to turn your vision into stunning visuals?
                </span>
              </div>
              <a
                href="#contact"
                data-cursor="hover"
                className="shrink-0 px-5 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
