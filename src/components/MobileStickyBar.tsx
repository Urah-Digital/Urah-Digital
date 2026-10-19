import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/content';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileStickyBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition from full/hidden to bottom-right floating widget after scrolling 140px
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="z-50 pointer-events-auto">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          /* Initial State at Top of Mobile Screen: Compact non-intrusive bottom pill */
          <motion.div
            key="bottom-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 40 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed bottom-4 right-4 left-4"
          >
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 flex items-center justify-between px-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#06080C] font-semibold text-xs rounded-xl shadow-xl shadow-black/60 transition-all border border-[#FBBF24]/60 cursor-pointer active:scale-[0.98]"
              aria-label="Start dialogue on WhatsApp"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-current" />
                <span className="tracking-tight">Start on WhatsApp</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] opacity-90">
                <span>Direct Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </motion.div>
        ) : (
          /* Scrolled State: Sleek Round Floating Icon Widget Anchored to Bottom Right */
          <motion.div
            key="floating-widget"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-50"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#06080C] flex items-center justify-center shadow-2xl shadow-black border-2 border-[#FBBF24] transition-colors relative group cursor-pointer"
              aria-label="Chat on WhatsApp"
              title="Chat with URAH DIGITAL on WhatsApp"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
              
              {/* Subtle pulsing ping indicator on widget */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#10B981] rounded-full border-2 border-[#0A0A0A] animate-pulse" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
