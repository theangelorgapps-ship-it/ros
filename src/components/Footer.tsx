import { Facebook, Instagram, Music2, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants/links';

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
};

const socials = [
  { label: 'X', href: SOCIAL_LINKS.x, Icon: Twitter },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: Instagram },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: Music2 },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, Icon: Youtube },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: Facebook },
] as const;

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-white/10 px-5 py-12 md:px-12 md:py-16 lg:px-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 text-center md:grid-cols-[0.9fr_1.2fr_0.9fr] md:gap-12 md:text-left"
      >
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('home');
            }}
            className="text-[28px] font-semibold leading-[0.92] tracking-[-0.035em] text-white transition-opacity hover:opacity-75"
          >
            The Realm
            <br />
            Of Seers
          </a>
          <p className="max-w-[280px] text-sm leading-relaxed text-white/65">
            The official private community of Uebert Angel Jr — The Seer.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="font-medium text-white">Navigation</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.target);
                }}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="font-medium text-white">Follow Uebert Angel Jr</h2>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow Uebert Angel Jr on ${label}`}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/8 text-white/72 transition-colors hover:bg-[#cf1c1c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-12 flex max-w-[1440px] flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-center text-xs text-white/60 md:mt-16 md:flex-row md:text-left"
      >
        <p>© 2026 The Realm Of Seers. All rights reserved.</p>
        <p>Uebert Angel Jr · The Seer</p>
      </motion.div>
    </footer>
  );
}
