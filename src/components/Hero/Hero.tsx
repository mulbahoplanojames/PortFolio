import React from "react";
import { BackgroundBeams } from "../ui/background-beams"; // Adjust the import path according to your project structure

export const Hero: React.FC = () => {
  return (
    <div
      className="md:h-[40rem] h-[30rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
      id="/"
    >
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary text-center font-sans font-bold pb-4">
          Transform your ideas into stunning websites
        </h1>
        <p></p>
        <p className="text-text max-w-lg mx-auto my-2 text-sm md:text-lg  text-center relative z-10">
          Hi! I’m Oplano James Mulbah, a passionate Front-end React Developer
          ready to elevate your web projects.
        </p>

        <button className="relative z-10  mt-4 lg:px-10 px-6 py-3 border-none  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-sm lg:text-base rounded-3xl hover:opacity-50 bg-white text-primary inline-block">
          Download Resume
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};
