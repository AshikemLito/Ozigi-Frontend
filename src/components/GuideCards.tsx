import React from 'react';

const cards = [
  { step: 1, title: 'Feed raw material', numeral: '01', desc: 'Paste a URL, meeting notes, or upload a PDF. No cleaning required—Ozigi strips the noise and extracts the core value.' },
  { step: 2, title: 'Pick format', numeral: '02', desc: 'Choose between blog posts, newsletters, LinkedIn carousels, X threads, or technical briefs. Your unique voice is applied.' },
  { step: 3, title: 'Publish or send', numeral: '03', desc: 'Post directly to X and LinkedIn, send newsletters to your audience, or export to your CMS.' },
];

export function GuideCards() {
  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-[#FBFBFB] relative">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-normal text-[#404040] tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-[17px] text-[#666666] font-normal max-w-[500px] mx-auto leading-relaxed">
            From raw notes to polished content in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <div key={card.step} className="bg-white rounded-[16px] border border-[#EFEFEF] flex flex-col p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="text-[12px] font-medium text-[#A1A1AA] uppercase tracking-widest font-mono mb-8">
                Step {card.numeral}
              </div>
              <h3 className="text-[20px] font-medium tracking-tight text-[#404040] leading-[1.2] mb-4">
                {card.title}
              </h3>
              <p className="text-[#666] text-[15px] leading-relaxed font-normal">
                 {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
