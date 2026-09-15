import { useLayoutEffect } from 'react';

export const useHideAppMenu = () => {
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = '#doppler-menu-mfe { display: none !important; }';
    document.head.appendChild(style);

    const setNavBarVisibility = (visible) => {
      if (typeof window.displayDopplerNavBar === 'function') {
        window.displayDopplerNavBar(visible);
        return true;
      }
      return false;
    };

    let intervalId;
    if (!setNavBarVisibility(false)) {
      intervalId = setInterval(() => {
        if (setNavBarVisibility(false)) {
          clearInterval(intervalId);
        }
      }, 200);
    }

    return () => {
      clearInterval(intervalId);
      style.remove();
      setNavBarVisibility(true);
    };
  }, []);
};
