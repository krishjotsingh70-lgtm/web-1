'use client';

import { Sparkles } from 'lucide-react';

const ITEMS = [
  'ADOBE PREMIERE PRO',
  'AFTER EFFECTS',
  'PHOTOSHOP',
  'ILLUSTRATOR',
  'COREL DRAW',
  'CANVA',
  'MOTION GRAPHICS',
  'BRAND IDENTITY',
  'THUMBNAIL DESIGN',
  'REELS EDITING',
  'CINEMATIC EDITING',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-cyan-950/40 border-y border-white/10 py-5">
      {/* Edge gradient masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {/* Loop 1 */}
        <div className="flex items-center justify-around w-1/2 gap-8">
          {ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-sm font-heading font-extrabold tracking-widest text-gray-300 hover:text-cyan-400 transition-colors">
              <span>{item}</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
          ))}
        </div>

        {/* Loop 2 Duplicate for infinite loop */}
        <div className="flex items-center justify-around w-1/2 gap-8">
          {ITEMS.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8 text-sm font-heading font-extrabold tracking-widest text-gray-300 hover:text-cyan-400 transition-colors">
              <span>{item}</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
