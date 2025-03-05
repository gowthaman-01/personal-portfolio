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
import Head from "next/head";

const Home = () => {
  const { scrollDirection } = useScrollDirection();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { width, height } = useWindowSize();
  const description =
    "Check out my personal website to explore a range of software development projects and my professional experiences with leading tech companies and organizations.";
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
      <Head>
        <title>{`Gowthaman Aravindan`}</title>
        <meta name="description" content={description} />
      </Head>
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
      {height > 980 ? (
        <Waypoint
          onEnter={() => !isScrollDown && setCurrentSection("Home")}
          onLeave={() => isScrollDown && setCurrentSection("Projects")}
        >
          <div>
            <Hero setCurrentSection={setCurrentSection} />
          </div>
        </Waypoint>
      ) : (
        <Hero setCurrentSection={setCurrentSection} />
      )}

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
