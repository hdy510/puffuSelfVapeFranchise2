// hooks/useResponsive.js
import { useState, useEffect } from "react";

export function useResponsive() {
  const [device, setDevice] = useState({
    isMobile: window.innerWidth <= 480,
    isLargeMobile: window.innerWidth > 480 && window.innerWidth <= 768,
    isTabletAndDesktop: window.innerWidth > 768
  });

  useEffect(() => {
    const onResize = () => {
      setDevice({
        isMobile: window.innerWidth <= 480,
        isLargeMobile: window.innerWidth > 480 && window.innerWidth <= 768,
        isTabletAndDesktop: window.innerWidth > 768
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return device;
}
