"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { resume } from "@/data";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

export function Resume() {
  return (
    <section className="h-[20rem] md:h-[30rem] w-full rounded-md bg-dipner-200 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl p-3 bg-clip-text text-transparent bg-white text-center font-sans font-bold">
          Missing <span className="text-purple">Something...?</span>
        </h1>
        <p></p>
        <p className="text-white-200 max-w-lg mx-auto my-5 text-sm text-center relative z-10 ">
          If you'd like to explore more details about my professional journey
          and the projects I've worked on, please feel free to check out my
          resume. You can download it by clicking the button below. Don't miss
          out on discovering the comprehensive list of my skills, experiences,
          and achievements. <br></br>Download it now and delve into the complete
          narrative of my career and academic pursuits!
        </p>

        <a
          href="/resume.pdf"
          download={resume.link}
          className="flex flex-col items-center"
        >
          <button className="inline-flex h-12 animate-shimmer items-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-3">
            Download Now
            <FaDownload />
          </button>
        </a>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  );
}

export default Resume;
