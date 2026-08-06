import { useEffect, useRef } from 'react';

const ROW_ONE_VIDEO_IDS = [
  'OEkxiY5zte0',
  'nbpIBdkXsoE',
  'pdPtueSL6H0',
  '7PqC9omdpws',
  'ADfECgH5su8',
  'Rp9oB7U4V3U',
  'T4TZi7PUeoY',
  'X0wbz_XkN1o',
  'N1qwkw473D0',
  'EUptZfzrTBU',
  '1SRsdDk-aSw',
];

const ROW_TWO_VIDEO_IDS = [
  'jY43_X14M6Q',
  '-TqQFaAvD94',
  '1KlDSvgHu3c',
  'mfl9gdElOWc',
  'KHouXX5x9Xc',
  'm2qN2DgpZK0',
  'uPoNRhhkX_I',
  'TLybNUkB7ZA',
  'EnjuWflAbx8',
  'z-i4yKSO-mQ',
];

const triple = (items: string[]) => [...items, ...items, ...items];

function ThumbnailRow({ videoIds }: { videoIds: string[] }) {
  return (
    <div className="flex gap-3">
      {triple(videoIds).map((videoId, index) => (
        <div
          aria-hidden="true"
          className="aspect-[14/9] w-[82vw] max-w-[420px] flex-shrink-0 overflow-hidden rounded-xl bg-[#16161a] sm:h-[270px] sm:w-[420px] sm:rounded-2xl"
          key={`${videoId}-${index}`}
        >
          <img
            alt=""
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          />
        </div>
      ))}
    </div>
  );
}

export default function ScrollImageMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMarquee = () => {
      const section = sectionRef.current;
      const rowOne = rowOneRef.current;
      const rowTwo = rowTwoRef.current;
      if (!section || !rowOne || !rowTwo) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop + window.innerHeight;
      const offset = scrolled * 0.3;

      rowOne.style.transform = `translateX(${offset - 200}px)`;
      rowTwo.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    updateMarquee();
    window.addEventListener('scroll', updateMarquee, { passive: true });

    return () => window.removeEventListener('scroll', updateMarquee);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Featured Uebert Angel Jr teachings"
      className="w-full overflow-hidden bg-[#0C0C0C] pb-8 pt-16 sm:pb-10 sm:pt-24 md:pt-32 lg:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div className="w-full overflow-hidden">
          <div
            ref={rowOneRef}
            style={{ transform: 'translateX(-200px)', willChange: 'transform' }}
          >
            <ThumbnailRow videoIds={ROW_ONE_VIDEO_IDS} />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={rowTwoRef}
            style={{ transform: 'translateX(200px)', willChange: 'transform' }}
          >
            <ThumbnailRow videoIds={ROW_TWO_VIDEO_IDS} />
          </div>
        </div>
      </div>
    </section>
  );
}
