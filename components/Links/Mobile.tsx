import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { mobileLinks } from "./data";
import { useWindowSize } from "usehooks-ts";
export const LinkMobile = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width >= 768 ? (
        <Fade direction="up">
          <div className="flex justify-center items-center gap-8">
            {mobileLinks.map((item) => (
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
        </Fade>
      ) : (
        <Fade>
          <div className="flex justify-center items-center gap-8">
            {mobileLinks.map((item) => (
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
        </Fade>
      )}
    </>
  );
};
