'use client';

import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent-teal)]/10 blur-[120px] mix-blend-screen" />
      
      <div className="container relative mx-auto px-6 md:px-12 text-center lg:text-left z-10 w-full mb-10 mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-4xl lg:w-2/3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-teal)]"
            >
              Frontend Developer & UI/UX Designer
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-syne text-5xl font-bold leading-[1.1] md:text-7xl lg:text-[100px] glow-text"
            >
              Crafting <span className="font-cormorant italic font-light text-[var(--color-accent-teal)]">digital</span> experiences.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 max-w-xl mx-auto lg:mx-0 text-lg text-gray-400 font-light"
            >
              Hi, I&apos;m Zulfiqar Ali from Shikarpur. I build architecturally modern, responsive, and beautiful websites tailored for businesses, portfolios, and professional services.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a href="#projects" className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 px-10 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[var(--color-accent-teal)]">
                View Work <ArrowDownRight size={18} className="transition-transform group-hover:rotate-[-45deg]" />
              </a>
              <a href="#contact" className="flex items-center justify-center rounded-full border border-white/20 px-8 py-4 px-10 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[var(--color-accent-teal)] hover:text-[var(--color-accent-teal)]">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 lg:mt-0 flex flex-col gap-8 lg:w-1/3 items-end"
          >
            <div className="flex flex-col items-center justify-center lg:items-end lg:text-right">
               <h2 className="font-syne text-6xl md:text-8xl font-bold text-white tracking-tighter">30<span className="text-[var(--color-accent-teal)]">+</span></h2>
               <p className="font-cormorant text-xl text-gray-400 italic mt-2">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:items-end lg:text-right">
               <h2 className="font-syne text-6xl md:text-8xl font-bold text-white tracking-tighter">3<span className="text-[var(--color-accent-teal)]">yr</span></h2>
               <p className="font-cormorant text-xl text-gray-400 italic mt-2">Professional Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll Down</div>
        <div className="h-16 w-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 h-full w-full bg-[var(--color-accent-teal)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
