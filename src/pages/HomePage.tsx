/**
 * HOME PAGE
 * MERGED from both projects:
 * - Option A: Simple scroll-through experience (bhai-9jan style)
 * - Option B: Start button → reveal content flow (sooraj style)
 * 
 * This implementation uses the "Start button" flow for better user engagement
 * but all sections auto-play confetti for visual appeal
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroSection,
  ThoughtsSection,
  CakeSection,
  MemoryGallerySection,
  SpecialNoteSection,
  FinalMessageSection,
} from "@/components/sections";
import { SectionDivider } from "@/components/common";
import MusicPlayer from "@/components/common/MusicPlayer";
import { smoothScrollTo, scrollToTop } from "@/utils/helpers";

const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setHasStarted(true);
    // Smooth scroll to content after a short delay
    setTimeout(() => {
      smoothScrollTo(contentRef.current, 100);
    }, 100);
  };

  const handleReplay = () => {
    setHasStarted(false);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Floating music player */}
      <MusicPlayer />
      
      {/* Hero Section - Always visible, with start button */}
      <HeroSection 
        onStart={handleStart}
        showFloatingBalloons={true}
        showInteractiveBalloons={true}
        autoConfetti={true}
      />

      {/* Main Content - Revealed after start */}
      <AnimatePresence>
        {hasStarted && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cake Cutting Section */}
            <CakeSection />

            {/* Divider */}
            <SectionDivider color="gold" className="bg-gradient-to-b from-cream-dark to-background" />

            {/* Thoughts Section */}
            <ThoughtsSection />

            {/* Divider */}
            <SectionDivider color="purple" />

            {/* Memory Gallery */}
            <MemoryGallerySection />

            {/* Divider */}
            <SectionDivider color="coral" />

            {/* Sister's Note */}
            <SpecialNoteSection showFloatingHearts={true} />

            {/* Final Message with replay */}
            <FinalMessageSection 
              onReplay={handleReplay}
              showReplayButton={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
