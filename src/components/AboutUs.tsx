'use client';

import { Sparkles, Palette, ShieldCheck, Zap, Layers, Users, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    {
      icon: Palette,
      title: 'Creative Designs',
      desc: 'In-house graphic artists creating bespoke visual concepts tailored to your brand identity.',
    },
    {
      icon: ShieldCheck,
      title: 'Premium Quality',
      desc: 'State-of-the-art offset & digital machinery with strict quality checks for vibrant, crisp results.',
    },
    {
      icon: Zap,
      title: 'Timely Delivery',
      desc: 'Optimized production workflows ensuring quick turnaround without compromising craftsmanship.',
    },
    {
      icon: Layers,
      title: 'Affordable Pricing',
      desc: 'Transparent, competitive rates for both high-volume corporate runs and small custom orders.',
    },
  ];

  const targetAudiences = [
    'Corporate & Small Businesses',
    'Schools & Educational Institutions',
    'Event Organizers & Planners',
    'Individuals & Family Celebrations',
  ];

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Palki Printing Press</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Crafting Perfection in Every <span className="text-gold-gradient">Single Print</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Audience */}
          <div className="lg:col-span-6 space-y-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white font-heading">
              Your Complete Printing Partner for Every Occasion
            </h3>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-light">
              <strong className="text-gold-400 font-semibold">Palki Printing Press</strong> is a premier full-service printing hub dedicated to providing top-tier printing solutions. Whether you are launching a new corporate venture, hosting an elegant wedding, organizing a school event, or promoting a festival, we deliver print materials that make a lasting impression.
            </p>

            <p className="text-base leading-relaxed text-gray-400 font-light">
              We specialize in end-to-end printing services—combining cutting-edge digital & offset technology with meticulous hand-finishing techniques like gold foil stamping, spot UV, laser engraving, and custom die-cutting.
            </p>

            {/* Audience Badges */}
            <div className="pt-2 space-y-3">
              <div className="text-sm font-semibold text-gold-300 uppercase tracking-wider">
                Trusted Services Provided For:
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {targetAudiences.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-800/60 border border-gold-500/15">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-sm text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-heading">5,000+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
              </div>
              <div className="h-10 w-px bg-gold-500/20" />
              <div>
                <div className="text-lg font-bold text-gold-400 font-heading">100% Guaranteed</div>
                <div className="text-xs text-gray-400">Premium Print Quality</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-dark-800/80 border border-gold-500/20 hover:border-gold-500/60 hover:shadow-gold-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
