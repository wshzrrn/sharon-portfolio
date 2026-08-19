"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  play?: boolean;
};

export default function FadeUp({
  children,
  delay = 0,
  className = "",
  play = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        play
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 20,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}