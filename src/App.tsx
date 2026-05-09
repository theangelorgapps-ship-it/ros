/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, ReactNode, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import LogoMarquee from './components/LogoMarquee';
import ImageSection from './components/ImageSection';
import Footer from './components/Footer';

function StackedCard({ children, index, total }: { children: ReactNode, index: number, total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, index === total - 1 ? 0 : 0.6]);

  return (
    <div 
      className="sticky w-full" 
      style={{ top: 'min(0px, calc(100vh - 100%))' }}
    >
      <motion.div ref={ref} style={{ scale }} className="w-full origin-top relative bg-black">
        {children}
        <motion.div style={{ opacity }} className="absolute inset-0 bg-black z-50 pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const intervalTime = 20; // Check every 20ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
    }, intervalTime);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <img 
                src="https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fba3434ef91f2f59351fb8.png" 
                alt="Loading Logo" 
                className="h-12 md:h-16 object-contain" 
              />
              <div className="w-48 flex flex-col items-center gap-3">
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-white/40 font-mono text-[10px] tracking-[0.2em]">
                  {Math.round(progress)}%
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-black min-h-screen font-sans text-white relative">
        <Header />
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <LogoMarquee />
        <ImageSection />
        <Footer />
      </div>
    </>
  );
}
