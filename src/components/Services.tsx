'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '../data/portfolioData';

const SERVICE_LINK_MAP: Record<string, string> = {
  'video-editing': '/services/video-editing',
  'graphic-design': '/services/graphic-design',
  'reels-editing': '/services/instagram-reels-editing',
  'thumbnail-design': '/services/youtube-thumbnail-design',
  'motion-graphics': '/services/motion-graphics',
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            SOLUTIONS I PROVIDE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Services & <span className="text-gradient">Offerings</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Professional video editing and graphic design services in Ludhiana, Punjab & worldwide. Engineered to elevate your brand presence, maximize viewer retention, and convert audiences.
          </p>
        </div>

        {/* Services 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const pageLink = SERVICE_LINK_MAP[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                data-cursor="hover"
                className="relative group flex flex-col justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-purple-500/60 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-transparent shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Gradient Accent */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity`} />

                <div>
                  {/* Service Icon */}
                  <div className="text-4xl mb-4 p-3 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Feature Bullet List */}
                  <ul className="space-y-2 border-t border-white/5 pt-4 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  {pageLink ? (
                    <Link
                      href={pageLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}

                  <a
                    href="#contact"
                    className="text-[11px] font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    Hire &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Local SEO & Specialized Wedding Service Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-purple-900/20 via-indigo-950/30 to-cyan-900/20 border border-purple-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-bold text-lg text-white flex items-center justify-center md:justify-start gap-2">
              <span>Looking for specialized Wedding Video Editing or Punjab-specific projects?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              We offer dedicated wedding film packages, teaser reels, and royal invitation card designs for families & studios across Punjab and India.
            </p>
          </div>
          <Link
            href="/services/wedding-video-editing"
            className="shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            View Wedding Services &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
