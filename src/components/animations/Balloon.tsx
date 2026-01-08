/**
 * UNIFIED BALLOON COMPONENT
 * MERGED from both projects:
 * - Basic floating animation from bhai-9jan
 * - Interactive click-to-pop with messages from sooraj
 * - Made fully configurable for both use cases
 */

import { motion } from "framer-motion";
import { useState } from "react";

interface BalloonProps {
  color: string;
  size?: number;
  delay?: number;
  // For floating balloons (bhai-9jan style)
  left?: string;
  duration?: number;
  floatFromBottom?: boolean;
  // For interactive balloons (sooraj style)
  x?: number;
  message?: string;
  onClick?: () => void;
  interactive?: boolean;
}

const Balloon = ({ 
  color, 
  size = 60, 
  delay = 0, 
  left,
  duration = 12,
  floatFromBottom = true,
  x,
  message,
  onClick,
  interactive = false
}: BalloonProps) => {
  const [popped, setPopped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (interactive && message && !popped) {
      setPopped(true);
      setShowMessage(true);
      onClick?.();
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  // If popped and message hidden, don't render
  if (popped && !showMessage) return null;

  // Determine position style
  const positionStyle = left 
    ? { left } 
    : x !== undefined 
      ? { left: `${x}%`, bottom: "10%" }
      : {};

  // Animation variants based on mode
  const getAnimation = () => {
    if (interactive) {
      return {
        initial: { y: 100, opacity: 0 },
        animate: {
          y: popped ? -50 : [0, -20, -10, -30, 0],
          opacity: popped ? 0 : 1,
          scale: popped ? 1.5 : 1,
        },
        transition: {
          y: {
            duration: popped ? 0.3 : 4,
            repeat: popped ? 0 : Infinity,
            delay,
            ease: "easeInOut",
          },
          opacity: { duration: 0.5, delay },
          scale: { duration: 0.2 },
        },
      };
    }
    
    // Floating animation (from bhai-9jan)
    return {
      initial: { y: floatFromBottom ? "100vh" : 0, x: 0, rotate: 0 },
      animate: { 
        y: "-150px", 
        x: [0, 20, -20, 10, 0],
        rotate: [0, 5, -5, 3, 0]
      },
      transition: {
        y: { duration, delay, ease: "linear", repeat: Infinity },
        x: { duration: duration / 2, delay, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 3, delay, repeat: Infinity, ease: "easeInOut" }
      },
    };
  };

  const animationProps = getAnimation();

  return (
    <motion.div
      className={`absolute pointer-events-${interactive ? 'auto cursor-pointer' : 'none'} z-10`}
      style={positionStyle}
      onClick={handleClick}
      {...animationProps}
    >
      {/* Message popup for interactive balloons */}
      {showMessage && message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: -100 }}
          exit={{ opacity: 0 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap glass-card px-4 py-2 text-sm font-handwritten text-foreground z-50"
        >
          {message}
        </motion.div>
      )}
      
      <svg
        width={size}
        height={size * 1.4}
        viewBox="0 0 60 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Balloon body */}
        <ellipse
          cx="30"
          cy="28"
          rx="26"
          ry="28"
          fill={color}
          className="drop-shadow-lg"
        />
        {/* Highlight */}
        <ellipse
          cx="20"
          cy="18"
          rx="8"
          ry="10"
          fill="white"
          opacity="0.3"
        />
        {/* Knot */}
        <path
          d="M27 56L30 62L33 56"
          fill={color}
        />
        <polygon
          points="28,56 32,56 30,60"
          fill={color}
        />
        {/* String */}
        <path
          d="M30 60 Q 28 70 32 75 Q 28 80 30 84"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <defs>
          <filter id="balloon-shadow" x="-2" y="-2" width="64" height="64">
            <feDropShadow dx="2" dy="4" stdDeviation="2" floodOpacity="0.2" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Balloon;
