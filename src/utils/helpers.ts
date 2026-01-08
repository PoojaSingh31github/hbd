/**
 * HELPER FUNCTIONS
 * Reusable utility functions for animations and calculations
 */

/**
 * Generate a random number within a range
 */
export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Generate random position for floating elements
 */
export const getRandomPosition = () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
});

/**
 * Generate array of sparkle/particle configs
 */
export const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
    size: 8 + Math.random() * 16,
    opacity: 0.3 + Math.random() * 0.5,
  }));
};

/**
 * Generate floating hearts config
 */
export const generateHearts = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 12 + Math.random() * 20,
    opacity: 0.2 + Math.random() * 0.4,
  }));
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (element: HTMLElement | null, delay = 100) => {
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, delay);
  }
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
