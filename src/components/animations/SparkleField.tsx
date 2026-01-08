/**
 * SPARKLE FIELD COMPONENT
 * Creates a field of animated sparkles
 * From: bhai-9jan project, made configurable
 */

import Sparkle from "./Sparkle";

interface SparkleFieldProps {
  count?: number;
  colors?: string[];
}

const SparkleField = ({ 
  count = 15,
  colors = ["#FFD700", "#FFFFFF", "#9370DB", "#FF69B4"]
}: SparkleFieldProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    size: 12 + Math.random() * 16,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {sparkles.map((sparkle, index) => (
        <Sparkle key={index} {...sparkle} />
      ))}
    </div>
  );
};

export default SparkleField;
