import React from 'react';
import { motion } from 'motion/react';

type FeatureSplitProps = {
  numeral: string;
  titleLight: React.ReactNode;
  description: string;
  linkText: string;
  reverse?: boolean;
  mockupContent: React.ReactNode;
};

export function FeatureSplit({ numeral, titleLight, description, linkText, reverse, mockupContent }: FeatureSplitProps) {
  return (
    <section className="w-full py-24 md:py-32 px-4 lg:px-12 relative flex justify-center bg-white border-t border-[#F5F5F5]">
      <div className={`max-w-[1100px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col items-start relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[11px] font-semibold text-[#888] tracking-widest uppercase mb-6 font-mono">
             {numeral}
          </div>
          
          <h2 className="text-[32px] lg:text-[40px] leading-[1.1] font-normal tracking-tight text-[#404040] mb-6">
            {titleLight}
          </h2>
          
          <p className="text-[17px] text-[#666] font-normal mb-8 max-w-md leading-relaxed">
            {description}
          </p>
          
          <button className="text-[14px] font-medium text-[#404040] hover:text-[#333] inline-flex items-center gap-2 group transition-colors">
            {linkText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
               <path d="M5 12h14"></path>
               <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>

        <motion.div 
          className="w-full lg:w-[55%] flex justify-center items-center relative z-10"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {mockupContent}
        </motion.div>

      </div>
    </section>
  );
}
