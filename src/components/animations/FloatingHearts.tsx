/**
 * FLOATING HEARTS COMPONENT
 * Animated hearts floating upward
 * From: sooraj project
 */

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { generateHearts } from "@/utils/helpers";

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 15 }: FloatingHeartsProps) => {
  const hearts = generateHearts(count);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-blush-deep"
          style={{
            left: `${heart.x}%`,
            bottom: "-10%",
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, Math.sin(heart.id) * 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart
            size={heart.size}
            fill="currentColor"
            className="drop-shadow-sm"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
