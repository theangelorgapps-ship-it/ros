import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';
import { LOADER_ART_URL } from '../../constants/media';

export interface LayoutPreloaderProps {
  readonly onComplete: () => void;
  readonly duration?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function LayoutPreloader({
  onComplete,
  duration = 3000,
}: Readonly<LayoutPreloaderProps>) {
  const onCompleteRef = useRef(onComplete);
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);

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
      className="fixed inset-0 z-[9999] bg-[#100002] p-2.5 text-white sm:p-3 md:p-6 lg:p-8"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#160003] shadow-[0_28px_90px_rgba(55,5,5,0.55)] ring-1 ring-inset ring-[#dfb452]/20">
        <img
          aria-hidden="true"
          src={LOADER_ART_URL}
          alt=""
          className="absolute inset-[-10%] h-[120%] w-[120%] object-cover opacity-55 blur-3xl saturate-125"
        />

        <div className="preloader-concept-frame absolute inset-0 z-10">
          <div className="preloader-concept-stage">
            <motion.img
              aria-hidden="true"
              src={LOADER_ART_URL}
              alt=""
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: reduceMotion ? 0 : 1.55, ease, delay: 0.08 }}
              className="preloader-concept-art"
            />
          </div>
        </div>

        <div aria-hidden="true" className="preloader-concept-wash absolute inset-0 z-20" />
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: '-110%' }}
          animate={{ opacity: [0, 0.42, 0], x: '330%' }}
          transition={{ duration: reduceMotion ? 0 : 1.8, ease: 'easeInOut', delay: 0.72 }}
          className="preloader-concept-glint absolute inset-y-0 z-30 w-1/4"
        />
        <div aria-hidden="true" className="preloader-noise absolute inset-0 z-40" />
      </div>
    </motion.div>
  );
}
