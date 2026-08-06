import { useState } from 'react';
import './StatsSection.css';

type CommunityTab = 'community' | 'live';

const COMMUNITY_IMAGE =
  'https://assets.cdn.filesafe.space/BGA1N9Ch7TNCoNH77QrT/media/6a74d5b9888087201900d178.jpg';

const content: Record<CommunityTab, { eyebrow: string; title: string; description: string }> = {
  community: {
    eyebrow: 'Exclusive Community',
    title: 'Community & Levels',
    description:
      'When you join the Realm of Seers, you are not simply accessing content, you are entering a living community. Post questions, share testimonies, engage in discussions, and contribute insights. As you participate, your level increases, unlocking deeper layers and more exclusive content designed for those who remain active, hungry, and committed to growth.',
  },
  live: {
    eyebrow: 'Live Episodes',
    title: 'Teachings As They Happen',
    description:
      'Join live teachings, conversations, and ministry moments as they happen. Experience focused sessions inside the Realm, ask questions in real time, and stay connected to fresh revelation as it is shared with the community.',
  },
};

export default function StatsSection() {
  const [activeTab, setActiveTab] = useState<CommunityTab>('community');
  const activeContent = content[activeTab];

  return (
    <section id="about" className="stats" aria-labelledby="stats-title">
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
            src={COMMUNITY_IMAGE}
            alt="Inside the Realm of Seers community"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
