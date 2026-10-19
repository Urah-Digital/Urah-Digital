import React, { useRef, useEffect } from 'react';
import { BRAND } from '../data/content';
import { ArrowUpRight, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { MotionFade } from './MotionTypography';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { HeroParametricBackground } from './HeroParametricBackground';

interface HeroProps {
  onRequestConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestConsultation }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Organic spring physics for fluid cursor tracking across the 3D parametric background
  const smoothX = useSpring(mouseX, { damping: 26, stiffness: 180, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 26, stiffness: 180, mass: 0.5 });
  const cursorOpacity = useSpring(0.45, { damping: 22, stiffness: 140 });

  useEffect(() => {
    const updateInitialPosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Default ambient resting focal point centered on the 3D parametric torus visual
        const defaultX = rect.width ? rect.width * 0.72 : 600;
        const defaultY = rect.height ? rect.height * 0.42 : 280;
        mouseX.set(defaultX);
        mouseY.set(defaultY);
        cursorOpacity.set(0.45);
      }
    };

    updateInitialPosition();
    window.addEventListener('resize', updateInitialPosition);
    return () => window.removeEventListener('resize', updateInitialPosition);
  }, [mouseX, mouseY, cursorOpacity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    cursorOpacity.set(1);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    cursorOpacity.set(1);
  };

  const handleMouseLeave = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(rect.width * 0.72);
      mouseY.set(rect.height * 0.42);
      cursorOpacity.set(0.45);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(touch.clientX - rect.left);
      mouseY.set(touch.clientY - rect.top);
      cursorOpacity.set(0.9);
    }
  };

  const handleTouchEnd = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(rect.width * 0.65);
      mouseY.set(rect.height * 0.35);
      cursorOpacity.set(0.45);
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative pt-40 pb-12 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20 overflow-hidden border-b border-[#1B2231] transition-colors duration-700"
    >
      {/* 3D Parametric Dot-Matrix Background with Drifting Gold Particles & Interactive Cursor Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <HeroParametricBackground 
          cursorX={smoothX}
          cursorY={smoothY}
          cursorOpacity={cursorOpacity}
        />
      </div>

      {/* Subtle Ambient Radial Backlight in Brand Gold (#C69B3C) */}
      <div 
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(198,155,60,0.12),transparent_70%)] blur-[80px] pointer-events-none rounded-full z-[1]"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Mobile-Calibrated Headline: Compact font size, high contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.18] sm:leading-[1.12] mb-2 sm:mb-3 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            Websites that earn trust.
          </motion.h1>

          {/* Punchy One-Sentence Promise Under 18 Words */}
          <MotionFade delay={0.12} yOffset={6}>
            <p className="text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed mb-4 sm:mb-6 max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Websites engineered for Nigerian schools and service businesses whose reputation is their primary product.
            </p>
          </MotionFade>

          {/* Action Controls: Primary button stacked with minimal secondary link on mobile */}
          <MotionFade delay={0.2} yOffset={6}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-4 sm:py-2 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all rounded-lg shadow-sm whitespace-nowrap cursor-pointer text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                Start on WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onRequestConsultation}
                className="inline-flex items-center justify-center py-1.5 sm:px-3.5 sm:py-2 text-xs font-medium text-[#94A3B8] hover:text-[#E2E8F0] sm:bg-[#121620]/90 sm:backdrop-blur-sm sm:hover:bg-[#1B2231] sm:border sm:border-[#1B2231] sm:hover:border-[#C69B3C]/40 transition-all rounded-lg whitespace-nowrap cursor-pointer text-center"
              >
                Request consultation
              </motion.button>
            </div>
          </MotionFade>

          {/* Grounded Trust Signals: Refined, Compact Micro-Strip */}
          <MotionFade delay={0.28} yOffset={6}>
            <div className="rounded-xl bg-[#0E131E]/80 border border-[#1E2638] p-2.5 sm:p-3.5 backdrop-blur-md shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 divide-y sm:divide-y-0 sm:divide-x divide-[#1B2231]/80">
                <div className="flex items-center gap-2.5 sm:px-2 first:pl-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C69B3C] shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold text-[#E2E8F0] leading-tight">
                      30/40/30 Milestones
                    </div>
                    <div className="text-[10px] text-[#8492A6] leading-tight mt-0.5">
                      Pay as work is verified
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-3">
                  <Clock className="w-3.5 h-3.5 text-[#C69B3C] shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold text-[#E2E8F0] leading-tight">
                      Fixed Scope & Dates
                    </div>
                    <div className="text-[10px] text-[#8492A6] leading-tight mt-0.5">
                      Two revision rounds
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1.5 sm:pt-0 sm:px-3">
                  <Award className="w-3.5 h-3.5 text-[#C69B3C] shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold text-[#E2E8F0] leading-tight">
                      30% Founding Rate
                    </div>
                    <div className="text-[10px] text-[#8492A6] leading-tight mt-0.5">
                      First five projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
};
