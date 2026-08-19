"use client";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import OpeningAnimation from "../components/opening/OpeningAnimation";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import CustomCursor from "../components/ui/CustomCursor";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden text-[#1F1F2E]">
      <CustomCursor />

      <OpeningAnimation onFinish={() => setIntroFinished(true)} />

      <Navbar />

      <Hero introFinished={introFinished} />

      <About />

      <Projects />

      <Experience />

      <Contact />
      
    </main>
  );
}