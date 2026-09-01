"use client";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#journey",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#CF1C1F]
        text-[#FFF7E7]
      "
    >

      {/* ================================================= */}
      {/* TOP SCALLOP */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-[28px]
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -top-[24px]
            left-0
            flex
            w-full
          "
        >
          {Array.from({
            length: 34,
          }).map((_, index) => (
            <div
              key={index}
              className="
                h-[48px]
                w-[48px]
                shrink-0
                rounded-full
                bg-[#FFF7E7]
              "
            />
          ))}
        </div>
      </div>


      {/* ================================================= */}
      {/* FOOTER CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          gap-6
          px-6
          pb-7
          pt-12
          sm:px-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-10
          lg:pb-8
        "
      >

        {/* BRAND */}

        <div>
          <p
            className="
              text-2xl
              font-extrabold
              italic
              leading-none
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            May2Cents
            <span className="text-[#FEC841]">
              .
            </span>
          </p>

          <p
            className="
              mt-1
              text-[9px]
              text-[#FFF7E7]/55
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            Creative × Technology
          </p>
        </div>


        {/* NAV */}

        <nav
          className="
            flex
            flex-wrap
            gap-x-5
            gap-y-2
          "
        >
          {footerLinks.map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-[10px]
                  font-semibold
                  text-[#FFF7E7]/70
                  transition-colors
                  duration-200
                  hover:text-[#FEC841]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>


        {/* COPYRIGHT */}

        <div
          className="
            flex
            flex-col
            gap-1
            lg:items-end
          "
          style={{
            fontFamily:
              "var(--font-montserrat)",
          }}
        >
          <p
            className="
              text-[9px]
              text-[#FFF7E7]/50
            "
          >
            © 2026 Sharon Glorya Putri Paingi
          </p>
        </div>

      </div>

    </footer>
  );
}