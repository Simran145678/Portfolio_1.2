import React from "react";

export default function Projects(props) {
  return (
    <section
      id="projects"
      class=" section md:pt-8 container w-screen  bg-[#fff]"
    >
      <div class="reveal flex flex-col  ml-auto mr-auto items-center w-5/6 border-b-4 border-yellow-500 p-6">
        <h2 class="text-5xl font-noto mx-auto text-gray-900">
          Work Experience / Projects
        </h2>
      </div>
      <div class="reveal flex flex-col p-6 ml-auto mr-auto items-center w-5/6 mb-8">
        <p class="lg:px-10 leading-relaxed text-center text-gray-800">
          With over 2 years of web development experience, I've mastered HTML,
          CSS, and JavaScript, excelling in front-end frameworks like React and
          Vue. Proficient in Git and GitHub, I've collaborated in agile
          environments and maintained code quality, performance and scalability.
        </p>
      </div>

      <div class="container w-5/6 flex flex-col   p-6 md:px-24 lg:px-40">
        <div class="relative card flex flex-col md:flex-row w-full justify-center md:mb-20 md:mb-0 ">
          <div class="hidden md:block -left-16 xl:left-20  absolute card-content border-4 border-orange-200 w-60 lg:w-64 h-80 -mt-8 ml-6 lg:ml-8  z-10"></div>
          <div class="flex flex-col md:flex-row w-full xl:w-2/3 h-auto md:h-64 bg-yellow-500 z-20 p-4 lg:p-6">
            <div class="w-full md:w-1/3">
              <div
                id="job-title"
                class="relative flex flex-col h-full justify-center items-center text-center p-6"
              >
                <img
                  src="./assets/Tenet_Health_logo.png"
                  alt="Tenet Health logo"
                  class="w-48 md:w-auto"
                ></img>
                <p class="text-md font-noto font-bold text-gray-900 leading-tight mt-4">
                  Frontend Web developer
                </p>
              </div>
            </div>
            <div class="relative w-full md:w-2/3 p-2  bg-yellow-100 rounded-xl  shadow-100 shadow-yellow-100">
              <h4 class="absolute -top-3 text-md font-noto text-gray-900  bg-yellow-300 ">
                As a part of ADS team on Tenethealth project I,
              </h4>

              <ul class="text-sm font-nunito text-gray-800 list-disc pl-4 lg:pl-6 mt-6">
                <li>
                  Participated in Project Planning and Requirement Analysis
                </li>
                <li>
                  Developed responsive and ADA Compliant web pages using HTML,
                  CSS, TailwindCSS, Vuejs and JavaScript.
                </li>
                <li>
                  Ensured cross-browser compatibility and fixed issues as they
                  arise.
                </li>
                <li>Conducted thorough testing of the web application</li>
                <li>Reviewed and Documented code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-5/6 flex flex-col   p-6 md:px-24 lg:px-40">
        <div class="relative card flex w-full justify-center  md:mb-0 ">
          <div class="hidden md:block -left-16 xl:left-20  absolute card-content border-4 border-orange-200 w-60 lg:w-64 h-80 -mt-8 ml-6 lg:ml-8  z-10"></div>
          <div class="flex flex-col md:flex-row w-full xl:w-2/3 h-auto md:h-64 bg-yellow-500 z-20 p-4 lg:p-6">
            <div class="w-full md:w-1/3">
              <div
                id="job-title"
                class="relative flex flex-col h-full justify-center items-center text-center p-6 "
              >
                <img
                  src="./assets/Consumers_Energy_logo.svg.png"
                  alt="Tenet Health logo"
                  class="w-48 md:w-auto"
                ></img>
                <p class="text-md font-noto font-bold text-gray-900 leading-tight mt-4">
                  UI developer
                </p>
              </div>
            </div>
            <div class="relative w-full md:w-2/3  p-2  bg-yellow-100 rounded-xl shadow-100 shadow-yellow-100 ">
              <h4 class="absolute text-md font-noto text-gray-900 -top-3 bg-yellow-300  ">
                As a UI developer on Consumers Energy project I,
              </h4>

              <ul class="text-sm font-nunito text-gray-800 list-disc pl-4 lg:pl-6 mt-6">
                <li>Implemented User Interface Design </li>
                <li>
                  Created reusable UI components HTML, CSS, React and
                  JavaScript.
                </li>
                <li>
                  Implemented and tested accessibility features such as ARIA
                  roles
                </li>
                <li>Conducted usability testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
