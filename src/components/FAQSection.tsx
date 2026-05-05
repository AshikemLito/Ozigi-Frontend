import React, { useState } from 'react';

const faqs = [
  {
    question: "Do you have a free plan?",
    answer: "Yes, you can try Cofounder with a limit of 5 free tasks."
  },
  {
    question: "Can I use Cofounder for internal tools?",
    answer: "Absolutely. Cofounder is perfect for building bespoke internal tools and automate operations."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Priority support is available for all scaled plans."
  },
  {
    question: "How do you handle security and privacy?",
    answer: "We use SOC-2 compliant practices, keeping your data secure and segregated."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-32 px-6 lg:px-12 bg-white flex justify-center">
      <div className="max-w-[700px] w-full flex flex-col items-center">
        <h2 className="text-[40px] md:text-[44px] leading-[1.1] font-semibold text-[var(--color-text-22)] tracking-tight mb-16 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-gray-50/50 shadow-sm' : 'bg-white hover:bg-gray-50/30'}`}>
               <button 
                 className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                 onClick={() => toggle(i)}
               >
                 <span className="text-[16px] font-medium text-gray-800 tracking-tight">{faq.question}</span>
                 <span className={`text-gray-400 font-medium transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </span>
               </button>
               
               <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                     {faq.answer}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
