import Link from "next/link";
import ProjectCarousel, {
  type CarouselCategory,
} from "../../../components/projects/ProjectCarousel";

type ProjectPageData = {
  chapter: string;
  title: string;
  description: string;
  accent: string;
  categories: CarouselCategory[];
};

const projectPages: Record<string, ProjectPageData> = {
  "information-systems": {
    chapter: "01",
    title: "Information Systems",
    description:
      "Projects where technology, systems, and creative problem-solving meet.",
    accent: "#BB7D40",

    categories: [
      {
        name: "Web Development",
        description:
          "Websites, frontend builds, and digital experiences.",
        projects: [
          {
            id: "is-web-01",
            title: "Portfolio Website",
            category: "Next.js",
            year: "2026",
          },
          {
            id: "is-web-02",
            title: "Mahjong Management System",
            category: "Web App",
            year: "2026",
          },
          {
            id: "is-web-03",
            title: "Web Development Project",
            category: "Frontend",
            year: "2025",
          },
        ],
      },

      {
        name: "UI / UX",
        description:
          "Interface design, research, wireframes, and prototypes.",
        projects: [
          {
            id: "is-ui-01",
            title: "SehatYuk",
            category: "Mobile App",
            year: "2025",
          },
          {
            id: "is-ui-02",
            title: "UI/UX Case Study",
            category: "Product Design",
            year: "2025",
          },
          {
            id: "is-ui-03",
            title: "Interface Exploration",
            category: "UI Design",
            year: "2024",
          },
        ],
      },

      {
        name: "Database & Systems",
        description:
          "Database design, ERD, system analysis, and business workflows.",
        projects: [
          {
            id: "is-db-01",
            title: "Booking Management Database System",
            category: "Database",
            year: "2025",
          },
          {
            id: "is-db-02",
            title: "Omnichannel Booking System",
            category: "System Design",
            year: "2025",
          },
          {
            id: "is-db-03",
            title: "Enterprise System",
            category: "Enterprise Systems",
            year: "2024",
          },
        ],
      },

      {
        name: "Project Management",
        description:
          "Planning, testing, implementation, and project workflows.",
        projects: [
          {
            id: "is-pm-01",
            title: "System Testing & Implementation",
            category: "System Testing",
            year: "2025",
          },
          {
            id: "is-pm-02",
            title: "Project Management Project",
            category: "Project Management",
            year: "2025",
          },
        ],
      },
    ],
  },

  "professional-work": {
    chapter: "02",
    title: "Professional Work",
    description:
      "Selected work created through real-world production, content, and creative collaboration.",
    accent: "#FFD6D6",

    categories: [
      {
        name: "Content Creation",
        description:
          "Social media content, reels, and creative production.",
        projects: [
          {
            id: "work-content-01",
            title: "Behind the Sumur",
            category: "Social Media",
            year: "2026",
          },
          {
            id: "work-content-02",
            title: "Snowberry",
            category: "Reels",
            year: "2026",
          },
          {
            id: "work-content-03",
            title: "Planet Padel",
            category: "Content",
            year: "2026",
          },
        ],
      },

      {
        name: "Photography",
        description:
          "Product and brand photography.",
        projects: [
          {
            id: "work-photo-01",
            title: "Bosee Apparel",
            category: "Product Photography",
            year: "2026",
          },
          {
            id: "work-photo-02",
            title: "Brand Product Shoot",
            category: "Photography",
            year: "2026",
          },
        ],
      },

      {
        name: "Video Editing",
        description:
          "Short-form editing and visual storytelling.",
        projects: [
          {
            id: "work-video-01",
            title: "Short-form Reels",
            category: "Video Editing",
            year: "2026",
          },
          {
            id: "work-video-02",
            title: "Brand Campaign Video",
            category: "Video",
            year: "2026",
          },
        ],
      },

      {
        name: "Branding & Campaign",
        description:
          "Visual communication and campaign work.",
        projects: [
          {
            id: "work-brand-01",
            title: "The Flow Living",
            category: "Brand Identity",
            year: "2025",
          },
        ],
      },
    ],
  },

  "creative-experiments": {
    chapter: "03",
    title: "Creative Experiments",
    description:
      "Personal explorations, experiments, and things made simply because they were fun to make.",
    accent: "#FEC841",

    categories: [
      {
        name: "Visual Experiments",
        projects: [
          {
            id: "creative-visual-01",
            title: "Poster Experiment",
            category: "Graphic Design",
            year: "2025",
          },
          {
            id: "creative-visual-02",
            title: "Color Study",
            category: "Visual Experiment",
            year: "2025",
          },
          {
            id: "creative-visual-03",
            title: "Typography Play",
            category: "Typography",
            year: "2024",
          },
        ],
      },

      {
        name: "Coding Experiments",
        projects: [
          {
            id: "creative-code-01",
            title: "Creative Coding",
            category: "Experiment",
            year: "2025",
          },
          {
            id: "creative-code-02",
            title: "Interaction Study",
            category: "Web Experiment",
            year: "2025",
          },
        ],
      },

      {
        name: "Personal Projects",
        projects: [
          {
            id: "creative-personal-01",
            title: "Personal Visual Project",
            category: "Personal",
            year: "2026",
          },
          {
            id: "creative-personal-02",
            title: "Experimental Piece",
            category: "Mixed Media",
            year: "2025",
          },
        ],
      },
    ],
  },

  "visual-design": {
    chapter: "04",
    title: "Visual Design",
    description:
      "A collection of visual work across traditional, digital, branding, graphic design, and photography.",
    accent: "#709F57",

    categories: [
      {
        name: "Traditional Drawing",
        description:
          "Hand-drawn studies, sketches, and traditional explorations.",
        projects: [
          {
            id: "visual-drawing-01",
            title: "Portrait Study",
            category: "Hand Drawn",
            year: "2024",
          },
          {
            id: "visual-drawing-02",
            title: "Character Sketch",
            category: "Pencil",
            year: "2024",
          },
          {
            id: "visual-drawing-03",
            title: "Still Life Study",
            category: "Traditional",
            year: "2023",
          },
        ],
      },

      {
        name: "Digital Illustration",
        description:
          "Digital artwork and illustration experiments.",
        projects: [
          {
            id: "visual-digital-01",
            title: "Digital Illustration",
            category: "Illustration",
            year: "2025",
          },
          {
            id: "visual-digital-02",
            title: "Poster Exploration",
            category: "Graphic Design",
            year: "2025",
          },
          {
            id: "visual-digital-03",
            title: "Digital Artwork",
            category: "Illustration",
            year: "2024",
          },
        ],
      },

      {
        name: "Branding",
        description:
          "Brand identity, logos, and visual systems.",
        projects: [
          {
            id: "visual-brand-01",
            title: "The Flow Living",
            category: "Brand Identity",
            year: "2025",
          },
          {
            id: "visual-brand-02",
            title: "Brand Identity Study",
            category: "Branding",
            year: "2025",
          },
          {
            id: "visual-brand-03",
            title: "Logo Exploration",
            category: "Identity",
            year: "2024",
          },
        ],
      },

      {
        name: "Graphic Design",
        description:
          "Posters, campaigns, layouts, and graphic communication.",
        projects: [
          {
            id: "visual-graphic-01",
            title: "Poster Design",
            category: "Graphic Design",
            year: "2025",
          },
          {
            id: "visual-graphic-02",
            title: "Campaign Visual",
            category: "Campaign",
            year: "2025",
          },
        ],
      },

      {
        name: "Photography",
        description:
          "Photography work and visual studies.",
        projects: [
          {
            id: "visual-photo-01",
            title: "Product Photography",
            category: "Photography",
            year: "2025",
          },
          {
            id: "visual-photo-02",
            title: "Portrait Series",
            category: "Photography",
            year: "2024",
          },
        ],
      },
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectPages[slug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FFF7E7] px-6">
        <div className="text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BB7D40]"
            style={{
              fontFamily: "var(--font-montserrat)",
            }}
          >
            404
          </p>

          <h1
            className="mt-3 text-4xl font-bold text-[#3F4A32]"
            style={{
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Project chapter not found.
          </h1>

          <Link
            href="/#projects"
            className="mt-6 inline-flex rounded-full bg-[#3F4A32] px-5 py-3 text-sm font-semibold text-[#FFF7E7]"
            style={{
              fontFamily: "var(--font-montserrat)",
            }}
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF7E7]">
      
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-10 lg:px-16 lg:pt-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{
            backgroundColor: project.accent,
          }}
        />

        <div className="relative mx-auto w-full max-w-[1400px]">

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#68705A] transition-colors hover:text-[#CF1C1F]"
            style={{
              fontFamily: "var(--font-montserrat)",
            }}
          >
            ← Back to Projects
          </Link>

          <div className="mt-10">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#BB7D40]"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              CHAPTER {project.chapter}
            </p>

            <h1
              className="mt-3 max-w-[900px] text-[52px] font-extrabold leading-[0.9] text-[#3F4A32] sm:text-[72px] lg:text-[100px]"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {project.title}
            </h1>

            <p
              className="mt-5 max-w-[650px] text-sm leading-6 text-[#68705A] sm:text-base"
              style={{
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* CAROUSEL */}
      {/* ================================================= */}

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <ProjectCarousel
            categories={project.categories}
          />
        </div>
      </section>

    </main>
  );
}