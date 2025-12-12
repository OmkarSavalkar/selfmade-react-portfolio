import { useEffect } from "react";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Recommendations from "./components/Recommendations/Recommendations";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/global.scss";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Recommendations />
    </div>
  );
}
