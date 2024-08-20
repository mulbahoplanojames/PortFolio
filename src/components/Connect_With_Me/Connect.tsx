// Importing the useState hook from React
import { useState } from "react";

/**
 * I created this component to renders a form on the page.
 * The form allows users to input their name, email, and project description
 * and submit it to the server.
 *
 * The component uses the useState hook to store the result of the form submission.
 * The result is either a success message or an error message.
 *
 * The component also uses the onSubmit event handler to handle the form submission.
 * The event handler prevents the default form submission behavior and sends a POST request
 * to the server with the form data.
 */
const Connect = () => {
  const [result, setResult] = useState("");

  // Get the API key from the environment variable.
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Define the onSubmit event handler.
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Set the result to "Sending...".
    setResult("Sending....");

    // Get the form data from the event.
    const formData = new FormData(event.currentTarget);

    // Add the API key to the form data.
    formData.append("access_key", `${API_KEY}`);

    // Send a POST request to the server with the form data.
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Get the JSON response from the server.
    const data: { success: boolean; message: string } = await response.json();

    // If the response is successful, display a success message and reset the form.
    if (data.success) {
      setResult("Message sent Successfully");
      event.currentTarget.reset();
    } else {
      // If the response is not successful, display an error message.
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Render the component.
  return (
    <>
      <section
        className="md:px-20 px-3 md:py-24 py-14 bg-background grid md:grid-cols-2 grid-cols-1 gap-8 place-items-center text-text"
        id="/contact"
      >
        <div className="">
          <h2 className="md:text-4xl font-bold text-3xl pb-4">
            Ready to evalate your web presence?
          </h2>
          <p className="text-lg pb-5">
            As a passionate front-end React developer, I'm here to transform
            your ideas into stunning, responsive websites. Let's collaborate and
            create something extraordinary together.
          </p>
        </div>
        <div className="bg-text md:w-[80%] w-full rounded-md px-4 py-5 text-primary">
          <h2 className=" text-2xl pb-5 capitalize font-bold">
            Get started today
          </h2>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              className="w-full h-[6dvh] border border-primary rounded-md px-4 mb-5"
              placeholder="Your name"
              required
            />
            <input
              type="text"
              name="email"
              className="w-full h-[6dvh] border border-primary rounded-md px-4 mb-5"
              placeholder="Your Email"
              required
            />

            <textarea
              name="Project_Description"
              className="w-full h-[15dvh] border border-primary rounded-md px-4 mb-2 resize-none py-2"
              required
              placeholder="Project Description"
            ></textarea>

            {/* form name  */}
            <input type="hidden" name="from_name" value="Oplano Portfolio" />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Oplano James Mulbah Portfolio"
            />
            <span className="pb-2 inline-block">{result}</span>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-text text-lg rounded-md hover:opacity-85"
            >
              Let's Connect
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Connect;
