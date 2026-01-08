/**
 * CONFETTI EFFECTS
 * Reusable confetti trigger functions
 * Merged: Combined effects from both projects into configurable functions
 */

import confetti from "canvas-confetti";
import { CONFETTI_COLORS, ANIMATION_CONFIG } from "@/utils/constants";
import { randomInRange } from "@/utils/helpers";

/**
 * Celebration confetti - simple burst
 */
export const triggerCelebrationConfetti = (colors = CONFETTI_COLORS) => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: [...colors],
  });
};

/**
 * Hero section confetti - continuous from sides
 * From: bhai-9jan project
 */
export const triggerHeroConfetti = (colors = CONFETTI_COLORS) => {
  const duration = ANIMATION_CONFIG.confettiDuration;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: [...colors],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: [...colors],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

/**
 * Cake cutting confetti - explosive burst
 * From: sooraj project
 */
export const triggerCakeConfetti = (colors = CONFETTI_COLORS) => {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: [...colors],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: [...colors],
    });
  }, 250);

  return interval;
};

/**
 * Fireworks effect
 * From: bhai-9jan project
 */
export const triggerFireworks = (colors = CONFETTI_COLORS) => {
  const duration = ANIMATION_CONFIG.fireworksDuration;
  const animationEnd = Date.now() + duration;

  const frame = () => {
    const timeLeft = animationEnd - Date.now();

    confetti({
      particleCount: 3,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.3, 0.7) },
      colors: [...colors],
      scalar: randomInRange(0.8, 1.5),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

/**
 * Replay confetti - small burst
 */
export const triggerReplayConfetti = (colors = CONFETTI_COLORS) => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    colors: [...colors],
  });
};
