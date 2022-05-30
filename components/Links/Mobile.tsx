import Image from "next/image";
import { links } from "./data";
export const LinkMobile = () => {
  return (
    <div className="bottom-4 p-10 flex justify-center items-center gap-8">
      {links.map((item) => (
        <div key={item.name}>
          <a
            className="links"
            href={item?.link}
            rel="noreferrer"
            target={item.newTab ? "_blank" : ""}
          >
            <div className="w-7 h-7 relative hover:drop-shadow-blue transition duration-300">
              <Image src={item.image} alt="Man" layout="fill" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};