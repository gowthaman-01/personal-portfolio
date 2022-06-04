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
        <div className="pt-10 pb-6 drop-shadow-sm flex justify-center items-center">
          <a
            href="https://github.com/gowthaman-01/personal-portfolio"
            rel="noreferrer"
            target={"_blank"}
          >
            <div className="code grid space-y-1.5 justify-items-center transition duration-200">
              <span className="bg-nav py-1 rounded-md opacity-0 flex justify-center w-[100px]">
                View code
              </span>
              <p>Developed by Gowthaman</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
