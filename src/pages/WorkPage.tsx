import React from 'react';
import { WorkSection } from '../components/WorkSection';
import { BRAND } from '../data/content';
import { MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-10 pb-20">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
          Concept Builds
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#E2E8F0] tracking-tight leading-tight mb-6">
          Proof over promises
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-6">
          We do not invent client logos, fabricated metrics, or five-star reviews from people who do not exist. Instead, we publish speculative concept projects that demonstrate our standards in layout, information hierarchy, and mobile data speed.
        </p>

        {/* Studio Policy Note */}
        <div className="p-4 rounded-lg bg-[#121620] border border-[#1B2231] max-w-2xl flex items-center gap-3 text-xs text-[#94A3B8]">
          <ShieldCheck className="w-5 h-5 text-[#C69B3C] shrink-0" />
          <span>
            Every project below is marked strictly as a <strong className="text-[#E2E8F0]">URAH concept project</strong>. You are welcome to inspect our layout logic and discuss building a tailored platform for your organization.
          </span>
        </div>
      </div>

      {/* Work Showcase Section */}
      <WorkSection />

      {/* Conversion Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-8 sm:p-12 rounded-xl bg-[#121620] border border-[#1B2231]">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#E2E8F0] mb-3">
            Discuss a concept build for your institution
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto mb-6 leading-relaxed">
            We will review your sector, explain what we recommend, and confirm exact milestone pricing in writing.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
