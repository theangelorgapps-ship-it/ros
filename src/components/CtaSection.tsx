import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import { cn } from '../lib/utils';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const GRASS_SRC =
  'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1780586778/cta-bg_mlwy5s.png';

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeUp({ children, className, delay = 0, y = 24 }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MIconProps = {
  name: string;
  size?: number;
  fill?: 0 | 1;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  className?: string;
};

export function MIcon({
  name,
  size = 20,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className,
}: MIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('material-symbols-outlined shrink-0 leading-none', className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      }}
    >
      {name}
    </span>
  );
}

function AnimatedText({ children }: { children: ReactNode }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-250 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full block transition-transform duration-250 ease-out group-hover:-translate-y-full"
      >
        {children}
      </span>
    </span>
  );
}

type PrimaryButtonProps = {
  as?: 'a' | 'button';
  children: ReactNode;
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
};

export function PrimaryButton({
  as = 'a',
  children,
  className,
  href,
  size = 'lg',
  onClick,
}: PrimaryButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-full bg-white/80 text-black leading-none transition-colors hover:bg-white',
    size === 'sm' && 'h-9 px-5 text-xs font-medium',
    size === 'md' && 'h-10 px-7 text-sm font-medium',
    size === 'lg' && 'h-12 px-9 text-sm font-medium',
    className,
  );
  const content = <AnimatedText>{children}</AnimatedText>;

  if (as === 'button') {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <a className={classes} href={href ?? '#cta'} onClick={onClick}>
      {content}
    </a>
  );
}

type Message = {
  id: number;
  role: 'assistant' | 'user';
  text: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: 'assistant',
    text: "Welcome to the Vibe Design course! I'll guide you through building stunning websites with AI. What would you like to learn first?",
  },
  {
    id: 2,
    role: 'user',
    text: 'I want to learn how to build a hero section with a cinematic video background using AI.',
  },
  {
    id: 3,
    role: 'assistant',
    text: "Great choice! In this course, you'll learn how to create full-screen looping videos, liquid glass nav bars, email signups, and manifesto buttons — all with AI assistance. Let's dive in!",
  },
];

type ChatPanelProps = {
  initialScroll?: 'top' | 'bottom';
  animateMessagesIn?: boolean;
};

export function ChatPanel({ initialScroll = 'bottom', animateMessagesIn = false }: ChatPanelProps) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const scrollArea = scrollRef.current;
    if (!scrollArea) return;
    scrollArea.scrollTop = initialScroll === 'bottom' ? scrollArea.scrollHeight : 0;
  }, [initialScroll]);

  const resizeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 96)}px`;
    setDraft(textarea.value);
  };

  const sendMessage = () => {
    const message = draft.trim();
    if (!message) return;

    const nextId = Date.now();
    setMessages((current) => [
      ...current,
      { id: nextId, role: 'user', text: message },
      {
        id: nextId + 1,
        role: 'assistant',
        text: "That's a strong direction. I'll break it into clear design and build steps so you can create it with confidence.",
      },
    ]);
    setDraft('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    requestAnimationFrame(() => {
      const scrollArea = scrollRef.current;
      if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10"
      style={{ background: 'rgba(8,8,10,0.6)', backdropFilter: 'blur(24px)' }}
    >
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3">
        <div className="grid size-7 place-items-center rounded-full bg-white/5 text-white/70">
          <MIcon name="auto_awesome" size={14} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">Vibe Design course</p>
          <p className="truncate text-[11px] text-white/40">Learn how to build website with AI</p>
        </div>
      </div>

      <div ref={scrollRef} className="scrollbar-hide min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {messages.map((message, index) => {
          const bubble = (
            <div
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                message.role === 'user'
                  ? 'ml-auto bg-white/15 text-white/90'
                  : 'mr-auto border border-white/5 bg-white/5 text-white/70',
              )}
            >
              {message.text}
            </div>
          );

          return animateMessagesIn ? (
            <FadeUp key={message.id} delay={index * 0.12} y={16}>
              {bubble}
            </FadeUp>
          ) : (
            <div key={message.id}>{bubble}</div>
          );
        })}
      </div>

      <div className="liquid-glass m-3 flex items-end gap-2 rounded-2xl p-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={draft}
          onChange={resizeTextarea}
          onKeyDown={handleKeyDown}
          placeholder="Ask about the course..."
          className="min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/35"
        />
        <button
          type="button"
          aria-label="Send message"
          onClick={sendMessage}
          className="grid shrink-0 place-items-center rounded-xl bg-white p-2 text-black transition-transform hover:-translate-y-0.5"
        >
          <MIcon name="arrow_upward" size={16} />
        </button>
      </div>
    </div>
  );
}

export function VelorahHeroPreview() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      style={{ backgroundColor: 'hsl(201 100% 13%)' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-black/20" />

      <nav className="relative z-10 flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
        <span
          className="text-sm tracking-tight text-white sm:text-base md:text-lg"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-[0.5em]">®</sup>
        </span>
        <div className="hidden items-center gap-3 text-[9px] text-white/60 md:flex lg:gap-4 lg:text-[10px]">
          <a href="#cta" className="text-white">Home</a>
          {['Studio', 'About', 'Journal', 'Reach Us'].map((item) => (
            <a key={item} href="#cta" className="transition-colors hover:text-white">{item}</a>
          ))}
        </div>
        <a href="#cta" className="liquid-glass rounded-full px-2.5 py-1 text-[9px] text-white sm:px-3 sm:text-[10px]">
          Begin Journey
        </a>
      </nav>

      <div className="relative z-10 flex flex-col items-center px-3 pb-6 pt-3 text-center sm:px-4 sm:pt-5 md:pt-7">
        <h3
          className="animate-fade-rise max-w-[90%] text-lg font-normal leading-[0.95] tracking-[-0.03em] text-white sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-white/55">dreams</em> rise{' '}
          <em className="not-italic text-white/55">through the silence.</em>
        </h3>
        <p className="animate-fade-rise-delay mt-2 max-w-[80%] text-[9px] leading-relaxed text-white/60 sm:mt-3 sm:max-w-sm sm:text-[11px] md:mt-4 md:max-w-md md:text-xs">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <a href="#cta" className="animate-fade-rise-delay-2 liquid-glass mt-3 rounded-full px-4 py-1.5 text-[9px] text-white sm:mt-4 sm:px-5 sm:py-2 sm:text-[10px] md:mt-5 md:px-6 md:py-2.5">
          Begin Journey
        </a>
      </div>
    </div>
  );
}

export function CtaDashboardMock() {
  return (
    <div className="liquid-glass mx-auto aspect-[3/4] w-full max-w-[1100px] overflow-hidden rounded-2xl p-2 sm:aspect-[16/10] sm:p-3 lg:aspect-[16/9]">
      <div className="grid h-full grid-cols-1 gap-2 sm:grid-cols-[minmax(220px,320px)_1fr] sm:gap-3">
        <div className="hidden min-h-0 sm:block">
          <ChatPanel initialScroll="top" animateMessagesIn />
        </div>
        <div className="min-h-0">
          <VelorahHeroPreview />
        </div>
      </div>
    </div>
  );
}

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const dashboardY = useTransform(scrollYProgress, [0, 1], ['120px', '-120px']);
  const grassY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['80px', '-40px'] : ['200px', '-200px'],
  );

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="cta-section relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, #14191E 100%)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative mx-auto max-w-[1080px] px-4 pb-[440px] pt-24 sm:px-6 sm:pb-[520px] sm:pt-32 md:pb-[440px] md:pt-40">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="relative z-20 max-w-[400px]">
            <FadeUp delay={1}>
              <h2 className="text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl">
                Learn how can one go from 0 to $11.5k with AI in 60 days.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-[380px] text-base leading-[1.5] text-landing-text sm:text-lg">
                Learn to turn your ideas into stunning websites with AI — the same skills agencies charge $5,000 for. Join the UI Rocket training and start building like a pro today.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <PrimaryButton as="button">Start for free</PrimaryButton>
            </FadeUp>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: dashboardY }}
        className="absolute left-4 right-4 top-[440px] z-10 sm:left-auto sm:-right-[8%] sm:top-[460px] sm:w-[85%] md:-right-[10%] md:top-[500px] md:w-[80%] lg:-right-[12%] lg:top-20 lg:w-[68%]"
      >
        <CtaDashboardMock />
      </motion.div>

      <motion.img
        src={GRASS_SRC}
        alt=""
        aria-hidden="true"
        style={{ y: grassY }}
        className="pointer-events-none absolute bottom-[-40px] left-0 right-0 z-30 w-full select-none object-cover sm:bottom-[-80px] lg:bottom-[-140px]"
      />
    </section>
  );
}
