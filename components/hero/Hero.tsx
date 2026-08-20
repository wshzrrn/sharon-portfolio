"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "../animations/FadeUp";

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
        min-h-screen
        overflow-hidden
        bg-[#FFF7E7]
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
            left-[-180px]
            top-[-380px]
            w-[900px]
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
          min-h-screen
          w-full
          max-w-[1600px]
          px-6
          sm:px-8
          lg:px-10
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

            w-[180px]
            -bottom-[20px]
            -left-[45px]

            sm:w-[220px]
            sm:-bottom-[25px]
            sm:-left-[55px]

            lg:w-[600px]
            lg:-bottom-[5px]
            lg:-left-[-150px]
          "
        />


        {/* ================================================= */}
        {/* PHOTO FRAMED — STATIC */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-0
            top-[-150px]
            z-20
            w-[300px]

            sm:left-[1%]
            sm:top-[-150px]
            sm:w-[390px]

            lg:left-[2%]
            lg:top-[-150px]
            lg:w-[500px]

            xl:left-[3%]
            xl:top-[-150px]
            xl:w-[540px]
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
        {/* HELLO — FADE UP */}
        {/* ================================================= */}

        <FadeUp
          play={introFinished}
          delay={0.3}
        >
          <div
            className="
              pointer-events-none
              absolute
              left-[32%]
              top-[7%]
              z-30
              whitespace-nowrap
              text-[220px]
              leading-none

              sm:left-[35%]
              sm:top-[6%]
              sm:text-[290px]

              md:left-[36%]
              md:top-[5%]
              md:text-[350px]

              lg:left-[36%]
              lg:top-[4%]
              lg:text-[430px]

              xl:left-[37%]
              xl:top-[4%]
              xl:text-[430px]
            "
            style={{
              width: "900px",
              height: "364px",
              fontFamily:
                "var(--font-passions-conflict)",
              fontSize: "430px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "#CF1C1F",
              textShadow:
                "0 4px 36px #FFEDC9",
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor:
                "#713901",
            }}
          >
            <span>H</span>

            <span className="-ml-[12px]">
              e
            </span>

            <span>
              llo
            </span>
          </div>
        </FadeUp>


        {/* ================================================= */}
        {/* I AM — FADE UP */}
        {/* ================================================= */}

          <div
            className="
              absolute
              left-[42%]
              top-[38%]
              z-50
              flex
              items-center
              justify-center
              rounded-full
              bg-[#BB7D40]

              h-[52px]
              w-[126px]

              sm:h-[58px]
              sm:w-[140px]

              md:h-[61px]
              md:w-[150px]

              lg:h-[62px]
              lg:w-[145px]

              xl:h-[62px]
              xl:w-[145px]
            "
          >
            <span
              className="
                text-[34px]
                font-semibold
                leading-none
                text-[#FFF7E7]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
                xl:text-[46px]
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
        {/* SHARON GLORYA — FADE UP */}
        {/* ================================================= */}

          <div
            className="
              absolute
              left-[59%]
              top-[49%]
              z-50
              flex
              items-center
              justify-center
              rounded-full
              bg-[#BB7D40]

              h-[52px]
              w-[360px]

              sm:h-[58px]
              sm:w-[380px]

              md:h-[61px]
              md:w-[405px]

              lg:h-[62px]
              lg:w-[375px]

              xl:h-[62px]
              xl:w-[375px]
            "
          >
            <span
              className="
                text-[34px]
                font-semibold
                leading-none
                text-center
                text-[#FFF7E7]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[43px]
                xl:text-[43px]
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
            left-[19%]
            top-[54%]
            z-40
            h-[110px]
            w-[300px]
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
          "
        />


        {/* ================================================= */}
        {/* INTRO TEXT — TYPING EFFECT */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-[26%]
            top-[60%]
            z-50
            w-[270px]

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
          "
        >
          <p
            className="
              text-justify
              text-[12px]
              font-semibold
              leading-[1.15]
              text-[#BB7D40]

              sm:text-[14px]
              sm:leading-[1.30]

              md:text-[16px]
              md:leading-[1.30]

              lg:text-[18px]
              lg:leading-[1.30]

              xl:text-[18px]
              xl:leading-[1.30]
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