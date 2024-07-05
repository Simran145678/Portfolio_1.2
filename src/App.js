import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DisplayImage from "./assets/images/Profile_P1.png";
// Images Import
import html from "./assets/images/html-1.svg";
import css from "./assets/images/css-3.svg";
import javascript from "./assets/images/javascript-1.svg";
import react from "./assets/images/react-2.svg";
import tailwind from "./assets/images/tailwindcss.svg";
import bootstrap from "./assets/images/bootstrap-5-1.svg";
import azure from "./assets/images/azure-1.svg";
import jira from "./assets/images/jira-1.svg";
import github from "./assets/images/github-icon-2.svg";
import nodejs from "./assets/images/nodejs-icon.svg";
import vscode from "./assets/images/visual-studio-code-1.svg";
import figma from "./assets/images/figma-5.svg";
import tenethealth from "./assets/images/Tenet_Health_logo.png";
import consumersenergy from "./assets/images/Consumers_Energy_logo.svg.png";

export default function App() {
  const skillsImageList = [
    { path: html, name: "HTML5" },
    { path: css, name: "CSS" },
    { path: javascript, name: "JavaScript" },
    { path: react, name: "React JS" },
    { path: tailwind, name: "TailwindCSS" },
    { path: bootstrap, name: "Bootstrap" },
    { path: azure, name: "Azure" },
    { path: jira, name: "Jira" },
    { path: github, name: "Github" },
    { path: nodejs, name: "Node Js" },
    { path: vscode, name: "VS Code" },
    { path: figma, name: "Figma" },
  ];

  return (
    <>
      <Header />
      <Intro img={DisplayImage} />
      <About />
      <Skills img={skillsImageList} />
      <Projects />
      <Footer />
    </>
  );
}
