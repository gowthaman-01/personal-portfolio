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
      <div className="absolute transform -translate-x-1/2 space-y-6 mt-40">
        {navbarData.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className={`nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body ${
              currentSection == item.title && "selected-circle"
            }`}
            onClick={() => setCurrentSection(item.title)}
          >
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
