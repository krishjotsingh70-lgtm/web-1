'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles, Send } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Services', 'Process & Revisions', 'Pricing & Timing'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            <HelpCircle className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Got Questions? <span className="text-gradient">We've Got Answers</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Everything you need to know about working together, project workflows, delivery times, and revisions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-cursor="hover"
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.05] border-purple-500/40 shadow-[0_0_25px_rgba(139,92,246,0.15)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  data-cursor="hover"
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 text-gray-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-purple-500/20 text-purple-400 border-purple-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 mt-2 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg flex items-center justify-center sm:justify-start gap-2">
                Have a unique question? <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Reach out directly and let's discuss your custom project needs.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            data-cursor="hover"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <span>Ask a Question</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
