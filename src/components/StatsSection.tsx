import { useState } from 'react';
import './StatsSection.css';

type CommunityTab = 'community' | 'live';

const COMMUNITY_IMAGE =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74d5b9888087201900d178.jpg';
const LIVE_EPISODES_IMAGE =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74d825f4dee0f60fa0d4e8.jpeg';

const content: Record<CommunityTab, { eyebrow: string; title: string; description: string; image: string; imageAlt: string }> = {
  community: {
    eyebrow: 'Exclusive Community',
    title: 'Community & Levels',
    description:
      'When you join the Realm of Seers, you are not simply accessing content, you are entering a living community. Post questions, share testimonies, engage in discussions, and contribute insights. As you participate, your level increases, unlocking deeper layers and more exclusive content designed for those who remain active, hungry, and committed to growth.',
    image: COMMUNITY_IMAGE,
    imageAlt: 'Inside the Realm of Seers community',
  },
  live: {
    eyebrow: 'Live Episodes',
    title: 'Mini Live Episodes',
    description:
      'At select moments, spontaneous live sessions are hosted exclusively inside the Realm of Seers. These are spontaneous spaces of teaching, and communion reserved for members only. If you miss a live session, there is no need to worry. Every live is preserved and made available inside the reupload category for later viewing.',
    image: LIVE_EPISODES_IMAGE,
    imageAlt: 'Mini Live Episodes inside the Realm of Seers',
  },
};

export default function StatsSection() {
  const [activeTab, setActiveTab] = useState<CommunityTab>('community');
  const activeContent = content[activeTab];

  return (
    <section id="community" className="stats" aria-labelledby="stats-title">
      <header className="stats__header">
        <div className="stats__title-wrap">
          <h2 id="stats-title">Gain Access To The Community</h2>
        </div>
        <p className="stats__summary">
          A private community designed for clarity, insight, and momentum.
        </p>
      </header>

      <div className="stats__tabs" role="tablist" aria-label="Realm membership features">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'community'}
          className={`statstab ${activeTab === 'community' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('community')}
        >
          Exclusive Community
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'live'}
          className={`statstab ${activeTab === 'live' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          Live Episodes
        </button>
      </div>

      <div key={activeTab} className="communitypanel" role="tabpanel" aria-live="polite">
        <div className="communitypanel__copy">
          <span>{activeContent.eyebrow}</span>
          <h3>{activeContent.title}</h3>
          <p>{activeContent.description}</p>
        </div>

        <figure className="communitypanel__media">
          <img
            src={activeContent.image}
            alt={activeContent.imageAlt}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
