import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const PORTRAIT_URL =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74dd7488808720190e073b.png';

const COMMUNITY_URL = 'https://uuweua6rp4gx1nei2kim.app.clientclub.net/';

export default function PricingSection() {
  return (
    <section
      id="connect"
      aria-labelledby="seer-biography-title"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-black text-white"
    >
      <img
        src={PORTRAIT_URL}
        alt="Uebert Angel Jr teaching"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[61%_center] opacity-65 sm:opacity-80 md:object-center md:opacity-100"
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.72)_58%,rgba(0,0,0,0.38)_100%)] md:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.97)_26%,rgba(0,0,0,0.78)_52%,rgba(0,0,0,0.08)_78%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto flex w-full max-w-[1500px] px-6 py-28 sm:px-8 sm:py-32 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[680px]">
          <motion.h2
            id="seer-biography-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[640px] text-[clamp(2.8rem,6.6vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.045em] text-white"
          >
            More Than a Teacher
            <span className="mt-2 block text-white/76">A Guide Into Deeper Sight</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-9 space-y-5 text-[clamp(1rem,1.35vw,1.2rem)] font-light leading-[1.65] text-white/68 sm:mt-11"
          >
            <p>
              From his earliest days, destiny was not improvised but cultivated. Under the prophetic leadership of Prophet Angel, the life of The Seer was deliberately formed through discipline, revelation, and the quiet burden of legacy, refined for divine purpose rather than public applause.
            </p>

            <p>
              It is often said that fathers are feathers, and those who know how to fasten themselves to true spiritual pillars learn how to rise beyond limitation. Uebert Angel Jr is a living testimony of that principle.
            </p>

            <p>
              At just 22, he has carried the Gospel of Jesus Christ across more than 50 nations, strengthening believers and imprinting gatherings of over 100,000 souls. The Seer stands as enduring proof that divine purpose is not restrained by age, only awakened by obedience.
            </p>
          </motion.div>

          <motion.a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 sm:mt-11"
          >
            Register Now!
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
