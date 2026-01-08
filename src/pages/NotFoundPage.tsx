/**
 * NOT FOUND PAGE
 * 404 error page with fun birthday theme
 */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, PartyPopper } from "lucide-react";
import { BirthdayButton } from "@/components/common";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hero-gradient px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <PartyPopper className="w-24 h-24 mx-auto text-gold" />
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        
        <h2 className="font-handwritten text-3xl md:text-4xl text-foreground mb-4">
          Oops! The party's not here...
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Looks like you wandered off from the celebration. Let's get you back to the party!
        </p>

        <BirthdayButton
          variant="celebration"
          size="lg"
          onClick={() => navigate("/")}
        >
          <Home className="w-5 h-5" />
          Back to Celebration
        </BirthdayButton>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
