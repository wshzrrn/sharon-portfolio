"use client";

import { motion } from "framer-motion";

interface BookProps {
  active?: boolean;
  stage: number;
}

export default function Book({
  active = false,
  stage,
}: BookProps) {

  const variants = {
    0: {
      scale: 1,
      x: 0,
    },

    1: {
      scale: 1.08,
      x: 0,
    },

    2: {
      scale: 1.6,
      x: 0,
    },

    3: {
      scale: 1.6,
      x: 0,
    },
  };

  return (
    <motion.div
      initial={false}
      animate={active ? variants[stage as keyof typeof variants] : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        zIndex: active ? 50 : 1,
      }}
      className="relative"
    >
      {/* Shadow */}

      {active && (
        <motion.div
          animate={{
            opacity: stage >= 1 ? 0.18 : 0,
            scale: stage >= 2 ? 1.5 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-4 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-black blur-lg"
        />
      )}

      {/* Book */}

      <div
        className={`relative h-80 w-16 rounded-xl shadow-2xl ${
          active ? "bg-[#6D5CDB]" : "bg-[#D9D6D0]"
        }`}
      >

        {/* Spine */}

        <div className="absolute left-1 top-2 h-[95%] w-[3px] rounded-full bg-white/30" />

        {/* Highlight */}

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-transparent to-black/10" />

        {active && (
          <div className="absolute inset-0 flex items-center justify-center">

            <span className="-rotate-90 whitespace-nowrap text-xs font-semibold tracking-[0.35em] text-white">

              PORTFOLIO

            </span>

          </div>
        )}

      </div>

    </motion.div>
  );
}