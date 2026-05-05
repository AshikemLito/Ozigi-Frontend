import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Signup() {
  return (
    <div className="min-h-screen bg-[#F4F5F1] flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[440px] bg-white rounded-[24px] border border-[#E5E5E5] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      >
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="text-[28px] font-serif tracking-tight text-[#404040] mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Ozigi
          </Link>
          <h1 className="text-[24px] font-normal tracking-tight text-[#404040] mb-2">Create account</h1>
          <p className="text-[15px] text-[#888] font-normal">Start your 14-day free trial today</p>
        </div>

        <div className="space-y-4">
          <button className="w-full h-[52px] border border-[#E5E5E5] rounded-[12px] flex items-center justify-center gap-3 hover:bg-[#FAFAFA] transition-all bg-white shadow-sm font-medium text-[15px] text-[#404040]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-[#F0F0F0]"></div>
            <span className="flex-shrink mx-4 text-[13px] text-[#CCC] uppercase tracking-widest font-medium">Or</span>
            <div className="flex-grow border-t border-[#F0F0F0]"></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#888] ml-1">First name</label>
                <input 
                  type="text" 
                  placeholder="Jane" 
                  className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E5E5] focus:border-black outline-none transition-all text-[15px] bg-[#FCFCFC]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#888] ml-1">Last name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E5E5] focus:border-black outline-none transition-all text-[15px] bg-[#FCFCFC]"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#888] ml-1">Email address</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E5E5] focus:border-black outline-none transition-all text-[15px] bg-[#FCFCFC]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-medium text-[#888] ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E5E5] focus:border-black outline-none transition-all text-[15px] bg-[#FCFCFC]"
              />
              <p className="text-[12px] text-[#A3A3A3] mt-1 ml-1 truncate">At least 8 characters long</p>
            </div>

            <button className="w-full h-[52px] bg-[#404040] text-white rounded-[12px] font-medium text-[15px] hover:bg-[#333] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)] mt-4">
              Create account
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-[13px] text-[#A3A3A3] leading-relaxed">
          By signing up, you agree to our <Link to="#" className="text-[#404040] underline underline-offset-4">Terms of Service</Link> and <Link to="#" className="text-[#404040] underline underline-offset-4">Privacy Policy</Link>.
        </div>

        <div className="mt-10 text-center text-[14px]">
          <span className="text-[#888]">Already have an account? </span>
          <Link to="/login" className="text-[#404040] font-medium hover:underline">Sign in</Link>
        </div>
      </motion.div>
    </div>
  );
}
