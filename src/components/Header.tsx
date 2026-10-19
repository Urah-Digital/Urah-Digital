import React, { useState } from 'react';
import { Logo } from './Logo';
import { BRAND } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Rates' },
    { id: 'work', label: 'Concept Work' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1B2231]/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Zone */}
        <button
          onClick={() => handleLinkClick('home')}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C69B3C] rounded-lg p-1 text-left"
          aria-label="URAH DIGITAL Home"
        >
          <Logo variant="full" size="sm" />
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer hover:text-[#E2E8F0] ${
                  isActive ? 'text-[#E2E8F0] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C69B3C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-colors rounded-lg whitespace-nowrap shadow-sm cursor-pointer"
          >
            <span>Start on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-[#121620] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1B2231] bg-[#0A0A0A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#121620] text-[#E2E8F0] font-semibold'
                    : 'text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-[#121620]/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors text-center"
            >
              <span>Start on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
