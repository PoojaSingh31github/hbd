/**
 * INTERACTIVE BALLOONS COMPONENT
 * Balloons that can be clicked to reveal messages
 * From: sooraj project, uses unified Balloon component
 */

import Balloon from "./Balloon";
import { BALLOON_COLORS, BALLOON_MESSAGES } from "@/utils/constants";

interface InteractiveBalloonsProps {
  colors?: string[];
  messages?: readonly string[];
}

const InteractiveBalloons = ({ 
  colors = BALLOON_COLORS.pastel,
  messages = BALLOON_MESSAGES
}: InteractiveBalloonsProps) => {
  return (
    <>
      {colors.slice(0, messages.length).map((color, index) => (
        <Balloon
          key={index}
          color={color}
          x={5 + index * 16}
          delay={index * 0.4}
          size={55 + (index % 3) * 10}
          message={messages[index]}
          interactive={true}
        />
      ))}
    </>
  );
};

export default InteractiveBalloons;
