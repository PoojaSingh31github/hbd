/**
 * CONSTANTS FILE
 * Centralized configuration for the birthday website
 * Easy to customize recipient name, date, colors, and messages
 */

// ============================================
// RECIPIENT CONFIGURATION
// Change these to personalize the website
// ============================================

import img1 from "../assets/img/20260108_210202-COLLAGE.jpg";
import img2 from "../assets/img/20260108_210806-COLLAGE.jpg";
import img3 from "../assets/img/20260108_210913-COLLAGE.jpg";
import img4 from "../assets/img/20260108_211124-COLLAGE.jpg";
import img5 from "../assets/img/20260108_213050-COLLAGE.jpg";
import img6 from "../assets/img/20260108_211319-COLLAGE.jpg";
export const BIRTHDAY_CONFIG = {
  recipientName: "Bhai",
  relationship: "brother", // "brother" | "sister" | "friend" etc.
  fromName: "Your Sister",
  birthdayDate: "9th January",
  year: new Date().getFullYear(),
} as const;

// ============================================
// COLOR PALETTES FOR BALLOONS & CONFETTI
// ============================================
export const BALLOON_COLORS = {
  // Vibrant celebration colors (from bhai-9jan)
  celebration: ["#FFD700", "#4169E1", "#9370DB", "#FF69B4", "#FFFFFF"],
  // Soft pastel colors (from sooraj)
  pastel: ["#E8B4A0", "#A7C7E7", "#F5D5C8", "#D4A574", "#E6B8D9", "#B8D4A7"],
  // Mixed best of both
  mixed: ["#FFD700", "#E8B4A0", "#4169E1", "#F5D5C8", "#9370DB", "#A7C7E7"],
} as const;

export const CONFETTI_COLORS = BALLOON_COLORS.mixed;

// ============================================
// BALLOON MESSAGES (for interactive balloons)
// ============================================
export const BALLOON_MESSAGES = [
  "You're amazing! 🌟",
  "Best brother ever! 💪",
  "Love you always! 💕",
  "Stay awesome! ✨",
  "My favorite person! 🎉",
  "Forever my buddy! 🤗",
] as const;

// ============================================
// THOUGHTS/WISHES (for thoughts section)
// ============================================
export const HEARTFELT_THOUGHTS = [
  {
    message: "You supported me when I needed it the most",
    icon: "star" as const,
  },
  { message: "You made my childhood beautiful", icon: "sparkle" as const },
  {
    message: "You are more than a brother, you are my hero",
    icon: "heart" as const,
  },
  {
    message: "Life feels easier knowing you’re always there",
    icon: "sparkle" as const,
  },
  {
    message: "Having you as my big brother is my forever flex",
    icon: "heart" as const,
  },
  {
    message: "I could always count on you, no matter what",
    icon: "star" as const,
  },
  {
    message: "Forever grateful to have you in my life ❤️",
    icon: "heart" as const,
  },
  {
    message: "You were my backbone through every phase of life",
    icon: "heart" as const,
  },
  { message: "Your presence alone gives me strength", icon: "star" as const },
] as const;

// ============================================
// MEMORY GALLERY CONFIGURATION
// Replace these with actual photos
// ============================================
export interface Memory {
  id: number;
  image: string;
  caption: string;
  year?: string;
}

export const MEMORIES: Memory[] = [
  {
    id: 1,
    image: img3,
    caption: "My first trip with you — Vaishno Devi, faith, blessings, and us 🤍",
    year: "First Trip",
  },
  {
    id: 2,
    image: img6,
    caption: "Attending my friend’s brother’s wedding together",
    year: "Wedding Vibes",
  },
  {
    id: 3,
    image: img1,
    caption: "Pure childhood memories — simple days, endless smiles",
    year: "Childhood",
  },
  {
    id: 4,
    image: img5,
    caption: "Mosi’s tilak ceremony — family, rituals, and togetherness",
    year: "Family Moments",
  },
  {
    id: 5,
    image: img2,
    caption: "That restaurant where parathas just hit different with you 🥞",
    year: "Food Memories",
  },
  {
    id: 6,
    image: img4,
    caption: "Dil se celebration — family, love, and endless blessings.",
    year: "Divali",
  },

];


// ============================================
// SISTER'S NOTE CONTENT
// ============================================
export const SISTER_NOTE = {
  greeting: "My Dearest Brother,",
  paragraphs: [
    "On this special day, I just want you to know how much you truly mean to me. You’ve always been more than just my brother — you’ve been my support system, and the person I could always rely on whenever i needed",
    "From our childhood adventures to the moments we share today, every memory with you is a treasure I hold close to my heart. Your kindness, strength, and unwavering support have shaped me into the person I am today.",
    "As you celebrate another year of life, I wish for you all the happiness, success, and love that you deserve. May this year bring you closer to your dreams and fill your days with joy.",
    "Thank you for being the incredible brother that you are. I am so grateful to have you in my life, and I look forward to creating many more beautiful memories together.",
  ],
  signature: "With all my love,",
  signatureName: "Your Sister ",
} as const;

// ============================================
// ANIMATION DURATIONS
// ============================================
export const ANIMATION_CONFIG = {
  confettiDuration: 4000,
  fireworksDuration: 3000,
  transitionDuration: 0.6,
  scrollDelay: 100,
} as const;

// ============================================
// MUSIC CONFIGURATION
// ============================================
export const MUSIC_CONFIG = {
  // Default music URL - replace with your own
  url: "https://www.soundjay.com/free-music/sounds/happy-birthday-piano.mp3",
  volume: 0.3,
  loop: true,
} as const;
