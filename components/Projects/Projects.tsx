import Image from "next/image";
import { data } from "./data";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useState } from "react";

const Projects = () => {
  const { width } = useWindowSize();
  const [showInfo, setShowInfo] = useState(true);
  useEffect(() => {
    width > 480 ? setShowInfo(true) : setShowInfo(false);
  }, [width]);
  const toggle = () => width < 768 && setShowInfo((prevState) => !prevState);

  return (
    <div className="container mt-2 md:-mt-16 mx-auto px-8 md:px-16 lg:px-24 w-full z-100">
      <div className="w-full">
        <h2 className="secondary-title">My Projects</h2>

        <div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 justify-items-center"
          id="projects"
        >
          {width > 768
            ? data.map((project) => (
                <div key={project.title}>
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
                </div>
              ))
            : data.map((project) => (
                <div key={project.title}>
                  <div className="project w-[342px] h-[236px] relative rounded-md overflow-hidden">
                    <div onClick={toggle}>
                      <Image src={project.image} layout="fill" />
                      {showInfo && (
                        <span className="bg-nav absolute opacity-0 p-4 h-full">
                          <p className="underline text-center text-lg mb-3 font-bold">
                            {project.title}
                          </p>
                          <div className="flex flex-wrap justify-center items-center mb-3 gap-x-3 gap-y-2">
                            {project.tech.map((item) => (
                              <p
                                key={item}
                                className="text-xs m px-5 py-1 bg-body rounded-2xl"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          <p className="text-center text-xs">
                            {project.description}
                          </p>

                          <a
                            href={project.link}
                            className="absolute bottom-1 right-2"
                          >
                            <div className="mouse scale-75">
                              <div className="scroll" />
                            </div>
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export { Projects };
