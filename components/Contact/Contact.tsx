import { useWindowSize } from "usehooks-ts";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

export const Contact = () => {
  const { width = 0 } = useWindowSize({ initializeWithValue: false });
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setShowMessage(false);
    setLoadingIndicator(true);
    event.preventDefault();
    const form = event.currentTarget;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE;

    if (!publicKey || !serviceId || !templateId) {
      console.error("EmailJS environment variables are not configured.");
      setLoadingIndicator(false);
      setSuccess(false);
      setShowMessage(true);
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await emailjs.send(serviceId, templateId, data, {
        publicKey,
      });
      setSuccess(true);
      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      setSuccess(false);
      console.error(error);
    } finally {
      setLoadingIndicator(false);
      setShowMessage(true);
    }
  };
  return (
    <div
      className="container flex justify-between items-center mx-auto px-8 -mb-5 md:px-14 lg:px-24 w-full"
      id={width < 1028 ? "contact" : ""}
    >
      <div className="w-full">
        <div>
          <h2 className="secondary-title">Contact Me</h2>
          <p id={width > 1028 ? "contact" : ""} className="section-paragraph">
            Feel free to to contact me at gowthaman.swe@gmail.com or send in a
            message below!
          </p>
        </div>
        <div className="w-full grid gap-8 lg:gap-32">
          <form onSubmit={handleSubmit}>
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
            <div>
              <label
                className="text-white block mb-6 text-xl font-bold "
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full rounded border border-input-border bg-input px-4 py-4 h-56 resize-none mb-6 focus:outline-none hover:outline-none hover:border-white transition duration-300"
              ></textarea>
            </div>
            {width >= 768 ? (
              <div>
                <button
                  type="submit"
                  className="mb-5 h-12 w-40 flex justify-center items-center gap-x-3 px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                >
                  {loadingIndicator ? "Sending" : "Send"}
                  {loadingIndicator && (
                    <span
                      aria-label="Sending message"
                      role="status"
                      className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/40 border-t-white"
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
                          : "Error: Unable to send message. Please contact me directly at gowthaman.swe@gmail.com"}
                      </p>
                    </Alert>
                  </Grow>
                </div>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="mb-5 h-12 flex justify-center items-center gap-x-3 px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
                >
                  {loadingIndicator ? "Sending" : "Send"}
                  {loadingIndicator && (
                    <span
                      aria-label="Sending message"
                      role="status"
                      className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/40 border-t-white"
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
                        : "Error: Unable to send message. Please contact me directly at gowthaman.swe@gmail.com"}
                    </p>
                  </Alert>
                </Grow>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
