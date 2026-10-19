import React from 'react';
import { BRAND } from '../data/content';
import { ArrowUpRight, MessageSquare, Check, Shield } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      title: 'Clear and exact',
      desc: 'We state the specific thing: deliverables, timelines, milestone percentages, and exact costs. A number builds trust. Adjectives do not.'
    },
    {
      title: 'Calm and confident',
      desc: 'We speak like someone with nothing to prove. Understated sentences, zero hype, and no exclamation marks. We let our clarity do the selling.'
    },
    {
      title: 'Respectful of your time',
      desc: 'We treat buyers as serious professionals. Short answers, structured proposals, and zero spam. Every message has a clear purpose.'
    },
    {
      title: 'Proof over promises',
      desc: 'We invite scrutiny. Milestone payments protect your budget: 30% to begin, 40% at design approval, and 30% before handover. You never pay for unverified promises.'
    }
  ];

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="mb-14">
          <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
            About URAH DIGITAL
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#E2E8F0] tracking-tight leading-tight mb-6">
            Engineered for trust
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            URAH DIGITAL is a selective web studio for Nigerian schools, service businesses, and established online brands whose reputation is their product.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-8 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#1B2231] pt-12 mb-16">
          <p>
            In the Nigerian B2B and institutional landscape, a website is not a generic marketing funnel. It is an exercise in due diligence and risk reduction. Before hiring a consultant or enrolling a child in a school, decision-makers verify legitimacy across every available channel.
          </p>
          <p>
            Too many organizations have been burned by vague quotes, delayed projects, and unfinished templates that break on mobile networks. We take a different approach: fixed scope, disciplined typography, lightweight code that loads reliably on Nigerian 3G and 4G networks, and direct WhatsApp routing.
          </p>
          <p>
            We do not claim to do everything. We specialize in websites that earn trust—helping serious buyers believe you, verify you, and start a conversation.
          </p>
        </div>

        {/* Operating Principles */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#E2E8F0] mb-8">
            Operating Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121620] border border-[#1B2231] space-y-2"
              >
                <h3 className="font-serif text-xl text-[#E2E8F0]">{p.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Working Standards */}
        <div className="p-8 rounded-xl bg-[#121620] border border-[#1B2231] mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C69B3C]">
            <Shield className="w-4 h-4" />
            <span>Studio Standards</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#94A3B8]">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C69B3C] shrink-0 mt-0.5" />
              <span>Full ownership of code and assets handed over at completion.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C69B3C] shrink-0 mt-0.5" />
              <span>Two consolidated revision rounds included with each website.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C69B3C] shrink-0 mt-0.5" />
              <span>Static architecture with zero unnecessary server dependencies.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C69B3C] shrink-0 mt-0.5" />
              <span>All communications conducted directly with senior studio leadership.</span>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center pt-4">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start a Conversation on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
