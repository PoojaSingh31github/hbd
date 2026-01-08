/**
 * SISTER'S NOTE SECTION
 * MERGED from both projects:
 * - Handwritten card style from bhai-9jan
 * - Floating hearts and wax seal from sooraj
 * - Letter-style layout with tape decorations
 */

import { motion } from "framer-motion";
import { PenLine, Heart } from "lucide-react";
import { FloatingHearts } from "@/components/animations";
import { SISTER_NOTE, BIRTHDAY_CONFIG } from "@/utils/constants";

interface SpecialNoteSectionProps {
  note?: typeof SISTER_NOTE;
  showFloatingHearts?: boolean;
}

const SpecialNoteSection = ({ 
  note = SISTER_NOTE,
  showFloatingHearts = true
}: SpecialNoteSectionProps) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-blush/5 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-celebration opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      {/* Floating hearts */}
      {showFloatingHearts && <FloatingHearts count={15} />}
      
      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-6 glow-gold"
            whileHover={{ scale: 1.1 }}
          >
            <PenLine className="w-8 h-8 text-gold" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            A Note From Your Sister 💌
          </h2>
        </motion.div>

        {/* Letter card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Paper texture card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blush/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gold-light/30 to-transparent" />
            
            {/* Wax seal decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-coral to-blush-deep flex items-center justify-center shadow-lg">
              <span className="text-2xl">💝</span>
            </div>

            {/* Letter content */}
            <div className="mt-8 space-y-6 font-handwritten text-xl md:text-2xl leading-relaxed text-foreground">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {note.greeting}
              </motion.p>
              
              {note.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
              
              {/* Signature */}
              <motion.div
                className="pt-6 text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              >
                <p className="text-2xl md:text-3xl">{note.signature}</p>
                <p className="text-3xl md:text-4xl text-primary mt-2 flex items-center justify-end gap-2">
                  {note.signatureName}
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 text-pink-warm fill-pink-warm inline" />
                  </motion.span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Tape decorations */}
          <div className="absolute -top-3 left-10 w-16 h-6 bg-gold-light/60 rotate-12 rounded-sm" />
          <div className="absolute -top-3 right-10 w-16 h-6 bg-blush/60 -rotate-12 rounded-sm" />
          
          {/* Decorative shadows */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold/10 rounded-lg -z-10 rotate-2" />
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-purple-soft/10 rounded-lg -z-20 rotate-3" />
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialNoteSection;
