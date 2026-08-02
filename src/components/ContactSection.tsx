'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Sparkles, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  prefilledMessage?: string;
}

export default function ContactSection({ prefilledMessage = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Visiting Cards',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Contact <span className="text-gold-gradient">Palki Printing Press</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Have a question or need a customized print quote? Reach out to us via call, email, or send a direct message below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <a
                href="tel:8847476526"
                className="group p-6 rounded-2xl bg-dark-950 border border-gold-500/20 hover:border-gold-500/60 hover:shadow-gold-sm transition-all duration-300 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Call / WhatsApp</div>
                  <div className="text-xl font-bold font-heading text-white group-hover:text-gold-300 transition-colors">
                    8847476526
                  </div>
                  <div className="text-xs text-gold-400 font-medium mt-0.5">Click to Call Directly</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:krishjotsingh2@gmail.com"
                className="group p-6 rounded-2xl bg-dark-950 border border-gold-500/20 hover:border-gold-500/60 hover:shadow-gold-sm transition-all duration-300 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-gold-300 transition-colors truncate max-w-[220px] sm:max-w-none">
                    krishjotsingh2@gmail.com
                  </div>
                  <div className="text-xs text-gold-400 font-medium mt-0.5">Send Official Email</div>
                </div>
              </a>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-dark-950 border border-gold-500/20 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Working Hours</div>
                  <div className="text-base font-bold text-white">Mon - Sat: 9:30 AM - 8:30 PM</div>
                  <div className="text-xs text-gray-400">Sunday: Closed / Prior Appointment</div>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Placeholder Frame */}
            <div className="rounded-2xl overflow-hidden border border-gold-500/30 bg-dark-950 shadow-lg relative group">
              <div className="p-4 bg-dark-800 border-b border-gold-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Main Press Location</span>
                </div>
                <span className="text-[11px] text-gray-400">Palki Printing Press</span>
              </div>
              <div className="relative aspect-[16/9] bg-dark-900 flex items-center justify-center p-6 text-center">
                <iframe
                  title="Google Maps Location"
                  className="w-full h-full border-0 filter grayscale invert opacity-70 group-hover:opacity-100 transition-opacity"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d75.8!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-dark-950/90 backdrop-blur-md text-xs text-gray-300 border border-gold-500/20">
                  📍 Palki Printing Press • Visit Us For Live Paper Samples & Proofing
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visually Attractive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-dark-950 border border-gold-500/30 p-8 sm:p-10 shadow-gold-md relative">
              
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-6">
                <h3 className="text-2xl font-bold font-heading text-white">
                  Send Us a <span className="text-gold-gradient">Message</span>
                </h3>
                <MessageSquare className="w-5 h-5 text-gold-400" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto text-gold-300 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-white">
                    Thank You! Message Received.
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto font-light">
                    Our print specialist will review your request and get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gold-gradient text-dark-950 font-bold text-xs shadow-gold-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gurpreet Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 font-medium text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="8847476526"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 font-medium text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="krishjotsingh2@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 font-medium text-sm"
                      />
                    </div>

                    {/* Preferred Service */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Printing Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 font-medium text-sm"
                      >
                        <option value="Visiting Cards">Visiting Cards</option>
                        <option value="Wedding Cards">Wedding Cards</option>
                        <option value="Flex & Banner Printing">Flex & Banner Printing</option>
                        <option value="Pamphlets & Flyers">Pamphlets & Flyers</option>
                        <option value="Bill Books">Bill Books</option>
                        <option value="Letterheads">Letterheads</option>
                        <option value="Brochures">Brochures</option>
                        <option value="Stickers & Labels">Stickers & Labels</option>
                        <option value="Invitation Cards">Invitation Cards</option>
                        <option value="Digital Printing">Digital Printing</option>
                        <option value="Offset Printing">Offset Printing</option>
                        <option value="Custom Printing Solutions">Custom Printing Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Message & Printing Specs *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Specify your dimensions, quantity, paper preference, or special design requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-800 border border-gold-500/30 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 font-medium text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-base text-dark-950 bg-gold-gradient shadow-gold-sm hover:shadow-gold-md transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Submit Printing Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
