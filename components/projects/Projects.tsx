"use client";

import FadeUp from "../animations/FadeUp";

const projects = [
  {
    chapter: "01",
    title: "College Projects [SI]",
    category: "",
    description: "",
    color: "#BB7D40",
    span: "lg:col-span-8",
  },
  {
    chapter: "02",
    title: "Work",
    category: "",
    description: "",
    color: "#FFD6D6",
    span: "lg:col-span-4",
  },
  {
    chapter: "03",
    title: "Random",
    category: "",
    description: "",
    color: "#FEC841",
    span: "lg:col-span-4",
  },
  {
    chapter: "04",
    title: "College Projects [DKV]",
    category: "",
    description: "",
    color: "#709F57",
    span: "lg:col-span-8",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#CF1C1F]
        px-6
        pt-24
        pb-28
        lg:px-10
      "
    >

      {/* ================================================= */}
{/* TOP SCALLOPED EDGE */}
{/* ================================================= */}

<div
  className="
    pointer-events-none
    absolute
    left-0
    right-0
    top-0
    z-20
    h-[100px]
    overflow-hidden
  "
>
  <div className="absolute -top-[30px] left-0 flex w-full">
    {Array.from({ length: 30 }).map((_, index) => (
      <div
        key={`top-${index}`}
        className="
          h-[70px]
          w-[70px]
          shrink-0
          rounded-full
          bg-[#FFF7E7]
        "
      />
    ))}
  </div>
</div>


      {/* ================================================= */}
      {/* PROJECT CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >

        {/* ================================================= */}
        {/* TITLE */}
        {/* ================================================= */}

        <FadeUp>
          <div className="relative flex justify-center">

            <h2
              className="
                relative
                z-10
                text-center
                text-[90px]
                leading-[0.75]
                text-[#FEC841]
                sm:text-[110px]
                md:text-[130px]
                lg:text-[150px]
              "
              style={{
                fontFamily: "var(--font-passions-conflict)",
                fontWeight: 400,


                textShadow:
                  "3px 4px 0 #713901, 0 8px 18px rgba(113,57,1,0.25)",
              }}
            >
              Projects
            </h2>

          </div>
        </FadeUp>


        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            lg:auto-rows-[480px]
            lg:grid-cols-12
            lg:items-stretch
          "
        >

          {projects.map((project, index) => (

            <div
              key={project.title}
              className={`${project.span} h-full`}
            >

              <FadeUp
                delay={index * 0.08}
                className="h-full"
              >

                <ProjectCard {...project} />

              </FadeUp>

            </div>

          ))}

        </div>

      </div>


      {/* ================================================= */}
      {/* BOTTOM SCALLOPED EDGE */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-[100px]
          overflow-hidden
        "
      >
        <div className="absolute -bottom-[28px] left-0 flex w-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={`bottom-${index}`}
              className="
                h-[70px]
                w-[70px]
                shrink-0
                rounded-full
                bg-[#FFF7E7]
              "
            />
          ))}
        </div>
      </div>

    </section>
  );
}


/* ================================================= */
/* PROJECT CARD */
/* ================================================= */

function ProjectCard({
  chapter,
  title,
  category,
  description,
  color,
}: {
  chapter: string;
  title: string;
  category: string;
  description: string;
  color: string;
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        rounded-[30px]
        bg-white
        shadow-[0_18px_55px_rgba(0,0,0,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]
      "
    >

      {/* ============================================= */}
      {/* COLOR AREA */}
      {/* ============================================= */}

      <div
        className="
          relative
          h-[62%]
          min-h-[220px]
          overflow-hidden
        "
        style={{
          backgroundColor: color,
        }}
      >

        {/* Decorative circle */}

        <div
          className="
            absolute
            -right-16
            -top-16
            h-48
            w-48
            rounded-full
            border
            border-white/25
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />


        {/* Large chapter number */}

        <div
          className="
            absolute
            left-7
            top-6
            text-[86px]
            leading-none
            text-white/10
            transition-transform
            duration-700
            group-hover:scale-110
          "
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
          }}
        >
          {chapter}
        </div>


        {/* Chapter label */}

        <div
          className="
            absolute
            bottom-6
            left-7
            rounded-full
            border
            border-white/30
            bg-white/10
            px-4
            py-1.5
            text-[10px]
            tracking-[0.3em]
            text-white
            backdrop-blur-sm
          "
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
          }}
        >
          CHAPTER {chapter}
        </div>


        {/* Bookmark */}

        <div
          className="
            absolute
            right-7
            top-0
            flex
            h-16
            w-7
            items-end
            justify-center
            rounded-b-xl
            bg-[#FFEDC9]
            text-[10px]
            text-[#3F4A32]
            shadow-sm
            transition-all
            duration-300
            group-hover:h-20
          "
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
          }}
        >
          <span className="mb-2">
            {chapter}
          </span>
        </div>

      </div>


      {/* ============================================= */}
      {/* CARD CONTENT */}
      {/* ============================================= */}

      <div
        className="
          flex
          h-[38%]
          flex-col
          justify-between
          px-7
          py-6
          sm:px-8
        "
      >

        <div>

          {/* TITLE */}

          <h3
            className="
              text-2xl
              leading-tight
              text-[#3F4A32]
              transition-colors
              duration-300
              group-hover:text-[#BB7D40]
            "
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
            }}
          >
            {title}
          </h3>


          {/* CATEGORY */}

          <p
            className="mt-2 text-sm text-[#BB7D40]"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
            }}
          >
            {category}
          </p>


          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              hidden
              max-w-2xl
              text-sm
              leading-6
              text-[#68705A]
              sm:block
            "
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            {description}
          </p>

        </div>


        {/* READ CHAPTER */}

        <button
          className="
            mt-4
            flex
            w-fit
            items-center
            gap-2
            text-sm
            text-[#FB2501]
            transition-all
            duration-300
            group-hover:translate-x-2
          "
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
          }}
        >
          Coming Soon

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>

      </div>

    </article>
  );
}