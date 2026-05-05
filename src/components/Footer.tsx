import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-white pt-24 border-t border-[#F5F5F5] flex flex-col relative">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 w-full pb-12 lg:pb-24">
        
        <div className="w-full max-w-sm flex flex-col items-start">
           <h2 className="text-[28px] md:text-[36px] leading-[1.1] font-normal tracking-tight text-[#404040] mb-6">
             Start automating your content today.
           </h2>
           <p className="text-[17px] text-[#666] font-normal mb-12">
              Stop sounding like a robot.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-[14px] font-normal text-[#666] mb-16">
              <a href="#" className="hover:text-[#404040] transition-colors">How it works</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Difference</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Features</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Pricing</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#404040] transition-colors">Contact</a>
           </div>

           <div className="flex space-x-3 mb-16">
              <a href="#" className="w-10 h-10 border border-[#E5E5E5] text-[#404040] hover:bg-[#FAFAFA] rounded-full flex items-center justify-center transition-all p-2.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="w-full h-full" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#E5E5E5] text-[#404040] hover:bg-[#FAFAFA] rounded-full flex items-center justify-center transition-all p-2.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-full h-full" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#E5E5E5] text-[#404040] hover:bg-[#FAFAFA] rounded-full flex items-center justify-center transition-all p-2.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-full h-full" />
              </a>
           </div>

           <div className="text-[13px] text-[#888] font-normal">
              Copyright © 2026 Ozigi Inc. All rights reserved.
           </div>
        </div>

      </div>

      <div className="relative w-full overflow-hidden flex flex-col items-center justify-end">
        <div 
          className="absolute inset-0 flex items-start justify-center pt-[5%] sm:pt-[8%] md:pt-[10%] select-none pointer-events-none z-0"
        >
          <span 
            className="text-[#404040] font-normal tracking-tight leading-none"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(140px, 30vw, 550px)", letterSpacing: "-0.02em" }}
          >
            Ozigi
          </span>
        </div>

        <img 
          src="https://i.ibb.co/TVJvrww/footer-bg-png.png" 
          alt="Footer background landscape" 
          className="w-full h-auto object-cover object-bottom block m-0 p-0 pointer-events-none relative z-10" 
        />
      </div>
    </footer>
  );
}
