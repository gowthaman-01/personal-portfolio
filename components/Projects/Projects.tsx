import Image from "next/image";
import { data } from "./data";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { useScrollDirection } from "react-use-scroll-direction";

const Projects = () => {
  const { width } = useWindowSize();
  const [showInfo, setShowInfo] = useState(true);
  const { scrollDirection } = useScrollDirection();
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    width > 480 ? setShowInfo(true) : setShowInfo(false);
    if (scrollDirection === "DOWN") {
      setIsScrollDown(true);
    } else if (scrollDirection === "UP") {
      setIsScrollDown(false);
    }
  }, [width, scrollDirection]);
  const toggle = () => width < 768 && setShowInfo(true);

  return (
    <div className="container mt-2 md:-mt-16 mx-auto px-8 md:px-16 lg:px-24 w-full z-100">
      <div className="w-full">
        {width > 1028 ? (
          <Fade direction="up" triggerOnce>
            <h2 className="secondary-title" id={width < 1028 ? "projects" : ""}>
              My Projects
            </h2>
          </Fade>
        ) : (
          <Fade delay={550} direction="down" triggerOnce>
            <h2 className="secondary-title" id={width < 1028 ? "projects" : ""}>
              My Projects
            </h2>
          </Fade>
        )}

        <div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 justify-items-center"
          id={width > 1028 ? "projects" : ""}
        >
          {width > 1028
            ? data.map((project) => (
                <Fade triggerOnce direction="up" key={project.title}>
                  <>
                    <div className="project md:w-[639px] md:h-[432px] lg:w-[400px] lg:h-[270px] xl:w-[355px] xl:h-[240px] 2xl:w-[440px] 2xl:h-[297px] overflow-hidden rounded-md relative hover:transform-gpu hover:scale-105 transition duration-300">
                      <a
                        href={project?.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={toggle}
                      >
                        <Image src={project.image} layout="fill" />
                        <span className="bg-nav absolute opacity-0 rounded p-4 h-full">
                          <p className="underline text-center text-xl mb-3 font-bold">
                            {project.title}
                          </p>
                          <div className="flex flex-wrap justify-center items-center mb-3 gap-x-3 gap-y-2">
                            {project.tech.map((item) => (
                              <p
                                key={item}
                                className="text-base px-5 py-1 bg-body rounded-2xl"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          <p className="text-center text-base">
                            {project.description}
                          </p>
                        </span>
                      </a>
                    </div>
                  </>
                </Fade>
              ))
            : data.map((project) => (
                <Fade direction="up" triggerOnce key={project.title}>
                  <>
                    <div className="project w-[342px] h-[236px] md:w-[639px] md:h-[432px] relative rounded-md overflow-hidden">
                      <div onClick={toggle}>
                        <Image src={project.image} layout="fill" />
                        {showInfo && (
                          <span className="bg-nav absolute opacity-0 p-4 md:p-16 w-full h-full">
                            <p className="underline text-center text-lg md:text-xl mb-3 md:mb-6 font-bold">
                              {project.title}
                            </p>
                            <div className="flex flex-wrap justify-center items-center mb-3 md:mb-6 gap-x-3 gap-y-2">
                              {project.tech.map((item) => (
                                <p
                                  key={item}
                                  className="text-xs md:text-base m px-5 py-1 bg-body rounded-2xl"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                            <p className="text-center text-xs md:text-base">
                              {project.description}
                            </p>
                            <a
                              href={project.link}
                              className="absolute right-4 bottom-2 md:right-8 md:bottom-8 p-2 rounded-md border solid"
                            >
                              <div className="flex justify-center items-center gap-2">
                                <FaGlobe />
                                <p className="text-xs md:text-base">
                                  View Project
                                </p>
                              </div>
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                </Fade>
              ))}
        </div>
      </div>
    </div>
  );
};

export { Projects };
