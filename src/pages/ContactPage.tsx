import React from 'react';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-xs text-[#C69B3C] font-semibold tracking-widest uppercase mb-3">
          Contact URAH DIGITAL
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#E2E8F0] tracking-tight leading-tight mb-4">
          Start a conversation
        </h1>
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          Reach out directly on WhatsApp or submit a preliminary project brief. Every inquiry is reviewed by our senior engineering team.
        </p>
      </div>

      <ContactSection />
    </div>
  );
};
