"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, type RefObject, useState, useEffect } from "react";

const tools = [
  {
    name: "Notion",
    image: "/assets/tools/notion.png",
    position: "left-[8%] top-[8%]",
    rotate: "-rotate-6",
  },
  {
    name: "Canva",
    image: "/assets/tools/canva.png",
    position: "left-[30%] top-[12%]",
    rotate: "rotate-3",
  },
  {
    name: "VS Code",
    image: "/assets/tools/vscode.png",
    position: "left-[55%] top-[10%]",
    rotate: "-rotate-3",
  },
  {
    name: "Premiere Pro",
    image: "/assets/tools/premiere-pro.png",
    position: "left-[72%] top-[18%]",
    rotate: "rotate-6",
  },
  {
    name: "Lightroom",
    image: "/assets/tools/lightroom.png",
    position: "left-[12%] top-[42%]",
    rotate: "rotate-3",
  },
  {
    name: "After Effects",
    image: "/assets/tools/after-effects.png",
    position: "left-[34%] top-[48%]",
    rotate: "-rotate-6",
  },
  {
    name: "GitHub",
    image: "/assets/tools/github.png",
    position: "left-[57%] top-[43%]",
    rotate: "rotate-3",
  },
  {
    name: "Substack",
    image: "/assets/tools/substack.png",
    position: "left-[73%] top-[55%]",
    rotate: "-rotate-3",
  },
  {
    name: "Photoshop",
    image: "/assets/tools/photoshop.png",
    position: "left-[20%] top-[70%]",
    rotate: "rotate-6",
  },
  {
    name: "Illustrator",
    image: "/assets/tools/illustrator.png",
    position: "left-[48%] top-[72%]",
    rotate: "-rotate-6",
  },
  {
    name: "Figma",
    image: "/assets/tools/figma.png",
    position: "left-[67%] top-[72%]",
    rotate: "rotate-3",
  },
  {
    name: "CapCut",
    image: "/assets/tools/capcut.png",
    position: "left-[82%] top-[68%]",
    rotate: "-rotate-3",
  },
];

export default function About() {
  const toolsAreaRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setPrefersReducedMotion(!mediaQuery.matches);
  }, []);

  return (
    <section
      id="about"
      className="
        relative
        z-10
        mx-auto
        flex
        w-full
        max-w-[1300px]
        justify-center
        px-3
        py-10
      "
    >
      {/* ================================================= */}
      {/* ABOUT WRAPPER */}
      {/* ================================================= */}

      <div className="relative w-full">

        {/* ================================================= */}
        {/* YELLOW BLUR / GLOW */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-[18px]
            z-0
            rounded-[100px]
            bg-[#FEC841]
            blur-[12.5px]
          "
        />

        {/* ================================================= */}
        {/* MAIN YELLOW ABOUT BOX */}
        {/* ================================================= */}

        <motion.div
          className="
            relative
            z-10
            w-full
            overflow-hidden
            rounded-[42px]
            bg-[#FEC841]
            px-8
            py-10
            shadow-[0_12px_30px_rgba(187,125,64,0.18)]

            md:min-h-[600px]
            md:px-10
            md:py-9
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* ================================================= */}
{/* LEFT — GET TO KNOW ME */}
{/* ================================================= */}

<motion.div
  className="
    relative
    z-10
    w-full
    md:w-[42%]
  "
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true, amount: 0.15 }}
>
  {/* TITLE */}

  <h2
    className="
      text-[46px]
      leading-none
      text-[#FFF7E7]
    "
    style={{
      fontFamily: "var(--font-caveat)",
    }}
  >
    Get to know me...
  </h2>


  {/* ================================================= */}
  {/* NAME */}
  {/* ================================================= */}

  <div
    className="
      mt-5
      flex
      h-[62px]
      w-full
      max-w-[500px]
      items-center
      justify-center
      rounded-full
      bg-[#FFF7E7]
      px-6
      text-center
      text-[21px]
      font-semibold
      text-[#713901]
    "
    style={{
      fontFamily: "var(--font-montserrat)",
    }}
  >
    Sharon Glorya Putri Paingi
  </div>


  {/* ================================================= */}
  {/* BIRTHDAY */}
  {/* ================================================= */}

  <div
    className="
      mt-3
      flex
      h-[62px]
      w-full
      max-w-[500px]
      items-center
      justify-center
      rounded-full
      bg-[#FFF7E7]
      px-6
      text-center
      text-[21px]
      font-semibold
      text-[#713901]
    "
    style={{
      fontFamily: "var(--font-montserrat)",
    }}
  >
    Design & Branding
  </div>


  {/* ================================================= */}
  {/* EDUCATION */}
  {/* ================================================= */}

  <div
    className="
      mt-4
      w-full
      max-w-[500px]
      rounded-[16px]
      bg-[#FFD6D6]
      px-6
      py-6
    "
  >
    <h3
      className="
        text-[27px]
        font-extrabold
        leading-none
        text-[#CF1C1F]
      "
      style={{
        fontFamily: "var(--font-montserrat)",
      }}
    >
      Education
    </h3>

    <div
      className="
        mt-3
        text-[19px]
        font-bold
        leading-[1.15]
        text-[#713901]
      "
      style={{
        fontFamily: "var(--font-montserrat)",
      }}
    >
      <p>Bina Nusantara University (BINUS)</p>
      <p>SI Information System (SI)</p>
      <p>SI Visual Communication Design (DKV)</p>
    </div>

    <p
      className="
        mt-6
        text-[14px]
        font-semibold
        text-[#713901]
      "
      style={{
        fontFamily: "var(--font-montserrat)",
      }}
    >
      Sep 2023 — Present
    </p>

    <a
  href="/cv/sharon-glorya-cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#CF1C1F]
    px-6
    py-3
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_10px_25px_rgba(251,37,1,0.2)]
  "
  style={{
    fontFamily: "var(--font-montserrat)",
  }}
>
  View My CV
  <span>↗</span>
</a>
  </div>
</motion.div>


          {/* ================================================= */}
          {/* RIGHT — STARTER PACK */}
          {/* ================================================= */}

          <motion.div
            className="
              relative
              mt-8
              flex
              min-h-[500px]
              w-full
              items-start
              justify-center

              md:absolute
              md:right-[4%]
              md:top-[8%]
              md:mt-0
              md:w-[50%]
            "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* ================================================= */}
            {/* STARTER PACK CARD */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-10
                h-[500px]
                w-[900px]
                rounded-[34px]
                border
                border-[#BB7D40]/40
                bg-[#FFD6D6]
                shadow-[0_5px_8px_rgba(113,57,1,0.18)]
              "
            >

              {/* ================================================= */}
              {/* STARTER PACK CLIP */}
              {/* ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -top-[1px]
                  left-1/2
                  z-20
                  h-[77px]
                  w-[192px]
                  -translate-x-1/2
                "
              >


                {/* MAIN CLIP BODY */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-0
                    h-[40px]
                    w-full
                    rounded-[25px]
                    bg-[#FEC841]
                    shadow-[inset_0_4px_4px_rgba(113,57,1,0.48)]
                  "
                />

              </div>


              {/* ================================================= */}
              {/* STARTER PACK TITLE */}
              {/* ================================================= */}

              <h3
                className="
                  absolute
                  left-0
                  right-0
                  top-[68px]
                  text-center
                  text-[40px]
                  font-extrabold
                  italic
                  leading-none
                  text-[#CF1C1F]
                "
                style={{
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                STARTER PACK
              </h3>


              {/* ================================================= */}
              {/* DRAG AREA */}
              {/* ================================================= */}

              <div
                ref={toolsAreaRef}
                className="
                  absolute
                  left-[22px]
                  right-[22px]
                  top-[118px]
                  bottom-[22px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#BB7D40]/20
                  bg-[#FFF0F0]
                  shadow-[inset_0_2px_5px_rgba(113,57,1,0.06)]
                "
              >

                {tools.map((tool) => (
                  <DraggableTool
                    key={tool.name}
                    {...tool}
                    constraintsRef={toolsAreaRef}
                  />
                ))}

              </div>

            </div>


            {/* ================================================= */}
            {/* DRAG ME STICKER */}
            {/* ================================================= */}

            <motion.div
              className="
                absolute
                bottom-[10px]
                right-[-25px]
                z-50
                flex
                h-[65px]
                w-[150px]
                -rotate-[10deg]
                items-center
                justify-center
                rounded-[50%]
                bg-[#CF1C1F]
                text-center
                shadow-[0_5px_10px_rgba(113,57,1,0.15)]
              "
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "backOut" }}
              viewport={{ once: true, amount: 0.15 }}
            >

              <span
                className="
                  text-[35px]
                  font-semibold
                  text-[#FFF7E7]
                "
                style={{
                  fontFamily: "var(--font-caveat)",
                }}
              >
                drag me!
              </span>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}


/* ================================================= */
/* DRAGGABLE TOOL */
/* ================================================= */

function DraggableTool({
  name,
  image,
  position,
  rotate,
  constraintsRef,
}: {
  name: string;
  image: string;
  position: string;
  rotate: string;
  constraintsRef: RefObject<HTMLDivElement | null>;
}) {
  // Parse position to get tool index for stagger
  const toolIndex = tools.findIndex((tool) => tool.name === name);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.08}
      whileDrag={{
        scale: 1.08,
        rotate: 0,
        zIndex: 50,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + (toolIndex * 0.05),
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.15 }}
      className={`
        absolute
        ${position}
        ${rotate}
        z-10
        flex
        h-[100px]
        w-[100px]
        cursor-grab
        items-center
        justify-center
        rounded-[20px]
        bg-[#FFF7E7]
        shadow-[0_5px_12px_rgba(113,57,1,0.12)]
        active:cursor-grabbing
      `}
      title={name}
    >
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        draggable={false}
        className="
          h-[64px]
          w-[64px]
          object-contain
        "
      />
    </motion.div>
  );
}