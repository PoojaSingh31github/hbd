/**
 * FLOATING BALLOONS COMPONENT
 * Creates a field of floating balloons
 * From: bhai-9jan project, uses unified Balloon component
 */

import Balloon from "./Balloon";
import { BALLOON_COLORS } from "@/utils/constants";

interface FloatingBalloonsProps {
  colors?: string[];
}

const FloatingBalloons = ({ colors = BALLOON_COLORS.celebration }: FloatingBalloonsProps) => {
  const balloonConfigs = [
    { color: colors[0], delay: 0, duration: 12, left: "5%", size: 50 },
    { color: colors[1], delay: 2, duration: 14, left: "15%", size: 55 },
    { color: colors[2], delay: 1, duration: 11, left: "25%", size: 45 },
    { color: colors[3], delay: 3, duration: 15, left: "35%", size: 60 },
    { color: colors[0], delay: 0.5, duration: 13, left: "45%", size: 52 },
    { color: colors[1], delay: 2.5, duration: 12, left: "55%", size: 48 },
    { color: colors[2], delay: 1.5, duration: 14, left: "65%", size: 55 },
    { color: colors[3], delay: 4, duration: 11, left: "75%", size: 50 },
    { color: colors[0], delay: 3.5, duration: 15, left: "85%", size: 58 },
    { color: colors[1], delay: 1, duration: 13, left: "92%", size: 45 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {balloonConfigs.map((config, index) => (
        <Balloon key={index} {...config} />
      ))}
    </div>
  );
};

export default FloatingBalloons;
