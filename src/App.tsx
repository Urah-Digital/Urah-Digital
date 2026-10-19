/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Sync with window.location.hash on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['services', 'work', 'about', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = pageId;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E2E8F0] selection:bg-[#F59E0B]/30 selection:text-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Mobile-first Sticky WhatsApp Launcher */}
      <MobileStickyBar />
    </div>
  );
}
