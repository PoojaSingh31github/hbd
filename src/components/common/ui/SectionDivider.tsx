/**
 * SECTION DIVIDER COMPONENT
 * Decorative divider between sections
 */

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  color?: "gold" | "coral" | "purple";
  className?: string;
}

const colorClasses = {
  gold: "text-gold",
  coral: "text-coral",
  purple: "text-purple-soft",
};

const SectionDivider = ({ color = "gold", className = "" }: SectionDividerProps) => {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-16 bg-border" />
        <Sparkles className={`w-6 h-6 ${colorClasses[color]}`} />
        <div className="h-px w-16 bg-border" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
