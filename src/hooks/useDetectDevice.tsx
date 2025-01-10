import { useState, useEffect } from 'react';

const useDetectDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectBrowserType = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice =
        /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile|mobile/gi.test(
          userAgent.toLowerCase()
        );

      setIsMobile(isMobileDevice);
    };

    detectBrowserType();
  }, []);

  if (isMobile) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
};

export default useDetectDevice;
