/**
 * SCROLL ANIMATION HOOK
 * Detects scroll position for triggering animations
 */

import { useState, useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 100, once = true } = options;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > threshold && !hasScrolled) {
        setHasScrolled(true);
      } else if (!once && currentScrollY <= threshold && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, once, hasScrolled]);

  return { hasScrolled, scrollY };
};

export default useScrollAnimation;
