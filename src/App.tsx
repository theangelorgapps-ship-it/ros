/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollImageMarquee from './components/ScrollImageMarquee';
import PurposeSection from './components/PurposeSection';
import CtaSection from './components/CtaSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackToTopButton from './components/BackToTopButton';

const partnerTrailImages = [
  'https://i.ytimg.com/vi/OEkxiY5zte0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/nbpIBdkXsoE/maxresdefault.jpg',
  'https://i.ytimg.com/vi/pdPtueSL6H0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/7PqC9omdpws/maxresdefault.jpg',
  'https://i.ytimg.com/vi/ADfECgH5su8/maxresdefault.jpg',
  'https://i.ytimg.com/vi/Rp9oB7U4V3U/maxresdefault.jpg',
  'https://i.ytimg.com/vi/T4TZi7PUeoY/maxresdefault.jpg',
  'https://i.ytimg.com/vi/X0wbz_XkN1o/maxresdefault.jpg',
  'https://i.ytimg.com/vi/N1qwkw473D0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/EUptZfzrTBU/maxresdefault.jpg',
];

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        className="realm-page relative min-h-screen font-sans text-white"
        style={{
          opacity: loading ? 0 : 1,
          transition: loading ? 'opacity 0.5s ease-out' : 'opacity 0.5s ease-out 0.6s',
        }}
      >
        <div aria-hidden="true" className="realm-aurora-field" />
        <div className="realm-page-content">
          <Header />
          <HeroSection />
          <ScrollImageMarquee />
          <PurposeSection />
          <CtaSection />
          <StatsSection />
          <PricingSection />
          <PartnerSection images={partnerTrailImages} />
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}
