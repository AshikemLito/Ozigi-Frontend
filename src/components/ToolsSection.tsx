import React from 'react';

export function ToolsSection() {
  return (
    <section className="w-full pt-32 pb-48 px-6 lg:px-12 flex flex-col items-center bg-[#FBFBFB] border-t border-[#F5F5F5]" id="pricing">
      
      <div className="w-full max-w-[1100px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-normal tracking-tight text-[#404040] mb-4">
          Simple pricing
        </h2>
        <p className="text-[17px] text-[#666] font-normal mb-16 max-w-[600px] mx-auto text-center leading-relaxed">
           Try it free, upgrade when you need more power.<br/>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
          {/* Free Tier */}
          <div className="bg-white border border-[#EFEFEF] rounded-[16px] p-8 flex flex-col text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="text-[16px] font-medium text-[#404040] mb-2">Free</h3>
            <div className="text-[36px] font-normal text-[#404040] mb-6 tracking-tight">$0<span className="text-[16px] text-[#888] font-normal tracking-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-[15px] text-[#666] font-normal flex-1">
               <li className="flex items-center gap-3">5 campaigns/month</li>
               <li className="flex items-center gap-3">1 saved persona</li>
               <li className="flex items-center gap-3">Social publishing</li>
            </ul>
            <button className="w-full bg-[#F5F5F5] text-[#404040] font-medium py-3 rounded-[8px] hover:bg-[#EAEAEA] transition-colors mt-auto">Start for free</button>
          </div>

          {/* Team Tier */}
          <div className="bg-[#404040] border border-[#333] rounded-[16px] p-8 flex flex-col text-left shadow-xl relative top-0 md:-top-4">
            <h3 className="text-[16px] font-medium text-[#FFF] mb-2 flex items-center justify-between">
              Team
              <span className="bg-[#333] text-white text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-[4px]">Popular</span>
            </h3>
            <div className="text-[36px] font-normal text-white mb-6 tracking-tight">$15<span className="text-[16px] text-[#A1A1AA] font-normal tracking-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-[15px] text-[#D4D4D8] font-normal flex-1">
               <li className="flex items-center gap-3">30 campaigns/month</li>
               <li className="flex items-center gap-3">Unlimited personas</li>
               <li className="flex items-center gap-3">Image generation</li>
               <li className="flex items-center gap-3">Newsletter sending</li>
            </ul>
            <button className="w-full bg-white text-[#404040] font-medium py-3 rounded-[8px] hover:bg-[#F4F4F5] transition-colors shadow-sm mt-auto">Get Team plan</button>
          </div>

          {/* Org Tier */}
          <div className="bg-white border border-[#EFEFEF] rounded-[16px] p-8 flex flex-col text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="text-[16px] font-medium text-[#404040] mb-2">Organization</h3>
            <div className="text-[36px] font-normal text-[#404040] mb-6 tracking-tight">$39<span className="text-[16px] text-[#888] font-normal tracking-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 text-[15px] text-[#666] font-normal flex-1">
               <li className="flex items-center gap-3">Unlimited campaigns</li>
               <li className="flex items-center gap-3">Long-form content</li>
               <li className="flex items-center gap-3">Priority model access</li>
               <li className="flex items-center gap-3">Full analytics</li>
            </ul>
            <button className="w-full bg-[#F5F5F5] text-[#404040] font-medium py-3 rounded-[8px] hover:bg-[#EAEAEA] transition-colors mt-auto">Start Org trial</button>
          </div>
        </div>
      </div>
    </section>
  );
}
