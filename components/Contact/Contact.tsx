import { useWindowSize } from "usehooks-ts";
export const Contact = () => {
  const { width } = useWindowSize();
  return (
    <div
      className="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      id={width < 1028 ? "contact" : ""}
    >
      <div className="w-full">
        <h2 className="secondary-title">Contact Me</h2>
        <p id={width > 1028 ? "contact" : ""} className="section-paragraph">
          Feel free to to contact me any time, through any method below.
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-12">
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input className="w-full border border-input-border bg-input px-4 py-4" />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                typeof="email"
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <button className="px-6 py-2 bg-theme text-white font-bold rounded hover:drop-shadow-blue transition duration-300">
              Send!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
