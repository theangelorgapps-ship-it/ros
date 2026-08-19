import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

type FadeInProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  y?: number;
};

export default function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.7,
  style,
  y = 30,
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as), [as]);
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionElement
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      style={style}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      whileInView="visible"
    >
      {children}
    </MotionElement>
  );
}
