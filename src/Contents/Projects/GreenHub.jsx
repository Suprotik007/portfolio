import React, { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import greenHubImg from "../../assets/greenhub-light.png";
import Aos from "aos";
import "aos/dist/aos.css";

const GreenHub = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="zoom-in-right"
      className="mx-auto bg-[#151d17] tracking-wide text-base shadow-[8px_8px_2px_0_#4f6653]
      border-2 border-[#7b927e] rounded-xl p-5 text-[#e1eae3] font-mono"
    >
      <div className="mb-6 text-sm text-[#8eb897]">
        <img
          src={greenHubImg}
          alt="GreenHub project screenshot"
          className="h-50 w-full md:h-100 lg:h-80 rounded-lg"
        />
      </div>

      <h2 className="text-2xl border-b pb-3 font-bold mb-4 tracking-wide">
        GreenHub -{" "}
        <span className="text-[#7b927e]">Let's make the world green</span>
      </h2>

      <p className="mb-4">
        Garden Explorer is a vibrant platform designed for gardening
        enthusiasts to connect, share knowledge, and grow together — built using
        React and Node.js.
      </p>

      {/* Hidden on small devices unless showMore is true */}
      <div className={` ${showMore ? "block" : "hidden"}`}>
        <p className="mb-6 text-gray-200">
          It features a user-friendly interface, allowing users to share
          gardening tips and explore a wide range of plants.
        </p>
      </div>

      {/* Toggle button visible only on small devices */}
      <div className=" mb-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#8eb897] hover:underline focus:outline-none"
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["React", "Express", "MongoDB", "Firebase", "TailWindCSS"].map(
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
          href="https://greenhub-ox.netlify.app/"
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
          href="https://github.com/Suprotik007/green-hub"
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

export default GreenHub;
