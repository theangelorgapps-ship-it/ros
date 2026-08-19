import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SKOOL_URL } from '../constants/links';
import { HERO_VIDEO_URL } from '../constants/media';

export default function HeroSection() {
  return (
    <div id="home" className="relative flex min-h-[100svh] scroll-mt-28 flex-col overflow-hidden p-2.5 font-sans text-white sm:p-3 md:min-h-[100dvh] md:scroll-mt-24 md:p-6 lg:p-8">
      {/* Ambient Glow / Light Leaks */}
      <div className="pointer-events-none absolute left-1/4 top-[-10%] h-[50vh] w-1/2 rounded-full bg-[#cf1c1c]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-1/4 h-[50vh] w-1/2 rounded-full bg-[#cf1c1c]/10 blur-[120px]" />

      {/* Background Video Frame Start */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 min-h-[calc(100svh-1.25rem)] w-full flex-1 overflow-hidden rounded-2xl border border-white/10 min-[560px]:min-h-[calc(100svh-6.25rem)] md:min-h-[calc(100dvh-8rem)] lg:min-h-[calc(100dvh-9rem)]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={({ currentTarget }) => {
            currentTarget.currentTime = 0;
            void currentTarget.play().catch(() => undefined);
          }}
          className="absolute inset-0 h-full w-full object-cover object-[55%_center] sm:object-center"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div aria-hidden="true" className="realm-hero-wash pointer-events-none absolute inset-0" />

        {/* Main Content Area */}
        <main className="absolute inset-0 z-30 flex h-full w-full items-end pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-auto mb-10 ml-4 w-[calc(100%-2rem)] max-w-[31rem] sm:mb-14 sm:ml-8 sm:w-[calc(100%-4rem)] md:mb-16 md:ml-12 lg:mb-16 lg:ml-16 xl:ml-20"
          >
            <h1 className="max-w-[31rem] font-playfair text-[clamp(2rem,5.4vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]">
              Transmitting the
              <br />
              <span>life of Christ</span>
            </h1>

            <p className="mt-4 max-w-[29rem] text-[13px] leading-[1.55] text-white/82 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-[15px] sm:leading-relaxed md:text-base">
              Full sermons, private podcasts, deep teaching, and a members-only community, available anytime.
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

          </motion.div>
        </main>
      </motion.div>
      {/* Background Video Frame End */}
    </div>
  );
}
