'use client';

import { Sparkles, Award, DollarSign, Truck, Users, Cpu, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'High Quality Printing',
      desc: 'Obsessive color matching, crisp resolution, and premium paper stock choices for every single job.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      desc: 'Transparent factory-direct pricing with bulk volume discounts to maximize your return on investment.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Strict schedule adherence with express 24-48 hour turnaround options for urgent deadlines.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      desc: 'Dedicated graphic designers and master print technicians with over 15+ years of industry mastery.',
    },
    {
      icon: Cpu,
      title: 'Modern Printing Machines',
      desc: 'Powered by latest Heidelberg offset units, high-speed digital engines, and precision laser die-cutters.',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      desc: 'Uncompromising commitment to client delight, with 100% satisfaction guarantee on all delivered orders.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-dark-900 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Palki Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Why Choose <span className="text-gold-gradient">Palki Printing Press</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            We don&apos;t just print paper; we build powerful visual identity assets for your brand and memorable celebrations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-dark-950 border border-gold-500/20 p-8 hover:border-gold-500/60 hover:shadow-gold-md transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Gold Number Accent */}
                <div className="absolute top-6 right-6 text-3xl font-extrabold font-heading text-dark-800 group-hover:text-gold-500/20 transition-colors">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-gold-300 transition-colors mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
