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
          <form action="/api/mahtwog" method="post">
            <div>
              <label
                htmlFor="name"
                className="text-white block mb-6 text-xl font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-input-border bg-input px-4 py-4 mb-6"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-6 text-xl font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-input-border bg-input px-4 py-4 mb-6"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                typeof="text"
                id="message"
                name="nessage"
                required
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none mb-6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-theme text-white font-bold rounded hover:drop-shadow-blue transition duration-300"
            >
              Send!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
