import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full lg:w-[1200px]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <h3 className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-bold">
          {project.name}
        </h3>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">'"</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">',</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">duration:</span>
            <span className="text-gray-400">'"</span>
            <span className="text-amber-300">{project.duration}</span>
            <span className="text-gray-400">',</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">teamSize:</span>
            <span className="text-orange-400">{project.teamSize}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">position:</span>
            <span className="text-gray-400">'"</span>
            <span className="text-cyan-400">{project.position}</span>
            <span className="text-gray-400">',</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">source:</span>
            <span className="text-gray-400">{'{'}</span>
            {project.source.frontend && (
              <div className="ml-8">
                <span className="text-white">frontend:</span>
                <span className="text-gray-400">'"</span>
                <a
                  href={project.source.frontend}
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.source.frontend}
                </a>
                <span className="text-gray-400">',</span>
              </div>
            )}
            {project.source.backend && (
              <div className="ml-8">
                <span className="text-white">backend:</span>
                <span className="text-gray-400">'"</span>
                <a
                  href={project.source.backend}
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.source.backend}
                </a>
                <span className="text-gray-400">',</span>
              </div>
            )}
            {project.source.code && (
              <div className="ml-8">
                <span className="text-white">code:</span>
                <span className="text-gray-400">'"</span>
                <a
                  href={project.source.code}
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.source.code}
                </a>
                <span className="text-gray-400">',</span>
              </div>
            )}
            <span className="text-gray-400">{'},'}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">technologies:</span>
            <span className="text-gray-400">{'{'}</span>
            {Object.entries(project.technologies).map(([key, value], i) => (
              <div key={i} className="ml-8">
                <span className="text-white">{key}:</span>
                <span className="text-gray-400"> [</span>
                {value.map((tech, j) => (
                  <React.Fragment key={j}>
                    <span className="text-amber-300">{tech}</span>
                    {j < value.length - 1 && <span className="text-gray-400">, </span>}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">],</span>
              </div>
            ))}
            <span className="text-gray-400">{'},'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">features:</span>
            <span className="text-gray-400">'"</span>
            <span className="text-cyan-400">{project.features}</span>
            <span className="text-gray-400">',</span>
          </div>
          <div>
            <span className="text-gray-400">{'},'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
