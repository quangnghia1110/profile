import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Section */}
        <div 
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 md:pb-10 lg:pt-10" 
          style={{ width: '400px' }} // Loại bỏ padding-bottom không cần thiết
        >
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{' '}
            <span className="text-pink-500">Ngo Quang Nghia</span>,{" I'm a "}
            <span className="text-[#16f2b3]">Backend Developer</span>.
          </h1>
        </div>

        {/* Right Section */}
        <div 
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37]"
          style={{ width: '700px', marginLeft: '-160px', marginBottom: '0' }} // Loại bỏ margin-bottom
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">contactInfo</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>

              {/* Contact Details */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">location:</span>{' '}
                <span className="text-cyan-400">&quot;Thu Duc Province, Ho Chi Minh City&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">phone:</span>{' '}
                <span className="text-cyan-400">&quot;0974117373&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">email:</span>{' '}
                <span className="text-cyan-400">&quot;ngoquangnghia111003@gmail.com&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">github:</span>{' '}
                <span className="text-cyan-400">&quot;https://github.com/quangnghia1110&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">linkedin:</span>{' '}
                <span className="text-cyan-400">&quot;https://www.linkedin.com/in/ngoquangnghia111003&quot;</span>,
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">facebook:</span>{' '}
                <span className="text-cyan-400">&quot;https://www.facebook.com/quangnghia559/&quot;</span>,
              </div>

              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
