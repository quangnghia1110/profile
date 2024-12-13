import React from 'react';
import GlowCard from './glow-card';
import { BsPersonWorkspace } from "react-icons/bs";
import { awards } from "../utils/data/award"; 
import { experiences } from "../utils/data/experience"; 

const AwardsExperience = () => {
  return (
    <div id="awards-experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" style={{ marginTop: '-100px'}}>
      <div className="flex justify-between my-5 lg:py-8">
        <div className="flex flex-col items-center w-1/2" style={{marginRight: '10px'}}>
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Certificate & Awards
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
          <div className="mt-4 w-full" style={{margin: '10px'}}>
            {awards.map((award) => (
              <GlowCard key={award.id} identifier={`award-${award.id}`} className="m-6">
                <div className="p-3 text-white">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">{award.date}</p>
                  <div className="flex items-center gap-x-8 px-3 py-5 min-h-[150px]">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {award.title}
                      </p>
                      <p className="text-sm sm:text-base">{award.institution}</p>
                      <p className="text-sm sm:text-base">{award.details}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2" style={{marginLeft: '10px'}}>
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Experience
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
          <div className="mt-4 w-full">
            {experiences.map((experience) => (
              <GlowCard key={experience.id} identifier={`experience-${experience.id}`} className="m-6">
                <div className="p-3 text-white">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
                  <div className="flex items-center gap-x-8 px-3 py-5 min-h-[150px]">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">{experience.company}</p>
                      <p className="text-sm sm:text-base">Location: {experience.location}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsExperience;
