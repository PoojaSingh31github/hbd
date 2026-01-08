/**
 * THOUGHT BUBBLE COMPONENT
 * Animated message bubble with icons
 * From: bhai-9jan project
 */

import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

interface ThoughtBubbleProps {
  message: string;
  index: number;
  icon?: "heart" | "star" | "sparkle";
}

const iconComponents = {
  heart: Heart,
  star: Star,
  sparkle: Sparkles,
};

const ThoughtBubble = ({ message, index, icon = "heart" }: ThoughtBubbleProps) => {
  const IconComponent = iconComponents[icon];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex items-center gap-4 ${isEven ? "" : "flex-row-reverse"}`}
      initial={{ opacity: 0, scale: 0.5, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div
        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-glow flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <IconComponent className="w-6 h-6 text-primary-foreground" />
      </motion.div>
      
      <motion.div
        className="relative max-w-md p-6 rounded-2xl thought-bubble"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-lg text-foreground font-light leading-relaxed">
          {message}
        </p>
        
        {/* Decorative corner */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold/50" />
      </motion.div>
    </motion.div>
  );
};

export default ThoughtBubble;
