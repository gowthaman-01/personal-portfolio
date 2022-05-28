import { useState } from "react";
import {
  Header,
  Navbar,
  Hero,
  Projects,
  Links,
  Experiences,
  Contact,
} from "../components";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  return (
    <div>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Hero
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Projects />
      <Links />
      <Experiences />
      <Contact />
      <a
        className="flex justify-center p-8 drop-shadow-sm"
        href="https://github.com/gowthaman-01/personal-portfolio"
        target={"_blank"}
        rel="noreferrer"
      >
        <p className="hover:text-selected-text transition duration-500">
          Made by Gowthaman
        </p>
      </a>
    </div>
  );
};

export default Home;
