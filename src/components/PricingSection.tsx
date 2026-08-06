import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import AnimatedTaskList from './AnimatedTaskList';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_064035_ff2947db-c2f5-47e4-818d-0e985c6ea0fc.mp4';

const COMMUNITY_URL = 'https://uuweua6rp4gx1nei2kim.app.clientclub.net/';

function ScriptMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`ml-1.5 flex rotate-[-15deg] flex-col ${compact ? 'gap-[1.5px]' : 'gap-[2.5px]'} translate-y-px`}
    >
      <span className={`${compact ? 'h-[1.5px] w-2.5' : 'h-[1.5px] w-3.5'} rounded-full bg-[#0f172a]`} />
      <span className={`${compact ? 'h-[1.5px] w-[7px] translate-x-[0.8px]' : 'h-[1.5px] w-2.5 translate-x-0.5'} rounded-full bg-[#0f172a]`} />
      <span className={`${compact ? 'h-[1.5px] w-[9px] translate-x-[1.6px]' : 'h-[1.5px] w-3 translate-x-1'} rounded-full bg-[#64748b]`} />
    </span>
  );
}

function ScriptNavbar() {
  const links = ['Resources', 'Service', 'Support', 'Developers', 'Updates'];

  return (
    <nav
      aria-label="Script navigation"
      className="relative z-50 mx-auto flex w-full max-w-7xl select-none items-center justify-between px-6 py-5"
    >
      <a href="#connect" className="flex items-center text-[21px] font-bold tracking-tight text-[#0f172a]" aria-label="Script home">
        Script
        <ScriptMark />
      </a>

      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-medium text-slate-600 md:flex">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-slate-900">
            {link}
          </a>
        ))}
      </div>

      <a
        href={COMMUNITY_URL}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 bg-white/30 px-[18px] py-1.5 text-xs font-medium text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all hover:bg-white/85"
      >
        Join us
      </a>
    </nav>
  );
}

function ScriptHero() {
  return (
    <main className="relative flex flex-1 flex-col">
      <section className="relative flex w-full flex-1 select-none flex-col items-center justify-center pb-6 pt-10">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto mb-5 max-w-4xl whitespace-pre-line text-4xl leading-[1.12] tracking-tight text-slate-900 [font-family:'Inter',ui-sans-serif,system-ui,sans-serif] md:text-[45px]"
          >
            {'Guide everyone on teams\ntech manuals\n— with a total ease of mind'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mb-6 max-w-xl whitespace-pre-line text-xs font-normal leading-relaxed text-slate-500 md:text-[13px]"
          >
            {'Script offers the best path to register your workflow steps\nand optimize training on your setup systems'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mb-14"
          >
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noreferrer"
              className="mx-auto flex items-center gap-1 rounded-lg border border-slate-900/80 bg-gradient-to-b from-[#252a38] to-[#1a1e29] px-5 py-2 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(0,0,0,0.15)] transition-all duration-150 hover:from-[#1d212c] hover:to-[#12151e] active:scale-95"
            >
              Register Now!
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </motion.div>

          <div className="relative flex w-full max-w-sm flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-20 w-full"
            >
              <AnimatedTaskList icon={<ScriptMark compact />} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-14 text-[10px] font-medium tracking-wide text-white/50"
            >
              All people aligned.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('script-section-active', entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      document.body.classList.remove('script-section-active');
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="connect"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#f8fafc] text-[#1e293b] selection:bg-slate-200 [font-family:'Inter',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 overflow-hidden">
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover object-bottom opacity-[0.98]"
        />
        <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex flex-grow flex-col">
        <ScriptNavbar />
        <ScriptHero />
      </div>
    </section>
  );
}
