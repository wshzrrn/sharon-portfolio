"use client";

import { motion } from "framer-motion";
import ProjectCarousel, {
  type CarouselCategory,
} from "./ProjectCarousel";

const projectCategories: CarouselCategory[] = [
  {
    number: "01",
    name: "Professional Work",
    description: "Selected collaborations, campaigns, and client work.",
    accent: "#FFD6D6",
    projects: [
      {
        id: "professional-01",
        title: "Wise Choice Instagram Story",
        category: "Design",
        year: "",
        description: "",
        image: "/projects/professional/wisechoice.jpeg",
        url: "",
      },
      {
        id: "professional-02",
        title: "Manners Matter Instagram Story",
        category: "Design",
        year: "",
        description: "",
        image: "/projects/professional/mannersmatter.jpeg",
        file: "",
      },
      {
        id: "professional-03",
        title: "Servolution Reels",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/servo.jpeg",
        url: "https://www.instagram.com/reel/C3CYdfUhfQQ/?igsi=MWtkZjl2Z25tOGhmeQ=="
      },
      {
        id: "professional-04",
        title: "Caca PR Ambassador Video",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/caca.jpeg",
        url: "https://drive.google.com/file/d/1iYszy2Vl3ARr-eiEcQIUmEjhrk9I9y4I/view?usp=drivesdk"
      },
      {
        id: "professional-05",
        title: "Delune Reels",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/delune.jpeg",
        url: "https://www.instagram.com/reel/DLw_xs1PctF/?igsi=MXkyMjI2NmZyYmJlag=="
      },
      {
        id: "professional-06",
        title: "Elita Tiktok",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/elita.jpeg",
        url: "https://www.tiktok.com/@ce_elita/video/7635251033161125127?_r=1&_t=ZS-99RAaSkLMSz"
      },
      {
        id: "professional-07",
        title: "GBK Reels",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/gbk.jpeg",
        url: "https://www.instagram.com/reel/DA5bBMJJp7u/?igsi=YjY4bTZqcDV1ZWcx"
      },
      {
        id: "professional-08",
        title: "Bali L-Men Reels",
        category: "Video Editing",
        year: "",
        description: "",
        image: "/projects/professional/lmen.jpeg",
        url: "https://www.instagram.com/reel/DMIY6VCvwbR/?igsi=MXB2MGhkN2tkYTRhcw=="
      },
    ],
  },
  {
    number: "02",
    name: "Information Systems",
    description: "Digital products, systems, and technology-based work.",
    accent: "#A9C5D6",
    projects: [
      {
        id: "systems-01",
        title: "IS Project Management",
        category: "Information System",
        year: "",
        description: "",
        image: "/projects/information-systems/ISPM.jpeg",
        url: "https://www.figma.com/design/0ASKj22aw51kvFbSdlc0LE/IS-Project-Management?m=auto&t=3NFkegdtvAraEdaT-1",
      },
      {
        id: "systems-02",
        title: "UX Research & Design",
        category: "Information System",
        year: "",
        description: "",
        image: "/projects/information-systems/UXRD.jpeg",
        url: "https://www.figma.com/design/oSiYvwGsOWpTMUf1aRUhEO/UX-Research-and-Design?m=auto&t=3NFkegdtvAraEdaT-1",
      },
      {
        id: "systems-03",
        title: "Rebranding Royal Park Hotel",
        category: "Information System",
        year: "",
        description: "",
        image: "/projects/information-systems/RoyalPark.png",
        url: "https://www.figma.com/design/7dDo0L41L7Ul2Te2NWzjKF/Royal-Park-Application?m=auto&t=2sp7b4ypIukDxbR7-1"
      },
    ],
  },
  {
    number: "03",
    name: "Visual Design",
    description: "Branding, visual identity, and design explorations.",
    accent: "#FEC841",
    projects: [
      {
        id: "visual-01",
        title: "NusaQuest Board Game",
        category: "Product Design",
        year: "",
        description: "",
        image: "/projects/visual-design/NusaQuest.png",
        url: "https://www.figma.com/design/HXN0vdqS64jzZUJfyJeo3r/Nusa-Quest-boardgame?m=auto&t=3NFkegdtvAraEdaT-1",
      },
      {
        id: "visual-02",
        title: "ChaynPay Branding",
        category: "Branding",
        year: "",
        description: "",
        image: "/projects/visual-design/ChaynPay.png",
        url: "https://www.figma.com/design/42ULGwK6ut7pxGbAHfjbqd/ChaynPay?m=auto&t=3NFkegdtvAraEdaT-1f",
      },
      {
        id: "visual-03",
        title: "Tarot Girls Poster Design",
        category: "Graphic Design",
        year: "",
        description: "",
        image: "/projects/visual-design/TarotGirls.jpeg",
      },
      {
        id: "visual-04",
        title: "The Unknown Place Poster Design",
        category: "Graphic Design",
        year: "",
        description: "",
        image: "/projects/visual-design/TUP.jpeg",
      },
      
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative overflow-hidden bg-[#CF1C1F]
        px-5 pb-32 pt-28 sm:px-8 lg:px-10
      "
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="absolute top-0 h-full"
            style={{
              left: `${index * 7.2}%`,
              width: index % 3 === 0 ? "4.5%" : "5.2%",
              backgroundColor: index % 2 === 0 ? "#FFF7E7" : "#FEC841",
              opacity: index % 2 === 0 ? 0.1 : 0.07,
              transform: index % 2 === 0 ? "skewX(-1deg)" : "skewX(1deg)",
            }}
          >
            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[#A9C5D6] opacity-30" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-[100px] overflow-hidden">
        <div className="absolute -top-[30px] left-0 flex w-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="h-[70px] w-[70px] shrink-0 rounded-full bg-[#FFF7E7]"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2
            className="
              text-center text-[88px] leading-[0.75] text-[#FEC841]
              sm:text-[110px] md:text-[130px] lg:text-[150px]
            "
            style={{
              fontFamily: "var(--font-passions-conflict)",
              textShadow:
                "3px 4px 0 #713901, 0 8px 18px rgba(113,57,1,0.25)",
            }}
          >
            Projects
          </h2>
        </motion.div>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {projectCategories.map((category, index) => (
            <ProjectCarousel
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[100px] overflow-hidden">
        <div className="absolute -bottom-[28px] left-0 flex w-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="h-[70px] w-[70px] shrink-0 rounded-full bg-[#FFF7E7]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}