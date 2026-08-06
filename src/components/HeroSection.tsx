import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { SKOOL_URL } from '../constants/links';

export default function HeroSection() {
  return (
    <div id="home" className="relative flex h-[100svh] scroll-mt-28 flex-col overflow-hidden p-2.5 font-sans text-white sm:p-3 md:h-[100dvh] md:scroll-mt-24 md:p-6 lg:p-8">
      {/* Ambient Glow / Light Leaks */}
      <div className="pointer-events-none absolute left-1/4 top-[-10%] h-[50vh] w-1/2 rounded-full bg-[#cf1c1c]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-1/4 h-[50vh] w-1/2 rounded-full bg-[#cf1c1c]/10 blur-[120px]" />

      {/* Background Video Frame Start */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(207,28,28,0.1)]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[55%_center] sm:object-center"
        >
          <source src="https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a747850568ec73524d978a0.mp4" type="video/mp4" />
        </video>

        {/* Gradient transition to black at the bottom */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 from-5% via-black/40 via-50% to-transparent pointer-events-none"></div>

        {/* Main Content Area */}
        <main className="absolute inset-0 z-30 flex h-full w-full items-end pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-auto mb-14 ml-4 w-[calc(100%-2rem)] max-w-[42rem] sm:mb-20 sm:ml-8 sm:w-[calc(100%-4rem)] md:mb-24 md:ml-12 lg:mb-28 lg:ml-20"
          >
            <h1 className="max-w-[38rem] font-playfair text-[clamp(2rem,6.8vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]">
              Transmitting the
              <br />
              <span>life of Christ</span>
            </h1>

            <p className="mt-4 max-w-[36rem] text-[13px] leading-[1.55] text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-[15px] sm:leading-relaxed md:mt-6 md:text-base lg:text-[17px]">
              Exclusive access to The Seer’s full sermons, private podcast series, and deep spiritual teachings, plus a members only community you can access anytime, anywhere.
            </p>

            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noreferrer"
              className="relative z-40 mt-5 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3.5 text-[13px] font-medium text-black shadow-[0_4px_8px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cf1c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 sm:mt-6 sm:min-h-[54px] sm:gap-2.5 sm:px-7 sm:py-4 sm:text-sm md:mt-7 md:px-8 md:text-base"
            >
              <span>Enter the Realm Now</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 stroke-[2.25] md:h-[18px] md:w-[18px]" />
            </a>

            <div className="relative z-40 mt-3 flex items-center gap-1.5 text-[10px] font-medium text-white/75 sm:mt-4 sm:gap-2 sm:text-sm">
              <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 sm:h-5 sm:w-5">
                <Check aria-hidden="true" className="h-2.5 w-2.5 stroke-[2.5] sm:h-3 sm:w-3" />
              </span>
              <span>Private community • Exclusive teachings</span>
            </div>
          </motion.div>
        </main>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pointer-events-auto absolute bottom-5 right-4 z-[60] flex cursor-pointer flex-col items-center sm:bottom-7 sm:right-8 md:bottom-10 md:right-10"
          onClick={() => document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="-mb-3 h-6 w-6 text-white/50 drop-shadow-md sm:-mb-4 sm:h-8 sm:w-8" />
            <ChevronDown className="h-6 w-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] sm:h-8 sm:w-8" />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Background Video Frame End */}
    </div>
  );
}
