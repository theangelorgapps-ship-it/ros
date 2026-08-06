import type { MouseEvent } from 'react';
import { SITE_URL } from '../constants/links';

const productionOrigin = new URL(SITE_URL).origin;

export const navigateToSection = (
  event: MouseEvent<HTMLAnchorElement>,
  target: string,
) => {
  if (window.location.origin !== productionOrigin) return;

  const section = document.getElementById(target);
  if (!section) return;

  event.preventDefault();
  window.history.pushState(null, '', `/#${target}`);
  section.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  });
};
