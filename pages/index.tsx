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
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <div className="desktop">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        headerOpen={headerOpen}
        setHeaderOpen={setHeaderOpen}
      />
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Hero
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        headerOpen={headerOpen}
      />
      <Projects />
      {width > 1028 && <LinkDesktop />}
      <Experiences />
      <Contact />
      {width < 1028 && <LinkMobile />}
      {width > 1028 && (
        <div className="flex justify-center p-4 drop-shadow-sm">
          <a
            className="hover:text-selected-text transition duration-500"
            href="https://github.com/gowthaman-01/personal-portfolio"
            rel="noreferrer"
            target={"_blank"}
          >
            Made by Gowthaman
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
