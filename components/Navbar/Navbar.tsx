import { navbarDataLarge, navbarDataSmall } from "./data";
import { useWindowSize } from "usehooks-ts";
import { Fade } from "react-awesome-reveal";

const Navbar = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}) => {
  const { width, height } = useWindowSize();
  let navbarData;
  height < 980
    ? (navbarData = navbarDataLarge)
    : (navbarData = navbarDataSmall);
  return (
    <div className={width > 1028 ? "w-4 ml-[55px]  block fixed" : "hidden"}>
      <Fade direction="left">
        <div className="absolute transform -translate-x-1/2 space-y-5 mt-40">
          {navbarData.map((item) => (
            <a key={item.title} href={item.link} className="nav-dot flex">
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
      </Fade>
    </div>
  );
};

export { Navbar };
