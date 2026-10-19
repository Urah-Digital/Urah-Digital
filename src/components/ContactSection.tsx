import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { ProjectBriefInput } from '../types';
import { MessageSquare, ArrowUpRight, CheckCircle2, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { StaggeredHeading, MotionFade } from './MotionTypography';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ProjectBriefInput>({
    businessType: 'School',
    projectType: 'School Website (₦315k founding / ₦450k standard)',
    budgetRange: '₦315,000 – ₦450,000',
    timeline: '4–5 weeks',
    additionalNotes: ''
  });

  const [organizationName, setOrganizationName] = useState('');
  const [clientRole, setClientRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const briefText = `Hello URAH DIGITAL, I have prepared a project brief for review:
• Organization: ${organizationName ? organizationName : 'Not specified'}
• Contact Role: ${clientRole ? clientRole : 'Decision Maker'}
• Scope Needed: ${formState.projectType}
• Budget Range: ${formState.budgetRange}
• Timeline: ${formState.timeline}
${formState.additionalNotes ? `• Notes: ${formState.additionalNotes}` : ''}`;

    const url = `https://wa.me/2348154844686?text=${encodeURIComponent(briefText)}`;
    setGeneratedWhatsAppUrl(url);
    setSubmitted(true);

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-[#1B2231]">
      {/* Background Ambient Glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#C69B3C]/5 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Compact Conversational Presentation with Direct Icon Actions */}
          <div className="lg:col-span-5 max-w-md">
            <MotionFade viewportTrigger delay={0.05} yOffset={10}>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C69B3C] uppercase tracking-wider mb-4 px-2.5 py-1 rounded bg-[#121620] border border-[#1B2231]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </div>
            </MotionFade>

            <StaggeredHeading
              text="Let's talk about your project."
              as="h2"
              viewportTrigger
              delay={0.1}
              className="font-serif text-3xl sm:text-5xl text-[#E2E8F0] tracking-tight leading-[1.1] mb-5 font-normal"
            />

            <MotionFade viewportTrigger delay={0.2} yOffset={10}>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                Every conversation at URAH DIGITAL is held directly with leadership. Fill in your project parameters or connect directly using the actions below.
              </p>
            </MotionFade>

            {/* Compact Direct Actions: Just Sleek Icons with Tooltips / Clean Labels */}
            <div className="flex items-center gap-3 mb-6">
              {/* WhatsApp Icon Action */}
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Start conversation on WhatsApp"
                className="w-12 h-12 rounded-xl bg-[#121620] hover:bg-[#F59E0B] border border-[#1B2231] hover:border-[#FBBF24] text-[#F59E0B] hover:text-[#06080C] flex items-center justify-center transition-all shadow-md cursor-pointer group"
                aria-label="Start WhatsApp conversation"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </motion.a>

              {/* Email Icon Action */}
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${BRAND.email}?subject=${encodeURIComponent('Website Consultation Enquiry — URAH DIGITAL')}`}
                title="Send an email"
                className="w-12 h-12 rounded-xl bg-[#121620] hover:bg-[#1B2231] border border-[#1B2231] hover:border-[#C69B3C] text-[#94A3B8] hover:text-[#E2E8F0] flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Verified Security Badge Icon */}
              <div 
                title="Fixed Scope & Milestone Protected"
                className="w-12 h-12 rounded-xl bg-[#121620] border border-[#1B2231] text-[#C69B3C] flex items-center justify-center shadow-md select-none"
              >
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="text-[11px] text-[#94A3B8]/80 leading-normal">
              Fixed 30/40/30 milestone payments · Verifiable results · Direct executive response
            </div>
          </div>

          {/* Right Column: Clean Dropdown-Driven Brief Card (Minimal Text Overhead) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#121620] border border-[#1B2231] shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1B2231]">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#E2E8F0] font-normal">
                    Project Qualification Brief
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Select your parameters to prepare a verified WhatsApp brief.
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-mono text-[#C69B3C] uppercase tracking-wider block">
                    Milestones
                  </span>
                  <span className="text-xs font-mono text-[#E2E8F0]">
                    30 / 40 / 30
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#0A0A0A] border border-[#C69B3C]/50 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#C69B3C] mx-auto" />
                  <h4 className="font-serif text-xl text-[#E2E8F0] font-normal">
                    Brief compiled successfully
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                    WhatsApp has opened in a new tab with your prefilled parameters. If it did not launch automatically, tap below:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Send on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#94A3B8] hover:text-[#E2E8F0] underline py-2 cursor-pointer"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Dropdown 1: Scope Needed */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Scope Needed
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors cursor-pointer"
                      required
                    >
                      <option value="School Website (₦315k founding / ₦450k standard)">School Website (₦315k founding / ₦450k standard)</option>
                      <option value="Credibility Site (₦245k founding / ₦350k standard)">Credibility Site (₦245k founding / ₦350k standard)</option>
                      <option value="School Admissions System MVP (₦840k founding / ₦1.2M standard)">School Admissions System MVP (₦840k founding / ₦1.2M standard)</option>
                      <option value="School Website + Admissions Bundle (₦1.05M founding / ₦1.5M standard)">School Website + Admissions Bundle (₦1.05M founding / ₦1.5M standard)</option>
                      <option value="Store (₦350k founding / ₦500k standard)">Store (₦350k founding / ₦500k standard)</option>
                      <option value="Monthly Care Plan (₦25k or ₦50k/mo)">Monthly Care Plan (₦25k or ₦50k/mo)</option>
                    </select>
                  </div>

                  {/* Dropdown 2 & 3: Budget Range and Target Timeline in compact row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formState.budgetRange}
                        onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors cursor-pointer"
                      >
                        <option value="₦245,000 – ₦350,000">₦245,000 – ₦350,000</option>
                        <option value="₦315,000 – ₦450,000">₦315,000 – ₦450,000</option>
                        <option value="₦350,000 – ₦500,000">₦350,000 – ₦500,000</option>
                        <option value="₦840,000 – ₦1,200,000">₦840,000 – ₦1,200,000</option>
                        <option value="₦1,050,000 – ₦1,500,000">₦1,050,000 – ₦1,500,000</option>
                        <option value="Custom / Tailored">Custom / Tailored</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors cursor-pointer"
                      >
                        <option value="3–4 weeks">3–4 weeks</option>
                        <option value="4–5 weeks">4–5 weeks</option>
                        <option value="6–10 weeks">6–10 weeks</option>
                        <option value="Flexible / Next term">Flexible / Next term</option>
                      </select>
                    </div>
                  </div>

                  {/* Organization & Decision Maker Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="School or Business name"
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/40"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={clientRole}
                        onChange={(e) => setClientRole(e.target.value)}
                        placeholder="e.g. Proprietor / MD"
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors placeholder:text-[#94A3B8]/40"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                      Key Objectives / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formState.additionalNotes}
                      onChange={(e) => setFormState({ ...formState, additionalNotes: e.target.value })}
                      placeholder="Share your current website link or primary goals..."
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0A] border border-[#1B2231] focus:border-[#C69B3C] rounded-lg text-xs text-[#E2E8F0] outline-none transition-colors resize-none placeholder:text-[#94A3B8]/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#06080C] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all rounded-lg shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Project Brief to WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
