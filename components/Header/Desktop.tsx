import { Fade } from "react-awesome-reveal";

const Desktop = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}) => {
  return (
    <Fade direction="down">
      <header className="py-6">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-8 lg:px-24 w-full">
          <a
            className="text-lg font-bold hover:text-selected-text transition duration-300"
            href="#"
          >
            gowthaman
          </a>
          <div className="flex items-center">
            <a href="#" className="text-selected-text xl:mr-12 md:mr-8">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-selected-text transition duration-200 xl:mr-12 md:mr-8"
            >
              Projects
            </a>
            <a
              href="#work"
              className="hover:text-selected-text transition duration-200 xl:mr-12 md:mr-8"
            >
              Work
            </a>
            <a href="#contact">
              <button className="px-6 py-2 bg-theme font-bold rounded mr-8 hover:drop-shadow-blue transition duration-300">
                Contact
              </button>
            </a>
            <a href="/Gowthaman-Aravindan-Resume.pdf" target={"_blank"}>
              <button className="px-6 py-2 bg-nav font-bold rounded mr-8 hover:drop-shadow-gray transition duration-300">
                Resume
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
    </Fade>
  );
};

export default Desktop;
