import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { useScrollDirection } from "react-use-scroll-direction";
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
  const { scrollDirection } = useScrollDirection();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setIsScrollDown(true);
    } else if (scrollDirection === "UP") {
      setIsScrollDown(false);
    }
  }, [width, scrollDirection]);
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
      <Waypoint
        onEnter={() => setCurrentSection("Home")}
        onLeave={() => setCurrentSection("Projects")}
      >
        <div>
          <Hero setCurrentSection={setCurrentSection} />
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => setCurrentSection("Projects")}
        onLeave={() =>
          isScrollDown ? setCurrentSection("Work") : setCurrentSection("Home")
        }
      >
        <div>
          <Projects />
        </div>
      </Waypoint>
      {width > 1028 && <LinkDesktop />}
      <Waypoint
        onEnter={() => setCurrentSection("Work")}
        onLeave={() =>
          isScrollDown
            ? setCurrentSection("Contact")
            : setCurrentSection("Projects")
        }
      >
        <div>
          <Experiences />
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => setCurrentSection("Contact")}
        onLeave={() => setCurrentSection("Work")}
      >
        <div>
          <Contact />
        </div>
      </Waypoint>
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
