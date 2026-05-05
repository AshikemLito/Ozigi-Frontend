import React from 'react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-white flex flex-col items-center justify-center border-t border-[#F5F5F5]">
       <div className="w-full max-w-[600px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[24px] p-10 md:p-14 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <p className="text-[28px] md:text-[32px] font-normal text-[#404040] tracking-tight mb-4 leading-tight">
            Ozigi generates content
          </p>
          <p className="text-[17px] md:text-[18px] font-normal text-[#666] mb-10 leading-relaxed max-w-[400px]">
            that sounds like you—not a robot. Join hundreds of teams publishing authentic content.
          </p>
          <Link to="/signup" className="bg-[#404040] text-white px-8 py-4 rounded-[10px] text-[15px] font-medium hover:bg-[#333] transition-colors shadow-sm w-full md:w-auto min-w-[200px] flex items-center justify-center">
             Get started free
          </Link>
       </div>
    </section>
  );
}
