"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  play?: boolean;
  style?: CSSProperties;
}

export default function TypingText({
  text,
  className = "",
  play = true,
  style,
}: TypingTextProps) {
  return (
    <div
      className={`whitespace-pre-line ${className}`}
      style={style}
    >
      {text.split("").map((char, index) => {
        if (char === "\n") {
          return <br key={index} />;
        }

        return (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: play ? 1 : 0,
            }}
            transition={{
              delay: play ? index * 0.08 : 0,
              duration: 0.03,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        );
      })}

      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={
          play
            ? {
                opacity: [1, 0, 1],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          repeat: play ? Infinity : 0,
        }}
        className="ml-1 inline-block"
      >
        |
      </motion.span>
    </div>
  );
}