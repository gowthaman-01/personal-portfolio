import Image from "next/image";
import { useState } from "react";
import { data } from "./data";
import { FaFilePdf, FaCode } from "react-icons/fa";
import { LinkMobile } from "../Links/Mobile";
import { Fade } from "react-awesome-reveal";

const Mobile = ({
  headerOpen,
  setHeaderOpen,
}: {
  headerOpen: boolean;
  setHeaderOpen: (param: (prevState: boolean) => boolean) => void;
}) => {
  const headerClick = () => setHeaderOpen((prevState) => !prevState);
  return (
    <header
      className={`w-full fixed m-0 pt-6 pb-3 opacity-[0.97] z-20 rounded ${
        headerOpen ? "bg-nav h-screen" : "bg-body"
      }`}
    >
      <Fade direction="down">
        <div className="">
          <div className="container flex justify-between items-center mx-auto px-8 w-full">
            <a href="#" className="text-lg font-bold">
              gowthaman
            </a>
            {headerOpen ? (
              <button className="h-7 w-7 relative" onClick={headerClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 17 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button className="h-6 w-6 relative" onClick={headerClick}>
                <Image src="/nav.svg" layout="fill" alt="Hamburger icon" />
              </button>
            )}
          </div>
        </div>
      </Fade>

      {headerOpen && (
        <>
          <Fade direction="right" duration={300}>
            <div className="px-8 pt-8 z-50 grid justify-items-end">
              {data.map((item) => (
                <a
                  className="text-xl mb-3 solid border w-36 rounded-md text-center py-2"
                  href={item.link}
                  onClick={headerClick}
                  key={item.title}
                >
                  <div className="flex items-center pl-3">
                    <div className="w-7 flex justify-center">
                      <item.icon />
                    </div>
                    <div className="w-full flex justify-center">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </a>
              ))}
              <a
                className="text-xl mb-3 solid border w-36 rounded-md text-center py-2"
                href="/Gowthaman-Aravindan-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={headerClick}
              >
                <div className="flex items-center pl-3">
                  <div className="w-7 flex justify-center">
                    <FaFilePdf />
                  </div>
                  <div className="w-full flex justify-center">
                    <p>Resume</p>
                  </div>
                </div>
              </a>
              <a
                className="text-xl mb-3 solid border w-36 rounded-md text-center py-2"
                href="https://github.com/gowthaman-01/personal-portfolio"
                target="_blank"
                rel="noreferrer"
                onClick={headerClick}
              >
                <div className="flex items-center pl-3">
                  <div className="w-7 flex justify-center">
                    <FaCode />
                  </div>
                  <div className="w-full flex justify-center">
                    <p>Code</p>
                  </div>
                </div>
              </a>
            </div>
          </Fade>
          <div className="fixed left-1/2 bottom-0.5 w-full">
            <Fade direction="up" duration={400}>
              <div className="py-3 px-12 -translate-x-1/2 -translate-y-1/2 bg-secondary ">
                <LinkMobile />
              </div>
            </Fade>
          </div>
        </>
      )}
    </header>
  );
};

export default Mobile;
