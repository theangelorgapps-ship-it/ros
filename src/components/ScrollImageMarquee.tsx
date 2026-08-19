const FEATURED_VIDEO_IDS = [
  'OEkxiY5zte0',
  'nbpIBdkXsoE',
  'pdPtueSL6H0',
  '7PqC9omdpws',
  'jY43_X14M6Q',
  'KHouXX5x9Xc',
  '1KlDSvgHu3c',
  'mfl9gdElOWc',
];

const MOBILE_LANES = [
  FEATURED_VIDEO_IDS.slice(0, 4),
  FEATURED_VIDEO_IDS.slice(4),
];

function TeachingCard({ videoId }: Readonly<{ videoId: string }>) {
  return (
    <figure className="featured-teaching-card aspect-[14/9] min-w-0 overflow-hidden rounded-xl bg-[#16161a]">
      <img
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.025]"
        decoding="async"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        }}
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
      />
    </figure>
  );
}

export default function ScrollImageMarquee() {
  return (
    <section
      aria-label="Featured Uebert Angel Jr teachings"
      className="w-full overflow-hidden px-3 pb-8 pt-16 sm:px-4 sm:pb-10 sm:pt-24 md:px-6 md:pt-32 lg:px-8 lg:pt-40"
    >
      <div className="featured-mobile-marquee -mx-3 md:hidden">
        {MOBILE_LANES.map((lane, laneIndex) => (
          <div
            className={`featured-mobile-lane ${laneIndex === 1 ? 'is-reversed' : ''}`}
            key={lane.join('-')}
          >
            <div className="featured-mobile-track">
              {[...lane, ...lane].map((videoId, cardIndex) => (
                <div
                  aria-hidden={cardIndex >= lane.length}
                  className="featured-mobile-card"
                  key={`${videoId}-${cardIndex}`}
                >
                  <TeachingCard videoId={videoId} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-[1600px] grid-cols-4 gap-3 md:grid">
        {FEATURED_VIDEO_IDS.map((videoId) => (
          <TeachingCard key={videoId} videoId={videoId} />
        ))}
      </div>
    </section>
  );
}
