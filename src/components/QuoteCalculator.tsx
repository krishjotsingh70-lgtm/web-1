'use client';

import { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Send, CheckCircle2, RefreshCw } from 'lucide-react';

interface QuoteCalculatorProps {
  initialService?: string;
  onSendToContactForm?: (details: string) => void;
}

export default function QuoteCalculator({ initialService = 'Visiting Cards', onSendToContactForm }: QuoteCalculatorProps) {
  const [selectedService, setSelectedService] = useState(initialService);
  const [quantity, setQuantity] = useState<number>(500);
  const [paperStock, setPaperStock] = useState('350 GSM Matte Art Card');
  const [finishing, setFinishing] = useState('Matte + Gold Foil Stamping');
  const [urgentDelivery, setUrgentDelivery] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const servicesList = [
    'Visiting Cards',
    'Wedding Cards',
    'Flex & Banner Printing',
    'Pamphlets & Flyers',
    'Bill Books',
    'Letterheads',
    'Brochures',
    'Stickers & Labels',
    'Invitation Cards',
    'Digital Printing',
    'Offset Printing',
    'Custom Printing Solutions',
  ];

  const stockOptions = [
    'Standard 300 GSM Art Card',
    '350 GSM Matte Art Card',
    'Royal Velvet Texture (400 GSM)',
    '100 GSM Executive Bond Paper',
    'Heavy-Duty Star Flex (13 oz)',
    'Waterproof Vinyl Adhesive',
  ];

  const finishingOptions = [
    'Standard Cut (No Lamination)',
    'Thermal Matte Lamination',
    'High Gloss UV Coating',
    'Matte + Gold Foil Stamping',
    'Spot UV + Gold Foil Accent',
    'Custom Laser Die-Cutting',
  ];

  // Base pricing calculator matrix for instant ballpark figure
  const calculateEstimatedPrice = () => {
    let baseRatePerUnit = 1.5;
    if (selectedService.includes('Wedding')) baseRatePerUnit = 25;
    else if (selectedService.includes('Flex')) baseRatePerUnit = 12; // Per sqft
    else if (selectedService.includes('Bill')) baseRatePerUnit = 60; // Per book
    else if (selectedService.includes('Brochure')) baseRatePerUnit = 15;
    else if (selectedService.includes('Letterhead')) baseRatePerUnit = 3.5;
    else if (selectedService.includes('Visiting')) baseRatePerUnit = 1.2;

    if (finishing.includes('Gold Foil')) baseRatePerUnit *= 1.4;
    if (finishing.includes('Spot UV')) baseRatePerUnit *= 1.3;
    if (paperStock.includes('Velvet')) baseRatePerUnit *= 1.35;

    let subtotal = baseRatePerUnit * quantity;
    if (urgentDelivery) subtotal += 250; // Express fee
    return Math.round(subtotal);
  };

  const estimatedTotal = calculateEstimatedPrice();

  const getQuoteText = () => {
    return `Hello Palki Printing Press! I would like a quote for:\n• Service: ${selectedService}\n• Quantity: ${quantity}\n• Paper/Stock: ${paperStock}\n• Finishing: ${finishing}\n• Delivery: ${urgentDelivery ? 'Express (24h)' : 'Standard'}\n• Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}`;
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(getQuoteText());
    window.open(`https://wa.me/918847476527?text=${text}`, '_blank');
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(getQuoteText());
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
    if (onSendToContactForm) {
      onSendToContactForm(getQuoteText());
    }
  };

  return (
    <section id="calculator" className="py-24 bg-dark-900 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest shadow-gold-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Instant <span className="text-gold-gradient">Quote Calculator</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Customize your print parameters below for an instant ballpark estimate and send your order directly to our WhatsApp printing desk.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-dark-950 border border-gold-500/30 p-6 sm:p-10 shadow-gold-md relative">
          
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Options Selector Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Select Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                  1. Choose Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 font-medium text-sm"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Select Quantity Slider & Buttons */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    2. Select Quantity
                  </label>
                  <span className="text-sm font-bold text-white bg-gold-500/20 px-3 py-1 rounded-full border border-gold-500/40">
                    {quantity.toLocaleString()} units
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>50</span>
                  <span>1,000</span>
                  <span>5,000</span>
                  <span>10,000+</span>
                </div>
              </div>

              {/* 3. Paper / Stock Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                  3. Paper Stock & Quality
                </label>
                <select
                  value={paperStock}
                  onChange={(e) => setPaperStock(e.target.value)}
                  className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 font-medium text-sm"
                >
                  {stockOptions.map((stk, idx) => (
                    <option key={idx} value={stk}>
                      {stk}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Finishing Options */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                  4. Lamination & Finishing
                </label>
                <select
                  value={finishing}
                  onChange={(e) => setFinishing(e.target.value)}
                  className="w-full bg-dark-800 border border-gold-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 font-medium text-sm"
                >
                  {finishingOptions.map((fn, idx) => (
                    <option key={idx} value={fn}>
                      {fn}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Express Delivery Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-dark-800/80 border border-white/5">
                <div>
                  <div className="text-sm font-semibold text-white">Express 24-Hour Delivery</div>
                  <div className="text-xs text-gray-400">Priority queue & fast-track dispatch</div>
                </div>
                <button
                  type="button"
                  onClick={() => setUrgentDelivery(!urgentDelivery)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                    urgentDelivery ? 'bg-gold-500' : 'bg-dark-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-dark-950 transition-transform duration-300 ${
                      urgentDelivery ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>

            {/* Right Summary Display Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-dark-900 border border-gold-500/40 shadow-inner space-y-6">
              
              <div>
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-4">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Estimate Summary
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gold-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5" /> Live Estimate
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Selected Service:</span>
                    <span className="font-semibold text-white">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quantity:</span>
                    <span className="font-semibold text-white">{quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stock Paper:</span>
                    <span className="font-semibold text-white truncate max-w-[150px]">{paperStock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Finishing:</span>
                    <span className="font-semibold text-gold-300 truncate max-w-[150px]">{finishing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dispatch Speed:</span>
                    <span className="font-semibold text-white">
                      {urgentDelivery ? 'Express (24h)' : 'Standard (2-3 Days)'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/20">
                  <div className="text-xs text-gray-400 mb-1">Estimated Ballpark Price</div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-gold-gradient">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                    <span className="text-xs text-gray-500 font-normal ml-2">*Approx GST Extra</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-dark-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-dark-950" />
                  <span>Send Order to WhatsApp (8847476527)</span>
                </button>

                <button
                  onClick={handleCopyQuote}
                  className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-gold-300 border border-gold-500/30 hover:bg-gold-500/10 transition-colors flex items-center justify-center gap-2"
                >
                  {copiedSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Quote Copied to Form!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-400" />
                      <span>Use Quote in Contact Form</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
