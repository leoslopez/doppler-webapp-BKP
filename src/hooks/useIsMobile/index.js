import { useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = '(max-width: 1199px)';

const getMatches = (breakpoint) => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia?.(breakpoint)?.matches ?? false;
};

export const useIsMobile = (breakpoint = MOBILE_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(() => getMatches(breakpoint));

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(breakpoint);

    if (!mediaQuery) {
      return undefined;
    }

    const updateMatches = () => setIsMobile(mediaQuery.matches);
    updateMatches();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMatches);
      return () => mediaQuery.removeEventListener('change', updateMatches);
    }

    mediaQuery.addListener?.(updateMatches);
    return () => mediaQuery.removeListener?.(updateMatches);
  }, [breakpoint]);

  return isMobile;
};
