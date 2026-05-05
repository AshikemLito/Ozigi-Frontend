import React from 'react';
import { TextReveal } from './TextReveal';

export function PlatformIntro() {
  return (
    <section className="w-full pt-32 pb-32 text-center px-4 bg-white relative z-30" id="difference">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <TextReveal 
          text="We rebuilt content creation to prioritize authentic voice over robotic output."
          className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] font-normal tracking-tight mb-32 max-w-2xl justify-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
           <div className="bg-[#FBFBFB] border border-[#EEEEEE] rounded-[16px] p-8 md:p-10 flex flex-col">
              <div className="text-[#888888] font-medium tracking-wide uppercase text-[11px] mb-6 flex items-center gap-2">
                 Default AI
              </div>
              <p className="text-[17px] text-[#404040] font-normal mb-8 leading-snug">
                 Generic, template-driven, and filled with "AI fluff."
              </p>
              <div className="bg-white border border-[#F0F0F0] p-6 rounded-[10px] text-[15px] font-serif italic text-[#777777] leading-relaxed shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex-1">
                "In today's fast-paced landscape, AI is changing the game by revolutionizing how we interact with technology..."
              </div>
           </div>

           <div className="bg-[#404040] border border-[#333333] rounded-[16px] p-8 md:p-10 flex flex-col shadow-xl">
              <div className="text-[#A1A1AA] font-medium tracking-wide uppercase text-[11px] mb-6 flex items-center gap-2">
                 Ozigi Engine
              </div>
              <p className="text-[17px] text-[#EEEEEE] font-normal mb-8 leading-snug">
                 Insight-led, punchy, and authentically yours.
              </p>
              <div className="bg-[#333333] border border-[#2B2B2B] p-6 rounded-[10px] text-[15px] text-[#E5E5E5] font-normal leading-relaxed shadow-inner flex-1">
                "Build resilient systems. Treat test code like production code. Poor architecture sinks suites faster than flaky environments."
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
