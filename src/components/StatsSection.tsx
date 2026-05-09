import React, { useEffect, useRef } from 'react';
import { useInView, animate, motion } from 'motion/react';
import Typewriter from './Typewriter';

function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${val.toFixed(decimals)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section id="stats" className="bg-black text-white min-h-screen py-12 md:py-24 w-full border-t border-white/10 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Top: Video Frame */}
      <div className="w-full flex justify-center items-center mb-16 md:mb-24 px-4 md:px-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[95vw] md:max-w-[90vw] aspect-[16/9] mx-auto rounded-[2rem] p-[0.2%] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-[0_0_60px_rgba(255,255,255,0.05)] overflow-hidden"
        >
          {/* Light leaks / glow behind the video */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay pointer-events-none z-10 rounded-[2rem]"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
          
          <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-black ring-1 ring-white/10">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80 mix-blend-screen"
            >
              <source src="https://app-uploads.krea.ai/wan-videos/7f348c17-c3aa-40c9-9d5b-a2bed9a72c2e.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col gap-16 md:gap-24 relative z-10">
        
        {/* Bottom: Content Layout (like reference: left title, right description/stats) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[160px] items-center lg:items-stretch w-full">
          
          {/* Left Column: Title & Subtitle */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 }
              }
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium tracking-tight mb-6 leading-[1.1] max-w-full">
              <Typewriter text="Producer Ujay" delay={0} speed={0.012} /><br />
              <Typewriter text="by the " delay={0.25} speed={0.012} /><span className="font-playfair italic font-normal text-gray-300"><Typewriter text="Numbers" delay={0.35} speed={0.012} /></span>
            </h2>
            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-lg whitespace-normal">
              <Typewriter text="Impacting millions globally through high-level conversations, innovative businesses, and a mission to empower the next generation of entrepreneurs." delay={0.1} speed={0.012} />
            </p>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
            }}
            className="grid grid-cols-2 gap-6 md:gap-x-16 lg:gap-x-24 shrink-0"
          >
            {/* Stat 1 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }} className="flex flex-col">
              <div className="text-3xl md:text-5xl lg:text-[56px] font-playfair tracking-tight mb-2 md:mb-3">
                <AnimatedCounter value={309} suffix="K+" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider">
                <Typewriter text="Total Followers" delay={0.1} speed={0.012} />
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }} className="flex flex-col">
              <div className="text-3xl md:text-5xl lg:text-[56px] font-playfair tracking-tight mb-2 md:mb-3">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider">
                <Typewriter text="Millionaires Interviewed" delay={0.1} speed={0.012} />
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }} className="flex flex-col">
              <div className="text-3xl md:text-5xl lg:text-[56px] font-playfair tracking-tight mb-2 md:mb-3">
                <AnimatedCounter value={11} prefix="Age " />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider">
                <Typewriter text="Founded First Business" delay={0.1} speed={0.012} />
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }} className="flex flex-col">
              <div className="text-3xl md:text-5xl lg:text-[56px] font-playfair tracking-tight mb-2 md:mb-3">
                <AnimatedCounter value={100} suffix="M+" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider">
                <Typewriter text="Global Impressions" delay={0.1} speed={0.012} />
              </div>
            </motion.div>

            {/* Stat 5 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }} className="flex flex-col col-span-2 md:col-span-1">
              <div className="text-3xl md:text-5xl lg:text-[56px] font-playfair tracking-tight mb-2 md:mb-3">
                <AnimatedCounter value={24} suffix="/7" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider">
                <Typewriter text="Drive & Dedication" delay={0.1} speed={0.012} />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
