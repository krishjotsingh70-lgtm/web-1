'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import QuoteCalculator from '@/components/QuoteCalculator';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { X, Sparkles, Send } from 'lucide-react';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState('Visiting Cards');
  const [contactPrefilledMsg, setContactPrefilledMsg] = useState('');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedQuoteService(serviceName);
    }
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleQuoteToContactForm = (details: string) => {
    setContactPrefilledMsg(details);
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-dark-950 text-gray-100 relative">
      {/* Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuote} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuote()} />

      {/* About Us */}
      <AboutUs />

      {/* Services Grid (12 Services) */}
      <Services onSelectServiceForQuote={(service) => handleOpenQuote(service)} />

      {/* Interactive Quote Calculator */}
      <QuoteCalculator
        initialService={selectedQuoteService}
        onSendToContactForm={handleQuoteToContactForm}
      />

      {/* Portfolio / Gallery */}
      <Portfolio />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection prefilledMessage={contactPrefilledMsg} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Modal Fallback if triggered */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-dark-900 border border-gold-500/40 rounded-3xl p-8 shadow-2xl">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold-400 p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Request a Custom Quote
              </h3>
              <p className="text-sm text-gray-300">
                Choose to calculate your price instantly online or speak with our print manager directly.
              </p>
              <div className="pt-4 space-y-3">
                <a
                  href={`https://wa.me/918847476526?text=Hello%20Palki%20Printing%20Press!%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(selectedQuoteService)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-dark-950 flex items-center justify-center gap-2"
                >
                  Direct WhatsApp Inquiry
                </a>
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(false);
                    handleQuoteToContactForm(`Inquiry for ${selectedQuoteService}`);
                  }}
                  className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Fill Contact Form
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
