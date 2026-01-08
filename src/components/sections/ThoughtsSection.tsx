/**
 * THOUGHTS SECTION
 * Animated thought bubbles with heartfelt messages
 * From: bhai-9jan project
 */

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
import { ThoughtBubble } from "@/components/common";
import { HEARTFELT_THOUGHTS } from "@/utils/constants";

interface ThoughtsSectionProps {
  thoughts?: typeof HEARTFELT_THOUGHTS;
  title?: string;
  subtitle?: string;
}

const ThoughtsSection = ({ 
  thoughts = HEARTFELT_THOUGHTS,
  title = "From My Heart",
  subtitle = "Some thoughts I wanted to share with you"
}: ThoughtsSectionProps) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-celebration opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-soft/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-6 glow-purple"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <MessageCircleHeart className="w-8 h-8 text-purple-soft" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Thought bubbles */}
        <div className="space-y-8">
          {thoughts.map((thought, index) => (
            <ThoughtBubble
              key={index}
              message={thought.message}
              index={index}
              icon={thought.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
