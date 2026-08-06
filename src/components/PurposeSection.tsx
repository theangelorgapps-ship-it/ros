import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import FadeIn from './FadeIn';

const purposes = [
  {
    number: '01',
    title: 'Awaken Spiritual Clarity',
    description:
      'The Realm of Seers is a Kingdom Driven platform designed to communicate the life of Christ and the reality of the supernatural through inspired, sound teaching. Powered by The GoodNewsWorld, it exists to centre Christ, preserve truth, and reflect the active power of God with spiritual responsibility.',
    hasLottie: true,
  },
  {
    number: '02',
    title: 'Sharpen Spiritual Discernment',
    description:
      'The Realm grants access to teachings from The Seer: sermons never released from Spirit Embassy London, global ministry journeys and conferences across cities such as New York and Toronto, behind-the-scenes insight through the Behind the Pulpit series, and new content from the recent conference in Sri Lanka.',
  },
  {
    number: '03',
    title: 'Grow in Spiritual Maturity',
    description:
      'There is no measure of “enough” when it comes to the Word. The Bereans searched the Scriptures daily with readiness of heart. The Realm of Seers does not replace Sunday service, but serves as a complementary space for continued growth, guidance, and spiritual maturity.',
  },
];

export default function PurposeSection() {
  return (
    <section
      id="purpose"
      className="relative z-10 flex flex-col rounded-t-[40px] border-t border-white/10 bg-[#0C0C0C] px-5 py-20 text-white sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="header" className="mb-16 w-full text-center sm:mb-20 md:mb-28" delay={0} y={40}>
        <h2 className="w-full text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-white">
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
            key={purpose.number}
            y={30}
          >
            <article className="flex w-full items-start gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12">
              <span
                aria-hidden="true"
                className="shrink-0 text-[clamp(3rem,10vw,140px)] font-black uppercase leading-none text-white"
              >
                {purpose.number}
              </span>

              <div className="min-w-0 flex-1 pt-1">
                <div className="flex items-start justify-between gap-3 sm:gap-5">
                  <h3 className="pt-1 text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight text-white">
                    {purpose.title}
                  </h3>

                  {purpose.hasLottie && (
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1 sm:h-24 sm:w-24 md:h-32 md:w-32">
                      <DotLottieReact
                        aria-label="Animated idea symbol"
                        autoplay
                        className="h-full w-full"
                        loop
                        src="/idea-emoji.lottie"
                      />
                    </div>
                  )}
                </div>

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
