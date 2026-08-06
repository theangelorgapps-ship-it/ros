export const SITE_URL = 'https://ros-8j1.pages.dev';
export const SKOOL_URL = 'https://www.skool.com/theseer/about';

export const NAV_ITEMS = [
  { label: 'Home', target: 'home', href: `${SITE_URL}/#home` },
  { label: 'Purpose', target: 'purpose', href: `${SITE_URL}/#purpose` },
  { label: 'Featured', target: 'featured', href: `${SITE_URL}/#featured` },
  { label: 'Community', target: 'community', href: `${SITE_URL}/#community` },
  { label: 'About', target: 'about', href: `${SITE_URL}/#about` },
] as const;

export const SOCIAL_LINKS = {
  x: 'https://x.com/realuebertjr',
  instagram: 'https://www.instagram.com/uebertangeljr/',
  tiktok: 'https://www.tiktok.com/@uebertangeljr',
  youtube: 'https://www.youtube.com/@UebertAngelJr',
  facebook: 'https://www.facebook.com/uebertangeljr/',
} as const;
