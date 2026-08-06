import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { SKOOL_URL } from '../constants/links';

type TrailImage = {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  src: string;
  rotation: number;
};

type PartnerSectionProps = {
  images: string[];
};

export default function PartnerSection({ images }: PartnerSectionProps) {
  const [trailImages, setTrailImages] = useState<TrailImage[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef(0);
  const imageIdCounter = useRef(0);
  const { ref: animationRef, isInView } = useInViewAnimation();

  useEffect(() => {
    const cleanupInterval = window.setInterval(() => {
      const now = Date.now();

      setTrailImages((currentImages) =>
        currentImages.filter((image) => now - image.timestamp <= 1000),
      );
    }, 50);

    return () => window.clearInterval(cleanupInterval);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isHovered || !sectionRef.current || images.length === 0) return;

    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const src = images[Math.floor(Math.random() * images.length)];
    const rotation = (Math.random() - 0.5) * 20;

    lastSpawnTime.current = now;
    imageIdCounter.current += 1;

    setTrailImages((currentImages) => [
      ...currentImages,
      {
        id: imageIdCounter.current,
        x,
        y,
        timestamp: now,
        src,
        rotation,
      },
    ]);
  };

  return (
    <section
      id="services"
      ref={animationRef}
      aria-labelledby="partner-heading"
      className="w-full scroll-mt-20 px-4 py-20 sm:px-6 md:scroll-mt-24 md:py-28 lg:px-8"
    >
      <div
        ref={sectionRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative mx-auto flex min-h-[480px] w-full max-w-7xl items-center justify-center overflow-hidden py-24 md:min-h-[560px] md:py-36"
      >
        <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2
            id="partner-heading"
            className={`mb-8 max-w-4xl text-[clamp(2.35rem,6.8vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:mb-10 ${
              isInView ? 'animate-fade-in-up' : ''
            }`}
            style={{
              fontFamily: "'Geist', sans-serif",
              animationDelay: isInView ? '0.1s' : '0s',
            }}
          >
            Enter The Realm Now!
          </h2>

          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noreferrer"
            className={`mx-auto inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-medium text-black transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#cf1c1c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 ${
              isInView ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: isInView ? '0.2s' : '0s' }}
          >
            <span>Enter Now!</span>
          </a>
        </div>

        {trailImages.map((image) => {
          const age = Date.now() - image.timestamp;
          const progress = Math.min(age / 1000, 1);
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.15;

          return (
            <div
              key={image.id}
              aria-hidden="true"
              className="pointer-events-none absolute z-20"
              style={{
                left: image.x - 50,
                top: image.y - 50,
                opacity,
                transform: `scale(${scale}) rotate(${image.rotation}deg)`,
              }}
            >
              <img
                src={image.src}
                alt=""
                className="w-24 rounded-xl object-cover shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
