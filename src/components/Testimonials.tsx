'use client';

import { Sparkles, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Sharma',
      role: 'Business Owner & Entrepreneur',
      rating: 5,
      comment: 'Palki Printing Press created our luxury gold-foiled business cards and corporate brochures. The paper quality and color fidelity blew us away! Deliveries are always right on time.',
      item: 'Visiting Cards & Brochures',
    },
    {
      name: 'Simran & Gurpreet',
      role: 'Wedding Clients',
      rating: 5,
      comment: 'Our wedding invitation cards received endless compliments from all our guests! The royal laser-cut work and gold calligraphic detailing were simply majestic. Highly recommended!',
      item: 'Royal Wedding Cards',
    },
    {
      name: 'Amit Verma',
      role: 'Event Organizer',
      rating: 5,
      comment: 'We needed 15 large outdoor flex banners and 5,000 pamphlets within 24 hours for a major expo. Palki Press pulled through flawlessly with crisp prints and unbelievable speed.',
      item: 'Flex Banners & Pamphlets',
    },
    {
      name: 'Priya Malhotra',
      role: 'Retail Store Manager',
      rating: 5,
      comment: 'Extremely professional team! Their custom die-cut product stickers and branded bill books have given our store a very premium corporate look. Best pricing in town.',
      item: 'Stickers & Bill Books',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-950 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Read authentic experiences from local business leaders, event planners, and families who rely on Palki Printing Press.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* 4 Reviews Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-dark-900 border border-gold-500/20 p-8 flex flex-col justify-between hover:border-gold-500/50 hover:shadow-gold-md transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/10 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-base text-gray-300 font-light italic leading-relaxed mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold font-heading text-white">{rev.name}</h4>
                  <p className="text-xs text-gray-400">{rev.role}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-dark-800 border border-gold-500/20 text-gold-300 text-[11px] font-medium">
                  {rev.item}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
