import { useEffect, useRef, useState } from 'react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';
import { useInView } from 'motion/react';
import FadeIn from './FadeIn';

const purposes = [
  {
    title: 'Awaken Spiritual Clarity',
    description:
      'The Realm of Seers is a Kingdom Driven platform designed to communicate the life of Christ and the reality of the supernatural through inspired, sound teaching. Powered by The GoodNewsWorld, it exists to centre Christ, preserve truth, and reflect the active power of God with spiritual responsibility.',
    lottieLabel: 'Idea illuminating spiritual clarity',
    lottieSrc: '/idea-emoji.lottie',
  },
  {
    title: 'Sharpen Spiritual Discernment',
    description:
      'The Realm grants access to teachings from The Seer: sermons never released from Spirit Embassy London, global ministry journeys and conferences across cities such as New York and Toronto, behind-the-scenes insight through the Behind the Pulpit series, and new content from the recent conference in Sri Lanka.',
    lottieLabel: 'Blinking eye representing spiritual discernment',
    lottieSrc: '/blinking-eye.lottie',
  },
  {
    title: 'Grow in Spiritual Maturity',
    description:
      'There is no measure of “enough” when it comes to the Word. The Bereans searched the Scriptures daily with readiness of heart. The Realm of Seers does not replace Sunday service, but serves as a complementary space for continued growth, guidance, and spiritual maturity.',
    lottieLabel: 'Growing tree representing spiritual maturity',
    lottieSrc: '/tree-growth.lottie',
  },
];

function EntryLottie({ label, src }: { label: string; src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<DotLottie | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.35 });

  useEffect(() => {
    if (!isInView || !player) return;

    const playFromStart = () => {
      player.stop();
      player.play();
    };

    if (player.isLoaded) {
      playFromStart();
      return;
    }

    player.addEventListener('load', playFromStart);
    return () => player.removeEventListener('load', playFromStart);
  }, [isInView, player]);

  return (
    <div ref={containerRef} className="h-[72px] w-[72px] shrink-0 sm:h-28 sm:w-28 md:h-36 md:w-36">
      <DotLottieReact
        aria-label={label}
        autoplay={false}
        backgroundColor="#00000000"
        className="h-full w-full bg-transparent"
        dotLottieRefCallback={setPlayer}
        loop={false}
        src={src}
      />
    </div>
  );
}

export default function PurposeSection() {
  return (
    <section
      id="purpose"
      className="relative z-10 flex scroll-mt-24 flex-col border-t border-white/10 px-5 py-20 text-white sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn as="header" className="mb-16 w-full text-center sm:mb-20 md:mb-28" delay={0} y={40}>
        <h2 className="w-full text-[clamp(3rem,9vw,6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
          The Purpose of the Realm
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed text-white/60 sm:mt-8">
          Creating space for depth, discernment, and focused spiritual growth.
        </p>
      </FadeIn>

      <div className="mx-auto w-full max-w-5xl">
        {purposes.map((purpose, index) => (
          <FadeIn
            className={index === 0 ? 'w-full' : 'w-full border-t border-white/15'}
            delay={index * 0.1}
            key={purpose.title}
            y={30}
          >
            <article className="flex w-full items-start gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12">
              <EntryLottie label={purpose.lottieLabel} src={purpose.lottieSrc} />

              <div className="min-w-0 flex-1 pt-1">
                <h3 className="pt-1 text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight text-white">
                  {purpose.title}
                </h3>

                <p className="mt-2 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-white/60 sm:mt-4 md:mt-5">
                  {purpose.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
