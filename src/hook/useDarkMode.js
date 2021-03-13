import { useEffect } from 'react';

function useDarkMode() {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add('dark');
  }, []);
}

export default useDarkMode;
