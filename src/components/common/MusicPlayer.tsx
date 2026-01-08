/**
 * MUSIC PLAYER COMPONENT
 * Floating music control button
 * From: sooraj project, uses music hook
 */

import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";
import { useMusicPlayer } from "@/hooks";

const MusicPlayer = () => {
  const { isMuted, isPlaying, toggle } = useMusicPlayer();

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ rotate: [0, -10, 10, 0] }}
      title={isMuted ? "Play music" : "Mute music"}
    >
      <motion.div
        animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        ) : (
          <Volume2 className="w-6 h-6 text-primary" />
        )}
      </motion.div>
      
      {/* Music notes animation when playing */}
      {isPlaying && (
        <>
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ y: [-5, -20], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
          >
            <Music className="w-4 h-4 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -top-2 -left-2"
            animate={{ y: [-5, -25], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          >
            <Music className="w-3 h-3 text-coral" />
          </motion.div>
        </>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
