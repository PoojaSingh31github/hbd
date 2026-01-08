/**
 * HERO SECTION COMPONENT
 * MERGED from both projects:
 * - Auto-playing confetti and floating balloons from bhai-9jan
 * - "Start Celebration" button flow from sooraj
 * - Interactive balloons with messages from sooraj
 * - Made configurable with props for different use cases
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Cake, PartyPopper, Sparkles } from "lucide-react";
import { SparkleField, FloatingBalloons, InteractiveBalloons, triggerHeroConfetti, triggerCelebrationConfetti } from "@/components/animations";
import { BirthdayButton } from "@/components/common";
import { BIRTHDAY_CONFIG, BALLOON_COLORS, BALLOON_MESSAGES } from "@/utils/constants";

interface HeroSectionProps {
  /** If provided, shows a "Start" button that triggers this callback */
  onStart?: () => void;
  /** Show floating balloons in background */
  showFloatingBalloons?: boolean;
  /** Show interactive balloons with messages */
  showInteractiveBalloons?: boolean;
  /** Auto-trigger confetti on mount */
  autoConfetti?: boolean;
}

const HeroSection = ({ 
  onStart,
  showFloatingBalloons = true,
  showInteractiveBalloons = false,
  autoConfetti = true
}: HeroSectionProps) => {
  const hasConfettiFired = useRef(false);

  // Auto-trigger confetti on mount (from bhai-9jan)
  useEffect(() => {
    if (!autoConfetti || hasConfettiFired.current) return;
    hasConfettiFired.current = true;
    triggerHeroConfetti();
  }, [autoConfetti]);

  const handleStart = () => {
    if (onStart) {
      triggerCelebrationConfetti();
      setTimeout(onStart, 500);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-soft/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-royal/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
      
      {/* Sparkle field */}
      <SparkleField count={20} />
      
      {/* Floating balloons (background, non-interactive) */}
      {showFloatingBalloons && <FloatingBalloons colors={BALLOON_COLORS.celebration} />}
      
      {/* Interactive balloons with messages */}
      {showInteractiveBalloons && (
        <InteractiveBalloons 
          colors={BALLOON_COLORS.pastel} 
          messages={BALLOON_MESSAGES} 
        />
      )}
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-12 h-12 text-gold" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Cake className="w-14 h-14 text-pink-warm" />
          </motion.div>
          <motion.div
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PartyPopper className="w-12 h-12 text-gold transform scale-x-[-1]" />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <span className="text-gradient-gold">Happy Birthday</span>
          <br />
          <motion.span
            className="font-handwritten text-6xl md:text-8xl lg:text-9xl inline-block mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {BIRTHDAY_CONFIG.recipientName}
          </motion.span>
          <motion.span
            className="inline-block ml-4"
            animate={{ rotate: [0, 14, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🎉🎂
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          To the best {BIRTHDAY_CONFIG.relationship} in the world
        </motion.p>

        {/* Date badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-gold/30 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <Heart className="w-5 h-5 text-pink-warm animate-heart-beat" />
          <span className="text-gold font-medium">{BIRTHDAY_CONFIG.birthdayDate}</span>
          <Heart className="w-5 h-5 text-pink-warm animate-heart-beat" />
        </motion.div>

        {/* Optional Start Button (from sooraj) */}
        {onStart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-4"
          >
            <BirthdayButton
              variant="celebration"
              size="xl"
              onClick={handleStart}
              className="group"
            >
              <Heart className="w-6 h-6 group-hover:animate-heart-beat" />
              Start the Celebration
              <Sparkles className="w-5 h-5" />
            </BirthdayButton>
          </motion.div>
        )}

        {/* Scroll indicator (only show if no start button) */}
        {!onStart && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 2, duration: 0.5 },
              y: { delay: 2, duration: 1.5, repeat: Infinity }
            }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-gold rounded-full" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
