import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SKOOL_URL } from '../constants/links';
import { SEER_PORTRAIT_URL } from '../constants/media';

export default function PricingSection() {
  return (
    <section
      id="about"
      aria-labelledby="seer-biography-title"
      className="relative flex min-h-screen w-full scroll-mt-20 items-center overflow-hidden text-white md:scroll-mt-24"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-8 sm:py-28 md:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.82fr)] lg:gap-16 lg:px-16 lg:py-32 xl:gap-24 xl:px-20">
        <motion.h2
          id="seer-biography-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[720px] text-[clamp(2.2rem,4.6vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white lg:col-start-1 lg:row-start-1 lg:self-end"
        >
          More Than a Teacher
          <span className="mt-2 block text-white/76">A Guide Into Deeper Sight</span>
        </motion.h2>

        <figure className="portrait-aurora relative aspect-[3/2] w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-[4/5] lg:max-h-[760px] lg:justify-self-end">
          <img
            src={SEER_PORTRAIT_URL}
            alt="Uebert Angel Jr teaching"
            loading="lazy"
            className="portrait-aurora__image absolute inset-0 h-full w-full object-cover object-center lg:object-[64%_center]"
          />
          <div aria-hidden="true" className="portrait-aurora__wash absolute inset-0" />
        </figure>

        <div className="w-full max-w-[700px] lg:col-start-1 lg:row-start-2 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[680px] space-y-5 text-[clamp(1rem,1.25vw,1.18rem)] font-light leading-[1.65] text-white/68"
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
            href={SKOOL_URL}
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
