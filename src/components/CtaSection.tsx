import { motion } from 'framer-motion';
import { ArrowUpRight, Video } from 'lucide-react';

const FEATURE_IMAGE =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74ce5c6da442d0adbd3f7c.jpg';

const JOIN_URL = 'https://uuweua6rp4gx1nei2kim.app.clientclub.net/';

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
      className="group grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-xl p-1.5 transition-colors hover:bg-white/[0.045] sm:grid-cols-[104px_minmax(0,1fr)] lg:grid-cols-[112px_minmax(0,1fr)]"
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-[#262424]">
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="min-w-0">
        <div className="mb-2 inline-flex items-center gap-2 rounded-lg border border-white/15 px-2 py-1 text-xs text-white/70 sm:text-sm">
          <Video aria-hidden="true" className="size-4 fill-white text-white" strokeWidth={0} />
          <span>{duration}</span>
        </div>
        <h4 className="text-base font-normal leading-[1.12] text-white sm:text-lg lg:text-[1.55rem]">
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
      className="flex min-h-[275px] flex-col items-center justify-center rounded-[22px] bg-[#1d1b1b] px-7 py-10 text-center lg:min-h-[320px] lg:rounded-t-none"
    >
      <h3 className="text-[clamp(1.8rem,2.2vw,2.5rem)] font-medium leading-tight tracking-[-0.04em] text-white">
        The Realm Of Seers
      </h3>
      <p className="mt-5 max-w-[290px] text-[clamp(1.15rem,1.45vw,1.75rem)] font-light leading-[1.15] text-white/90">
        Join the community for
        <br />
        exclusive content
      </p>
      <a
        href={JOIN_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-7 inline-flex min-h-16 min-w-[195px] items-center justify-center gap-2 rounded-2xl bg-white px-8 text-xl font-medium text-black transition-transform duration-300 hover:-translate-y-1 sm:text-2xl"
      >
        Join now
        <ArrowUpRight className="size-5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      </a>
    </motion.aside>
  );
}

function SermonsCard() {
  return (
    <motion.aside
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.08 }}
      className="rounded-[22px] bg-[#1d1b1b] px-5 py-8 sm:px-8 sm:py-10"
    >
      <h3 className="mb-8 text-2xl font-normal tracking-[-0.02em] text-white sm:text-3xl lg:text-[2rem]">
        Top 10 New Sermons
      </h3>
      <div className="space-y-3">
        {sermons.map((sermon, index) => (
          <SermonItem key={sermon.title} {...sermon} index={index} />
        ))}
      </div>
    </motion.aside>
  );
}

export default function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto grid w-full max-w-[2048px] grid-cols-1 gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-12 lg:py-0">
        <div className="min-w-0">
          <motion.figure {...reveal} className="overflow-hidden rounded-[22px] bg-[#111] lg:rounded-t-none">
            <img
              src={FEATURE_IMAGE}
              alt="The Seer in conversation overlooking the city"
              className="aspect-[16/10] w-full object-cover object-center sm:aspect-[2/1] lg:aspect-[2.58/1]"
            />
          </motion.figure>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="pt-10 sm:pt-12 lg:pt-14">
            <h2 className="text-[clamp(2.6rem,4vw,3.55rem)] font-normal leading-[1.04] tracking-[-0.04em] text-white">
              Ep.1 - Why? (The Seer Podcast)
            </h2>
            <p className="mt-7 max-w-[1480px] text-[clamp(1.15rem,1.7vw,2rem)] font-light leading-[1.3] text-white/70">
              Enter a curated world of revelation, depth, and spiritual mastery. Explore powerful message topics ranging from mastery over prayer and GodKind faith to platform exclusive episodes from the new Seer Podcast.
            </p>

            <div aria-hidden="true" className="relative mt-8 h-32 overflow-hidden sm:h-40">
              <p className="text-[clamp(1rem,1.45vw,1.75rem)] font-light leading-[1.45] text-white/55 blur-[5px]">
                Journey deeper into the Word with teaching created to strengthen your faith, renew your mind, and sharpen your understanding of the supernatural life in Christ. Every message is selected to create room for reflection, revelation, and lasting transformation.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-8 pb-16 sm:pb-20 lg:pb-0">
          <CommunityCard />
          <SermonsCard />
        </div>
      </div>
    </section>
  );
}
