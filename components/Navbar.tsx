import React from "react";

const Navbar = () => {
  return (
    <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
      <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
        <a
          href="#"
          className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
            Home
          </span>
        </a>
        <a
          href="#projects"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
            Projects
          </span>
        </a>
        <a
          href="#work"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
            Work
          </span>
        </a>
        <a
          href="#contact"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
            Contact
          </span>
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
