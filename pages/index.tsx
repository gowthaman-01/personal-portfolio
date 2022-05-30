import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import {
  Header,
  Hero,
  Projects,
  Experiences,
  Contact,
  LinkDesktop,
  LinkMobile,
  Navbar,
} from "../components";

const Home = () => {
  const { width } = useWindowSize();
  const [currentSection, setCurrentSection] = useState("Home");
  return (
    <div className="desktop">
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
      {width > 1028 && <LinkDesktop />}
      <Experiences />
      <Contact />
      {width < 1028 && <LinkMobile />}
      {width > 1028 && (
        <a
          className="flex justify-center p-4 drop-shadow-sm"
          href="https://github.com/gowthaman-01/personal-portfolio"
          target={"_blank"}
          rel="noreferrer"
        >
          <p className="hover:text-selected-text transition duration-500">
            Made by Gowthaman
          </p>
        </a>
      )}
    </div>
  );
};

export default Home;
