"use client";

import { motion } from "framer-motion";
import Book from "./Book";

interface BookShelfProps {
  stage: number;
}

export default function BookShelf({ stage }: BookShelfProps) {
  return (
    <div className="relative flex items-end justify-center gap-3">

      {/* Shelf */}

      <div className="absolute bottom-0 h-4 w-[620px] rounded-full bg-[#D6C6B0] shadow-lg" />

      {/* Book 1 */}

      <motion.div
        animate={{
          x: stage >= 1 ? -10 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <Book stage={stage} />
      </motion.div>

      {/* Book 2 */}

      <motion.div
        animate={{
          x: stage >= 1 ? -5 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <Book stage={stage} />
      </motion.div>

      {/* Active Book */}

      <Book active stage={stage} />

      {/* Book 4 */}

      <motion.div
        animate={{
          x: stage >= 1 ? 5 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <Book stage={stage} />
      </motion.div>

      {/* Book 5 */}

      <motion.div
        animate={{
          x: stage >= 1 ? 10 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <Book stage={stage} />
      </motion.div>

    </div>
  );
}