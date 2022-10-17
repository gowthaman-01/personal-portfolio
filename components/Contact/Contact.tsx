import { Fade } from "react-awesome-reveal";
import { useWindowSize } from "usehooks-ts";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

export const Contact = () => {
  const { width } = useWindowSize();
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event: any) => {
    setShowMessage(false);
    setLoadingIndicator(true);
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
        setLoadingIndicator(false);
        setSuccess(true);
        setShowMessage(true);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        setLoadingIndicator(false);
        setSuccess(false);
        setShowMessage(true);
        console.log(error);
      });
  };
  return (
    <div
      className="container flex justify-between items-center mx-auto px-8 -mb-5 md:px-14 lg:px-24 w-full"
      id={width < 1028 ? "contact" : ""}
    >
      <div className="w-full">
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className="secondary-title">Contact Me</h2>
            <p id={width > 1028 ? "contact" : ""} className="section-paragraph">
              Feel free to to contact me at gowthaman.aravindan@gmail.com or
              send in a message below!
            </p>
          </div>
        </Fade>

        <div className="w-full grid gap-8 lg:gap-32">
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
                <div>
                  <button
                    type="submit"
                    className="mb-5 h-12 w-40 flex justify-center items-center gap-x-3 px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                  >
                    {loadingIndicator ? "Sending" : "Send"}
                    {loadingIndicator && (
                      <Oval
                        height={25}
                        width={25}
                        color="white"
                        ariaLabel="oval-loading"
                        secondaryColor="white"
                        strokeWidth={5}
                        strokeWidthSecondary={5}
                      />
                    )}
                  </button>
                  <div className="w-fit">
                    <Grow in={showMessage}>
                      <Alert
                        variant="filled"
                        severity={success ? "success" : "error"}
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setShowMessage(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                      >
                        <p className="text-[16px]">
                          {success
                            ? "Message sent successfully. Thanks for reaching out!"
                            : "Error: Unable to send message. Please contact me directly at gowthaman.aravindan@gmail.com"}
                        </p>
                      </Alert>
                    </Grow>
                  </div>
                </div>
              </Fade>
            ) : (
              <Fade triggerOnce>
                <div>
                  <button
                    type="submit"
                    className="mb-5 h-12 flex justify-center items-center gap-x-3 px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                  >
                    {loadingIndicator ? "Sending" : "Send"}
                    {loadingIndicator && (
                      <Oval
                        height={25}
                        width={25}
                        color="white"
                        ariaLabel="oval-loading"
                        secondaryColor="white"
                        strokeWidth={5}
                        strokeWidthSecondary={5}
                      />
                    )}
                  </button>
                  <Grow in={showMessage}>
                    <Alert
                      variant="filled"
                      severity={success ? "success" : "error"}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setShowMessage(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      <p className="text-[16px]">
                        {success
                          ? "Message sent successfully. Thanks for reaching out!"
                          : "Error: Unable to send message. Please contact me directly at gowthaman.aravindan@gmail.com"}
                      </p>
                    </Alert>
                  </Grow>
                </div>
              </Fade>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
