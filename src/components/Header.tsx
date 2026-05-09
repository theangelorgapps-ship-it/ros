import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none flex justify-center"
    >
      <nav className="pointer-events-auto flex items-center gap-1 md:gap-2 p-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-gray-200 text-sm">
        <button 
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center hover:opacity-80 transition-opacity h-8 px-2 md:px-3 border-r border-white/20 mr-1 bg-transparent"
        >
          <img src="https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fba3434ef91f2f59351fb8.png" alt="Producer Ujay Logo" className="h-full object-contain" />
        </button>
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-3 md:px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-3 md:px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium whitespace-nowrap">About Me</a>
        <a href="#connect" onClick={(e) => { e.preventDefault(); document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-3 md:px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">Connect</a>
      </nav>
    </motion.header>
  );
}
