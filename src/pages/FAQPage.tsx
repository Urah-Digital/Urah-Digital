import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { BRAND } from '../data/content';
import { ArrowUpRight, MessageSquare, HelpCircle } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-10 pb-20">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
          Knowledge Base
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#E2E8F0] tracking-tight leading-tight mb-6">
          Frequently asked questions
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          Transparent guidelines on project delivery, payment milestones, revision cycles, and website ownership.
        </p>
      </div>

      <FAQSection />

      {/* Further Inquiry Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="p-8 rounded-xl bg-[#121620] border border-[#1B2231]">
          <HelpCircle className="w-8 h-8 text-[#C69B3C] mx-auto mb-3" />
          <h2 className="font-serif text-xl sm:text-2xl text-[#E2E8F0] mb-2">
            Have a question not addressed here?
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
            Message us directly on WhatsApp with your specific question. We provide clear, direct answers without sales pressure.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
