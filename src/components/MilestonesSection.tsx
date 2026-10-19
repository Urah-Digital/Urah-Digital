import React from 'react';
import { PROCESS_STEPS, BRAND } from '../data/content';
import { CalendarCheck, RefreshCw, ShieldCheck } from 'lucide-react';
import { StaggeredHeading, MotionFade } from './MotionTypography';
import { motion } from 'framer-motion';

export const MilestonesSection: React.FC = () => {
  // Milestone triggers mapped to phases
  const stepMeta = [
    { trigger: '30% Kickoff Deposit', highlight: false },
    { trigger: '40% Design Approval', highlight: true },
    { trigger: 'Production Assembly', highlight: false },
    { trigger: 'Final 30% Handover', highlight: true },
    { trigger: 'Monthly Retainer', highlight: false }
  ];

  return (
    <section className="py-20 md:py-32 border-b border-[#1B2231] bg-[#0A0A0A] overflow-hidden relative">
      {/* Background Architectural Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C69B3C]/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <MotionFade viewportTrigger delay={0.05} yOffset={8}>
            <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-2">
              Structured Delivery
            </div>
          </MotionFade>

          <StaggeredHeading
            text="Process and milestone protection"
            as="h2"
            viewportTrigger
            delay={0.1}
            className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-tight mb-4 font-normal"
          />

          <MotionFade viewportTrigger delay={0.2} yOffset={10}>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Our 30/40/30 milestone structure protects your capital. You verify progress at each checkpoint before releasing the next payment.
            </p>
          </MotionFade>
        </div>

        {/* 30/40/30 Milestone Overview Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div 
            whileHover={{ y: -3, borderColor: 'rgba(198, 155, 60, 0.4)' }}
            className="p-6 rounded-2xl bg-[#121620] border border-[#1B2231] relative"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="font-mono text-3xl font-bold text-[#E2E8F0] tabular-nums">
                {BRAND.paymentMilestones.start}
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Milestone 1</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C69B3C] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Kickoff & Scope</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Paid to commence architecture upon receipt of scope and kickoff assets.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, borderColor: 'rgba(198, 155, 60, 0.7)' }}
            className="p-6 rounded-2xl bg-[#121620] border border-[#C69B3C]/50 shadow-lg shadow-[#C69B3C]/5 relative"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="font-mono text-3xl font-bold text-[#E2E8F0] tabular-nums">
                {BRAND.paymentMilestones.designApproval}
              </span>
              <span className="text-[10px] font-mono text-[#C69B3C] uppercase">Milestone 2</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C69B3C] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Design Approval</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Due only after you review and approve the screen designs and first revision pass.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3, borderColor: 'rgba(198, 155, 60, 0.4)' }}
            className="p-6 rounded-2xl bg-[#121620] border border-[#1B2231] relative"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="font-mono text-3xl font-bold text-[#E2E8F0] tabular-nums">
                {BRAND.paymentMilestones.launchHandover}
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Milestone 3</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C69B3C] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Handover & Launch</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Released upon final preview verification before live domain deployment.
            </p>
          </motion.div>
        </div>

        {/* Unified "Ball Cards & Animated Curvy Line" Delivery Timeline (Single, uncluttered module) */}
        <div className="relative mb-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#E2E8F0] mb-2 font-normal">
              Five-Step Delivery Journey
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Connected phases flowing from brief to long-term care with transparent verification.
            </p>
          </div>

          {/* Desktop Flow: Curvy Connected Animated SVG Line */}
          <div className="relative hidden lg:block">
            {/* The Curvy Line Connecting the Ball Cards */}
            <svg
              className="absolute top-16 left-0 w-full h-32 pointer-events-none z-0 overflow-visible"
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ghost base line */}
              <path
                d="M 100 60 C 200 10, 300 110, 500 60 C 700 10, 800 110, 900 60"
                stroke="#1B2231"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Animated glowing gold curvy path revealed on scroll */}
              <motion.path
                d="M 100 60 C 200 10, 300 110, 500 60 C 700 10, 800 110, 900 60"
                stroke="url(#curvyGoldGrad)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <defs>
                <linearGradient id="curvyGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C69B3C" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
                  <stop offset="100%" stopColor="#C69B3C" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* 5 Connected Ball Cards */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {PROCESS_STEPS.map((s, idx) => {
                const meta = stepMeta[idx];
                const isEven = idx % 2 === 1;

                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, scale: 0.8, y: isEven ? 15 : -15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* The Ball Card Circle */}
                    <div 
                      className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center p-3 relative transition-all shadow-xl ${
                        meta.highlight
                          ? 'bg-[#161D2C] border-2 border-[#C69B3C] shadow-[#C69B3C]/10'
                          : 'bg-[#121620] border-2 border-[#1B2231] group-hover:border-[#C69B3C]/50'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-[#C69B3C] tabular-nums">
                        {s.step}
                      </span>
                      <h4 className="font-serif text-base text-[#E2E8F0] font-normal mt-0.5">
                        {s.name}
                      </h4>
                      <span className="text-[9px] font-mono uppercase text-[#94A3B8] mt-1 max-w-[80px] leading-tight">
                        {meta.trigger}
                      </span>
                    </div>

                    {/* Concise Narrative Beneath Ball */}
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed mt-4 max-w-[170px]">
                      {s.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Flow: Vertical Connected Curvy Timeline with Ball Cards */}
          <div className="lg:hidden relative">
            {/* Vertical curvy line behind balls */}
            <div className="absolute top-12 bottom-12 left-8 w-[2px] bg-gradient-to-b from-[#C69B3C] via-[#F59E0B] to-[#1B2231]" />

            <div className="space-y-8 relative z-10">
              {PROCESS_STEPS.map((s, idx) => {
                const meta = stepMeta[idx];

                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Compact Ball Card on Left */}
                    <div 
                      className={`w-16 h-16 rounded-full shrink-0 flex flex-col items-center justify-center shadow-lg ${
                        meta.highlight
                          ? 'bg-[#161D2C] border-2 border-[#C69B3C]'
                          : 'bg-[#121620] border-2 border-[#1B2231]'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold text-[#C69B3C]">
                        {s.step}
                      </span>
                      <span className="font-serif text-xs text-[#E2E8F0] font-normal">
                        {s.name}
                      </span>
                    </div>

                    {/* Content Card on Right */}
                    <div className="flex-1 p-4 rounded-xl bg-[#121620] border border-[#1B2231]">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-serif text-sm text-[#E2E8F0] font-normal">
                          {s.name} Phase
                        </span>
                        <span className="text-[10px] font-mono text-[#C69B3C] uppercase">
                          {meta.trigger}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean, Grounded Terms Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#06080C] border border-[#1B2231] text-xs text-[#94A3B8] leading-relaxed">
          <div className="flex items-start gap-3">
            <CalendarCheck className="w-5 h-5 text-[#C69B3C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#E2E8F0] block mb-1">
                Timelines and Kickoff Assets
              </span>
              Estimated delivery starts upon receipt of the initial 30% kickoff payment and required client content. Approval sign-offs determine scheduled launch dates.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-[#C69B3C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#E2E8F0] block mb-1">
                Consolidated Revisions
              </span>
              Each website includes two consolidated revision rounds: one on initial design presentation and one on the working preview. Fixes to meet scope do not count against revisions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
