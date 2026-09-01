"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FadeUp from "../animations/FadeUp";

/* ================================================= */
/* TYPES */
/* ================================================= */

type JourneyItem = {
  title: string;
  subtitle: string;
  period: string;
  status: "In Progress" | "Finished";
  description?: string;
  bullets?: string[];
};

type Folder = {
  id: string;
  label: string;
  color: string;
  textColor: string;
};


/* ================================================= */
/* JOURNEY DATA */
/* ================================================= */

const journeyData: Record<
  string,
  JourneyItem[]
> = {

  /* ================================================= */
  /* 2026 */
  /* ================================================= */

  "2026": [
    {
      title: "Creative Technology Project",
      subtitle: "Personal Project",
      period: "Jan 2026 — Present",
      status: "In Progress",
      description:
        "A personal project exploring the combination of technology, design, and creative problem-solving.",
      bullets: [
        "Currently developing and refining the project concept and implementation.",
      ],
    },
  ],


  /* ================================================= */
  /* 2025 */
  /* ================================================= */

  "2025": [

    {
      title: "Sing Along with GMS Live Kidz",
      subtitle: "Secretary",
      period: "Jun 2025 — Sep 2025",
      status: "Finished",
      description:
        "Served as Secretary for Sing Along with GMS Live Kidz, an event attended by approximately 2,000 participants.",
      bullets: [
        "Managed team coordination and communicated important reminders to keep tasks and event preparations on track.",
        "Followed up on team responsibilities and maintained clear communication throughout the event preparation process.",
      ],
    },

    {
      title: "The Reality of Project Management: Lessons from the Business Frontline",
      subtitle: "Development",
      period: "24 Nov 2025",
      status: "Finished",
      description:
        "Participated in a student development activity focused on project management and real-world business practices.",
    },

    {
      title: "Entrepreneurship Market: Innovation Business",
      subtitle: "Development",
      period: "19 Nov 2025",
      status: "Finished",
      description:
        "Participated in a development activity focused on entrepreneurship, innovation, and business perspectives.",
    },

    {
      title: "Business Market Test",
      subtitle: "Development",
      period: "12 Nov 2025",
      status: "Finished",
      description:
        "Participated in a development activity focused on business testing and market understanding.",
    },

    {
      title: "Excellence Program",
      subtitle: "Student Development",
      period: "15 Sep 2025",
      status: "Finished",
      description:
        "Participated in the Excellence Program as part of student development activities.",
    },

    {
      title: "From Zero to Hero: Adobe Workshop",
      subtitle: "Workshop",
      period: "14 Sep 2025",
      status: "Finished",
      description:
        "Participated in an Adobe workshop focused on developing practical creative and digital design skills.",
    },

    {
      title: "Responding Period 24.20",
      subtitle: "Development",
      period: "03 Mar 2025",
      status: "Finished",
      description:
        "Participated in a student development activity as part of the BINUS Responding Period program.",
    },

    {
      title: "Python Tutoring Class",
      subtitle: "Programming",
      period: "2025",
      status: "Finished",
      description:
        "Taught Python programming fundamentals to students from a lower academic batch within the same major.",
      bullets: [
        "Facilitated learning through coding explanations, problem-solving sessions, and practical exercises to help students strengthen their understanding of programming concepts.",
      ],
    },

  ],


  /* ================================================= */
  /* 2024 */
  /* ================================================= */

  "2024": [

    {
      title: "AIESEC in BINUS",
      subtitle: "ELD Marketing",
      period: "2023 — 2024",
      status: "Finished",
      description:
        "Served as a member of the ELD Marketing team at AIESEC in BINUS.",
      bullets: [
        "Contributed to marketing activities and initiatives within the ELD team.",
      ],
    },

    {
      title: "Talent Management — Drama Musikal Namu",
      subtitle: "Talent Management",
      period: "Dec 2024",
      status: "Finished",
      description:
        "Served as part of the Talent Management team for Drama Musikal Namu.",
      bullets: [
        "Supported talent coordination and communication throughout the event preparation process.",
      ],
    },

    {
      title: "FIESTA FESTIVAL 2023",
      subtitle: "Development",
      period: "Nov 2024",
      status: "Finished",
      description:
        "Participated in FIESTA FESTIVAL as part of student development activities.",
    },

    {
      title: "Enterprise System, A True and Smart Business Integration",
      subtitle: "Enterprise Systems",
      period: "29 Nov 2024",
      status: "Finished",
      description:
        "Participated in a workshop focused on enterprise systems, business integration, and ERP concepts.",
    },

    {
      title: "Freshman Partner – First Year Program",
      subtitle: "Student Development",
      period: "09 Sep 2024",
      status: "Finished",
      description:
        "Participated in the Freshman Partner first-year program and supported the development of new students.",
    },

    {
      title: "Volunteer ComServ by Character Building Agama Event",
      subtitle: "Community Service",
      period: "Sep 2024 — Jan 2025",
      status: "Finished",
      description:
        "Participated in a community service activity as part of Character Building Agama.",
    },

    {
      title: "Volunteer ComServ by Environment Project",
      subtitle: "Community Service",
      period: "Sep 2024 — Jan 2025",
      status: "Finished",
      description:
        "Participated in an environmental community service activity as part of Character Building Kewarganegaraan.",
    },

    {
      title: "Best MCU? Sorting? Booster #2 Workshop",
      subtitle: "Workshop",
      period: "14 May 2024",
      status: "Finished",
      description:
        "Participated in a student development workshop.",
    },

    {
      title: "Be Fast Be The Champion: Your Effort Matters",
      subtitle: "Development",
      period: "13 May 2024",
      status: "Finished",
      description:
        "Participated in BINUS Festival focused on personal development and achievement.",
    },

    {
      title: "Photography Project",
      subtitle: "Photography",
      period: "2024",
      status: "Finished",
      description:
        "Created photography concepts using composition and visual storytelling techniques.",
      bullets: [
        "Produced and edited visual content using digital tools.",
        "Applied lighting and composition principles for effective visual communication.",
      ],
    },

    {
      title: "Textile Microelectronics",
      subtitle: "Technology & Innovation",
      period: "28 Feb 2024",
      status: "Finished",
      description:
        "Participated in a development activity related to technology and innovation.",
    },

    {
      title: "Volunteer ComServ by TFI Friend Project – Tree Planting",
      subtitle: "Community Service",
      period: "Oct 2024",
      status: "Finished",
      description:
        "Participated in a tree-planting community service activity at Kebun KWT Asrikaton.",
    },

  ],


  /* ================================================= */
  /* ≤ 2023 */
  /* ================================================= */

  "2023": [

    {
      title: "What are your SDGs?",
      subtitle: "Community Service",
      period: "Sep 2023 — Nov 2023",
      status: "Finished",
      description:
        "Participated in a community service activity introducing the Sustainable Development Goals.",
    },

    {
      title: "Good Health and Well-Being SDG 3",
      subtitle: "Community Service",
      period: "Sep 2023 — Nov 2023",
      status: "Finished",
      description:
        "Participated in a community service activity related to Sustainable Development Goal 3: Good Health and Well-Being.",
    },

    {
      title: "Saving Sea Turtles: A Key Step Toward Preserving Marine Ecosystems and Supporting Life Below Water",
      subtitle: "Community Service",
      period: "Jul 2023",
      status: "Finished",
      description:
        "Participated in a community service activity focused on marine ecosystem preservation and life below water.",
    },

    {
      title: "Volunteer ComServ by Mandiri – Digital Survival Kit",
      subtitle: "Community Service",
      period: "2023",
      status: "Finished",
      description:
        "Participated in a community service activity providing digital survival kit socialization at SMAN 10 Malang.",
    },

    {
      title: "Volunteer ComServ by TFI Friend Project – Tree Planting",
      subtitle: "Community Service",
      period: "2023",
      status: "Finished",
      description:
        "Participated in a tree-planting community service activity at Kebun KWT Asrikaton.",
    },

    {
      title: "Information Management Project",
      subtitle: "Development",
      period: "07 Sep 2023",
      status: "Finished",
      description:
        "Participated in a student development activity related to information management.",
    },

    {
      title: "First Year Program – Orientation & Transition Program",
      subtitle: "Student Development",
      period: "24 Jul 2023",
      status: "Finished",
      description:
        "Participated in a first-year orientation and transition program at BINUS University.",
    },

    {
      title: "FIESTA FESTIVAL 2023",
      subtitle: "Development",
      period: "Nov 2023",
      status: "Finished",
      description:
        "Participated in FIESTA FESTIVAL 2023 as part of student development activities.",
    },

    {
      title: "Programming Workshop",
      subtitle: "Robotics & Arduino",
      period: "2022",
      status: "Finished",
      description:
        "Completed a one-month Robotics and Arduino programming training program focused on programming fundamentals, robotics systems, and hands-on project implementation.",
      bullets: [
        "Recognized as Best Participant for outstanding performance, problem-solving abilities, and active participation during the program.",
      ],
    },

  ],
};


/* ================================================= */
/* FOLDERS */
/* ================================================= */

const folders: Folder[] = [
  {
    id: "2026",
    label: "2026",
    color: "#CF1C1F",
    textColor: "#FEC841",
  },

  {
    id: "2025",
    label: "2025",
    color: "#713901",
    textColor: "#FFF7E7",
  },

  {
    id: "2024",
    label: "2024",
    color: "#FFD6D6",
    textColor: "#BB7D40",
  },

  {
    id: "2023",
    label: "≤ 2023",
    color: "#709F57",
    textColor: "#FFF7E7",
  },
];


/* ================================================= */
/* EXPERIENCE */
/* ================================================= */

export default function Experience() {
  const [activeYear, setActiveYear] =
    useState("2026");

  const activeFolder =
    folders.find(
      (folder) =>
        folder.id === activeYear
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
                overflow-x-auto
                overflow-y-hidden
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
                      animate={isActive ? { y: -6 } : { y: 0 }}
                      whileHover={{
                        y: isActive ? -10 : -4,
                      }}
                      whileTap={{
                        scale: 0.97,
                        y: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        mass: 0.8,
                      }}
                      className="
                        relative
                        flex
                        h-[55px]
                        w-[150px]
                        shrink-0
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
                    x: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    x: -10,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
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
                      {activeFolder.label}
                    </h3>

                  </div>


                  {/* ================================================= */}
                  {/* EMPTY */}
                  {/* ================================================= */}

                  {activeItems.length ===
                    0 && (
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

                  {activeItems.length >
                    0 && (
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
                            key={`${item.title}-${item.period}-${index}`}
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

                            {/* ============================================= */}
                            {/* PERIOD + STATUS */}
                            {/* ============================================= */}

                            <div
                              className="
                                flex
                                items-start
                                justify-between
                                gap-3
                              "
                            >

                              <span
                                className="
                                  text-xs
                                  font-bold
                                  leading-5
                                  tracking-[0.06em]
                                  text-[#CF1C1F]
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-montserrat)",
                                }}
                              >
                                {item.period}
                              </span>


                              {/* STATUS */}

                              <span
                                className="
                                  shrink-0
                                  rounded-full
                                  border
                                  px-3
                                  py-1
                                  text-[9px]
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-montserrat)",

                                  color:
                                    item.status ===
                                    "In Progress"
                                      ? "#BB7D40"
                                      : "#709F57",

                                  borderColor:
                                    item.status ===
                                    "In Progress"
                                      ? "#BB7D40"
                                      : "#709F57",

                                  backgroundColor:
                                    item.status ===
                                    "In Progress"
                                      ? "#FFEDC9"
                                      : "#EAF2E5",
                                }}
                              >
                                {item.status ===
                                "In Progress"
                                  ? "● In Progress"
                                  : "✓ Finished"}
                              </span>

                            </div>


                            {/* ============================================= */}
                            {/* TITLE */}
                            {/* ============================================= */}

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


                            {/* ============================================= */}
                            {/* SUBTITLE */}
                            {/* ============================================= */}

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


                            {/* ============================================= */}
                            {/* DESCRIPTION */}
                            {/* ============================================= */}

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
                                {
                                  item.description
                                }
                              </p>
                            )}


                            {/* ============================================= */}
                            {/* BULLETS */}
                            {/* ============================================= */}

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
                                        {
                                          bullet
                                        }
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