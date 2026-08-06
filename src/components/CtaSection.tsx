import { useEffect, useRef, useState } from 'react';
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
      className="group grid grid-cols-[80px_minmax(0,1fr)] items-center gap-3 rounded-xl transition-colors hover:bg-white/[0.045] xl:grid-cols-[112px_minmax(0,1fr)] xl:gap-4"
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
        href={JOIN_URL}
        target="_blank"
        rel="noreferrer"
        className="group mt-3 inline-flex h-[43px] min-w-[122px] items-center justify-center gap-2 rounded-[10px] bg-white px-5 text-[16px] font-medium text-black transition-transform duration-300 hover:-translate-y-1 xl:mt-7 xl:h-16 xl:min-w-[195px] xl:rounded-2xl xl:px-8 xl:text-2xl"
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
      className="rounded-[12px] bg-[#1d1b1b] px-[30px] py-[30px] md:px-5 xl:rounded-[22px] xl:px-8 xl:py-10"
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
  const sectionRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const [showCompactHeader, setShowCompactHeader] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const section = sectionRef.current;
      const feature = featureRef.current;
      if (!section || !feature) return;

      const sectionRect = section.getBoundingClientRect();
      const featureRect = feature.getBoundingClientRect();
      const sectionIsActive = sectionRect.top <= 1 && sectionRect.bottom > 1;

      document.body.classList.toggle('realm-section-active', sectionIsActive);
      setShowCompactHeader(
        sectionIsActive && window.innerWidth < 768 && featureRect.bottom <= 72,
      );
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
      document.body.classList.remove('realm-section-active');
    };
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden bg-black text-white">
      <motion.div
        initial={false}
        animate={{ opacity: showCompactHeader ? 1 : 0, y: showCompactHeader ? 0 : -16 }}
        transition={{ duration: 0.25 }}
        aria-hidden={!showCompactHeader}
        className={`fixed inset-x-0 top-0 z-[60] flex h-16 items-center justify-between bg-black/75 px-9 text-white backdrop-blur-xl md:hidden ${showCompactHeader ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <span className="text-[23px] font-normal leading-[0.95] tracking-[-0.03em]">
          The Realm
          <br />
          Of Seers
        </span>
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="h-px w-full bg-white" />
          <span className="h-px w-full bg-white" />
          <span className="h-px w-full bg-white" />
        </span>
      </motion.div>

      <div className="mx-auto grid w-full max-w-[2048px] grid-cols-1 gap-[52px] px-5 pb-14 pt-[27px] md:grid-cols-[minmax(0,1fr)_300px] md:gap-6 md:px-6 md:pb-0 md:pt-[27px] xl:grid-cols-[minmax(0,1fr)_430px] xl:gap-8 xl:px-12">
        <div className="min-w-0">
          <motion.figure ref={featureRef} {...reveal} className="overflow-hidden rounded-[16px] bg-[#111] md:rounded-t-none xl:rounded-[22px] xl:rounded-t-none">
            <img
              src={FEATURE_IMAGE}
              alt="The Seer in conversation overlooking the city"
              className="aspect-[1.268/1] w-full object-cover object-center sm:aspect-[1.6/1] md:aspect-[2/1] xl:aspect-[2.58/1]"
            />
          </motion.figure>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="pt-[30px] sm:pt-8 xl:pt-14">
            <h2 className="text-[28px] font-normal leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl xl:text-[3.55rem] xl:leading-[1.04]">
              Ep.1 - Why? (The Seer Podcast)
            </h2>
            <p className="mt-5 max-w-[1480px] text-[20px] font-light leading-[1.28] text-white/70 md:text-lg xl:mt-7 xl:text-[2rem] xl:leading-[1.3]">
              Enter a curated world of revelation, depth, and spiritual mastery. Explore powerful message topics ranging from mastery over prayer and GodKind faith to platform exclusive episodes from the new Seer Podcast.
            </p>

            <div aria-hidden="true" className="relative mt-6 h-[204px] overflow-hidden md:h-32 xl:mt-8 xl:h-40">
              <p className="text-[18px] font-light leading-[1.45] text-white/55 blur-[5px] md:text-base xl:text-[1.75rem]">
                Journey deeper into the Word with teaching created to strengthen your faith, renew your mind, and sharpen your understanding of the supernatural life in Christ. Every message is selected to create room for reflection, revelation, and lasting transformation.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
            </div>

            <a
              href={JOIN_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-[54px] w-[225px] items-center justify-center rounded-[10px] bg-white text-[16px] font-medium text-black transition-transform duration-300 hover:-translate-y-1 xl:mt-8"
            >
              Join new community
            </a>
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
