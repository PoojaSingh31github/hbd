/**
 * SPARKLE COMPONENT
 * Reusable animated sparkle effect
 * From: bhai-9jan project, enhanced with configurable props
 */

import { motion } from "framer-motion";

interface SparkleProps {
  style?: React.CSSProperties;
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

const Sparkle = ({ 
  style, 
  size = 20, 
  color = "#FFD700", 
  delay = 0,
  className = ""
}: SparkleProps) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </motion.div>
  );
};

export default Sparkle;
