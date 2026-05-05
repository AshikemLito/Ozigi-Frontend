import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 lg:px-12 py-3 lg:py-5 transition-colors duration-300 ${scrolled || isOpen ? "bg-[#F4F5F1] text-[var(--color-text-22)]" : "bg-transparent text-white"}`}
      >
        <Link
          to="/"
          className={`text-[24px] lg:text-[28px] tracking-tight font-serif flex-shrink-0 ${scrolled || isOpen ? "text-[#4d4d4d]" : ""}`}
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Ozigi
        </Link>

        {/* ... existing menu ... */}
        <div className="hidden lg:flex items-center">
          <ul
            className={`flex items-center h-[44px] px-2 rounded-[12px] border ${scrolled || isOpen ? "bg-white border-[var(--color-brand-12)] shadow-sm" : "bg-white/10 backdrop-blur-2xl border-white/20 shadow-sm"}`}
          >
            {["How it Works", "Difference", "Features", "Pricing"].map(
              (item, i) => (
                <li key={item} className="h-full flex items-center">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-[15px] font-medium px-4 h-full flex items-center transition-opacity hover:opacity-70 leading-none ${scrolled || isOpen ? "text-[var(--color-text-22)]" : "text-white"}`}
                  >
                    {item}
                  </a>
                  {i < 3 && (
                    <div
                      className={`h-[14px] w-px ${scrolled || isOpen ? "bg-[var(--color-brand-12)]" : "bg-white/20"}`}
                    />
                  )}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className={`hidden sm:flex h-[40px] lg:h-[42px] px-4 lg:px-5 rounded-[8px] text-[14px] lg:text-[15px] font-medium transition-all items-center justify-center ${scrolled || isOpen ? "bg-transparent text-[var(--color-text-22)] hover:bg-black/5" : "bg-white/10 backdrop-blur-2xl border border-white/20 text-white hover:bg-white/20 shadow-sm"}`}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className={`h-[40px] lg:h-[42px] px-4 lg:px-5 rounded-[10px] text-[14px] lg:text-[15px] font-medium transition-colors flex items-center justify-center ${scrolled || isOpen ? "bg-[#404040] text-white hover:bg-[#333] shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)] border border-[#2B2B2B]" : "bg-[#F2F2F2] text-[var(--color-text-22)] hover:bg-white shadow-sm"}`}
          >
            Get started free
          </Link>

          {/* Mobile Hamburger / Close Menu */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden w-[42px] h-[42px] rounded-[10px] flex items-center justify-center ${scrolled || isOpen ? "bg-[#FCFCFC] border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] text-[#404040]" : "bg-white/10 backdrop-blur-md border border-white/20 text-white"}`}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <div className="flex flex-col space-y-1.5">
                <span className={`block w-[18px] h-[2px] rounded-full transition-colors ${scrolled ? "bg-[#555]" : "bg-white"}`}></span>
                <span className={`block w-[18px] h-[2px] rounded-full transition-colors ${scrolled ? "bg-[#555]" : "bg-white"}`}></span>
                <span className={`block w-[18px] h-[2px] rounded-full transition-colors ${scrolled ? "bg-[#555]" : "bg-white"}`}></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F4F5F1] flex flex-col items-center justify-center pt-24 pb-12 overflow-y-auto"
          >
             <div className="flex flex-col items-center flex-1 justify-center w-full min-h-max py-8">
               <div className="text-[20px] text-[#A3A3A3] font-normal mb-8 tracking-tight">Explore</div>
               <div className="flex flex-col items-center space-y-6 mb-12">
                  <a href="#how" onClick={toggleMenu} className="text-[44px] sm:text-[56px] text-[#404040] hover:text-black transition-colors font-normal tracking-tight leading-none">How it works</a>
                  <a href="#difference" onClick={toggleMenu} className="text-[44px] sm:text-[56px] text-[#404040] hover:text-black transition-colors font-normal tracking-tight leading-none">Difference</a>
                  <a href="#features" onClick={toggleMenu} className="text-[44px] sm:text-[56px] text-[#404040] hover:text-black transition-colors font-normal tracking-tight leading-none">Features</a>
               </div>
               
               <div className="w-[120px] h-[1px] bg-[#E5E5E5] mb-12"></div>

               <div className="flex flex-col items-center space-y-6">
                  <a href="#pricing" onClick={toggleMenu} className="text-[32px] sm:text-[40px] text-[#404040] hover:text-black transition-colors font-normal tracking-tight leading-none">Pricing</a>
                  <Link to="/login" onClick={toggleMenu} className="text-[32px] sm:text-[40px] text-[#404040] hover:text-black transition-colors font-normal tracking-tight leading-none">Log in</Link>
               </div>
             </div>

             <div className="w-full flex flex-col items-center mt-auto justify-end pb-8">
                <div className="flex space-x-3 mb-8">
                  <a href="#" className="w-12 h-12 border border-[#E5E5E5] text-[#404040] hover:bg-white bg-[#FCFCFC] rounded-[12px] flex items-center justify-center transition-all shadow-sm p-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="w-full h-full" />
                  </a>
                  <a href="#" className="w-12 h-12 border border-[#E5E5E5] text-[#404040] hover:bg-white bg-[#FCFCFC] rounded-[12px] flex items-center justify-center transition-all shadow-sm p-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-full h-full" />
                  </a>
                  <a href="#" className="w-12 h-12 border border-[#E5E5E5] text-[#404040] hover:bg-white bg-[#FCFCFC] rounded-[12px] flex items-center justify-center transition-all shadow-sm p-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-full h-full" />
                  </a>
                </div>
                <div className="text-[13px] text-[#A3A3A3] font-normal text-center max-w-[280px]">
                  Copyright © 2026 Ozigi Inc. All rights reserved.
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
