import { useState } from "react";

const Connect = () => {
  const [result, setResult] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", `${API_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data: { success: boolean; message: string } = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className="md:px-20 px-3 md:py-24 py-14 bg-background grid md:grid-cols-2 grid-cols-1 gap-8 place-items-center text-text">
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
