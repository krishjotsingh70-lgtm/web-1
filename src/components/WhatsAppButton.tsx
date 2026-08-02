'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918847476526?text=Hello%20Palki%20Printing%20Press!%20I%20would%20like%20to%20inquire%20about%20printing%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-400 hover:scale-110 transition-all duration-300 flex items-center gap-2.5 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold tracking-wide pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
}
