import React from 'react';
import { TRUST_PILLARS } from '../data/content';
import { StaggeredHeading, MotionFade } from './MotionTypography';
import { motion } from 'framer-motion';

export const TrustPillars: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#1B2231] bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle Geometric Ambient Lighting Accent */}
      <div 
        className="absolute top-1/2 -right-48 w-96 h-96 bg-[#C69B3C]/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <MotionFade viewportTrigger delay={0.05} yOffset={10}>
            <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
              Core Philosophy
            </div>
          </MotionFade>

          <StaggeredHeading
            text="Why trust matters"
            as="h2"
            viewportTrigger
            delay={0.1}
            className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-tight mb-4 font-normal"
          />

          <MotionFade viewportTrigger delay={0.25} yOffset={12}>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              In Nigeria, lead generation is not a generic funnel exercise. It is a process of due diligence, verification, and relationship management. Serious clients scrutinize technical competence before reaching out.
            </p>
          </MotionFade>
        </div>

        {/* 3 Pillars Bento Grid with Staggered Viewport Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(198, 155, 60, 0.4)' }}
              className="p-8 rounded-xl bg-[#121620] border border-[#1B2231] relative flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Clean Editorial Number */}
                <div className="font-serif text-2xl text-[#C69B3C] font-normal mb-6">
                  {pillar.number}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#E2E8F0] mb-3 group-hover:text-white transition-colors font-normal">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Hairline Accenting */}
              <div className="w-12 h-[1px] bg-[#C69B3C]/30 mt-8 group-hover:w-full group-hover:bg-[#C69B3C]/60 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
