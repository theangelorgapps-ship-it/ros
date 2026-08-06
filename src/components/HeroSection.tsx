import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <div id="hero" className="relative flex h-[100svh] flex-col overflow-hidden bg-[#050505] p-2.5 font-sans text-white sm:p-3 md:h-[100dvh] md:p-6 lg:p-8">
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
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            className="pointer-events-auto mb-14 ml-4 w-[calc(100%-2rem)] max-w-[42rem] sm:mb-20 sm:ml-8 sm:w-[calc(100%-4rem)] md:mb-24 md:ml-12 lg:mb-28 lg:ml-20"
          >
            <h1 className="font-playfair text-[clamp(2.25rem,11vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]">
              Transmitting the
              <br />
              <span>life of Christ</span>
            </h1>

            <p className="mt-4 max-w-[38rem] text-[13px] leading-[1.55] text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-base sm:leading-relaxed md:mt-6 md:text-lg">
              Exclusive access to The Seer’s full sermons, private podcast series, and deep spiritual teachings, plus a members only community you can access anytime, anywhere.
            </p>

            <a
              href="#connect"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative z-40 mt-5 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[10px] border border-white bg-white px-5 py-3.5 text-[13px] font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-[#cf1c1c] hover:bg-[#cf1c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-6 sm:min-h-[54px] sm:gap-2.5 sm:px-7 sm:py-4 sm:text-sm md:mt-7 md:px-8 md:text-base"
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
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent via-black/85 to-black" />
    </div>
  );
}
