/**
 * MEMORY GALLERY SECTION
 * MERGED from both projects:
 * - Grid layout with hover effects from bhai-9jan
 * - Polaroid style labels and year badges from sooraj
 * - Lightbox modal from both (combined best features)
 * - Made configurable with external data
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Heart } from "lucide-react";
import { MEMORIES, type Memory } from "@/utils/constants";

interface MemoryGallerySectionProps {
  memories?: Memory[];
  title?: string;
  subtitle?: string;
}

const MemoryGallerySection = ({ 
  memories = MEMORIES,
  title = "Our Precious Memories",
  subtitle = "Moments that I cherish forever"
}: MemoryGallerySectionProps) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-6 glow-gold"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Camera className="w-8 h-8 text-gold" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            {title} 💫
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Image grid - combines best of both layouts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedMemory(memory)}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden card-premium"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Year badge on hover */}
                {memory.year && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-medium opacity-80">{memory.year}</p>
                  </div>
                )}

                {/* Heart corner decoration */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
              </motion.div>
              
              {/* Polaroid-style label (from sooraj) */}
              {memory.year && (
                <div className="absolute -bottom-2 -right-2 bg-cream px-3 py-1 rounded shadow-md transform rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-handwritten text-sm text-foreground">{memory.year}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - combined best features */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="relative max-w-2xl glass-card p-4 md:p-6 max-h-[90vh] w-[300px] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
              >
                <X size={20} />
              </button>
              
              <img
                src={selectedMemory.image}
                alt={selectedMemory.caption}
                className="w-full rounded-lg mb-4"
              />
              
              <p className="text-lg md:text-xl font-handwritten text-center text-foreground">
                "{selectedMemory.caption}"
              </p>
              
              {selectedMemory.year && (
                <p className="text-sm text-muted-foreground text-center mt-2 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-pink-warm" />
                  {selectedMemory.year}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallerySection;
