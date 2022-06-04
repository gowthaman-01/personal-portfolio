import { useWindowSize } from "usehooks-ts";
export const Contact = () => {
  const { width } = useWindowSize();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/mahtwog";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert("Thank you for reaching out!");
  };
  return (
    <div
      className="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      id={width < 1028 ? "contact" : ""}
    >
      <div className="w-full">
        <h2 className="secondary-title">Contact Me</h2>
        <p id={width > 1028 ? "contact" : ""} className="section-paragraph">
          Feel free to to contact me!
        </p>
        <div className="w-full grid gap-8 lg:gap-32 mt-12">
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
                id="name"
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
                id="email"
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
                typeof="text"
                id="message"
                name="message"
                required
                className="w-full rounded border border-input-border bg-input px-4 py-4 h-56 resize-none mb-6 focus:outline-none hover:outline-none hover:border-white transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-theme text-white font-bold rounded hover:outline-none hover:drop-shadow-blue transition duration-300"
            >
              Send!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
