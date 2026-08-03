'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2, MapPin, Instagram, Youtube, Linkedin, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            START A PROJECT
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Have a video edit, branding project, or thumbnail inquiry? Drop me a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Let's build something epic</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                I am currently open to freelance opportunities, ongoing video editing contracts, and high-impact branding commissions.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-6">
              
              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                data-cursor="hover"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-wider">Phone / Call</span>
                  <span className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-cursor="hover"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-wider">Email Address</span>
                  <span className="font-bold text-white text-base truncate group-hover:text-cyan-300 transition-colors block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-wider">Based In</span>
                  <span className="font-bold text-white text-base">{PERSONAL_INFO.location}</span>
                </div>
              </div>

            </div>

            {/* Instant WhatsApp Action */}
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            {/* Social Links */}
            <div>
              <span className="text-xs text-gray-400 font-mono block mb-3 uppercase tracking-wider">Social Channels</span>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: PERSONAL_INFO.socials.instagram, label: 'Instagram' },
                  { icon: Youtube, href: PERSONAL_INFO.socials.youtube, label: 'YouTube' },
                  { icon: Linkedin, href: PERSONAL_INFO.socials.linkedin, label: 'LinkedIn' },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      aria-label={s.label}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out, Krishjot will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 text-xs font-bold text-purple-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 mt-4 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field: Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                {/* Field: Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">Project Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your video editing or design project needs..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="hover"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:scale-[1.01] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
