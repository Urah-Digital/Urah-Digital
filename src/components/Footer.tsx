import React from 'react';
import { Logo } from './Logo';
import { BRAND } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080C] border-t border-[#1B2231] pt-16 pb-24 text-xs text-[#94A3B8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1B2231]/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="full" size="sm" />
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm pt-2">
              A selective web studio for Nigerian schools, service businesses, and established online brands whose reputation is their product.
            </p>
            <div className="text-[11px] text-[#94A3B8]/80">
              Lagos & Nationwide · Fixed Milestones · Verifiable Results
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-semibold uppercase tracking-wider text-[#E2E8F0] mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              {['home', 'services', 'work', 'about', 'faq', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item)}
                    className="hover:text-[#E2E8F0] capitalize transition-colors cursor-pointer"
                  >
                    {item === 'home'
                      ? 'Home'
                      : item === 'services'
                      ? 'Services & Rates'
                      : item === 'work'
                      ? 'Concept Work'
                      : item === 'faq'
                      ? 'FAQ & Terms'
                      : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Links (No raw phone numbers or raw email addresses) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold uppercase tracking-wider text-[#E2E8F0] mb-3">
              Direct Contact
            </div>
            <p className="text-xs text-[#94A3B8]">
              Primary Communication:
            </p>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#C69B3C] hover:text-[#FBBF24] transition-colors cursor-pointer"
            >
              <span>WhatsApp Dialogue</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#E2E8F0] transition-colors cursor-pointer"
              >
                <span>{BRAND.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-[#94A3B8]/60">
                Direct executive dialogue · Official domain {BRAND.domain}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]/70">
          <div>
            © {currentYear} URAH DIGITAL. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Fixed Scope</span>
            <span aria-hidden="true">·</span>
            <span>30/40/30 Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
