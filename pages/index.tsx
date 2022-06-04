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
  Code,
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
      {width < 1028 && (
        <div className="p-10">
          <LinkMobile />
        </div>
      )}

      {width > 1028 && <Code />}
    </div>
  );
};

export default Home;
