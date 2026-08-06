import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { NAV_ITEMS, SKOOL_URL } from '../constants/links';

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');

    if (!hero) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      {
        rootMargin: '0px',
        threshold: 0,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) setIsMenuOpen(false);
  }, [isVisible]);

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!isVisible}
      className="site-header pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-3 transition-all duration-300 sm:top-5 sm:px-4 md:top-6 md:px-8"
    >
      <nav className={`${isVisible ? 'pointer-events-auto' : 'pointer-events-none'} grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-2 gap-y-1 rounded-xl border border-white/15 bg-black/82 p-1.5 text-white backdrop-blur-md min-[560px]:flex min-[560px]:justify-between md:px-2`}>
        <button
          onClick={() => {
            setIsMenuOpen(false);
            scrollToSection('home');
          }}
          tabIndex={isVisible ? 0 : -1}
          className="flex min-h-11 shrink-0 items-center bg-transparent px-2 text-left transition-opacity hover:opacity-80 md:px-3"
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
              tabIndex={isVisible ? 0 : -1}
              className="min-h-10 rounded-lg px-1.5 py-3 text-[10px] font-medium transition-colors hover:bg-white hover:text-black sm:px-2 sm:text-[11px] md:px-3 md:text-xs lg:px-4"
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
            tabIndex={isVisible ? 0 : -1}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-transparent px-2.5 text-[11px] font-medium text-white transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-[560px]:hidden sm:px-3 sm:text-xs"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={isVisible ? 0 : -1}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-white px-3 text-[11px] font-semibold text-black transition-colors hover:bg-[#cf1c1c] hover:text-white sm:px-4 sm:text-xs md:px-5"
          >
            Join Now
          </a>
        </div>

        <motion.div
          id="mobile-navigation"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!isMenuOpen}
          className="col-span-2 grid overflow-hidden min-[560px]:hidden"
        >
          <div className="grid grid-cols-2 gap-1 border-t border-white/10 px-1 pb-1 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  setIsMenuOpen(false);
                  scrollToSection(item.target);
                }}
                tabIndex={isVisible && isMenuOpen ? 0 : -1}
                className="min-h-11 rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
