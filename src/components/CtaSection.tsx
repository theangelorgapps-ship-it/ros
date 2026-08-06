import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { SKOOL_URL } from '../constants/links';

const FEATURE_IMAGE =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74ce5c6da442d0adbd3f7c.jpg';

const sermons = [
  {
    title: 'Heaven’s Blueprint for Prosperity',
    duration: '1:22:01',
    videoId: 'OEkxiY5zte0',
  },
  {
    title: 'Tetelestai',
    duration: '1:19:41',
    videoId: 'KHouXX5x9Xc',
  },
  {
    title: 'The Horn of Oil',
    duration: '1:06:49',
    videoId: 'nbpIBdkXsoE',
  },
  {
    title: 'The King Has One More Move',
    duration: '1:42:43',
    videoId: 'pdPtueSL6H0',
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SermonItem({
  title,
  duration,
  videoId,
  index,
}: (typeof sermons)[number] & { index: number }) {
  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group grid grid-cols-[20px_72px_minmax(0,1fr)] items-center gap-3 rounded-xl transition-colors hover:bg-white/[0.045] xl:grid-cols-[24px_104px_minmax(0,1fr)] xl:gap-4"
    >
      <span className="self-start pt-1 text-sm font-medium tabular-nums text-white/55 xl:text-base">
        {index + 1}.
      </span>
      <div className="aspect-square overflow-hidden rounded-lg bg-[#262424]">
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="min-w-0">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-md border border-white/15 px-1.5 py-0.5 text-sm text-white/75">
          <Video aria-hidden="true" className="size-4 fill-white text-white" strokeWidth={0} />
          <span>{duration}</span>
        </div>
        <h4 className="text-[18px] font-normal leading-[1.15] text-white xl:text-[1.55rem]">
          {title}
        </h4>
      </div>
    </motion.a>
  );
}

function CommunityCard() {
  return (
    <motion.aside
      {...reveal}
      className="flex min-h-[178px] flex-col items-center justify-center rounded-[12px] bg-[#1d1b1b] px-5 py-7 text-center md:min-h-[260px] md:rounded-t-none xl:min-h-[320px] xl:px-7 xl:py-10"
    >
      <h3 className="text-[28px] font-medium leading-tight tracking-[-0.04em] text-white xl:text-[2.5rem]">
        The Realm Of Seers
      </h3>
      <p className="mt-3 max-w-[310px] text-[16px] font-light leading-[1.2] text-white/90 xl:mt-5 xl:text-[1.75rem]">
        Join the community for
        <br />
        exclusive content
      </p>
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-3 inline-flex h-[43px] min-w-[122px] items-center justify-center gap-2 rounded-[10px] bg-white px-5 text-[16px] font-medium text-black transition-transform duration-300 hover:-translate-y-1 xl:mt-7 xl:h-16 xl:min-w-[195px] xl:rounded-2xl xl:px-8 xl:text-2xl"
      >
        Join now
      </a>
    </motion.aside>
  );
}

function SermonsCard() {
  return (
    <motion.aside
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.08 }}
      className="rounded-[12px] bg-[#1d1b1b] px-[30px] py-[30px] md:px-5 xl:rounded-2xl xl:px-8 xl:py-10"
    >
      <h3 className="mb-7 text-[20px] font-normal tracking-[-0.02em] text-white xl:mb-8 xl:text-[2rem]">
        Top 10 New Sermons
      </h3>
      <div className="space-y-4 xl:space-y-3">
        {sermons.map((sermon, index) => (
          <SermonItem key={sermon.title} {...sermon} index={index} />
        ))}
      </div>
    </motion.aside>
  );
}

export default function CtaSection() {
  return (
    <section id="featured" className="relative scroll-mt-28 overflow-hidden text-white md:scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[2048px] grid-cols-1 gap-[52px] px-5 pb-14 pt-[27px] md:grid-cols-[minmax(0,1fr)_300px] md:gap-6 md:px-6 md:pb-0 md:pt-[27px] xl:grid-cols-[minmax(0,1fr)_430px] xl:gap-8 xl:px-12">
        <div className="min-w-0">
          <motion.figure {...reveal} className="overflow-hidden rounded-2xl bg-[#111] md:rounded-t-none xl:rounded-2xl xl:rounded-t-none">
            <img
              src={FEATURE_IMAGE}
              alt="The Seer in conversation overlooking the city"
              className="aspect-[1.268/1] w-full object-cover object-center sm:aspect-[1.6/1] md:aspect-[2/1] xl:aspect-[2.58/1]"
            />
          </motion.figure>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="pt-[30px] sm:pt-8 xl:pt-14">
            <h2 className="text-[clamp(1.65rem,4.5vw,3.1rem)] font-normal leading-[1.12] tracking-[-0.03em] text-white">
              Ep.1 - Why? (The Seer Podcast)
            </h2>
            <p className="mt-4 max-w-[72ch] text-base font-light leading-[1.55] text-white/72 sm:text-[17px] md:text-lg xl:mt-6 xl:text-[1.35rem] xl:leading-[1.5]">
              Enter a curated world of revelation, depth, and spiritual mastery. Explore powerful message topics ranging from mastery over prayer and GodKind faith to platform exclusive episodes from the new Seer Podcast.
            </p>

            <div className="relative mt-6 h-[204px] overflow-hidden rounded-xl bg-black/35 md:h-36 xl:mt-8 xl:h-44">
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden px-1 pt-1">
              <p className="text-base font-light leading-[1.5] text-white/55 blur-[5px] md:text-[17px] xl:text-xl">
                Journey deeper into the Word with teaching created to strengthen your faith, renew your mind, and sharpen your understanding of the supernatural life in Christ. Every message is selected to create room for reflection, revelation, and lasting transformation.
              </p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/35 to-black" />
              </div>
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 left-5 z-10 inline-flex h-[54px] w-[225px] items-center justify-center rounded-[10px] bg-white text-[16px] font-medium text-black shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-[#cf1c1c] hover:text-white"
              >
                Enter the Realm
              </a>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 md:space-y-6 md:pb-0 xl:space-y-8">
          <CommunityCard />
          <SermonsCard />
        </div>
      </div>
    </section>
  );
}
