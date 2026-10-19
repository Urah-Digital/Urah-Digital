import React from 'react';
import { ServicesTable } from '../components/ServicesTable';
import { MilestonesSection } from '../components/MilestonesSection';
import { BRAND } from '../data/content';
import { ArrowUpRight, MessageSquare, Check, Calendar } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-10 pb-20">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
          Our Offers
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#E2E8F0] tracking-tight leading-tight mb-6">
          Services, rates, and delivery scopes
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
          We operate on fixed prices and transparent milestone schedules. Every package defines exact deliverables so serious buyers know what is included before committing.
        </p>

        {/* Milestone Quick Summary */}
        <div className="p-6 rounded-xl bg-[#121620] border border-[#1B2231] max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C69B3C] mb-1">
              Payment Milestones: 30 / 40 / 30
            </div>
            <div className="text-xs text-[#94A3B8]">
              30% kickoff · 40% design approval · 30% prior to handover
            </div>
          </div>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat With Us</span>
          </a>
        </div>
      </div>

      {/* Services and Care Plan Tables */}
      <ServicesTable />

      {/* Process & Milestones Deep Dive */}
      <MilestonesSection />

      {/* Bottom CTA Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-8 sm:p-12 rounded-xl bg-[#121620] border border-[#C69B3C]/40">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#E2E8F0] mb-4">
            Need a custom institutional deployment?
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto mb-8 leading-relaxed">
            If your organization requires a tailored scope, such as specialized school admissions integration or multi-practice portals, we evaluate requirements in writing.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg cursor-pointer transition-colors"
          >
            <span>Submit a Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
