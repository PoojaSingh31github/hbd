/**
 * BIRTHDAY CAKE SECTION
 * Interactive cake cutting experience
 * From: sooraj project with enhanced SVG cake
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { Cake } from "lucide-react";
import { BirthdayButton } from "@/components/common";
import { triggerCakeConfetti } from "@/components/animations";

interface CakeSectionProps {
  onCut?: () => void;
}

const CakeSection = ({ onCut }: CakeSectionProps) => {
  const [isCut, setIsCut] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleCutCake = () => {
    if (isCut) return;
    
    setIsCut(true);
    
    // Trigger confetti
    const interval = triggerCakeConfetti();
    
    // Show wish message after confetti
    setTimeout(() => {
      if (interval) clearInterval(interval);
      setShowWish(true);
      onCut?.();
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-cream-dark">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-foreground mb-4">
          Time to Celebrate! 🎉
        </h2>
        <p className="text-muted-foreground text-lg">
          Make this moment special
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Cake SVG */}
          <svg
            width="280"
            height="300"
            viewBox="0 0 280 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Plate */}
            <ellipse cx="140" cy="280" rx="130" ry="15" fill="#E8E0D8" />
            <ellipse cx="140" cy="275" rx="120" ry="12" fill="#F5F0EB" />
            
            {/* Bottom tier */}
            <rect x="30" y="200" width="220" height="75" rx="10" fill="#FFF5EB" />
            <rect x="30" y="200" width="220" height="75" rx="10" fill="url(#cakeGradient1)" />
            
            {/* Middle tier */}
            <rect x="55" y="130" width="170" height="70" rx="8" fill="#FFF8F0" />
            <rect x="55" y="130" width="170" height="70" rx="8" fill="url(#cakeGradient2)" />
            
            {/* Top tier */}
            <rect x="85" y="70" width="110" height="60" rx="6" fill="#FFFBF5" />
            <rect x="85" y="70" width="110" height="60" rx="6" fill="url(#cakeGradient3)" />
            
            {/* Frosting drips */}
            <path
              d="M30 200C35 215 50 210 55 200M85 200C90 220 110 215 115 200M155 200C160 218 180 213 185 200M215 200C220 215 235 212 250 200"
              stroke="#F5D5C8"
              strokeWidth="8"
              strokeLinecap="round"
            />
            
            {/* Decorations - roses */}
            <circle cx="70" cy="160" r="12" fill="#E8B4A0" />
            <circle cx="140" cy="160" r="12" fill="#E6B8D9" />
            <circle cx="210" cy="160" r="12" fill="#E8B4A0" />
            
            {/* Candles with animated flames */}
            {[100, 140, 180].map((x, i) => (
              <g key={i}>
                {/* Candle body */}
                <rect x={x - 4} y="35" width="8" height="35" rx="2" fill="#A7C7E7" />
                {/* Flame - outer */}
                <motion.ellipse
                  cx={x}
                  cy="28"
                  rx="6"
                  ry="10"
                  fill="#FFD93D"
                  animate={isCut ? { opacity: 0, scale: 0 } : { 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{ duration: 0.5, repeat: isCut ? 0 : Infinity }}
                />
                {/* Flame - inner */}
                <motion.ellipse
                  cx={x}
                  cy="30"
                  rx="3"
                  ry="6"
                  fill="#FF9F43"
                  animate={isCut ? { opacity: 0, scale: 0 } : {
                    scaleY: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.3, repeat: isCut ? 0 : Infinity }}
                />
              </g>
            ))}
            
            {/* Slice cut effect */}
            {isCut && (
              <motion.path
                d="M140 70L140 275L180 275L180 70"
                fill="#FFF5EB"
                stroke="#E8D4C4"
                strokeWidth="2"
                initial={{ x: 0 }}
                animate={{ x: 30, rotate: 15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "160px 275px" }}
              />
            )}
            
            {/* Gradients */}
            <defs>
              <linearGradient id="cakeGradient1" x1="30" y1="200" x2="30" y2="275">
                <stop stopColor="#FFF5EB" />
                <stop offset="1" stopColor="#F5E6D8" />
              </linearGradient>
              <linearGradient id="cakeGradient2" x1="55" y1="130" x2="55" y2="200">
                <stop stopColor="#FFF8F0" />
                <stop offset="1" stopColor="#FFF0E5" />
              </linearGradient>
              <linearGradient id="cakeGradient3" x1="85" y1="70" x2="85" y2="130">
                <stop stopColor="#FFFBF5" />
                <stop offset="1" stopColor="#FFF5EB" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Cut button or wish message */}
        {!isCut ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <BirthdayButton
              variant="celebration"
              size="lg"
              onClick={handleCutCake}
              className="bounce-gentle"
            >
              <Cake className="w-5 h-5" />
              Cut the Cake 🎂
            </BirthdayButton>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="text-center"
          >
            {showWish && (
              <motion.p
                className="text-3xl md:text-4xl font-handwritten text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✨ Make a wish! ✨
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CakeSection;
