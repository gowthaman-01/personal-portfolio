import { Fade, Slide } from "react-awesome-reveal";
import { useWindowSize } from "usehooks-ts";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const { width } = useWindowSize();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY);
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        data,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then((response) => {
        alert("Thank you for reaching out!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        alert(
          "Error: Unable to send message. Please contact me directly at gowthaman169@gmail.com"
        );
        console.log(error);
      });
  };
  return (
    <div
      className="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      id={width < 1028 ? "contact" : ""}
    >
      <div className="w-full">
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className="secondary-title">Contact Me</h2>
            <p id={width > 1028 ? "contact" : ""} className="section-paragraph">
              Feel free to to contact me!
            </p>
          </div>
        </Fade>

        <div className="w-full grid gap-8 lg:gap-32 mt-12">
          <form onSubmit={handleSubmit}>
            <Fade direction="up" triggerOnce>
              <div>
                <label
                  htmlFor="name"
                  className="text-white block mb-6 text-xl font-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border rounded border-input-border bg-input px-4 py-4 mb-6 focus:outline-none hover:outline-none hover:border-white transition duration-300"
                />
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div>
                <label
                  htmlFor="email"
                  className="text-white block mb-6 text-xl font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded border border-input-border bg-input px-4 py-4 mb-6 focus:outline-none hover:outline-none hover:border-white transition duration-300"
                />
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div>
                <label
                  className="text-white block mb-6 text-xl font-bold "
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  typeof="text"
                  name="message"
                  required
                  className="w-full rounded border border-input-border bg-input px-4 py-4 h-56 resize-none mb-6 focus:outline-none hover:outline-none hover:border-white transition duration-300"
                ></textarea>
              </div>
            </Fade>
            {width >= 768 ? (
              <Fade direction="up" triggerOnce delay={450}>
                <button
                  type="submit"
                  className="px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                >
                  Send!
                </button>
              </Fade>
            ) : (
              <Fade triggerOnce>
                <button
                  type="submit"
                  className="px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                >
                  Send!
                </button>
              </Fade>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
