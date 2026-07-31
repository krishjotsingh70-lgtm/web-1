'use client';

import { useState } from 'react';
import { Sparkles, Eye, X, Filter, ZoomIn, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'business' | 'weddings' | 'banners' | 'packaging'>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Metallic Gold Foil Business Cards',
      category: 'business',
      categoryLabel: 'Visiting Cards',
      src: '/images/visiting_cards_preview_1785491610100.png',
      desc: '350 GSM matte black cardstock with raised metallic gold foil embossing and spot UV coating.',
    },
    {
      id: 2,
      title: 'Royal Laser-Cut Wedding Suite',
      category: 'weddings',
      categoryLabel: 'Wedding Cards',
      src: '/images/wedding_card_preview_1785491623741.png',
      desc: 'Ornate gold foil calligraphy on luxury velvet cardstock with laser-cut lace outer envelope.',
    },
    {
      id: 3,
      title: 'High Definition Outdoor Flex Banner',
      category: 'banners',
      categoryLabel: 'Flex & Banner',
      src: '/images/flex_banner_preview_1785491636845.png',
      desc: 'Weatherproof high-density star flex print with vibrant pigment inks for corporate events.',
    },
    {
      id: 4,
      title: 'Executive Tri-Fold Brochure & Rigid Box',
      category: 'packaging',
      categoryLabel: 'Brochure & Packaging',
      src: '/images/brochure_packaging_preview_1785491651900.png',
      desc: 'Heavyweight art paper tri-fold brochure with matching gold-foil stamped rigid presentation box.',
    },
    {
      id: 5,
      title: 'Custom Die-Cut Vinyl Product Labels',
      category: 'packaging',
      categoryLabel: 'Stickers & Labels',
      src: '/images/visiting_cards_preview_1785491610100.png',
      desc: 'Waterproof glossy transparent product stickers with precision die-cut contours.',
    },
    {
      id: 6,
      title: 'Luxury Corporate Event Invitations',
      category: 'weddings',
      categoryLabel: 'Invitation Cards',
      src: '/images/wedding_card_preview_1785491623741.png',
      desc: 'Textured ivory cardstock featuring gold wax seal accents and custom envelope liner.',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'business', label: 'Business Cards' },
    { id: 'weddings', label: 'Wedding & Events' },
    { id: 'banners', label: 'Banners & Flex' },
    { id: 'packaging', label: 'Brochures & Packaging' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-950 relative overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Print Showcase & <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Explore a curated selection of our finest printing samples, metallic finishes, and bespoke stationery designs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gold-gradient text-dark-950 shadow-gold-sm scale-105'
                  : 'bg-dark-800/80 border border-gold-500/20 text-gray-300 hover:border-gold-500/50 hover:text-gold-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry / Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ src: item.src, title: item.title, desc: item.desc })}
              className="group relative rounded-2xl overflow-hidden bg-dark-900 border border-gold-500/20 cursor-pointer shadow-lg hover:border-gold-500/60 hover:shadow-gold-md transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-dark-800">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-gold-500/30 text-gold-300 text-[11px] font-semibold">
                  {item.categoryLabel}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-gold-300" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-gold-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-dark-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-950/80 border border-gold-500/30 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-dark-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7 bg-dark-950 flex items-center justify-center p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              <div className="md:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-2">
                    Print Sample Detail
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {selectedImage.desc}
                  </p>
                  
                  <div className="space-y-2 text-xs text-gray-400 border-t border-gold-500/20 pt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-400" />
                      <span>Custom dimensions & paper GSM available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-400" />
                      <span>High precision color matching guaranteed</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#calculator"
                  onClick={() => setSelectedImage(null)}
                  className="w-full mt-6 py-3 rounded-xl font-bold text-sm text-dark-950 bg-gold-gradient flex items-center justify-center gap-2 shadow-gold-sm"
                >
                  Order This Print Style
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
