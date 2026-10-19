import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';
import { StaggeredHeading, MotionFade } from './MotionTypography';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#1B2231] bg-[#0A0A0A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Word Reveal */}
        <div className="max-w-2xl mb-16">
          <MotionFade viewportTrigger delay={0.05} yOffset={10}>
            <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
              Questions & Standards
            </div>
          </MotionFade>

          <StaggeredHeading
            text="Clear answers before we begin"
            as="h2"
            viewportTrigger
            delay={0.1}
            className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-tight mb-4 font-normal"
          />

          <MotionFade viewportTrigger delay={0.25} yOffset={12}>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We state our terms, ownership policies, and delivery expectations plainly so you can verify our process with complete confidence.
            </p>
          </MotionFade>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#121620] border border-[#1B2231] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C69B3C]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#E2E8F0] font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#94A3B8] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C69B3C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#94A3B8] leading-relaxed border-t border-[#1B2231]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
