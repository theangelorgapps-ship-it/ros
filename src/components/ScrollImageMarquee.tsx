import { useEffect, useRef } from 'react';

const ROW_ONE_VIDEO_IDS = [
  'xdZV8oLmpLo',
  'SmRbwBeFAMw',
  'bqYzyt3E2UE',
  'gCApP88HaVM',
  '1SRsdDk-aSw',
  '-TqQFaAvD94',
  '0eNz-FVj6XY',
  'mfl9gdElOWc',
  'KHouXX5x9Xc',
  '3FQYG2ErFMQ',
  'm2qN2DgpZK0',
];

const ROW_TWO_VIDEO_IDS = [
  'uPoNRhhkX_I',
  'EnjuWflAbx8',
  'nSOkLKKu53g',
  'MgJrgh_WcoU',
  'buNjfftLYfY',
  'umnjdOIeynk',
  't4uhZfSTqzM',
  'O7uPWulb_VI',
  'F_oUBr1iKx8',
  'sUbUt_A8ZUY',
];

const triple = (items: string[]) => [...items, ...items, ...items];

function ThumbnailRow({ videoIds }: { videoIds: string[] }) {
  return (
    <div className="flex gap-3">
      {triple(videoIds).map((videoId, index) => (
        <div
          aria-hidden="true"
          className="h-[270px] w-[420px] flex-shrink-0 overflow-hidden rounded-2xl bg-[#16161a]"
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
      className="w-full overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
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
