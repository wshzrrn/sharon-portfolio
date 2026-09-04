"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type CarouselProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  image?: string;
  description?: string;

  // Cukup isi salah satu atau dua-duanya.
  url?: string;
  file?: string;
};

export type CarouselCategory = {
  number: string;
  name: string;
  description?: string;
  accent: string;
  projects: CarouselProject[];
};

type ProjectCarouselProps = {
  category: CarouselCategory;
  index: number;
};

/* ================================================= */
/* AUTO PREVIEW URL                                  */
/* ================================================= */

function getPreviewUrl(
  url?: string,
  file?: string
) {
  // PDF / image dari folder public.
  if (file) return file;

  if (!url) return undefined;

  // Figma
  if (url.includes("figma.com")) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
      url
    )}`;
  }

  // Google Drive file
  const driveMatch = url.match(
    /drive\.google\.com\/file\/d\/([^/]+)/
  );

  if (driveMatch?.[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  // Google Docs
  const docsMatch = url.match(
    /docs\.google\.com\/document\/d\/([^/]+)/
  );

  if (docsMatch?.[1]) {
    return `https://docs.google.com/document/d/${docsMatch[1]}/preview`;
  }

  // Google Slides
  const slidesMatch = url.match(
    /docs\.google\.com\/presentation\/d\/([^/]+)/
  );

  if (slidesMatch?.[1]) {
    return `https://docs.google.com/presentation/d/${slidesMatch[1]}/preview`;
  }

  // Google Sheets
  const sheetsMatch = url.match(
    /docs\.google\.com\/spreadsheets\/d\/([^/]+)/
  );

  if (sheetsMatch?.[1]) {
    return `https://docs.google.com/spreadsheets/d/${sheetsMatch[1]}/preview`;
  }

  // Canva
  if (url.includes("canva.com/design")) {
    const cleanUrl = url.split("?")[0];

    return `${cleanUrl}/view?embed`;
  }

  // Instagram post atau reel
  const instagramMatch = url.match(
    /instagram\.com\/(p|reel)\/([^/?#]+)/
  );

  if (instagramMatch?.[1] && instagramMatch[2]) {
    const postType = instagramMatch[1];
    const postId = instagramMatch[2];

    return `https://www.instagram.com/${postType}/${postId}/embed/`;
  }

  // TikTok video
  const tikTokMatch = url.match(
    /tiktok\.com\/@[^/]+\/video\/(\d+)/
  );

  if (tikTokMatch?.[1]) {
    return `https://www.tiktok.com/player/v1/${tikTokMatch[1]}?controls=1&description=1`;
  }

  // Jangan iframe website biasa—banyak yang memblokirnya.
  return undefined;
}

function isImageUrl(url?: string) {
  return Boolean(
    url?.match(/\.(jpg|jpeg|png|webp|gif)$/i)
  );
}

/* ================================================= */
/* PROJECT CAROUSEL                                  */
/* ================================================= */

export default function ProjectCarousel({
  category,
  index,
}: ProjectCarouselProps) {
  const scrollRef =
    useRef<HTMLDivElement>(null);

  const [
    selectedProject,
    setSelectedProject,
  ] = useState<CarouselProject | null>(
    null
  );

  const scroll = (
    direction: "left" | "right"
  ) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollRef.current.clientWidth *
            0.8
          : -scrollRef.current.clientWidth *
            0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const closeOnEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      closeOnEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        closeOnEscape
      );
    };
  }, []);

  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {/* HEADER */}

        <div
          className="
            mb-5
            flex
            items-end
            justify-between
            gap-4
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#FEC841]
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              Category {category.number}
            </p>

            <h3
              className="
                mt-1
                text-2xl
                font-extrabold
                text-[#FFF7E7]
                sm:text-3xl
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              {category.name}
            </h3>

            {category.description && (
              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#FFF7E7]/75
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                {category.description}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <CarouselButton
              label={`Previous ${category.name} projects`}
              onClick={() =>
                scroll("left")
              }
            >
              ←
            </CarouselButton>

            <CarouselButton
              label={`Next ${category.name} projects`}
              onClick={() =>
                scroll("right")
              }
            >
              →
            </CarouselButton>
          </div>
        </div>

        {/* CAROUSEL */}

        <div
          ref={scrollRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-5
            scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-5
          "
        >
          {category.projects.map(
            (project, projectIndex) => (
              <button
                key={project.id}
                type="button"
                onClick={() =>
                  setSelectedProject(project)
                }
                className="
                  group
                  w-[230px]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-[24px]
                  bg-[#FFF7E7]
                  text-left
                  shadow-[0_15px_30px_rgba(113,57,1,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FEC841]
                  sm:w-[260px]
                "
              >
                {/* CARD IMAGE */}

                <div
                  className="
                    relative
                    aspect-[3/4]
                    overflow-hidden
                  "
                  style={{
                    backgroundColor:
                      category.accent,
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <>
                      <div
                        className="
                          absolute
                          -right-10
                          -top-10
                          h-36
                          w-36
                          rounded-full
                          border-[18px]
                          border-white/20
                        "
                      />

                      <div
                        className="
                          absolute
                          -bottom-14
                          -left-10
                          h-36
                          w-36
                          rounded-full
                          bg-white/15
                        "
                      />

                      <span
                        className="
                          absolute
                          left-5
                          top-4
                          text-[64px]
                          font-extrabold
                          leading-none
                          text-white/20
                        "
                        style={{
                          fontFamily:
                            "var(--font-montserrat)",
                        }}
                      >
                        {category.number}
                      </span>

                      <span
                        className="
                          absolute
                          bottom-5
                          left-5
                          rounded-full
                          border
                          border-white/40
                          bg-white/15
                          px-3
                          py-1
                          text-[9px]
                          font-bold
                          tracking-[0.16em]
                          text-white
                          backdrop-blur-sm
                        "
                        style={{
                          fontFamily:
                            "var(--font-montserrat)",
                        }}
                      >
                        PROJECT{" "}
                        {String(
                          projectIndex + 1
                        ).padStart(2, "0")}
                      </span>
                    </>
                  )}
                </div>

                {/* CARD INFO */}

                <div className="p-4 sm:p-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#CF1C1F]
                      "
                      style={{
                        fontFamily:
                          "var(--font-montserrat)",
                      }}
                    >
                      {project.year}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#FFF0F0]
                        px-2.5
                        py-1
                        text-[8px]
                        font-semibold
                        text-[#713901]
                      "
                      style={{
                        fontFamily:
                          "var(--font-montserrat)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-3
                      line-clamp-2
                      min-h-[3.3rem]
                      text-lg
                      font-extrabold
                      leading-tight
                      text-[#3F4A32]
                      group-hover:text-[#CF1C1F]
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    {project.title}
                  </h4>

                  <span
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      text-[#CF1C1F]
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    View project <span>→</span>
                  </span>
                </div>
              </button>
            )
          )}
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            accent={category.accent}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ================================================= */
/* CAROUSEL BUTTON                                   */
/* ================================================= */

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[#FFF7E7]/40
        bg-[#FFF7E7]/10
        text-lg
        text-[#FFF7E7]
        transition-all
        duration-200
        hover:bg-[#FFF7E7]
        hover:text-[#CF1C1F]
      "
    >
      {children}
    </button>
  );
}

/* ================================================= */
/* POPUP                                             */
/* ================================================= */

function ProjectPopup({
  project,
  accent,
  onClose,
}: {
  project: CarouselProject;
  accent: string;
  onClose: () => void;
}) {
  const previewUrl = getPreviewUrl(
    project.url,
    project.file
  );

  const previewIsImage =
    isImageUrl(previewUrl);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        p-3
        sm:p-6
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project preview`}
    >
      {/* OVERLAY */}

      <button
        type="button"
        aria-label="Close popup"
        onClick={onClose}
        className="
          absolute
          inset-0
          cursor-default
          bg-[#3F4A32]/70
          backdrop-blur-sm
        "
      />

      <motion.article
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 24,
          scale: 0.96,
        }}
        transition={{ duration: 0.25 }}
        className="
          relative
          z-10
          flex
          max-h-[92vh]
          w-full
          max-w-[1100px]
          flex-col
          overflow-hidden
          rounded-[28px]
          bg-[#FFF7E7]
          shadow-2xl
        "
      >
        {/* POPUP HEADER */}

        <div
          className="
            relative
            shrink-0
            px-6
            py-5
            sm:px-8
          "
          style={{
            backgroundColor: accent,
          }}
        >
          <button
            type="button"
            aria-label="Close popup"
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#FFF7E7]
              text-xl
              text-[#3F4A32]
              transition-transform
              hover:scale-105
            "
          >
            ×
          </button>

          <p
            className="
              pr-12
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#3F4A32]/70
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            {project.category} · {project.year}
          </p>

          <h3
            className="
              mt-2
              max-w-[800px]
              pr-10
              text-2xl
              font-extrabold
              leading-tight
              text-[#3F4A32]
              sm:text-3xl
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* DIRECT PREVIEW */}

        <div
  className="
    min-h-0
    flex-1
    bg-[#3F4A32]/10
    p-3
    sm:p-5
  "
>
  {previewUrl ? (
    previewIsImage ? (
      <img
        src={previewUrl}
        alt={project.title}
        className="
          h-full
          max-h-[56vh]
          w-full
          rounded-[16px]
          bg-white
          object-contain
        "
      />
    ) : (
      <iframe
        src={previewUrl}
        title={`${project.title} preview`}
        allowFullScreen
        className="
          h-[46vh]
          min-h-[300px]
          w-full
          rounded-[16px]
          border-0
          bg-white
          sm:h-[56vh]
        "
      />
    )
  ) : project.image ? (
    <div
      className="
        flex
        h-[300px]
        items-center
        justify-center
        overflow-hidden
        rounded-[16px]
        bg-white
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          h-full
          w-full
          object-contain
        "
      />
    </div>
  ) : (
    <div
      className="
        flex
        h-[300px]
        items-center
        justify-center
        rounded-[16px]
        bg-white
        px-6
        text-center
        text-sm
        text-[#68705A]
      "
      style={{
        fontFamily:
          "var(--font-montserrat)",
      }}
    >
      Preview tidak tersedia. Tekan Open link
      untuk melihat project ini.
    </div>
  )}
</div>

        {/* DESCRIPTION + BUTTONS */}

        <div
          className="
            shrink-0
            border-t
            border-[#3F4A32]/10
            px-6
            py-5
            sm:px-8
          "
        >
          {project.description && (
            <p
              className="
                max-w-3xl
                text-sm
                leading-6
                text-[#68705A]
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              {project.description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#3F4A32]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#FFF7E7]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#CF1C1F]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                Open link <span>↗</span>
              </a>
            )}

            {project.file && (
              <a
                href={project.file}
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#3F4A32]/20
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#3F4A32]
                  transition-all
                  hover:-translate-y-1
                  hover:border-[#CF1C1F]
                  hover:text-[#CF1C1F]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                Download file <span>↓</span>
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}