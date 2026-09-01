"use client";

import FadeUp from "../animations/FadeUp";
import { motion } from "framer-motion";

const whatsappNumber = "6287782317610";

const whatsappMessage =
  "Hi Sharon! 👋 I just found your portfolio and I'd love to talk about a project! ✨";

const whatsappUrl =
  `https://wa.me/${whatsappNumber}` +
  `?text=${encodeURIComponent(
    whatsappMessage
  )}`;

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Behance",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#FFF7E7]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >

      {/* ================================================= */}
      {/* DECORATIVE SHAPES */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            -left-20
            top-16
            h-56
            w-56
            rounded-full
            bg-[#FFD6D6]/35
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-12
            h-64
            w-64
            rounded-full
            bg-[#FEC841]/20
            blur-3xl
          "
        />

        <span
          className="
            absolute
            left-[12%]
            top-[22%]
            text-xl
            text-[#FEC841]
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            right-[15%]
            top-[18%]
            text-2xl
            text-[#CF1C1F]
          "
        >
          ✧
        </span>

        <span
          className="
            absolute
            bottom-[18%]
            left-[20%]
            text-lg
            text-[#CF1C1F]
          "
        >
          •
        </span>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
        "
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <FadeUp>
          <div
            className="
              text-center
            "
          >

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#BB7D40]
                sm:text-xs
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              Let's connect
            </p>


            <h2
              className="
                mx-auto
                mt-4
                max-w-[850px]
                text-[58px]
                leading-[0.88]
                text-[#CF1C1F]
                sm:text-[78px]
                lg:text-[100px]
              "
              style={{
                fontFamily:
                  "var(--font-passions-conflict)",
                fontWeight: 400,
              }}
            >
              Got something
              <br />
              fun in mind?
            </h2>

          </div>
        </FadeUp>


        {/* ================================================= */}
        {/* MAIN CONTACT ROW */}
        {/* ================================================= */}

        <FadeUp delay={0.1}>
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-8
              lg:flex-row
              lg:justify-center
              lg:gap-16
            "
          >

            {/* ================================================= */}
            {/* ENVELOPE */}
            {/* ================================================= */}

            <motion.div
              className="
                relative
                flex
                h-[170px]
                w-[240px]
                items-center
                justify-center
              "
              animate={{
                y: [0, -12, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div
                className="
                  absolute
                  bottom-3
                  h-5
                  w-36
                  rounded-full
                  bg-[#713901]/15
                  blur-xl
                "
              />

              <motion.div
                className="
                  group
                  relative
                  h-[125px]
                  w-[185px]
                  rotate-[-4deg]
                  rounded-[16px]
                  bg-[#FEC841]
                  shadow-[0_15px_30px_rgba(113,57,1,0.16)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:rotate-[2deg]
                "
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotate: -1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >

                {/* flap */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[65px]
                    w-full
                    rounded-t-[16px]
                    bg-[#FFD96A]
                  "
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 50% 72%)",
                  }}
                />

                {/* center message */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <span
                    className="
                      text-3xl
                      text-[#CF1C1F]
                    "
                  >
                    ♥
                  </span>

                  <span
                    className="
                      mt-1
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#713901]
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    Open to ideas
                  </span>
                </div>

              </motion.div>


              {/* stars */}

              <motion.span
                className="
                  absolute
                  left-2
                  top-2
                  text-2xl
                  text-[#CF1C1F]
                "
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✦
              </motion.span>

              <motion.span
                className="
                  absolute
                  right-2
                  top-8
                  text-lg
                  text-[#BB7D40]
                "
                animate={{ rotate: [0, -8, 8, 0], y: [0, 4, -4, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                ✧
              </motion.span>

            </motion.div>


            {/* ================================================= */}
            {/* CONTACT INFO */}
            {/* ================================================= */}

            <div
              className="
                flex
                max-w-[450px]
                flex-col
                items-center
                text-center
                lg:items-start
                lg:text-left
              "
            >

              <p
                className="
                  text-sm
                  leading-6
                  text-[#68705A]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                Ready to write the next chapter with Sharon?
              </p>


              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  mt-5
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#3F4A32]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-[#FFF7E7]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#CF1C1F]
                  hover:shadow-[0_12px_30px_rgba(63,74,50,0.18)]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Say hello
                </motion.div>

                <motion.span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </a>


              {/* EMAIL */}

              <a
                href="mailto:wshzrrn@gmail.com"
                className="
                  mt-4
                  text-sm
                  font-semibold
                  text-[#BB7D40]
                  transition-colors
                  duration-200
                  hover:text-[#CF1C1F]
                "
                style={{
                  fontFamily:
                    "var(--font-montserrat)",
                }}
              >
                wshzrrn@gmail.com
              </a>


              {/* SOCIALS */}

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                {socialLinks.map(
                  (link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        rounded-full
                        border
                        border-[#3F4A32]/15
                        bg-white/60
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-[#3F4A32]
                        transition-all
                        duration-200
                        hover:border-[#CF1C1F]
                        hover:text-[#CF1C1F]
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
              </div>

            </div>

          </div>
        </FadeUp>

      </div>

    </section>
  );
}