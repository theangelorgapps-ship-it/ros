import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="site-header pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-3 transition-all duration-300 sm:top-5 sm:px-4 md:top-6 md:px-12"
    >
      <nav className="pointer-events-auto flex w-full max-w-[calc(100vw-1.5rem)] items-center justify-between gap-0 rounded-[10px] border border-white/15 bg-black/75 p-1 text-[10px] text-white backdrop-blur-md sm:max-w-[340px] sm:rounded-xl sm:p-1.5 sm:text-sm md:w-auto md:max-w-none md:justify-center md:gap-2">
        <button 
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-0.5 flex h-8 w-[68px] shrink-0 items-center justify-center border-r border-white/20 bg-transparent px-1.5 transition-opacity hover:opacity-80 sm:mr-1 sm:w-[82px] sm:px-2 md:w-auto md:px-3"
        >
          <img src="https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fba3434ef91f2f59351fb8.png" alt="Producer Ujay Logo" className="h-full object-contain" />
        </button>
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="rounded-full px-1.5 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black sm:px-2.5 md:px-4">Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap rounded-full px-1.5 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black sm:px-2.5 md:px-4">About Me</a>
        <a href="#connect" onClick={(e) => { e.preventDefault(); document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' }); }} className="rounded-full px-1.5 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black sm:px-2.5 md:px-4">Connect</a>
      </nav>
    </motion.header>
  );
}
