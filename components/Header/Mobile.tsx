import Image from "next/image";
import { useState } from "react";
import { data } from "./data";

const Mobile = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const headerClick = () => setHeaderOpen((prevState) => !prevState);
  return (
    <header className="pt-6 pb-3">
      <div className="">
        <div className="container flex justify-between items-center mx-auto px-8 w-full">
          <div className="text-lg font-bold">gowthaman</div>
          <button className="h-6 w-6 relative" onClick={headerClick}>
            <Image src="/nav.svg" layout="fill" />
          </button>
        </div>
      </div>
      {headerOpen && (
        <div className="px-8 pt-8 w-full bg-body z-50 grid transition duration-300">
          {data.map((item) => (
            <a
              className="text-xl border rounded-xl mb-3 solid w-full text-center py-4"
              href={item.link}
              onClick={headerClick}
              key={item.title}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Mobile;
