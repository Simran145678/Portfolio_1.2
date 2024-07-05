import React from "react";

export default function Footer(props) {
  return (
    <footer class="font-noto flex flex-col justify-between bg-yellow-500 border-t-4  border-yellow-300   mt-24">
      <div class="footer-content flex flex-col justify-between md:flex-row p-6 md:p-16">
        <div class="w-44 md:w-auto logo leading-tight relative cursor-pointer">
          <p class="font-bold text-xl leading-tight  z-20 border-b-2 border-gray-800">
            harsimran kaur{" "}
          </p>
          <small class=" leading-tight z-20 "> Code, Create, Captivate.</small>
          <div class="bg-box opacity-50 absolute  ml-4 top-0 -mt-1 -z-50  "></div>
        </div>

        <div class="mt-6 md:mt-0">
          <h3>Contact me @</h3>
          <p class="text-gray-800">kaur.harsimran0508@gmail.com</p>
        </div>

        <div class="text-4xl text-yellow-100 hidden md:block">
          <a href="#intro-section">
            {" "}
            <i class="fa-regular fa-circle-up cursor-pointer"></i>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center  h-8 bg-yellow-100 bottom-0 z-20">
        <small class="">Copyright © 2024. All Rights reserved.</small>
      </div>
    </footer>
  );
}
