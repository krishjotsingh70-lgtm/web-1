'use client';

import { useState } from 'react';
import { 
  CreditCard, 
  Heart, 
  Image as ImageIcon, 
  FileText, 
  Receipt, 
  Mail, 
  BookOpen, 
  Tag, 
  Calendar, 
  Printer, 
  Sliders, 
  Wrench,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'events' | 'marketing' | 'tech'>('all');

  const servicesData = [
    {
      id: 'visiting-cards',
      title: 'Visiting Cards',
      category: 'business',
      icon: CreditCard,
      desc: 'Premium business cards with matte/gloss finish, spot UV, gold/silver foil stamping, and velvet texture.',
      features: ['350-700 GSM Stock', 'Metallic Foil & UV', 'Round Cornering'],
      badge: 'Popular',
    },
    {
      id: 'wedding-cards',
      title: 'Wedding Cards',
      category: 'events',
      icon: Heart,
      desc: 'Royal wedding stationery crafted with intricate laser cutting, golden typography, and velvet envelopes.',
      features: ['Laser Cut Designs', 'Gold Foil Calligraphy', 'Luxury Box Packing'],
      badge: 'Bestseller',
    },
    {
      id: 'flex-banner',
      title: 'Flex & Banner Printing',
      category: 'marketing',
      icon: ImageIcon,
      desc: 'Heavy-duty outdoor flex, star flex, backlit glow signs, and vinyl banners with weather-resistant inks.',
      features: ['HD Print Resolution', 'Weatherproof Flex', 'Custom Eyelets & Framing'],
      badge: 'High Impact',
    },
    {
      id: 'pamphlets-flyers',
      title: 'Pamphlets & Flyers',
      category: 'marketing',
      icon: FileText,
      desc: 'Vibrant promotional flyers and pamphlets printed on premium glossy or matte art paper in all sizes.',
      features: ['A4, A5, DL Sizes', 'Single/Bi-fold Options', 'Bulk Order Discount'],
    },
    {
      id: 'bill-books',
      title: 'Bill Books',
      category: 'business',
      icon: Receipt,
      desc: 'Customized NCR carbonless receipt books, tax invoices, and vouchers with automatic serial numbering.',
      features: ['Duplicate & Triplicate', 'Carbonless Copying', 'Sequential Numbering'],
    },
    {
      id: 'letterheads',
      title: 'Letterheads',
      category: 'business',
      icon: Mail,
      desc: 'Executive stationery on high-grade bond paper with crisp corporate logo printing and watermarks.',
      features: ['100-120 GSM Executive Stock', 'Laser Printer Friendly', 'Matching Envelopes'],
    },
    {
      id: 'brochures',
      title: 'Brochures',
      category: 'business',
      icon: BookOpen,
      desc: 'Multi-page corporate brochures, bi-fold & tri-fold product catalogs with glossy lamination.',
      features: ['Bi-Fold / Tri-Fold', 'Gloss & Matte Finish', 'Heavy Cover Pages'],
    },
    {
      id: 'stickers-labels',
      title: 'Stickers & Labels',
      category: 'marketing',
      icon: Tag,
      desc: 'Custom die-cut waterproof vinyl stickers, product labels, transparent stickers, and barcode labels.',
      features: ['Waterproof & UV Safe', 'Custom Die-Cut Shape', 'Roll & Sheet Formats'],
    },
    {
      id: 'invitation-cards',
      title: 'Invitation Cards',
      category: 'events',
      icon: Calendar,
      desc: 'Elegant invitations for birthdays, anniversaries, corporate galas, and religious ceremonies.',
      features: ['Textured Cardstock', 'Envelope Included', 'Bespoke Themes'],
    },
    {
      id: 'digital-printing',
      title: 'Digital Printing',
      category: 'tech',
      icon: Printer,
      desc: 'Ultra-fast short-run digital printing for urgent requirements with zero setup time.',
      features: ['Same Day Delivery', 'Variable Data Print', 'Crisp Color Fidelity'],
      badge: 'Express',
    },
    {
      id: 'offset-printing',
      title: 'Offset Printing',
      category: 'tech',
      icon: Sliders,
      desc: 'Commercial high-volume printing using advanced Heidelberg presses for maximum cost efficiency.',
      features: ['Lowest Per-Unit Cost', 'Pantone Color Match', 'Massive Quantity Runs'],
    },
    {
      id: 'custom-solutions',
      title: 'Custom Printing Solutions',
      category: 'tech',
      icon: Wrench,
      desc: 'Specialized print jobs including rigid packaging boxes, wall calendars, ID cards, and custom merchandise.',
      features: ['Tailored Dimensions', 'Rigid Box Packaging', 'End-to-End Prototyping'],
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const categoryButtons = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'business', label: 'Business Essentials' },
    { id: 'events', label: 'Wedding & Events' },
    { id: 'marketing', label: 'Banners & Flyers' },
    { id: 'tech', label: 'Digital & Offset' },
  ];

  return (
    <section id="services" className="py-24 bg-dark-950 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Our Premium <span className="text-gold-gradient">Printing Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            From quick digital prints to high-volume commercial offset production, explore our wide array of print craftsmanship.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categoryButtons.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-dark-950 shadow-gold-sm scale-105'
                  : 'bg-dark-800/80 border border-gold-500/20 text-gray-300 hover:border-gold-500/50 hover:text-gold-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (12 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-dark-900 border border-gold-500/20 p-7 flex flex-col justify-between hover:border-gold-500/60 hover:shadow-gold-md transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Badge if available */}
                {service.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-[10px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </span>
                )}

                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-gold-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Trigger */}
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="w-full py-3 rounded-xl border border-gold-500/30 text-gold-300 hover:text-dark-950 hover:bg-gold-gradient font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
