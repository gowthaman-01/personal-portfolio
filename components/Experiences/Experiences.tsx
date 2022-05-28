import Image from "next/image";
import { data } from "./data";
export const Experiences = () => {
  return (
    <div>
      <div className="container mt-28 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="w-full">
          <h2 className="secondary-title">Work Experience</h2>
          <p className="section-paragraph" id="work">
            I have worked at the following companies and organistaions and
            explored different areas of Software Development.
          </p>
          {data.map((item) => (
            <div className="space-y-12 my-16" key={item.company}>
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                <div className={`mb-6 lg:mb-0 relative ${item.size}`}>
                  <div className="h-full w-full">
                    <Image src={item.image} layout="fill" />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block w-full">
                  <h3 className="text-white text-3xl font-semibold">
                    {item.company}
                  </h3>
                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    <div className="badge">{item.tag1}</div>
                    <div className="badge">{item.tag2}</div>
                  </div>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
