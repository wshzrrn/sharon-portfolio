"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "read" | "open";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDevice = () => setDesktop(media.matches);
    updateDevice();
    media.addEventListener("change", updateDevice);

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "[data-cursor], a, button, #projects article"
      ) as HTMLElement | null;

      if (!interactive) {
        setMode("default");
        return;
      }

      const customMode = interactive.getAttribute("data-cursor");

      if (customMode === "read" || interactive.closest("#projects article")) {
        setMode("read");
      } else {
        setMode("open");
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      media.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!desktop) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, [desktop]);

  if (!desktop) return null;

  const isInteractive = mode !== "default";

  return (
    <>
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          body.custom-cursor-enabled,
          body.custom-cursor-enabled * {
            cursor: none !important;
          }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        animate={{
          x: position.x,
          y: position.y,
          opacity: visible ? 1 : 0,
          scale: isInteractive ? 1 : 0.7,
        }}
        transition={{
          x: {
            duration: 0.06,
            ease: "linear",
          },
          y: {
            duration: 0.06,
            ease: "linear",
          },
          opacity: {
            duration: 0.1,
          },
          scale: {
            duration: 0.15,
            ease: "easeOut",
          },
        }}
      >
        <motion.div
          animate={{
            width: isInteractive ? 72 : 12,
            height: isInteractive ? 72 : 12,
            x: isInteractive ? -36 : -6,
            y: isInteractive ? -36 : -6,
            backgroundColor: "#FB2501",
          }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center rounded-full shadow-lg"
        >
          {mode !== "default" && (
            <span className="text-[10px] font-semibold tracking-[0.12em] text-white">
              {mode === "read" ? "READ" : "OPEN"}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}