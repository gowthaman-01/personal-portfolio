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
    </div>
  );
};

export default Home;
