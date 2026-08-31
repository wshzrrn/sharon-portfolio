"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroProps {
  introFinished: boolean;
}

export default function Hero({
  introFinished,
}: HeroProps) {
  /* ===================================================== */
  /* INTRO TYPING TEXT */
  /* ===================================================== */

  const introText =
    "a creative and curious individual who loves turning ideas into engaging and meaningful experiences. I see myself as adaptable, detail-oriented, and eager to explore, with a passion for design, technology, and finding thoughtful solutions to creative challenges.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!introFinished) {
      setTypedText("");
      return;
    }

    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(
        introText.slice(0, index + 1)
      );

      index++;

      if (index >= introText.length) {
        clearInterval(typingInterval);
      }
    }, 15);

    return () => {
      clearInterval(typingInterval);
    };
  }, [introFinished]);

  return (
    <section
      id="home"
      className="
        relative
        h-[680px]
        overflow-hidden
        bg-[#FFF7E7]

        sm:h-[700px]

        md:h-[740px]

        lg:min-h-screen
        lg:h-auto
      "
    >

      {/* ===================================================== */}
      {/* IKAN BACKGROUND */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-visible
        "
      >
        <Image
          src="/assets/hero/ikan.png"
          alt=""
          width={1561}
          height={2774}
          priority
          className="
            absolute

            left-[-150px]
            top-[-30px]
            w-[700px]

            max-w-none
            rotate-[-30deg]
            object-contain

            sm:left-[-45px]
            sm:top-[-60px]
            sm:w-[1350px]

            md:left-[-55px]
            md:top-[-60px]
            md:w-[1500px]

            lg:left-[-63px]
            lg:top-[-80px]
            lg:w-[1600px]

            xl:left-[-70px]
            xl:top-[-80px]
            xl:w-[1700px]

            2xl:left-[-80px]
            2xl:top-[-90px]
            2xl:w-[1900px]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* MAIN HERO CANVAS */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          w-full
          max-w-[1600px]
          px-6

          sm:px-8
          lg:px-10

          2xl:max-w-[1800px]
        "
      >

        {/* ================================================= */}
        {/* DAUN — STATIC */}
        {/* ================================================= */}

        <Image
          src="/assets/hero/daun.png"
          alt=""
          width={500}
          height={500}
          priority
          className="
            pointer-events-none
            absolute
            z-20

            w-[290px]
            top-[125px]
            left-[65px]

            sm:w-[220px]
            sm:-bottom-[25px]
            sm:-left-[55px]

            lg:w-[600px]
            lg:-bottom-[5px]
            lg:-left-[-150px]

            2xl:w-[720px]
            2xl:-bottom-[5px]
            2xl:left-[160px]
          "
        />

        {/* ================================================= */}
        {/* PHOTO FRAMED — STATIC */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[3%]
            top-[-35px]
            z-20
            w-[270px]

            sm:left-[1%]
            sm:top-[-150px]
            sm:w-[390px]

            md:left-[1%]
            md:top-[-150px]
            md:w-[390px]

            lg:left-[2%]
            lg:top-[-150px]
            lg:w-[500px]

            xl:left-[3%]
            xl:top-[-150px]
            xl:w-[540px]

            2xl:left-[3%]
            2xl:top-[-180px]
            2xl:w-[600px]
          "
        >
          <Image
            src="/assets/hero/framed.png"
            alt="Sharon"
            width={800}
            height={1154}
            priority
            className="h-auto w-full"
          />
        </div>

        {/* ================================================= */}
        {/* HELLO — STATIC */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute

            left-[20%]
            top-[35%]
            z-30

            w-[470px]
            h-[200px]

            whitespace-nowrap
            leading-none

            text-[170px]

            sm:left-[35%]
            sm:top-[6%]
            sm:w-[700px]
            sm:h-[290px]
            sm:text-[290px]

            md:left-[36%]
            md:top-[5%]
            md:w-[800px]
            md:h-[330px]
            md:text-[350px]

            lg:left-[38%]
            lg:!top-[100px]
            lg:w-[900px]
            lg:h-[364px]
            lg:text-[430px]

            xl:left-[43%]
            xl:!top-[100px]
            xl:w-[900px]
            xl:h-[364px]
            xl:text-[430px]

            2xl:left-[37%]
            2xl:!top-[90px]
            2xl:w-[1050px]
            2xl:h-[420px]
            2xl:text-[500px]
          "
          style={{
            fontFamily:
              "var(--font-passions-conflict)",
            fontWeight: 400,
            lineHeight: "normal",
            color: "#CF1C1F",
            textShadow:
              "0 4px 36px #FFEDC9",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor:
              "#713901",
          }}
        >
          <span>H</span>

          <span className="-ml-[8px] sm:-ml-[12px]">
            e
          </span>

          <span>
            llo
          </span>
        </div>

        {/* ================================================= */}
        {/* I AM — STATIC */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[32%]
            top-[49%]
            z-50

            flex
            items-center
            justify-center

            rounded-full
            bg-[#BB7D40]

            h-[22px]
            w-[50px]

            sm:left-[42%]
            sm:top-[38%]
            sm:h-[58px]
            sm:w-[140px]

            md:left-[42%]
            md:top-[38%]
            md:h-[61px]
            md:w-[150px]

            lg:left-[47%]
            lg:!top-[340px]
            lg:h-[62px]
            lg:w-[145px]

            xl:left-[47%]
            xl:!top-[340px]
            xl:h-[62px]
            xl:w-[145px]

            2xl:left-[48%]
            2xl:!top-[390px]
            2xl:h-[70px]
            2xl:w-[165px]
          "
        >
          <span
            className="
              text-[14px]
              font-semibold
              leading-none
              text-[#FFF7E7]

              sm:text-[38px]
              md:text-[42px]
              lg:text-[46px]
              xl:text-[46px]

              2xl:text-[50px]
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            i am
          </span>
        </div>

        {/* ================================================= */}
        {/* SHARON GLORYA — STATIC */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[49%]
            top-[55%]
            z-50

            flex
            items-center
            justify-center

            rounded-full
            bg-[#BB7D40]

            h-[22px]
            w-[150px]

            sm:left-[59%]
            sm:top-[49%]
            sm:h-[58px]
            sm:w-[380px]

            md:left-[59%]
            md:top-[49%]
            md:h-[61px]
            md:w-[405px]

            lg:left-[64%]
            lg:!top-[430px]
            lg:h-[62px]
            lg:w-[375px]

            xl:left-[64%]
            xl:!top-[430px]
            xl:h-[62px]
            xl:w-[375px]

            2xl:left-[65%]
            2xl:!top-[480px]
            2xl:h-[70px]
            2xl:w-[430px]
          "
        >
          <span
            className="
              text-[14px]
              font-semibold
              leading-none
              text-center
              text-[#FFF7E7]

              sm:text-[38px]
              md:text-[42px]
              lg:text-[43px]
              xl:text-[43px]

              2xl:text-[48px]
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            Sharon Glorya
          </span>
        </div>

        {/* ================================================= */}
        {/* PINK BOX — STATIC */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-[60%]
            z-40

            h-[100px]
            w-[78%]

            rounded-[8px]
            bg-[#FFD6D6]
            blur-[5px]

            sm:left-[21%]
            sm:top-[56%]
            sm:h-[135px]
            sm:w-[360px]

            md:left-[24%]
            md:top-[57%]
            md:h-[165px]
            md:w-[441px]

            lg:left-[26%]
            lg:top-[58%]
            lg:h-[185px]
            lg:w-[468px]

            xl:left-[26%]
            xl:top-[58%]
            xl:h-[185px]
            xl:w-[468px]

            2xl:left-[27%]
            2xl:top-[59%]
            2xl:h-[205px]
            2xl:w-[520px]
          "
        />

        {/* ================================================= */}
        {/* INTRO TEXT — TYPING EFFECT */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[11%]
            top-[61%]
            z-50

            w-[72%]

            sm:left-[27%]
            sm:top-[59%]
            sm:w-[350px]

            md:left-[27%]
            md:top-[60%]
            md:w-[410px]

            lg:left-[27%]
            lg:top-[61%]
            lg:w-[430px]

            xl:left-[27%]
            xl:top-[61%]
            xl:w-[430px]

            2xl:left-[27%]
            2xl:top-[62%]
            2xl:w-[480px]
          "
        >
          <p
            className="
              text-justify
              text-[11px]
              font-semibold
              leading-[1.2]
              text-[#BB7D40]

              sm:text-[14px]
              sm:leading-[1.30]

              md:text-[16px]
              md:leading-[1.30]

              lg:text-[18px]
              lg:leading-[1.30]

              xl:text-[18px]
              xl:leading-[1.30]

              2xl:text-[20px]
              2xl:leading-[1.32]
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            {typedText}

            {/* ================================================= */}
            {/* TYPING CURSOR */}
            {/* ================================================= */}

            {introFinished && (
              <span
                className="
                  ml-[2px]
                  inline-block
                  h-[1em]
                  w-[2px]
                  translate-y-[2px]
                  animate-pulse
                  bg-[#BB7D40]
                "
              />
            )}
          </p>
        </div>

      </div>
    </section>
  );
}