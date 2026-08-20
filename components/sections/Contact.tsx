"use client";

import FadeUp from "../animations/FadeUp";

/* ========================================================= */
/* CONTACT LINKS */
/* ========================================================= */

const CONTACT_LINKS = {
  whatsapp:
    "https://wa.me/628XXXXXXXXXX?text=Hello%20Sharon!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect.",

  instagram:
    "https://www.instagram.com/YOUR_USERNAME/",

  x:
    "https://x.com/YOUR_USERNAME",

  linkedin:
    "https://www.linkedin.com/in/YOUR_USERNAME/",
};


/* ========================================================= */
/* CONTACT COMPONENT */
/* ========================================================= */

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-[600px]
        overflow-hidden
        bg-[#FFF7E7]
        px-6
        py-20
        sm:min-h-[650px]
        sm:px-10
        lg:min-h-[700px]
        lg:px-16
      "
    >

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          mx-auto
          min-h-[500px]
          w-full
          max-w-[1500px]
        "
      >

        {/* ================================================= */}
        {/* CONTACT TITLE */}
        {/* ================================================= */}

        <FadeUp>

          <h2
  className="
    absolute
    left-[80px]
    top-0
    max-w-[600px]
    text-[52px]
    leading-[0.95]
    text-[#CF1C1F]

    sm:left-[100px]
    sm:text-[105px]

    md:left-[120px]
    md:text-[116px]

    lg:left-[150px]
    lg:text-[128px]
  "
            style={{
              fontFamily:
                "var(--font-passions-conflict)",
              fontWeight: 400,
            }}
          >
            ready to write
            <br />
            the next chapter
            <br />
            with Sharon?
          </h2>

        </FadeUp>


        {/* ================================================= */}
        {/* CONTACT ME STICKER */}
        {/* ================================================= */}

        <FadeUp delay={0.15}>

          <a
            href="sharongloryaa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"

            className="
              group
              absolute

              left-[42%]
              top-[120px]

              flex
              h-[58px]
              w-[180px]

              rotate-[-7deg]
              items-center
              justify-center

              rounded-[50%]

              bg-[#CF1C1F]

              shadow-[0_6px_0_#713901]

              transition-all
              duration-300

              hover:rotate-[-3deg]
              hover:scale-105
              hover:shadow-[0_9px_0_#713901]

              active:translate-y-[5px]
              active:shadow-none

              sm:left-[57%]
              sm:top-[135px]
              sm:h-[65px]
              sm:w-[200px]

              lg:left-[50%]
              lg:top-[150px]
              lg:h-[72px]
              lg:w-[220px]
            "
          >

            <span
              className="
                text-[20px]
                text-[#FFF7E7]

                sm:text-[50px]

                lg:text-[54px]
              "
              style={{
                fontFamily:
                  "var(--font-passions-conflict)",
                fontWeight: 400,
              }}
            >
              contact me!
            </span>

          </a>

        </FadeUp>


        {/* ================================================= */}
{/* SOCIAL MEDIA BOX */}
{/* ================================================= */}

<FadeUp delay={0.3}>
  <div
    className="
      absolute
      bottom-0
      right-0
      flex
      h-[76px]
      w-[220px]
      items-center
      justify-center
      gap-4
      bg-[#FEC841]

      sm:h-[82px]
      sm:w-[245px]

      lg:h-[90px]
      lg:w-[280px]
      lg:gap-5
    "
  >

    {/* =========================================== */}
    {/* INSTAGRAM */}
    {/* =========================================== */}

    <a
      href="https://www.instagram.com/wshzrrn?igsh=MW8yNnF2MWY5OWVnZQ=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="
        flex
        h-[42px]
        w-[42px]
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110

        sm:h-[46px]
        sm:w-[46px]

        lg:h-[50px]
        lg:w-[50px]
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="#ffedc9"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="#FB2501"
          strokeWidth="2"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="#FB2501"
        />
      </svg>
    </a>


    {/* =========================================== */}
    {/* X / TWITTER */}
    {/* =========================================== */}

    <a
      href="https://x.com/wshzrrn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X"
      className="
        flex
        h-[42px]
        w-[42px]
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110

        sm:h-[46px]
        sm:w-[46px]

        lg:h-[50px]
        lg:w-[50px]
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="
          h-[32px]
          w-[32px]
          fill-[#ffedc9]

          sm:h-[36px]
          sm:w-[36px]

          lg:h-[40px]
          lg:w-[40px]
        "
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    </a>


    {/* =========================================== */}
    {/* LINKEDIN */}
    {/* =========================================== */}

    <a
      href="https://www.linkedin.com/in/sharon-glorya-putri-paingi-165375326?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="
        flex
        h-[42px]
        w-[42px]
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110

        sm:h-[46px]
        sm:w-[46px]

        lg:h-[50px]
        lg:w-[50px]
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="
          h-[36px]
          w-[36px]
          fill-[#ffedc9]
          sm:h-[40px]
          sm:w-[40px]

          lg:h-[44px]
          lg:w-[44px]
        "
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.563V8.999H3.555v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>

  </div>
</FadeUp>

      </div>

    </section>
  );
}