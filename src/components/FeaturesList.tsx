import React from 'react';
import { FeatureSplit } from './FeatureSplit';

export function FeaturesList() {
  return (
    <div className="flex flex-col bg-white" id="features">
      <FeatureSplit
        numeral="01"
        titleLight={<>Banned <span className="text-[#888]">Lexicon</span></>}
        description="Automatically strips out tired AI patterns and robotic vocabulary to ensure the output reads like a human wrote it."
        linkText="View example"
        reverse={false}
        mockupContent={
          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[12px] p-6 shadow-sm w-full max-w-xl aspect-[4/3] flex flex-col justify-center relative">
             <div className="bg-white border border-[#E5E5E5] p-5 rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-4">
                <div className="text-[11px] font-medium text-[#A1A1AA] uppercase tracking-wider mb-2">Original</div>
                <div className="text-[14px] text-[#888] line-through font-normal">"In today's fast-paced digital landscape, it's crucial to..."</div>
             </div>
             <div className="bg-white border border-[#404040] p-5 rounded-[8px] shadow-md">
                <div className="text-[11px] font-medium text-[#404040] uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#404040]" /> Ozigi Output</div>
                <div className="text-[15px] text-[#404040] font-normal">"Shipping fast isn't an excuse for bad code. Here's why..."</div>
             </div>
          </div>
        }
      />
      
      <FeatureSplit
        numeral="02"
        titleLight={<>Multi-platform <span className="text-[#888]">publishing</span></>}
        description="One-click distribution to X, LinkedIn, GitHub, and Slack. Reach your audience wherever they are without copy-pasting."
        linkText="Connect accounts"
        reverse={true}
        mockupContent={
          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[12px] w-full max-w-xl aspect-[4/3] flex items-center justify-center p-8">
             <div className="w-full max-w-sm flex flex-col gap-3">
                <div className="flex items-center justify-between p-3.5 border border-[#E5E5E5] rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-[#D4D4D4]">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[6px] border border-[#F0F0F0] flex items-center justify-center overflow-hidden bg-black p-2">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="w-full h-full invert" />
                      </div>
                      <span className="font-medium text-[14px] text-[#404040]">X (Twitter)</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span className="text-[12px] text-[#666] font-normal">Connected</span>
                   </div>
                </div>
                <div className="flex items-center justify-between p-3.5 border border-[#E5E5E5] rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-[#D4D4D4]">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[6px] border border-[#F0F0F0] flex items-center justify-center overflow-hidden p-1.5">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-full h-full" />
                      </div>
                      <span className="font-medium text-[14px] text-[#404040]">LinkedIn</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span className="text-[12px] text-[#666] font-normal">Connected</span>
                   </div>
                </div>
                <div className="flex items-center justify-between p-3.5 border border-[#E5E5E5] rounded-[10px] bg-[#FAFAFA] transition-all">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[6px] border border-[#EEEEEE] flex items-center justify-center overflow-hidden p-1.5 bg-white">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-full h-full" />
                      </div>
                      <span className="font-medium text-[14px] text-[#888]">GitHub</span>
                   </div>
                   <button className="text-[12px] text-[#404040] font-medium bg-white border border-[#E5E5E5] px-3 py-1.5 rounded-[6px] hover:bg-black hover:text-white transition-all shadow-sm">Connect</button>
                </div>
             </div>
          </div>
        }
      />

      <FeatureSplit
        numeral="03"
        titleLight={<>Human-in-the-loop <span className="text-[#888]">editing</span></>}
        description="AI drafts the foundation, but you provide the soul. Every post includes an easy edit button for adding insider details."
        linkText="Try editing"
        reverse={false}
        mockupContent={
          <div className="bg-white border border-[#EEEEEE] rounded-[12px] shadow-sm w-full max-w-xl aspect-[4/3] flex flex-col">
             <div className="p-4 border-b border-[#F5F5F5] flex items-center justify-between">
               <span className="text-[12px] font-medium text-[#666]">Draft editor</span>
               <button className="bg-[#404040] text-white px-3 py-1.5 rounded-[6px] text-[12px] font-medium hover:bg-[#333] transition-colors">Add context</button>
             </div>
             <div className="p-6 flex-1">
                <p className="text-[15px] text-[#404040] leading-relaxed font-normal mb-6">
                   We just shipped the new analytics dashboard. It's 10x faster than the old version.
                </p>
                <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-4 rounded-[8px] relative group">
                   <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border border-[#E5E5E5] shadow-sm rounded-full flex items-center justify-center text-[12px] text-[#666]">+</div>
                   <p className="text-[14px] text-[#666] font-normal">
                      Add a personal note here about the struggle with the old Postgres bottleneck...
                   </p>
                </div>
             </div>
          </div>
        }
      />

      <FeatureSplit
        numeral="04"
        titleLight={<>Newsletters & <span className="text-[#888]">long-form</span></>}
        description="Beyond social media—generate full-length technical briefs and weekly newsletters with native email sending capabilities."
        linkText="Start writing"
        reverse={true}
        mockupContent={
           <div className="bg-white border border-[#EEEEEE] rounded-[12px] shadow-sm w-full max-w-xl aspect-[4/3] flex flex-col">
              <div className="p-4 border-b border-[#F5F5F5] flex items-center justify-between">
                 <div className="text-[12px] text-[#666]">To: <span className="font-medium text-[#404040]">12,409 Subscribers</span></div>
                 <div className="bg-[#FAFAFA] border border-[#E5E5E5] px-2 py-1 rounded-[4px] text-[11px] text-[#666] font-medium">Scheduled: 9:00 AM</div>
              </div>
              <div className="p-8">
                 <h3 className="text-[24px] font-normal text-[#404040] mb-6 tracking-tight">Deep dive: Scaling websockets</h3>
                 <div className="space-y-4">
                    <div className="h-3 bg-[#F5F5F5] rounded-sm w-full" />
                    <div className="h-3 bg-[#F5F5F5] rounded-sm w-[92%]" />
                    <div className="h-3 bg-[#F5F5F5] rounded-sm w-[96%]" />
                    <div className="h-3 bg-[#F5F5F5] rounded-sm w-[80%]" />
                 </div>
              </div>
           </div>
        }
      />
    </div>
  );
}
