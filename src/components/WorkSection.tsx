import React from 'react';
import { CONCEPT_PROJECTS, BRAND } from '../data/content';
import { Check, ArrowUpRight, GraduationCap, Building2, ShoppingBag } from 'lucide-react';
import { StaggeredHeading, MotionFade } from './MotionTypography';
import { motion } from 'framer-motion';

export const WorkSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'School':
        return <GraduationCap className="w-5 h-5 text-[#C69B3C]" />;
      case 'Service Business':
        return <Building2 className="w-5 h-5 text-[#C69B3C]" />;
      case 'Online Store':
        return <ShoppingBag className="w-5 h-5 text-[#C69B3C]" />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#1B2231] bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Word Reveal */}
        <div className="max-w-2xl mb-16">
          <MotionFade viewportTrigger delay={0.05} yOffset={10}>
            <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
              Portfolio Reference
            </div>
          </MotionFade>

          <StaggeredHeading
            text="Demonstrated capability"
            as="h2"
            viewportTrigger
            delay={0.1}
            className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-tight mb-4 font-normal"
          />

          <MotionFade viewportTrigger delay={0.25} yOffset={12}>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              The projects below are clearly labeled speculative concept builds engineered to demonstrate technical rigor, information hierarchy, and mobile performance. We do not display fabricated client logos or unverified testimonials.
            </p>
          </MotionFade>
        </div>

        {/* Concept Projects Showcase */}
        <div className="space-y-12">
          {CONCEPT_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: 'rgba(198, 155, 60, 0.4)' }}
              className="p-8 sm:p-10 rounded-xl bg-[#121620] border border-[#1B2231] transition-all"
            >
              {/* Header Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1B2231] mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#1B2231]">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#E2E8F0] uppercase tracking-wider block">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#C69B3C] tracking-wide">
                      {project.clientLabel}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2348154844686?text=${encodeURIComponent(
                    `Hello URAH DIGITAL, I'd like to discuss a project similar to your ${project.category} concept build.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-colors rounded-lg whitespace-nowrap cursor-pointer"
                >
                  <span>Discuss Similar Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title & Context */}
              <div className="max-w-3xl mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#E2E8F0] mb-3 font-normal">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.context}
                </p>
              </div>

              {/* Challenge vs Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg bg-[#0A0A0A] border border-[#1B2231] mb-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                    The Trust Challenge
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C69B3C] mb-2">
                    The Engineering Solution
                  </h4>
                  <p className="text-xs text-[#E2E8F0] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & Technical Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div>
                  <div className="font-semibold uppercase tracking-wider text-[#E2E8F0] mb-3">
                    Project Deliverables
                  </div>
                  <div className="space-y-2">
                    {project.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#94A3B8]">
                        <Check className="w-3.5 h-3.5 text-[#C69B3C] shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-semibold uppercase tracking-wider text-[#E2E8F0] mb-3">
                    Architecture & Network Standards
                  </div>
                  <div className="space-y-2">
                    {project.keyArchitecture.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#94A3B8]">
                        <Check className="w-3.5 h-3.5 text-[#C69B3C] shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
