import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Ozigi has completely transformed how I approach our newsletter. It's the first time AI actually sounds like me.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
  },
  {
    quote: "The ability to publish across X and LinkedIn simultaneously without losing my voice is a game-changer for our team.",
    author: "James Wilson",
    role: "Founder",
    company: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    quote: "Finally, a content tool that understands tone. We've seen a 40% increase in engagement since switching.",
    author: "Elena Rodriguez",
    role: "Content Strategy",
    company: "Vercel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
  },
  {
    quote: "It's like having a co-writer who knows my brain. The GitHub integration for our tech blog is seamless.",
    author: "Marcus Thorne",
    role: "Engineering Manager",
    company: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
  }
];

export function TestimonialSection() {
  // Triple the items to ensure seamless infinite scroll
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 mb-16 text-center">
        <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-[#404040]">
          Trusted by builders at the <span className="text-[#888]">best companies</span>
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Blur Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((t, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-[20px] bg-[#FCFCFC] border border-[#F0F0F0] flex flex-col justify-between"
            >
              <p className="text-[18px] md:text-[20px] text-[#404040] leading-relaxed mb-10 tracking-tight font-normal">
                "{t.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium text-[#404040]">{t.author}</span>
                  <span className="text-[13px] text-[#888]">{t.role}, {t.company}</span>
                </div>
                <div className="h-6 w-auto flex items-center justify-end grayscale opacity-50 contrast-125">
                   <img src={t.logo} alt={t.company} className="h-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
