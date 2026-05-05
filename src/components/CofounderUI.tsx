import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { PlatformIntro } from './PlatformIntro';
import { GuideCards } from './GuideCards';
import { FeaturesList } from './FeaturesList';
import { ToolsSection } from './ToolsSection';
import { CTASection } from './CTASection';
import { TestimonialSection } from './TestimonialSection';
import { Footer } from './Footer';

export default function CofounderUI() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBF8] overflow-hidden">
      <Navbar />
      <Hero />
      <PlatformIntro />
      <div id="how" className="pt-24 bg-[var(--color-brand-10)]">
         <GuideCards />
      </div>
      <FeaturesList />
      <ToolsSection />
      <CTASection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

