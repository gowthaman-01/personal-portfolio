import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gowthaman from "../../public/gowthaman.jpg";
import { useWindowSize } from "usehooks-ts";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
const Desktop = ({
  setCurrentSection,
}: {
  setCurrentSection: (section: string) => void;
}) => {
  const { width } = useWindowSize();
  const element = useRef<any>();
  const typed = useRef<Typed>();
  useEffect(() => {
    const options = {
      strings:
        width > 1028
          ? ["Websites.", "Applications.", "Software.", "Code.", "Programmes."]
          : ["Websites.", "Software.", "Code."],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
    };
    if (element.current) {
      typed.current = new Typed(element.current, options);
    }
    return () => {
      typed?.current?.destroy();
    };
  }, [width]);

  return (
    <div className="flex justify-center pt-16 lg:pt-0 xl:-mt-4">
      <Fade triggerOnce direction="up">
        <div className="my-8 md:my-36 xl:my-56 -ml-44 md:ml-8 lg:ml-4 xl:ml-24 2xl:mr-32 relative z-10">
          <div className="font-bold w-[170px] md:w-[250px] lg:w-[350px] text-3xl md:leading-10 md:text-[44px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <div>
              <p className="hover:text-selected-text transition duration-300">
                Building
              </p>
              <p className="hover:text-selected-text transition duration-300">
                impactful
              </p>
            </div>
            <div className="flex">
              <p
                ref={element}
                className="text-theme hover:drop-shadow-gray transition duration-300"
              ></p>
            </div>
          </div>
          <a
            href="#projects"
            onClick={() => setCurrentSection("Projects")}
            className="flex gap-6"
          >
            <button className="px-4 py-2 md:px-8 md:py-4 bg-theme text-white font-bold mt-4 md:mt-8 flex items-center space-x-3 rounded hover:drop-shadow-blue transition duration-300">
              <Image src="/eye.svg" height={20} width={20} />
              <span>View My Projects.</span>
            </button>
            {/* {width > 1028 && (
              <div className="mt-10 animate-bounce opacity-0 xl:opacity-100 hover:drop-shadow-gray transition duration-300">
                <BsFillArrowDownCircleFill size={50} color="rgb(63 63 255)" />
              </div>
            )} */}
          </a>
        </div>
      </Fade>
      <div className="absolute md:relative w-[280px] h-[280px] md:w-[450px] md:h-[480px] lg:w-[550px] lg:h-[590px] xl:w-[750px] xl:h-[820px] 2xl:w-[830px] 2xl:h-[900px] ml-16 md:mt-16 md:-ml-20 -z-50">
        <Fade triggerOnce direction="up">
          <Image src={gowthaman} alt="Man" className="" layout="responsive" />
        </Fade>
      </div>
    </div>
  );
};

export default Desktop;
