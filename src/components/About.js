import React from "react";

export default function About() {
  return (
    <section
      id="about"
      class=" section font-nunito  w-screen bg-yellow-500 p-6 md:p-20  mx-auto"
    >
      <div class="container  reveal flex flex-col ml-auto mr-auto items-center w-5/6 border-4 border-yellow-100 p-4">
        <h2
          id="about-heading"
          class="font-noto text-6xl mx-auto text-gray-900 "
        >
          About Me
        </h2>
        <p class=" py-8 sm:w-3/4 text-gray-900 text-center">
          I am a passionate front-end developer on a mission to bring digital
          visions to life. With a palette of HTML, CSS, and JavaScript, I craft
          immersive and intuitive web experiences that leave a lasting
          impression.
        </p>
        <div class=" sm:w-3/4 p-2  bg-yellow-100 rounded-xl my-4 shadow-100 shadow-yellow-100 ">
          <h3 class=" text-xl font-noto font-bold -translate-y-6 bg-yellow-300 inline-block">
            <i class="fa-solid fa-rocket mr-2"></i>What I do?
          </h3>
          <ul class="list-disc ml-6 ">
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">UI/UX Magic:</span>I
              specialize in turning ideas into visually stunning and
              user-friendly interfaces.
            </li>
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">Tech Savvy: </span>{" "}
              Proficient in HTML, CSS,TailwindCSS, bootstrap and JavaScript,
              React andcutting-edge frameworks for dynamic web solutions.
            </li>
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">Problem-Solving Pro:</span>I
              thrive on challenges, finding elegant solutions to ensure smooth
              user experiences.
            </li>
          </ul>
        </div>
        <div class=" sm:w-3/4 p-2  bg-yellow-100 rounded-xl my-4 shadow-100 shadow-yellow-100 md:translate-x-16">
          <h3 class=" text-xl font-noto font-bold -translate-y-6 bg-yellow-300 inline-block">
            <i class="fa-solid fa-ranking-star mr-2"></i>Why Collaborate?
          </h3>
          <ul class=" list-disc ml-6">
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">
                User-Centric Approach:{" "}
              </span>
              Prioritizing user needs, I design and develop with a focus on
              delivering value and satisfaction.
            </li>
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">Adaptability: </span> In a
              fast-paced tech landscape, I stay ahead of the curve, integrating
              the latest technologies to keep your projects relevant.{" "}
            </li>
            <li class="text-gray-800">
              <span class="font-bold text-gray-900">Reliable Partner: </span>
              Whether it's a solo project or a collaborative effort, I'm
              committed to delivering excellence.{" "}
            </li>
          </ul>
        </div>

        <div class=" sm:w-3/4 p-2  bg-yellow-100 rounded-xl my-4 shadow-100 shadow-yellow-100 ">
          <h3 class=" text-xl font-noto font-bold -translate-y-6 bg-yellow-300 inline-block">
            <i class="fa-solid fa-globe mr-2"></i>Lets create together
          </h3>
          <p class="text-gray-800 ml-6">
            Ready to turn your digital dreams into reality? Let's collaborate
            and build something extraordinary.
            <span class=" font-bold text-gray-900 hover:underline">
              <a href="./contact.html"> Connect with Me</a>
            </span>{" "}
            and let the coding adventure begin!
          </p>
        </div>
      </div>
    </section>
  );
}
