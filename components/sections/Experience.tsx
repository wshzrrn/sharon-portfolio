"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../animations/FadeUp";

type JourneyItem = {
  title: string;
  subtitle: string;
  year: string;
  description?: string;
  bullets?: string[];
};

type Folder = {
  id: string;
  label: string;
  color: string;
  textColor: string;
};

const journeyData: Record<string, JourneyItem[]> = {
  "2022-2023": [
    {
      title: "Programming Workshop",
      subtitle: "Robotics & Arduino",
      year: "2022",
      description:
        "Completed a one-month Robotics and Arduino programming training program focused on programming fundamentals, robotics systems, and hands-on project implementation.",
      bullets: [
        "Recognized as Best Participant for outstanding performance, problem-solving abilities, and active participation during the program.",
      ],
    },
  ],

  "2023-2024": [],

  "2024-2025": [
    {
      title: "Freshmen Partner",
      subtitle: "First Year Program",
      year: "2024 - 2025",
      description:
        "Mentored 5 first-year students for one academic year by providing guidance on academic adaptation, university requirements, and personal development.",
      bullets: [
        "Assisted students in achieving one of their graduation requirements earlier through continuous support, progress monitoring, and effective communication.",
      ],
    },

    {
      title: "Photography Project",
      subtitle: "Photography",
      year: "2024",
      description:
        "Created photography concepts using composition and visual storytelling techniques.",
      bullets: [
        "Produced and edited visual content using digital tools.",
        "Applied lighting and composition principles for effective visual communication.",
      ],
    },
  ],

  "2025-2026": [
    {
      title: "Python Tutoring Class",
      subtitle: "Programming",
      year: "2025",
      description:
        "Taught Python programming fundamentals to students from a lower academic batch within the same major.",
      bullets: [
        "Facilitated learning through coding explanations, problem-solving sessions, and practical exercises to help students strengthen their understanding of programming concepts.",
      ],
    },

    {
      title: "Booking Management Database System",
      subtitle: "Omnichannel",
      year: "2025",
      bullets: [
        "Designed and developed a database management system for room reservation processes across multiple booking channels.",
        "Created database structures, entity relationships, and booking workflows using ERD concepts.",
        "Implemented reservation validation and room availability processes to improve system efficiency.",
      ],
    },

    {
      title: "UI/UX Case Study",
      subtitle: "SehatYuk Mobile Application",
      year: "2025",
      bullets: [
        "Conducted user-centered research and developed interface solutions for a healthcare application targeting young parents.",
        "Created user flows, wireframes, and prototypes to improve accessibility and usability.",
        "Designed interface structures focused on simple navigation and user experience optimization.",
      ],
    },

    {
      title: "System Testing & Implementation Project",
      subtitle: "System Testing",
      year: "2025",
      bullets: [
        "Conducted system testing and evaluation to identify errors and improve functionality.",
        "Assisted in implementation processes and documented testing results.",
        "Proposed improvements to optimize system performance.",
      ],
    },

    {
      title: "Project Management Project",
      subtitle: "Project Management",
      year: "2025",
      bullets: [
        "Planned project workflows, timelines, and task allocation.",
        "Collaborated with team members to achieve project goals efficiently.",
        "Monitored project progress and evaluated project outcomes.",
      ],
    },

    {
      title: "ChaynPay Fintech Branding Project",
      subtitle: "Branding & Visual Identity",
      year: "2025",
      bullets: [
        "Developed branding concepts and visual identity for a fintech payment solution focused on international transactions and remittance services.",
        "Created brand personality, visual assets, and design concepts to strengthen brand communication.",
        "Designed user-centered visual elements aligned with brand values and target audiences.",
      ],
    },

    {
      title: "Interactive Children's Illustration Book",
      subtitle: "Kota Solo",
      year: "2025",
      bullets: [
        "Designed and developed an interactive children's illustration book consisting of visual storytelling and interactive elements.",
        "Created illustrations, layouts, and engaging visual concepts to enhance children's learning experiences.",
        "Applied storytelling and visual communication principles to improve audience engagement.",
      ],
    },
  ],
};

const folders: Folder[] = [
  {
    id: "2022-2023",
    label: "2022-2023",
    color: "#709F57",
    textColor: "#FFF7E7",
  },
  {
    id: "2023-2024",
    label: "2023-2024",
    color: "#FFD6D6",
    textColor: "#BB7D40",
  },
  {
    id: "2024-2025",
    label: "2024-2025",
    color: "#713901",
    textColor: "#FFF7E7",
  },
  {
    id: "2025-2026",
    label: "2025-2026",
    color: "#CF1C1F",
    textColor: "#FEC841",
  },
];

export default function Experience() {
  const [activeYear, setActiveYear] =
    useState("2025-2026");

  const activeFolder =
    folders.find(
      (folder) => folder.id === activeYear
    ) ?? folders[0];

  const activeItems =
    journeyData[activeYear] ?? [];

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#FFF7E7]
        px-5
        py-20
        sm:px-8
        lg:px-10
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
        "
      >

        {/* ================================================= */}
        {/* TITLE */}
        {/* ================================================= */}

        <FadeUp>

          <div
            className="
              mb-8
              flex
              justify-end
            "
          >
            <h2
              className="
                text-right
                text-[48px]
                italic
                leading-none
                text-[#CF1C1F]
                sm:text-[60px]
                lg:text-[70px]
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
                fontWeight: 700,
              }}
            >
              Archived Journey.
            </h2>
          </div>

        </FadeUp>


        {/* ================================================= */}
        {/* ARCHIVE */}
        {/* ================================================= */}

        <FadeUp delay={0.1}>

          <div className="relative">

            {/* ================================================= */}
            {/* FOLDER TABS */}
            {/* ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                h-[58px]
                items-end
                gap-0
              "
            >

              {folders.map(
                (folder, index) => {

                  const isActive =
                    activeYear ===
                    folder.id;

                  return (
                    <motion.button
                      key={folder.id}
                      type="button"
                      onClick={() =>
                        setActiveYear(
                          folder.id
                        )
                      }

                      whileHover={{
                        y: -4,
                      }}

                      whileTap={{
                        scale: 0.98,
                      }}

                      className="
                        relative
                        flex
                        h-[55px]
                        w-[150px]
                        items-center
                        justify-center
                        rounded-t-[18px]
                        px-3
                        text-[13px]
                        font-semibold
                        transition-all
                        duration-300
                        sm:w-[175px]
                        sm:text-[14px]
                        lg:w-[190px]
                      "

                      style={{
                        backgroundColor:
                          folder.color,

                        color:
                          folder.textColor,

                        zIndex:
                          isActive
                            ? 50
                            : 40 - index,

                        boxShadow:
                          isActive
                            ? "0 -4px 12px rgba(113,57,1,0.10)"
                            : "none",
                      }}
                    >
                      {folder.label}
                    </motion.button>
                  );

                }
              )}

            </div>


            {/* ================================================= */}
            {/* JOURNAL BODY */}
            {/* ================================================= */}

            <motion.div
              className="
                relative
                min-h-[650px]
                rounded-b-[28px]
                rounded-tr-[28px]
                px-6
                py-10
                sm:px-10
                sm:py-12
                lg:px-16
                lg:py-14
              "

              animate={{
                backgroundColor:
                  activeFolder.color,
              }}

              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >

              <AnimatePresence
                mode="wait"
              >

                <motion.div
                  key={activeYear}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -15,
                  }}

                  transition={{
                    duration: 0.35,
                  }}
                >

                  {/* ================================================= */}
                  {/* YEAR TITLE */}
                  {/* ================================================= */}

                  <div
                    className="
                      mb-9
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div
                      className="
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                      "
                      style={{
                        backgroundColor:
                          activeFolder.textColor,
                      }}
                    />

                    <h3
                      className="
                        text-3xl
                        font-bold
                        sm:text-4xl
                      "
                      style={{
                        fontFamily:
                          "var(--font-montserrat)",

                        color:
                          activeFolder.textColor,
                      }}
                    >
                      {activeYear}
                    </h3>

                  </div>


                  {/* ================================================= */}
                  {/* EMPTY */}
                  {/* ================================================= */}

                  {activeItems.length === 0 && (

                    <div
                      className="
                        flex
                        min-h-[350px]
                        items-center
                        justify-center
                      "
                    >

                      <p
                        className="
                          text-center
                          text-base
                          font-semibold
                          sm:text-lg
                        "
                        style={{
                          fontFamily:
                            "var(--font-montserrat)",

                          color:
                            activeFolder.textColor,
                        }}
                      >
                        No archive for this period yet.
                      </p>

                    </div>

                  )}


                  {/* ================================================= */}
                  {/* CARDS */}
                  {/* ================================================= */}

                  {activeItems.length > 0 && (

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:gap-7
                      "
                    >

                      {activeItems.map(
                        (
                          item,
                          index
                        ) => (

                          <motion.article
                            key={`${item.title}-${index}`}

                            initial={{
                              opacity: 0,
                              y: 20,
                            }}

                            animate={{
                              opacity: 1,
                              y: 0,
                            }}

                            transition={{
                              delay:
                                index * 0.07,
                              duration: 0.4,
                            }}

                            className="
                              rounded-[22px]
                              bg-[#FFF7E7]
                              p-6
                              shadow-[0_10px_30px_rgba(113,57,1,0.12)]
                              transition-transform
                              duration-300
                              hover:-translate-y-1
                              sm:p-7
                              lg:p-8
                            "
                          >

                            {/* DATE */}

                            <span
                              className="
                                text-xs
                                font-bold
                                tracking-[0.18em]
                                text-[#CF1C1F]
                              "
                              style={{
                                fontFamily:
                                  "var(--font-montserrat)",
                              }}
                            >
                              {item.year}
                            </span>


                            {/* TITLE */}

                            <h4
                              className="
                                mt-2
                                text-xl
                                font-bold
                                leading-tight
                                text-[#713901]
                                sm:text-2xl
                              "
                              style={{
                                fontFamily:
                                  "var(--font-montserrat)",
                              }}
                            >
                              {item.title}
                            </h4>


                            {/* SUBTITLE */}

                            <p
                              className="
                                mt-1
                                text-sm
                                font-semibold
                                text-[#BB7D40]
                              "
                              style={{
                                fontFamily:
                                  "var(--font-montserrat)",
                              }}
                            >
                              {item.subtitle}
                            </p>


                            {/* DESCRIPTION */}

                            {item.description && (

                              <p
                                className="
                                  mt-4
                                  text-sm
                                  leading-6
                                  text-[#713901]
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-montserrat)",
                                }}
                              >
                                {item.description}
                              </p>

                            )}


                            {/* BULLETS */}

                            {item.bullets && (

                              <ul
                                className="
                                  mt-4
                                  space-y-2
                                  text-sm
                                  leading-6
                                  text-[#713901]
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-montserrat)",
                                }}
                              >

                                {item.bullets.map(
                                  (
                                    bullet,
                                    bulletIndex
                                  ) => (

                                    <li
                                      key={
                                        bulletIndex
                                      }
                                      className="
                                        flex
                                        gap-2
                                      "
                                    >

                                      <span
                                        className="
                                          shrink-0
                                          text-[#CF1C1F]
                                        "
                                      >
                                        •
                                      </span>

                                      <span>
                                        {bullet}
                                      </span>

                                    </li>

                                  )
                                )}

                              </ul>

                            )}

                          </motion.article>

                        )
                      )}

                    </div>

                  )}

                </motion.div>

              </AnimatePresence>

            </motion.div>

          </div>

        </FadeUp>

      </div>
    </section>
  );
}