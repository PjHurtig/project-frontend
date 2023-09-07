import { useEffect, useState } from 'react';

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsSmallScreen(window.innerWidth < 768); 
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isSmallScreen;
}

export default useIsSmallScreen;
