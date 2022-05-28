import Image from "next/image";
import { links } from "./data";
export const Links = () => {
  return (
    <div className="lg:right-4 bottom-4 fixed">
      {links.map((item) => (
        <div className="py-3" key={item.name}>
          <a
            className="links flex items-center justify-end"
            href={item?.link}
            rel="noreferrer"
            target={item.newTab ? "_blank" : ""}
          >
            <span className="bg-black px-2 py-1 rounded-md mr-4 opacity-0">
              {item.name}
            </span>
            <div className="w-7 h-7 relative hover:drop-shadow-blue transition duration-300">
              <Image src={item.image} alt="Man" layout="fill" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
