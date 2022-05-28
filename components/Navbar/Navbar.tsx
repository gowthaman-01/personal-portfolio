import { useState } from "react";
import { navbarData } from "./data";
const Navbar = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}) => {
  return (
    <div className="lg:w-4 fixed lg:ml-20 hidden xl:block">
      <div className="absolute transform -translate-x-1/2 space-y-5 mt-40">
        {navbarData.map((item) => (
          <a
            key={item.title}
            href={item.link}
            onClick={() => setCurrentSection(item.title)}
            className="nav-dot flex"
          >
            <div
              className={`ml-24 block w-7 h-7 rounded-full border-4 border-nav bg-body transition ${
                currentSection == item.title
                  ? "selected-circle drop-shadow-blue duration-300"
                  : "hover:drop-shadow-gray duration-300"
              }`}
            ></div>
            <span className="bg-black px-2 py-1 rounded-md ml-4 opacity-0">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
