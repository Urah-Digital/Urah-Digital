import React, { useState } from 'react';
import { SERVICES, CARE_PLANS, BRAND } from '../data/content';
import { Check, X, ArrowUpRight, Clock, AlertCircle, ChevronDown } from 'lucide-react';
import { StaggeredHeading, MotionFade } from './MotionTypography';
import { motion, AnimatePresence } from 'framer-motion';

export const ServicesTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'schools' | 'services' | 'care'>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'schools') return s.id.includes('school');
    if (activeTab === 'services') return s.id === 'credibility-site' || s.id === 'store';
    return false;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A] text-[#E2E8F0] relative border-b border-[#1B2231] overflow-hidden">
      {/* Subtle Architectural Ambient Lighting */}
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(198,155,60,0.06),transparent_70%)] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <MotionFade viewportTrigger delay={0.05} yOffset={8}>
            <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-2">
              Services & Founding Rates
            </div>
          </MotionFade>

          <StaggeredHeading
            text="Fixed scope. Verifiable rates."
            as="h2"
            viewportTrigger
            delay={0.1}
            className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-tight mb-4 font-normal"
          />

          <MotionFade viewportTrigger delay={0.2} yOffset={10}>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Standard pricing and founding rates for our first five projects. Founding clients receive 30% off in exchange for a review upon handover.
            </p>
          </MotionFade>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121620] border border-[#1B2231] rounded-xl max-w-fit mb-10">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'schools', label: 'Schools & Admissions' },
            { id: 'services', label: 'Service & Store Sites' },
            { id: 'care', label: 'Monthly Retainers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#1B2231] text-[#E2E8F0] font-semibold shadow-sm border border-[#C69B3C]/40'
                  : 'text-[#94A3B8] hover:text-[#E2E8F0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact, Expandable Packages Grid */}
        {activeTab !== 'care' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-start">
            {filteredServices.map((pkg, idx) => {
              const isExpanded = !!expandedCards[pkg.id];

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 rounded-2xl bg-[#0E131E] border transition-all flex flex-col justify-between shadow-lg shadow-black/40 group relative overflow-hidden ${
                    pkg.badge
                      ? 'border-[#C69B3C]/60 ring-1 ring-[#C69B3C]/25'
                      : 'border-[#1E2638] hover:border-[#C69B3C]/40'
                  }`}
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                        Package {idx + 1}
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-semibold text-[#E6C675] bg-[#C69B3C]/15 border border-[#C69B3C]/30 px-2 py-0.5 rounded uppercase tracking-wider">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl text-[#E2E8F0] mb-1 font-normal">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mb-5 line-clamp-2 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    {/* Price Card */}
                    <div className="p-3.5 rounded-xl bg-[#080B10] border border-[#1E2638] mb-5">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-semibold text-[#C69B3C] tracking-wider">
                            Founding Rate (First 5)
                          </div>
                          <div className="font-mono text-2xl font-bold text-[#E2E8F0] tabular-nums">
                            {pkg.foundingPrice}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase text-[#64748B]">
                            Standard
                          </div>
                          <div className="font-mono text-xs text-[#64748B] line-through tabular-nums">
                            {pkg.standardPrice}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-[#1E2638] text-[11px] text-[#C69B3C] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Timeline: {pkg.deliveryTimeline}</span>
                      </div>
                    </div>

                    {/* Expandable Scope Accordion */}
                    <div className="mb-5">
                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="w-full py-2 px-3 rounded-lg bg-[#141A26] hover:bg-[#1B2333] text-xs font-medium text-[#94A3B8] hover:text-[#E2E8F0] flex items-center justify-between transition-colors border border-[#1E2638] cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide scope details' : `View scope details (${pkg.inclusions.length})`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#C69B3C]' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden pt-3 space-y-2 text-xs"
                          >
                            <div className="space-y-1.5">
                              {pkg.inclusions.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-[#CBD5E1]">
                                  <Check className="w-3.5 h-3.5 text-[#C69B3C] shrink-0 mt-0.5" />
                                  <span className="leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>

                            {pkg.exclusions && pkg.exclusions.length > 0 && (
                              <div className="p-2.5 rounded-lg bg-[#1F1318] border border-[#3E1B24] mt-2 space-y-1">
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FDA4AF] flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  <span>Exclusions</span>
                                </div>
                                {pkg.exclusions.map((ex, i) => (
                                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#FDA4AF]/90">
                                    <X className="w-3 h-3 shrink-0 mt-0.5 text-[#F43F5E]" />
                                    <span>{ex}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="text-[11px] text-[#64748B] pt-1 italic">
                              {pkg.revisions}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Primary WhatsApp Action */}
                  <a
                    href={`https://wa.me/2348154844686?text=${encodeURIComponent(
                      `Hello URAH DIGITAL, I'd like to discuss the ${pkg.name} package for my business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all rounded-lg shadow-sm cursor-pointer text-center active:scale-[0.99]"
                  >
                    <span>Discuss {pkg.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Care Plans Sub-Section (Dark Surface) */}
        {(activeTab === 'all' || activeTab === 'care') && (
          <div className="pt-8 border-t border-[#1E2638]">
            <div className="max-w-xl mb-6">
              <h3 className="font-serif text-2xl text-[#E2E8F0] mb-1 font-normal">Monthly Care Retainers</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Ongoing technical oversight to keep your website backed up, secured, and current.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {CARE_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="p-6 rounded-2xl bg-[#0E131E] border border-[#1E2638] hover:border-[#C69B3C]/40 transition-all flex flex-col justify-between shadow-lg shadow-black/40"
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-serif text-xl text-[#E2E8F0] font-normal">{plan.name}</h4>
                      <div className="text-right">
                        <span className="font-mono text-2xl font-bold text-[#E2E8F0] tabular-nums">
                          {plan.price}
                        </span>
                        <span className="text-xs text-[#64748B] ml-1">/ mo</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                          <Check className="w-3.5 h-3.5 text-[#C69B3C] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/2348154844686?text=${encodeURIComponent(
                      `Hello URAH DIGITAL, I'd like to discuss the ${plan.name} retainer.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#E2E8F0] bg-[#141A26] hover:bg-[#1B2333] border border-[#1E2638] hover:border-[#C69B3C]/40 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Inquire About {plan.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C69B3C]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
