import { useEffect, useState, useRef } from "react";
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

  const [currentSection, setCurrentSection] = useState("Home");
  const [headerOpen, setHeaderOpen] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setIsScrollDown(true);
    } else if (scrollDirection === "UP") {
      setIsScrollDown(false);
    }
  }, [width, scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset to trigger slightly before reaching section

      // Get section positions
      const homePosition = homeRef.current?.offsetTop ?? 0;
      const projectsPosition = projectsRef.current?.offsetTop ?? 0;
      const workPosition = workRef.current?.offsetTop ?? 0;
      const contactPosition = contactRef.current?.offsetTop ?? 0;

      // Determine current section based on scroll position
      if (scrollPosition < projectsPosition) {
        setCurrentSection("Home");
      } else if (scrollPosition < workPosition) {
        setCurrentSection("Projects");
      } else if (scrollPosition < contactPosition) {
        setCurrentSection("Work");
      } else {
        setCurrentSection("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <div ref={homeRef}>
        <Hero setCurrentSection={setCurrentSection} />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      {width > 1028 && <LinkDesktop />}

      <div ref={workRef}>
        <Experiences />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

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
