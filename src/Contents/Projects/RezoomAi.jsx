import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import RezoomAiImg from "../../assets/rezoomAiImg.png"
import Aos from "aos";
import "aos/dist/aos.css";

const RezoomAi = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="zoom-in-left"
      className="mx-auto bg-[#151d17] tracking-wide text-base shadow-[8px_8px_0_0_#4f6653]
      border-2 border-[#7b927e] rounded-xl p-5 text-[#e1eae3] font-mono"
    >
      <div className="mb-6 text-sm text-[#8eb897]">
        <img
          src={RezoomAiImg}
          alt="RezoomAi Screenshot"
          className="h-50 w-full md:h-auto rounded-lg"
        />
      </div>

      <h2 className="text-2xl border-b pb-3 font-bold mb-4 tracking-wide">
        RezoomAi-{" "}
        <span className="text-[#7b927e]">
         Open your career's door
        </span>
      </h2>

      <p className="mb-4 text-gray-200">
        A full-stack career-assistance platform that helps users build standout professional profiles. Allows users to create resumes, check ATS compatibility scores, generate personalized cover letters and LinkedIn summaries, and even practice through AI-powered mock interviews. 
      </p>

      {/* Hidden on small screens unless showMore is true */}
      <div className={` ${showMore ? "block" : "hidden"}`}>
        <p className="mb-6 text-gray-200">
          Built with Next.js, Node.js, and TypeScript, Rezoom AI integrates OpenAI API, n8n automation, GSAP animations, and SheraCN UI for a sleek, responsive, and intelligent user experience.
        </p>
      </div>

      {/* See more/less toggle only on small screens */}
      <div className=" mb-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#8eb897] hover:underline focus:outline-none"
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[ "TypeScript","Next.js","Express", "MongoDB", "Firebase", "TailWindCSS", "JWT", "SheraUi", "Gsap"].map(
          (tech, i) => (
            <span
              key={i}
              className="bg-[#3a5640] shadow-[2px_4px_0_0_#4f6653] text-[#e1eae3] px-4 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          )
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-5">
        <a
          href="https://rezoom-ai-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-xl bg-[#6f8b76] text-gray-900 tracking-wide text-base
          border-2 border-[#7b927e] shadow-[5px_5px_0_0_#4f6653]
          transition-transform duration-500 hover:translate-x-2 hover:translate-y-3
          active:translate-x-0 active:translate-y-0 flex flex-row items-center gap-2 justify-center"
        >
          Live demo <FaLink />
        </a>

        <a
          href="https://github.com/Suprotik007/rezoom-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 rounded-xl bg-[#6f8b76] text-gray-900 tracking-wide text-base
          border-2 border-[#7b927e] shadow-[5px_5px_0_0_#4f6653]
          transition-transform duration-500 hover:translate-x-2 hover:translate-y-3
          active:translate-x-0 active:translate-y-0 flex flex-row items-center gap-2 justify-center"
        >
          Github <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default RezoomAi;
