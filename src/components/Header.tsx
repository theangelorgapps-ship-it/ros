import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS, SKOOL_URL } from '../constants/links';

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');

    if (!hero) {
      setIsPastHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      {
        rootMargin: '0px',
        threshold: 0,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isPastHero]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: isPastHero ? 0 : -2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="site-header pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-4 md:top-6 md:px-8"
    >
      <div className="relative w-full max-w-6xl">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: isPastHero ? 'rgba(0, 0, 0, 0.82)' : 'rgba(0, 0, 0, 0)',
            borderColor: isPastHero ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0)',
            boxShadow: isPastHero
              ? '0 18px 55px rgba(0, 0, 0, 0.34), 0 1px 0 rgba(255, 255, 255, 0.04) inset'
              : '0 0 0 rgba(0, 0, 0, 0)',
            scale: isPastHero ? 1 : 0.995,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto grid w-full grid-cols-[1fr_auto] items-center gap-x-2 rounded-xl border p-1.5 text-white min-[560px]:flex min-[560px]:justify-between md:px-2 ${
            isPastHero ? 'backdrop-blur-md' : 'backdrop-blur-none'
          }`}
          aria-label="Primary navigation"
        >
          <button
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('home');
            }}
            className="flex min-h-11 shrink-0 items-center bg-transparent px-2 text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-opacity hover:opacity-80 md:px-3"
            aria-label="Return to home"
          >
            <span className="text-[13px] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-sm">
              The Realm
              <br />
              Of Seers
            </span>
          </button>

          <div className="hidden items-center justify-center min-[560px]:flex min-[560px]:gap-0.5 lg:gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.target);
                }}
                className="min-h-10 rounded-lg px-1.5 py-3 text-[10px] font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-colors hover:bg-white hover:text-black sm:px-2 sm:text-[11px] md:px-3 md:text-xs lg:px-4"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex min-h-11 touch-manipulation items-center justify-center rounded-lg bg-transparent px-2.5 text-[11px] font-medium text-white transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-[560px]:hidden sm:px-3 sm:text-xs"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 shrink-0 touch-manipulation items-center justify-center rounded-lg bg-white px-3 text-[11px] font-semibold text-black transition-colors hover:bg-[#cf1c1c] hover:text-white sm:px-4 sm:text-xs md:px-5"
            >
              Join Now
            </a>
          </div>
        </motion.nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
              className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 grid grid-cols-2 gap-1 rounded-xl border border-white/15 bg-black/95 p-2 text-white shadow-[0_18px_55px_rgba(0,0,0,0.48)] backdrop-blur-xl min-[560px]:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-12 touch-manipulation items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
