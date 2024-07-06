import React from "react";
import { useState, useEffect } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`w-screen fixed opacity-95 bg-white  z-50 px-6 py-4 font-noto duration-500 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container  flex flex-col md:flex-row justify-between items-center">
          <a href="#intro">
            <div className="logo leading-tight relative cursor-pointer hover:scale-105 transition-all duration-300">
              <p className="font-bold text-xl leading-tight  z-20 border-b-2 border-gray-800">
                harsimran kaur
              </p>
              <small className=" leading-tight z-20 ">
                Code, Create, Captivate.
              </small>
              <div className="bg-box opacity-50 absolute  ml-4 top-0 -mt-1 -z-50  "></div>
            </div>
          </a>
          <div className="nav-list">
            <ul className="flex pt-6 md:pt-0">
              <li className="mr-4 md:mr-6 hover:scale-105 transition-all duration-300">
                <a
                  href="#about"
                  className="hover:border-b-2 hover:border-yellow-500 hover:text-gray-800  transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li className="mr-4 md:mr-6 hover:scale-105 transition-all duration-300">
                <a
                  href="#skills"
                  className="hover:border-b-2 hover:border-yellow-500 hover:text-gray-800  transition-all duration-300"
                >
                  Skills
                </a>
              </li>
              <li className="mr-4 md:mr-6 hover:scale-105 transition-all duration-300">
                <a
                  href="#projects"
                  className="hover:border-b-2 hover:border-yellow-500 hover:text-gray-800  transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li className="mr-4 md:mr-6 -mt-1">
                <a
                  href="https://www.linkedin.com/in/kaurharsimran05/"
                  target="_blank"
                  className="text-2xl hover:underline"
                >
                  <i className="fa-brands fa-linkedin hover:text-yellow-500 hover:scale-125 transition-all duration-300"></i>
                </a>
              </li>
              <li className="mr-4 md:mr-6 -mt-1">
                <a
                  href="https://github.com/Simran145678"
                  target="_blank"
                  className="text-2xl hover:underline"
                >
                  <i className="fa-brands fa-square-github hover:text-yellow-500 hover:scale-125 transition-all duration-300"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
