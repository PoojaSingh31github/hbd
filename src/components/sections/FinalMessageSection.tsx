/**
 * FINAL MESSAGE SECTION
 * MERGED from both projects:
 * - Fireworks animation from bhai-9jan
 * - Replay button and closing message from sooraj
 * - Star background decoration
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, Cake, RotateCcw } from "lucide-react";
import { BirthdayButton } from "@/components/common";
import { triggerFireworks, triggerReplayConfetti } from "@/components/animations";
import { BIRTHDAY_CONFIG } from "@/utils/constants";

interface FinalMessageSectionProps {
  onReplay?: () => void;
  showReplayButton?: boolean;
}

const FinalMessageSection = ({ 
  onReplay,
  showReplayButton = true
}: FinalMessageSectionProps) => {
  const [hasTriggeredFireworks, setHasTriggeredFireworks] = useState(false);

  const handleViewportEnter = () => {
    if (hasTriggeredFireworks) return;
    setHasTriggeredFireworks(true);
    triggerFireworks();
  };

  const handleReplay = () => {
    triggerReplayConfetti();
    onReplay?.();
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-blush/10 to-background">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-background" />
      
      {/* Animated star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: 360,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star
              className="text-gold/30"
              size={10 + Math.random() * 15}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={handleViewportEnter}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated icons */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-gold" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Cake className="w-12 h-12 text-pink-warm" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-gold" />
          </motion.div>
        </motion.div>

        {/* Heart decoration */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 10 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart
              className="w-20 h-20 mx-auto text-coral"
              fill="currentColor"
            />
          </motion.div>
        </motion.div>

        {/* Main message */}
        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <span className="text-gradient-gold">May all your dreams</span>
          <br />
          <span className="text-foreground">come true</span>
          <motion.span
            className="inline-block ml-2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
        </motion.h2>

        {/* Alternate closing message */}
        <motion.h3
          className="text-2xl md:text-4xl lg:text-5xl font-handwritten text-foreground leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          you’ll always be my big brother
          <br />
          <span className="text-primary">
             — my protector, my supporter.
          </span>
        </motion.h3>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 font-display italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Today and always, I'm grateful for you. Wishing you a year filled with love, success, and happiness. 💕
        </motion.p>

        {/* Heart row */}
        <motion.div
          className="flex justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart
                className="w-6 h-6 text-pink-warm"
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Replay button */}
        {showReplayButton && onReplay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <BirthdayButton
              variant="blush"
              size="lg"
              onClick={handleReplay}
            >
              <RotateCcw className="w-5 h-5" />
              Replay Memories
            </BirthdayButton>
          </motion.div>
        )}

        {/* Signature */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="font-handwritten text-2xl text-muted-foreground">
            Made with love by {BIRTHDAY_CONFIG.fromName} 🌸
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalMessageSection;
