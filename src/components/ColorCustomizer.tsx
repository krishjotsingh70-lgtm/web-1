'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, RotateCcw, Sparkles, Check, Sliders, RefreshCw } from 'lucide-react';

export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  text: string;
  button: string;
}

export const DEFAULT_THEME: ColorTheme = {
  primary: '#8b5cf6',   // Purple
  secondary: '#6366f1', // Indigo
  accent: '#06b6d4',    // Cyan
  bg: '#050505',        // Ultra Dark
  text: '#f3f4f6',      // Light Gray/White
  button: '#8b5cf6',    // Button Gradient Base
};

export const PRESET_THEMES: { name: string; icon: string; theme: ColorTheme }[] = [
  {
    name: 'Default Cyber',
    icon: '✨',
    theme: DEFAULT_THEME,
  },
  {
    name: 'Royal Gold',
    icon: '👑',
    theme: {
      primary: '#eab308',
      secondary: '#d97706',
      accent: '#f59e0b',
      bg: '#0a0804',
      text: '#fef9c3',
      button: '#eab308',
    },
  },
  {
    name: 'Emerald Mint',
    icon: '🌿',
    theme: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399',
      bg: '#03140e',
      text: '#ecfdf5',
      button: '#10b981',
    },
  },
  {
    name: 'Crimson Sunset',
    icon: '🔴',
    theme: {
      primary: '#f43f5e',
      secondary: '#e11d48',
      accent: '#fb7185',
      bg: '#120407',
      text: '#ffe4e6',
      button: '#f43f5e',
    },
  },
  {
    name: 'Ocean Sapphire',
    icon: '🌊',
    theme: {
      primary: '#3b82f6',
      secondary: '#2563eb',
      accent: '#38bdf8',
      bg: '#040914',
      text: '#f0f9ff',
      button: '#3b82f6',
    },
  },
  {
    name: 'Neon Pink',
    icon: '⚡',
    theme: {
      primary: '#ec4899',
      secondary: '#d946ef',
      accent: '#a855f7',
      bg: '#0d040a',
      text: '#fdf4ff',
      button: '#ec4899',
    },
  },
];

export default function ColorCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ColorTheme>(DEFAULT_THEME);

  // Apply theme variables to root document element
  const applyTheme = (colors: ColorTheme) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--button-color', colors.button);
  };

  // Load saved theme from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('krishjot_custom_colors');
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...DEFAULT_THEME, ...parsed };
        setTheme(merged);
        applyTheme(merged);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Update a single color field
  const handleColorChange = (key: keyof ColorTheme, val: string) => {
    const updated = { ...theme, [key]: val };
    setTheme(updated);
    applyTheme(updated);
    try {
      localStorage.setItem('krishjot_custom_colors', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Apply a preset theme
  const handlePresetSelect = (presetTheme: ColorTheme) => {
    setTheme(presetTheme);
    applyTheme(presetTheme);
    try {
      localStorage.setItem('krishjot_custom_colors', JSON.stringify(presetTheme));
    } catch (e) {
      console.error(e);
    }
  };

  // Reset to default theme
  const handleReset = () => {
    setTheme(DEFAULT_THEME);
    applyTheme(DEFAULT_THEME);
    try {
      localStorage.removeItem('krishjot_custom_colors');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* Top Bar Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        data-cursor="hover"
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold font-mono text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] group"
        title="Customize Website Colors"
      >
        <Palette className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
        <span>Customize Colors</span>
      </button>

      {/* Modern Color Customization Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Customizer Panel Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg rounded-3xl bg-[#090914] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-white text-base sm:text-lg">
                      Website Color Studio
                    </h3>
                    <p className="text-[11px] text-gray-400 font-mono">
                      Real-time live color customization
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-6 space-y-6">
                
                {/* 1. Quick Presets Section */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 block mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Color Presets
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRESET_THEMES.map((preset) => {
                      const isActive =
                        theme.primary.toLowerCase() === preset.theme.primary.toLowerCase() &&
                        theme.bg.toLowerCase() === preset.theme.bg.toLowerCase();

                      return (
                        <button
                          key={preset.name}
                          onClick={() => handlePresetSelect(preset.theme)}
                          className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                            isActive
                              ? 'bg-purple-950/40 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                              : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{preset.icon}</span>
                            <span className="text-xs font-semibold text-white">
                              {preset.name}
                            </span>
                          </div>
                          <div
                            className="w-3.5 h-3.5 rounded-full border border-white/30"
                            style={{ backgroundColor: preset.theme.primary }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Individual Element Color Pickers */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-3 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Customize Individual Colors
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Primary Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Headings & Accents</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.primary}</span>
                        <input
                          type="color"
                          value={theme.primary}
                          onChange={(e) => handleColorChange('primary', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Secondary Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Secondary Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Gradient Midtones</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.secondary}</span>
                        <input
                          type="color"
                          value={theme.secondary}
                          onChange={(e) => handleColorChange('secondary', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Accent Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Accent Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Cyan Badges & Glows</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.accent}</span>
                        <input
                          type="color"
                          value={theme.accent}
                          onChange={(e) => handleColorChange('accent', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Background Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Background Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Main Website Canvas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.bg}</span>
                        <input
                          type="color"
                          value={theme.bg}
                          onChange={(e) => handleColorChange('bg', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Text Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Text Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Body & Paragraph Text</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.text}</span>
                        <input
                          type="color"
                          value={theme.text}
                          onChange={(e) => handleColorChange('text', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Button Color */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Button Color</span>
                        <span className="text-[10px] font-mono text-gray-400">Primary CTA Buttons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-300">{theme.button}</span>
                        <input
                          type="color"
                          value={theme.button}
                          onChange={(e) => handleColorChange('button', e.target.value)}
                          className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all duration-200 flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-pink-400" />
                  <span>Reset to Default</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  Done & Apply
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
