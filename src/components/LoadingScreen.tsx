'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] p-8 text-white select-none"
        >
          {/* Top Brand Name */}
          <div className="flex w-full items-center justify-between font-heading text-sm tracking-widest text-gray-400 uppercase">
            <span>KRISHJOT SINGH</span>
            <span className="text-purple-400">PORTFOLIO &copy; 2026</span>
          </div>

          {/* Center Main Text */}
          <div className="text-center max-w-xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-4"
            >
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-gradient">
                KRISHJOT
              </h1>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 blur-xl"></div>
            </motion.div>
            <p className="text-xs sm:text-sm text-gray-400 font-light tracking-widest uppercase">
              "Crafting visuals that tell stories."
            </p>
          </div>

          {/* Bottom Progress Counter & Progress Bar */}
          <div className="w-full max-w-md flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-sm text-purple-400">
              <span>LOADING EXPERIENCE</span>
              <span className="text-xl font-bold text-cyan-400">{progress}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-900 p-[1px]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_#8b5cf6]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
