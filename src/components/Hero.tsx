import React from "react";
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

export function Hero() {
  const title = "Automate content creation without the robot voice";
  const titleChars = title.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <section
      className="relative w-full min-h-[90vh] pt-[130px] lg:pt-[160px] pb-[160px] px-4 lg:px-12 flex flex-col items-start overflow-hidden text-white bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          className="w-full h-full object-cover" 
          alt="" 
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black/15" />
        {/* Fallback gradient if image fails to load or while loading */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#1C88ED_0%,#31A5F5_50%,#4FA330_50%,#29571C_100%)]" />
      </div>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <motion.h1 
          className="text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-[1.05] mb-6 max-w-[850px] tracking-tight text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleChars.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[2px] h-[0.8em] bg-white ml-1 align-middle"
          />
        </motion.h1>
        <motion.h2 
          className="text-[18px] md:text-[22px] font-normal mb-8 max-w-[650px] text-white leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          Generate blog posts, newsletters, and social threads that actually
          sound like you.
        </motion.h2>

        <motion.div 
          className="flex flex-wrap items-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          <Link to="/signup" className="bg-[#F2F2F2] text-[var(--color-text-22)] px-4 md:px-5 h-[44px] rounded-[8px] text-[14px] md:text-[15px] font-medium hover:bg-white transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
            Get started free
          </Link>
          <button className="bg-white/20 text-white px-4 md:px-5 h-[44px] rounded-[8px] border border-white/20 text-[14px] md:text-[15px] font-medium hover:bg-white/30 transition-colors shadow-sm flex items-center justify-center">
            View live demo
          </button>
        </motion.div>
      </div>

      {/* Floating Task Notifications */}
      <div className="hidden lg:flex absolute right-12 bottom-48 lg:right-24 lg:bottom-56 z-20 flex-col gap-3">
        {/* Task 1 */}
        <div className="bg-[rgba(20,28,24,0.65)] backdrop-blur-md border border-white/20 rounded-[12px] py-3 px-4 flex items-center gap-3 w-[280px] shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-white/50 font-medium tracking-wide">
              Processing notes
            </span>
            <span className="text-[14px] text-white font-semibold">
              Analyzing style
            </span>
          </div>
        </div>
        {/* Task 2 */}
        <div className="bg-[rgba(20,28,24,0.65)] backdrop-blur-md border border-white/20 rounded-[12px] py-3 px-4 flex items-center gap-3 w-[280px] shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-[#89C75E] opacity-70" />
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-white/50 font-medium tracking-wide">
              Optimization
            </span>
            <span className="text-[14px] text-white font-semibold">
              Stripped AI fluff
            </span>
          </div>
        </div>
        {/* Task 3 */}
        <div className="bg-[rgba(20,28,24,0.65)] backdrop-blur-md border border-white/20 rounded-[12px] py-3 px-4 flex items-center gap-3 w-[280px] shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-[#89C75E] opacity-70" />
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-white/50 font-medium tracking-wide">
              Content ready
            </span>
            <span className="text-[14px] text-white font-semibold">
              Drafted LinkedIn Carousel
            </span>
          </div>
        </div>
      </div>

      {/* Smooth gradient fade at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
