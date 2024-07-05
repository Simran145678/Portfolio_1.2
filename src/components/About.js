import React from "react";

export default function About(props) {
  const aboutCard = props.list.map((item) => {
    return (
      <div class=" sm:w-3/4 p-2  bg-yellow-100 rounded-xl my-4 shadow-100 shadow-yellow-100 ">
        <h3 class=" text-xl font-noto font-bold -translate-y-6 bg-yellow-300 inline-block">
          <i class="fa-solid fa-rocket mr-2"></i>
          {item.subheading}
        </h3>
        <ul class="list-disc ml-6 ">
          {item.desc.split("|").map((listItem) => {
            const splitDesc = listItem.split(":");
            return (
              <li class="text-gray-800 list-none">
                <span class="font-bold text-gray-900">{splitDesc[0]}</span>
                {splitDesc[1]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

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

        {aboutCard}
      </div>
    </section>
  );
}
