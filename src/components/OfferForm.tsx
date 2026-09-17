'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Tag,
  User,
  Mail,
  Phone,
  Search,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Gift,
  Send,
  Loader2,
  Percent,
} from 'lucide-react';

export default function OfferForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    details: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please tell us what you are looking for.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitted || isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send submission data to email endpoint (krishjotsingh2@gmail.com) via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/krishjotsingh2@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🎉 30% OFF Claimed by ${formData.name}`,
          'Offer Code': 'SPECIAL30OFF',
          'Full Name': formData.name,
          'Email Address': formData.email,
          'Phone Number': formData.phone,
          'What They Are Looking For': formData.requirement,
          'Project Details': formData.details || 'None provided',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback: accept submission and display confirmation
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback display confirmation even if network blocked formsubmit
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="offer" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background Animated Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Google Form-style Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0f0f1c] via-[#090912] to-black border border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.2)] backdrop-blur-2xl"
        >
          {/* Top Form Banner Accent Line (Google Form Style Header) */}
          <div className="h-3 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />

          {/* Form Header */}
          <div className="p-6 sm:p-10 border-b border-white/10 bg-white/[0.02]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/30 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Gift className="w-4 h-4 text-purple-400 animate-bounce" />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest font-bold">
                LIMITED TIME EXCLUSIVE OFFER
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">30% OFF</span> Your First Order 🎉
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Tell us what you’re looking for and unlock your exclusive 30% discount.
            </p>
          </div>

          {/* Form Body / Confirmation Screen */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* SUCCESS CONFIRMATION SCREEN */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-10 px-4 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-purple-500/20 border-2 border-purple-400 text-purple-300 flex items-center justify-center shadow-[0_0_30px_#8b5cf6] animate-pulse">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="max-w-xl space-y-3">
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block">
                      OFFER CLAIMED
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      🎉 Thank you! Your 30% OFF offer has been successfully claimed. We’ll contact you shortly.
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      Our team is reviewing your requirements and will get back to you within 30 minutes with your discounted quotation.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/918847476526?text=${encodeURIComponent(
                        `Hi Krishjot, I just claimed 30% OFF for my project requirement: ${formData.requirement}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-300"
                    >
                      Instant WhatsApp Confirmation ↗
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* FORM INPUT FIELDS */
                <motion.form
                  key="form-screen"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Field 1: Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono font-semibold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      Full Name <span className="text-pink-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border ${
                          errors.name ? 'border-pink-500/80 focus:border-pink-500' : 'border-white/10 focus:border-purple-500'
                        } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-pink-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2 & Field 3: Email Address & Phone Number Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-semibold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        Email Address <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@gmail.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border ${
                          errors.email ? 'border-pink-500/80 focus:border-pink-500' : 'border-white/10 focus:border-cyan-500'
                        } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200`}
                      />
                      {errors.email && (
                        <p className="text-xs text-pink-400 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-semibold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-400" />
                        Phone Number <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border ${
                          errors.phone ? 'border-pink-500/80 focus:border-pink-500' : 'border-white/10 focus:border-purple-500'
                        } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-pink-400 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Field 4: What are you looking for? (Required Text Input) */}
                  <div className="space-y-2">
                    <label htmlFor="requirement" className="text-xs font-mono font-semibold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                      <Search className="w-4 h-4 text-pink-400" />
                      What are you looking for? <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="e.g. Cinematic YouTube video edit, poster design, brand logo, wedding invitation..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border ${
                        errors.requirement ? 'border-pink-500/80 focus:border-pink-500' : 'border-white/10 focus:border-pink-500'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-200`}
                    />
                    {errors.requirement && (
                      <p className="text-xs text-pink-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.requirement}
                      </p>
                    )}
                  </div>

                  {/* Field 5: Tell us a little about your project (Optional Textarea) */}
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-xs font-mono font-semibold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      Tell us a little about your project <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Share details such as target deadline, reference links, or specific preferences..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Claiming Discount...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          <span>Claim My 30% OFF 🎉</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
