import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import { LOADER_ART_URL } from '../../constants/media';

export interface LayoutPreloaderProps {
  readonly onComplete: () => void;
  readonly duration?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function LayoutPreloader({
  onComplete,
  duration = 2200,
}: Readonly<LayoutPreloaderProps>) {
  const onCompleteRef = useRef(onComplete);
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const progressLabel = useTransform(progress, (value) =>
    Math.round(value).toString().padStart(3, '0'),
  );
  const progressScale = useTransform(progress, (value) => value / 100);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let completionTimer = 0;
    const controls = animate(progress, 100, {
      duration: reduceMotion ? 0.35 : duration / 1000,
      ease: 'linear',
      onComplete: () => {
        completionTimer = window.setTimeout(
          () => onCompleteRef.current(),
          reduceMotion ? 0 : 180,
        );
      },
    });

    return () => {
      controls.stop();
      window.clearTimeout(completionTimer);
    };
  }, [duration, progress, reduceMotion]);

  return (
    <motion.div
      role="status"
      aria-label="Loading The Realm Of Seers"
      exit={{ opacity: 0, scale: 1.012 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
      className="fixed inset-0 z-[9999] bg-[#050303] p-2.5 text-white sm:p-3 md:p-6 lg:p-8"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#080303] shadow-[0_28px_90px_rgba(55,5,5,0.38)] ring-1 ring-inset ring-white/10">
        <img
          aria-hidden="true"
          src={LOADER_ART_URL}
          alt=""
          className="absolute inset-[-8%] h-[116%] w-[116%] object-cover opacity-45 blur-2xl"
        />

        <motion.img
          aria-hidden="true"
          src={LOADER_ART_URL}
          alt=""
          initial={reduceMotion ? false : { opacity: 0.7, scale: 1.065 }}
          animate={{ opacity: 1, scale: 1.015 }}
          transition={{ duration: reduceMotion ? 0 : 2.3, ease }}
          className="absolute inset-0 h-full w-full object-contain md:object-cover"
        />

        <div aria-hidden="true" className="preloader-art-wash absolute inset-0" />
        <div aria-hidden="true" className="preloader-noise absolute inset-0" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: reduceMotion ? 0 : 0.85, ease, delay: 0.12 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/66 sm:text-xs">
              The
            </span>
            <h1 className="mt-2 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              <span
                className="block text-[clamp(3rem,9vw,7.25rem)] italic leading-[0.88] tracking-[-0.055em]"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Realm Of
              </span>
              <span className="mt-3 block text-[clamp(1.15rem,3vw,2.2rem)] font-semibold leading-none tracking-[0.32em] sm:mt-5">
                SEERS
              </span>
            </h1>
            <p className="mt-6 text-[10px] font-medium tracking-[0.08em] text-white/68 sm:text-xs">
              With The Seer, Uebert Angel Jr
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-x-5 bottom-5 z-30 flex items-end gap-4 sm:inset-x-8 sm:bottom-8">
          <div aria-hidden="true" className="mb-1.5 h-px flex-1 overflow-hidden bg-white/16">
            <motion.div
              className="h-full origin-left bg-[#cf1c1c]"
              style={{ scaleX: progressScale }}
            />
          </div>
          <motion.p className="w-8 text-right text-[10px] font-medium tabular-nums tracking-[0.12em] text-white/62">
            {progressLabel}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
