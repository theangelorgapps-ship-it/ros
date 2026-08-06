import React from 'react';
import { motion } from 'motion/react';
import { NAV_ITEMS, SKOOL_URL } from '../constants/links';

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="site-header pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-3 transition-all duration-300 sm:top-5 sm:px-4 md:top-6 md:px-8"
    >
      <nav className="pointer-events-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 rounded-xl border border-white/15 bg-black/82 p-1.5 text-white backdrop-blur-md min-[560px]:flex min-[560px]:justify-between md:px-2">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex min-h-11 shrink-0 items-center bg-transparent px-2 text-left transition-opacity hover:opacity-80 md:px-3"
          aria-label="Return to home"
        >
          <span className="text-[13px] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-sm">
            The Realm
            <br />
            Of Seers
          </span>
        </button>

        <div className="order-3 col-span-2 flex items-center justify-between min-[560px]:order-none min-[560px]:col-auto min-[560px]:justify-center min-[560px]:gap-0.5 lg:gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.target);
              }}
              className="min-h-10 rounded-lg px-1.5 py-3 text-[10px] font-medium transition-colors hover:bg-white hover:text-black sm:px-2 sm:text-[11px] md:px-3 md:text-xs lg:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-white px-3 text-[11px] font-semibold text-black transition-colors hover:bg-[#cf1c1c] hover:text-white sm:px-4 sm:text-xs md:px-5"
        >
          Join Now
        </a>
      </nav>
    </motion.header>
  );
}
