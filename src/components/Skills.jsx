"use client";

import { skillsCategories } from '../utils/data/skills';
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div id="skills" className="relative z-50 my-12 lg:my-24">
      {/* Section Header */}
      <div className="sticky top-10 mb-8">
        <div className="w-[80px] h-[80px] bg-pink-500 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-5 py-3 text-xl rounded-md shadow-md">
            SKILLS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Marquee Section */}
      <Marquee
        gradient={false}
        speed={60}
        direction="right"
        pauseOnHover
        className="py-4"
      >
        {skillsCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-80 h-40 mx-4 bg-gradient-to-r from-[#14162b] to-[#101123] rounded-lg shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105"
          >
            <div className="p-4 text-center">
              <h3 className="text-pink-500 text-lg font-bold mb-2">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm leading-6">
                {category.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
