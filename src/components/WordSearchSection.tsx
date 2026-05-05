import React from 'react';

const gridLetters = [
  ['Q', 'W', 'E', 'A', 'I', 'S', 'D', 'R', 'P', 'L', 'A', 'T', 'F', 'O', 'R', 'M', 'T', 'I', 'A'],
  ['R', 'A', 'I', 'V', 'O', 'I', 'C', 'E', 'A', 'G', 'E', 'N', 'T', 'B', 'V', 'C', 'X', 'Z', 'Q'],
  ['Y', 'O', 'U', 'T', 'U', 'B', 'E', 'C', 'H', 'A', 'N', 'N', 'E', 'L', 'O', 'P', 'L', 'K', 'J'],
  ['W', 'E', 'R', 'T', 'V', 'I', 'B', 'E', 'C', 'O', 'D', 'I', 'N', 'G', 'I', 'D', 'E', 'T', 'Y'],
  ['A', 'I', 'N', 'E', 'W', 'S', 'L', 'E', 'T', 'T', 'E', 'R', 'F', 'I', 'R', 'M', 'B', 'N', 'M'],
  ['G', 'R', 'E', 'C', 'R', 'U', 'I', 'T', 'I', 'N', 'G', 'F', 'I', 'R', 'M', 'B', 'N', 'M', 'K'],
  ['H', 'C', 'O', 'N', 'T', 'E', 'N', 'T', 'W', 'R', 'I', 'T', 'E', 'R', 'P', 'O', 'I', 'U', 'Y'],
];

export function WordSearchSection() {
  return (
    <section className="w-full py-32 bg-[var(--color-brand-10)] text-center px-6 lg:px-12 overflow-hidden relative">
      <div className="max-w-[700px] mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-[40px] md:text-[44px] leading-[1.1] font-semibold text-[var(--color-text-22)] tracking-tight mb-6">
          Build across industries
        </h2>
        <p className="text-[18px] text-[var(--color-text-24)] font-medium mb-16 max-w-lg leading-relaxed">
          From software products to service platforms and marketplaces<br/>Cofounder helps you turn ideas into working companies.
        </p>

        <div className="font-mono text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.5em] leading-loose text-gray-300 select-none overflow-x-auto w-full pb-8 hide-scrollbar">
          {gridLetters.map((row, i) => (
             <div key={i} className="flex justify-center whitespace-nowrap min-w-max mx-auto px-4 gap-1 md:gap-2">
                {row.map((letter, j) => {
                   let highlight = false;
                   if (i === 0 && j >= 8 && j <= 15) highlight = true; // PLATFORM
                   if (i === 1 && j >= 1 && j <= 8) highlight = true; // AIVOICEAGE? no wait, A I V O I C E A G E N T
                   if (i === 1 && j >= 2 && j <= 12) highlight = true; // IVOICEAGENT
                   if (i === 2 && j >= 0 && j <= 13) highlight = true; // YOUTUBE CHANNEL
                   if (i === 4 && j >= 2 && j <= 11) highlight = true; // NEWSLETTER
                   if (i === 6 && j >= 1 && j <= 13) highlight = true; // CONTENT WRITER
                   
                   return (
                     <span key={j} className={`mx-[2px] md:mx-1 inline-flex items-center justify-center font-mono font-medium transition-opacity cursor-default ${highlight ? 'text-gray-900 border-2 border-[#89C75E] rounded-full px-1.5 md:px-2 -mx-[2px] md:-mx-1 bg-[#FBFBF8] relative z-10 shadow-sm' : 'hover:text-gray-400'}`}>
                       {letter}
                     </span>
                   )
                })}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
