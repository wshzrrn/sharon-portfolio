"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface OpeningAnimationProps {
  onFinish: () => void;
}

export default function OpeningAnimation({
  onFinish,
}: OpeningAnimationProps) {
  const [opened, setOpened] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setFinished(true);
      onFinish();
    }, 3600);
  };

  return (
    <AnimatePresence mode="wait">
      {!finished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          {/* ===================================================== */}
          {/* GREEN GINGHAM BACKGROUND */}
          {/* ===================================================== */}

          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#709f57",
            }}
          />

          {/* ===================================================== */}
          {/* YOU GOT A MAIL */}
          {/* ===================================================== */}

          <motion.h1
            className="absolute top-[18%] z-[100] px-6 text-center text-4xl font-medium tracking-[0.04em] text-[#ffedc9] sm:text-6xl md:text-6xl lg:text-[4rem]"
            style={{
              fontFamily: "var(--font-passions-conflict)",
            
            }}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: opened ? 0 : 1,
              y: opened ? -20 : 0,
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
          >
            you got a mail!
          </motion.h1>

          {/* ===================================================== */}
          {/* ENVELOPE */}
          {/* ===================================================== */}

          <motion.div
            className="relative mt-14 w-[min(78vw,560px)]"
            initial={{
              opacity: 0,
              scale: 0.72,
              y: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: opened ? 0 : [0, -7, 0],
            }}
            transition={{
              opacity: {
                duration: 0.55,
                delay: 0.25,
              },
              scale: {
                duration: 0.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
              y: opened
                ? {
                    duration: 0.3,
                  }
                : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
            }}
          >
            {/* ================================================= */}
            {/* ENVELOPE CANVAS */}
            {/* ================================================= */}

            <div
              className="relative w-full"
              style={{
                aspectRatio: "1.6 / 1",
              }}
            >
              {/* ================================================= */}
              {/* 1. ENVELOPE BACK */}
              {/* ================================================= */}

              <div
                className="absolute inset-0 z-10 overflow-hidden rounded-[5px]"
                style={{
                  background:
                    "linear-gradient(145deg, #ffd6d6 0%, #ffb8b7 48%, #ff8c8a 100%)",

                  border:
                    "1px solid rgba(122, 35, 61, 0.22)",

                  boxShadow: `
                    0 28px 55px rgba(96, 35, 50, 0.28),
                    0 8px 18px rgba(96, 35, 50, 0.16),
                    inset 0 1px 0 rgba(255,255,255,0.42),
                    inset 0 -7px 15px rgba(122,35,61,0.12)
                  `,
                }}
              >
                {/* Subtle inner depth */}

                <div
                  className="absolute inset-0"
                  style={{
                    boxShadow:
                      "inset 0 0 28px rgba(122, 35, 61, 0.12)",
                  }}
                />

                {/* Soft top highlight */}

                <div
                  className="absolute left-0 right-0 top-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                  }}
                />
              </div>

              {/* ================================================= */}
              {/* 2. PAPER */}
              {/* ================================================= */}

              <motion.div
                className="absolute left-[7%] z-20 w-[86%] overflow-hidden rounded-[4px]"
                initial={{
                  top: "12%",
                  height: "72%",
                  opacity: 0,
                  y: "12%",
                }}
                animate={
                  opened
                    ? {
                        top: "-55%",
                        height: "150%",
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        top: "12%",
                        height: "72%",
                        opacity: 0,
                        y: "12%",
                      }
                }
                transition={{
                  duration: 1.6,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage:
                    'url("/assets/texture/paper-texture.png")',

                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  boxShadow:
                    "0 20px 45px rgba(96, 35, 50, 0.18)",
                }}
              />

              {/* ================================================= */}
              {/* 3. FRONT POCKET */}
              {/* ================================================= */}

              <div
                className="absolute inset-0 z-30 overflow-hidden rounded-[5px]"
                style={{
                  clipPath:
                    "polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)",

                  background:
                    "linear-gradient(145deg, #ffb8b7 48%, #ffb8b7 100%)",

                  border:
                    "1px solid rgba(122, 35, 61, 0.18)",

                  filter:
                    "drop-shadow(0 5px 7px rgba(96,35,50,0.12))",
                }}
              >
                {/* LEFT FOLD */}

                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 0, 50% 50%, 0 100%)",

                    background:
                      "linear-gradient(135deg, #ff8c8a 0%, #ffd6d6 100%)",
                  }}
                />

                {/* RIGHT FOLD */}

                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(100% 0, 50% 50%, 100% 100%)",

                    background:
                      "linear-gradient(225deg, #f97976 0%, #ffd6d6 100%)",
                  }}
                />

                {/* BOTTOM FOLD */}

                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 100%, 50% 50%, 100% 100%)",

                    background:
                      "linear-gradient(180deg, #ffd6d6 10%, #ffb8b7 50%, #ff8c8a 100%)",
                  }}
                />

                {/* INNER DEPTH */}

                <div
                  className="absolute inset-0"
                  style={{
                    boxShadow:
                      "inset 0 0 22px rgba(122, 35, 61, 0.12)",
                  }}
                />

                {/* EDGE HIGHLIGHT */}

                <div
                  className="absolute inset-[2px]"
                  style={{
                    border:
                      "1px solid rgba(255,255,255,0.18)",

                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* ================================================= */}
              {/* 4. FLAP */}
              {/* ================================================= */}

              <motion.div
                className={`absolute left-0 top-0 w-full ${
                  opened ? "z-[15]" : "z-40"
                }`}
                initial={{
                  scaleY: 1,
                  y: 0,
                }}
                animate={{
                  scaleY: opened ? -1 : 1,
                  y: opened ? "-100%" : 0,
                }}
                transition={{
                  scaleY: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },

                  y: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={{
                  height: "52%",
                  transformOrigin: "50% 50%",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 50% 100%)",

                    background:
                      "linear-gradient(180deg, #ffd6d6 0%, #ffb8b7 62%, #ff8c8a 100%)",

                    filter:
                      "drop-shadow(0 8px 8px rgba(96,35,50,0.16))",
                  }}
                >
                  {/* Flap highlight */}

                  <div
                    className="absolute left-[7%] right-[7%] top-[2%] h-[2px]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.58), transparent)",
                    }}
                  />

                  {/* Flap inner depth */}

                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow:
                        "inset 0 -10px 18px rgba(122,35,61,0.09)",
                    }}
                  />
                </div>
              </motion.div>

              {/* ================================================= */}
              {/* 5. WAX SEAL */}
              {/* ================================================= */}

              <motion.div
                className="absolute left-1/2 top-[51%] z-50 -translate-x-1/2 -translate-y-1/2"
                initial={{
                  opacity: 0,
                  scale: 0.45,
                }}
                animate={{
                  opacity: 1,
                  scale: [0.45, 1.14, 1],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  times: [0, 0.65, 1],
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  disabled={opened}
                  aria-label="Open mail"
                  className="cursor-pointer border-0 bg-transparent p-0 outline-none"
                  whileHover={
                    !opened
                      ? {
                          scale: 1.08,
                        }
                      : undefined
                  }
                  whileTap={
                    !opened
                      ? {
                          scale: 0.94,
                        }
                      : undefined
                  }
                >
                  <img
                    src="/assets/opening/wax-seal.png"
                    alt="Wax seal"
                    draggable={false}
                    className="block w-[clamp(64px,10vw,94px)]"
                    style={{
                      filter:
                        "drop-shadow(0 7px 9px rgba(67,43,17,0.30))",
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* ================================================= */}
            {/* CLICK TO OPEN */}
            {/* ================================================= */}

            <AnimatePresence>
              {!opened && (
                <motion.p
                  className="absolute left-1/2 top-[calc(100%+24px)] z-[100] -translate-x-1/2 whitespace-nowrap text-xs tracking-[0.2em] text-[#FFFFFF] sm:text-sm"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                  }}
                >
                  CLICK TO OPEN
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ================================================= */}
          {/* FULLSCREEN PAPER TRANSITION */}
          {/* ================================================= */}

          <AnimatePresence>
            {opened && (
              <motion.div
                className="pointer-events-none fixed inset-0 z-[10000]"
                initial={{
                  opacity: 0,
                  scale: 0.82,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.3,
                  delay: 2.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage:
                    'url("/assets/texture/paper-texture.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}