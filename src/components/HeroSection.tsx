import React from 'react';
import { motion } from 'motion/react';
import Typewriter from './Typewriter';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <div id="hero" className="relative h-[100dvh] bg-[#050505] text-white font-sans overflow-hidden flex flex-col p-3 md:p-6 lg:p-8">
      {/* Ambient Glow / Light Leaks */}
      <div className="absolute top-[-10%] left-1/4 w-1/2 h-[50vh] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-1/4 w-1/2 h-[50vh] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Background Video Frame Start */}
      <motion.div 
        initial={{ opacity: 0, borderRadius: "32px", scale: 0.93 }}
        animate={{ opacity: 1, borderRadius: "20px", scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full flex-1 overflow-hidden rounded-[20px] md:rounded-[24px] shadow-[0_0_80px_rgba(255,255,255,0.07)] border border-white/10 z-10"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a747850568ec73524d978a0.mp4" type="video/mp4" />
        </video>

        {/* Gradient transition to black at the bottom */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 from-5% via-black/40 via-50% to-transparent pointer-events-none"></div>

        {/* Main Content Area */}
        <main className="absolute inset-0 z-20 flex h-full w-full items-end pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            className="pointer-events-auto mb-20 ml-5 w-[calc(100%-2.5rem)] max-w-[42rem] sm:mb-24 sm:ml-8 md:mb-24 md:ml-12 lg:mb-28 lg:ml-20"
          >
            <h1 className="font-playfair text-[clamp(2.7rem,10vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.035em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]">
              Transmitting the
              <br />
              <span className="italic">life of Christ</span>
            </h1>

            <p className="mt-5 max-w-[38rem] text-sm leading-relaxed text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-base md:mt-6 md:text-lg">
              Exclusive access to The Seer’s full sermons, private podcast series, and deep spiritual teachings, plus a members only community you can access anytime, anywhere.
            </p>

            <a
              href="#connect"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[#f4d778]/70 bg-gradient-to-r from-[#8b6415] via-[#f2d36c] to-[#9a701c] px-7 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(212,175,55,0.38)] transition duration-300 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4d778] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:mt-7 md:px-8 md:text-base"
            >
              Enter the Realm Now
            </a>
          </motion.div>
        </main>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-7 right-5 flex flex-col items-center z-[60] cursor-pointer pointer-events-auto sm:right-8 md:bottom-10 md:right-10"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-8 h-8 text-white/50 -mb-4 drop-shadow-md" />
            <ChevronDown className="w-8 h-8 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Background Video Frame End */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-b from-transparent via-black/85 to-black" />
    </div>
  );
}
