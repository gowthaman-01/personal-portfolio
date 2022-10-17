import Image from "next/image";
import { data } from "./data";
import { useWindowSize } from "usehooks-ts";
import { Fade, Slide } from "react-awesome-reveal";
export const Experiences = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <div
        className="container mt-28 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
        id={width < 1028 ? "work" : ""}
      >
        <div className="w-full">
          <Fade direction={width > 1028 ? "up" : "up"} triggerOnce>
            <div>
              <h2 className="secondary-title">Work Experience</h2>
              <p className="section-paragraph" id={width > 1028 ? "work" : ""}>
                I have worked at the following companies and organisations while
                exploring different areas of Software engineering and
                development.
              </p>
            </div>
          </Fade>

          {data.map((item) => (
            <Slide direction="up" triggerOnce key={item.company}>
              <div className="space-y-12 my-16" key={item.company}>
                <div className="w-full border border-nav p-12 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                  <div className="mb-6 lg:mb-0 relative w-[96px] h-[96px] hover:drop-shadow-dim transition duration-300">
                    <a target={"_blank"} rel="noreferrer" href={item.link}>
                      <Image
                        src={item.image}
                        layout="responsive"
                        width={item?.width}
                        height={item?.height}
                      />
                    </a>
                  </div>
                  <div className="text-center lg:text-left lg:block w-full">
                    <h3 className="text-white text-3xl font-semibold hover:text-selected-text transition duration-300">
                      <a target={"_blank"} rel="noreferrer" href={item.link}>
                        {item.company}
                      </a>
                    </h3>
                    <div className="flex justify-center lg:block">
                      <div className="font-poppins py-1 px-4 mt-4 border-solid border-slate-400 border-2  w-fit rounded-xl hover:drop-shadow-gray hover:scale-105 transition duration-300">
                        {item.role}
                      </div>
                    </div>

                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 my-4">
                      <div className="badge">{item.tag1}</div>
                      <div className="badge">{item.tag2}</div>
                    </div>
                    <p className="text-secondary">{item.description}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};
