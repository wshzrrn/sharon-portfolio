"use client";

type ProjectCardProps = {
  title: string;
  chapter: string;
  description: string;
  color: string;
};

export default function ProjectCard({
  title,
  chapter,
  description,
  color,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        style={{
          backgroundColor: color,
        }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          p-8
          text-[#3F4A32]
          transition-all
          duration-500
          hover:-translate-y-3
          hover:rotate-1
          hover:shadow-[0_30px_60px_rgba(63,74,50,0.18)]
        "
      >

        {/* ============================================= */}
        {/* BOOKMARK */}
        {/* ============================================= */}

        <div className="absolute -top-10 right-8 transition-all duration-500 group-hover:top-0">
          <div
            className="
              h-16
              w-8
              rounded-b-xl
              bg-[#FFFDF5]
              shadow-sm
            "
          />
        </div>


        {/* ============================================= */}
        {/* CHAPTER */}
        {/* ============================================= */}

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#3F4A32]/60
          "
          style={{
            fontFamily: "var(--font-montserrat)",
          }}
        >
          CHAPTER {chapter}
        </p>


        {/* ============================================= */}
        {/* TITLE */}
        {/* ============================================= */}

        <h3
          className="
            mt-8
            text-4xl
            font-bold
            leading-tight
            text-[#3F4A32]
          "
          style={{
            fontFamily: "var(--font-montserrat)",
          }}
        >
          {title}
        </h3>


        {/* ============================================= */}
        {/* DESCRIPTION */}
        {/* ============================================= */}

        {description && (
          <p
            className="
              mt-6
              max-w-xl
              text-[15px]
              leading-7
              text-[#68705A]
            "
            style={{
              fontFamily: "var(--font-montserrat)",
            }}
          >
            {description}
          </p>
        )}


        {/* ============================================= */}
        {/* READ STORY */}
        {/* ============================================= */}

        <div
          className="
            mt-10
            flex
            items-center
            gap-2
            font-semibold
            text-[#3F4A32]
            transition-all
            duration-300
            group-hover:translate-x-2
          "
          style={{
            fontFamily: "var(--font-montserrat)",
          }}
        >
          Read Story

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </div>
  );
}