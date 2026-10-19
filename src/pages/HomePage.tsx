import React from 'react';
import { Hero } from '../components/Hero';
import { TrustPillars } from '../components/TrustPillars';
import { ServicesTable } from '../components/ServicesTable';
import { MilestonesSection } from '../components/MilestonesSection';
import { WorkSection } from '../components/WorkSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div>
      <Hero onRequestConsultation={scrollToContact} />
      <TrustPillars />
      <ServicesTable />
      <MilestonesSection />
      <WorkSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};
