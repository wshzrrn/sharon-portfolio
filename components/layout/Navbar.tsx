"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    ),
  },

  {
    name: "About",
    href: "#about",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="3.2" />
        <path d="M5.5 21c.6-4.2 3-6.5 6.5-6.5s5.9 2.3 6.5 6.5" />
      </svg>
    ),
  },

  {
    name: "Projects",
    href: "#projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="4" width="14" height="16" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },

  {
    name: "Experience",
    href: "#journey",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7h14v4H5z" />
        <path d="M7 11v5h10v-5" />
        <path d="M8 16v3h8v-3" />
      </svg>
    ),
  },

  {
    name: "Contact",
    href: "#contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5h16v12H8l-4 3V5z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const sections = [
        "home",
        "about",
        "projects",
        "journey",
        "contact",
      ];

      let current = "Home";

      for (const section of sections) {
        const element =
          document.getElementById(section);

        if (element) {
          const top =
            element.offsetTop - 250;

          if (scrollTop >= top) {
            if (section === "journey") {
              current = "Experience";
            } else {
              current =
                section.charAt(0).toUpperCase() +
                section.slice(1);
            }
          }
        }
      }

      setActive(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <aside
      className="
        fixed
        right-2
        top-1/2
        z-50
        flex
        -translate-y-1/2

        sm:right-3
        md:right-5
      "
    >
      <div
        className="
          relative
          flex
          w-[40px]
          flex-col
          items-center
          gap-1
          rounded-full
          border
          border-white/20
          bg-[#3F4A32]/90
          px-1
          py-2.5
          shadow-[0_20px_50px_rgba(63,74,50,0.25)]
          backdrop-blur-xl

          sm:w-[50px]
          sm:gap-2
          sm:px-2
          sm:py-3.5

          md:w-[58px]
          md:gap-2
          md:px-2
          md:py-4
        "
      >
        {/* ================================================= */}
        {/* NAV ITEMS */}
        {/* ================================================= */}

        {navItems.map((item) => {
          const isActive =
            active === item.name;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() =>
                setActive(item.name)
              }
              className="
                group
                relative
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                text-[#FFFDF5]
                transition-all
                duration-300
                hover:bg-white/10

                sm:h-9
                sm:w-9

                md:h-10
                md:w-10
              "
            >
              {/* ================================================= */}
              {/* ACTIVE DOT */}
              {/* ================================================= */}

              {isActive && (
                <span
                  className="
                    absolute
                    -left-[3px]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#FFD6D6]
                    shadow-[0_0_10px_rgba(255,214,214,0.8)]

                    sm:-left-1
                    sm:h-2
                    sm:w-2
                  "
                />
              )}

              {/* ================================================= */}
              {/* ICON */}
              {/* ================================================= */}

              <span
                className="
                  h-[13px]
                  w-[13px]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:text-[#FFD6D6]

                  sm:h-[17px]
                  sm:w-[17px]

                  md:h-[19px]
                  md:w-[19px]
                "
              >
                {item.icon}
              </span>

              {/* ================================================= */}
              {/* TOOLTIP — DESKTOP ONLY */}
              {/* ================================================= */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-[48px]
                  top-1/2
                  hidden
                  -translate-y-1/2
                  translate-x-2
                  whitespace-nowrap
                  rounded-md
                  bg-[#3F4A32]
                  px-3
                  py-1.5
                  text-xs
                  text-[#FFFDF5]
                  opacity-0
                  shadow-lg
                  transition-all
                  duration-200

                  md:block
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </span>
            </a>
          );
        })}

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div
          className="
            my-0.5
            h-px
            w-3
            bg-white/15

            sm:my-1
            sm:w-5
          "
        />
      </div>
    </aside>
  );
}