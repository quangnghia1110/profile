import React from 'react';
import GlowCard from './glow-card';
import { BsPersonWorkspace } from "react-icons/bs";
import { educations } from "../utils/data/educations";
import { experiences } from "../utils/data/experience";
import AnimationLottie from './animation-lottie';
import educationLottie from '../lottie/study.json';
import experienceLottie from '../lottie/code.json';

const EducationExperience = () => {
    return (
        <div id="education-experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" style={{ marginTop: '-50px', height: '600px' }}>
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Education & Experience
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8" style={{ marginTop: '-150px' }}>
              {/* Education Section */}
              <div className="flex flex-col gap-8 items-center" >
                <div className="w-3/4 h-3/4">
                  <AnimationLottie animationPath={educationLottie} />
                </div>
                <div className="flex flex-col gap-6">
                  {educations.map((education) => (
                    <GlowCard key={education.id} identifier={`education-${education.id}`}>
                      <div className="p-3 text-white" style={{ width: '500px' }}>
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5 min-h-[150px]">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {education.title}
                            </p>
                            <p className="text-sm sm:text-base">{education.institution}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className="flex flex-col gap-8 items-center">
                <div className="w-full h-full">
                  <AnimationLottie animationPath={experienceLottie} />
                </div>
                <div className="flex flex-col gap-6">
                  {experiences.map((experience) => (
                    <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                      <div className="p-3" style={{ width: '500px' }}>
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {experience.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5 min-h-[150px]">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {experience.title}
                            </p>
                            <p className="text-sm sm:text-base">{experience.company}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default EducationExperience;