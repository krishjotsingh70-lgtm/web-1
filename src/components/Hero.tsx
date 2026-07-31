'use client';

import { Sparkles, Phone, Award, Clock, ShieldCheck, ArrowRight, Printer, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-dark-950">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Decorative Printing Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-800/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium shadow-gold-sm">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Premium Printing Press & Design Studio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
                Palki Printing <br />
                <span className="text-gold-gradient drop-shadow-sm">Press</span>
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gold-200/90 italic tracking-wide">
                &ldquo;Quality Printing, Creative Designs & Fast Delivery&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transforming your vision into flawless physical print. From luxurious business cards and wedding stationery to high-impact flex banners and custom packaging, we deliver unmatched color precision and speed.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Modern Heidelberg Offset</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Gold Foil & Spot UV</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Express 24h Turnaround</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-dark-950 bg-gold-gradient shadow-gold-md hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:8847476527"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-gold-300 border-2 border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-gold-400" />
                <span>Call Now: 8847476527</span>
              </a>
            </div>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gold-500/15 max-w-xl mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">15k+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Printed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-heading">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-400">Color Accuracy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">On-Time Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Frame */}
              <div className="relative rounded-3xl bg-gradient-to-b from-gold-400/30 via-gold-600/10 to-transparent p-1 shadow-2xl">
                <div className="rounded-[22px] bg-dark-900 p-6 space-y-6 overflow-hidden relative">
                  
                  {/* Decorative Banner Graphics / Image preview */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                    <img
                      src="/images/visiting_cards_preview_1785491610100.png"
                      alt="Palki Printing Press Showcase"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-dark-950/80 backdrop-blur-md border border-gold-500/30 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gold-400 font-medium">Featured Print Sample</p>
                        <p className="text-sm text-white font-bold">Gold Foil Textured Business Cards</p>
                      </div>
                      <Printer className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>

                  {/* High Value Features Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-dark-800/80 border border-white/5 flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold-400 shrink-0" />
                      <div>
                        <div className="text-white font-semibold">Premium Stock</div>
                        <div className="text-gray-400 text-[11px]">350-700 GSM</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-dark-800/80 border border-white/5 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                      <div>
                        <div className="text-white font-semibold">Fast Turnaround</div>
                        <div className="text-gray-400 text-[11px]">Same Day Available</div>
                      </div>
                    </div>
                  </div>

                  {/* Quality Assurance Stamp */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-gold-500/10 to-transparent border-l-4 border-gold-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-gold-400" />
                      <span className="text-xs sm:text-sm font-medium text-gray-200">
                        100% Quality & Satisfaction Guaranteed
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
