"use client";

import { useEffect } from 'react';

export default function AdsterraLayoutWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleClick = (e) => {
        const targetUrl = window.location.href;
      };
  
      window.addEventListener('click', handleClick);

      // Memuat skrip iklan Native Banner
      const nativeBannerScript = document.createElement('script');
      nativeBannerScript.src = "//discreetisabella.com/71b765f9f86e0b42fb5040978bef3bc2/invoke.js";
      nativeBannerScript.async = true;
      nativeBannerScript.setAttribute('data-cfasync', 'false');
      document.body.appendChild(nativeBannerScript);

      // Memuat skrip iklan Popunder
      const popunderScript = document.createElement('script');
      popunderScript.type = 'text/javascript';
      popunderScript.src = "//discreetisabella.com/ac/a4/2d/aca42d45e65aec83e6ea7b333083fb1c.js";
      popunderScript.async = true;
      document.body.appendChild(popunderScript);

      // Memuat skrip iklan Social Bar
      const socialBarScript = document.createElement('script');
      socialBarScript.type = 'text/javascript';
      socialBarScript.src = "//discreetisabella.com/ba/e7/29/bae729b6bc8836e18f8e83b545cf9591.js";
      socialBarScript.async = true;
      document.body.appendChild(socialBarScript);
  
      return () => {
        window.removeEventListener('click', handleClick);
        document.body.removeChild(nativeBannerScript);
        document.body.removeChild(popunderScript);
        document.body.removeChild(socialBarScript);
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
}
