import { useEffect, useState } from 'react';
// hook to see if a screen is less than 768px 
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
