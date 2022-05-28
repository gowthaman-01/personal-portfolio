import Image from "next/image";
import { data } from "./data";

const Projects = () => {
  return (
    <div className="container lg:-mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full z-100">
      <div className="w-full">
        <h2 className="secondary-title">My Projects</h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          id="projects"
        >
          {data.map((project) => (
            <div
              key={project.title}
              className="flex project h-96 lg:h-72 lg:w-[424px] overflow-hidden rounded-md relative hover:transform-gpu hover:scale-105 transition duration-300"
            >
              <a href={project?.link} target={"_blank"} rel="noreferrer">
                <Image src={project.image} layout="fill" />
                <span className="bg-nav absolute opacity-0 rounded p-4 h-full">
                  <p className="underline text-center text-xl mb-3 font-bold">
                    {project.title}
                  </p>
                  <div className="flex flex-wrap justify-center items-center mb-3 gap-x-3 gap-y-2">
                    {project.tech.map((item) => (
                      <p
                        key={item}
                        className="text-sm px-5 py-1 bg-body rounded-2xl"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className="text-center">{project.description}</p>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Projects };
