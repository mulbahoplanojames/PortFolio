// Importing the expertise array from the constants file
import { exprtise } from "../../constant/Constant";

// Importing the copy icon from react icons
import { FaRegClipboard } from "react-icons/fa";

// Importing the check icon from react icons
import { BsCheck } from "react-icons/bs";

// Importing the SyntaxHighlighter component from the react-syntax-highlighter library
import SyntaxHighlighter from "react-syntax-highlighter";

// Importing the sunburst style from the react-syntax-highlighter library
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Importing the useState hook from react
import { useState } from "react";

/**
 * This AboutMe component renders a section with a title, a paragraph, and a list of expertise
 * The title is "About Me" and the paragraph is a brief introduction about me
 * The expertise list is a list of buttons that contain the name of my expertise
 */
const AboutMe: React.FC = () => {
  return (
    <>
      <section
        className="bg-primary md:px-20 px-2 md:py-12 py-8 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-14 w-full place-items-center"
        id="/about"
      >
        <div className="w-full ">
          <div className="w-full">
            <h1 className="md:text-4xl text-3xl text-text md:pb-4 pb-2">
              About Me
            </h1>
            <p className="text-text pb-6">
              As a passionate Front-end React Developer, I bring ideas to life
              through clean, efficient code. With a keen eye for design and a
              love for problem-solving, I create responsive and user-friendly
              web experiences that leave a lasting impression.
            </p>
            <p className="text-text pb-8 ">My Expertise Includes:</p>
          </div>
          <div className="w-full flex items-center gap-4 flex-wrap">
            {/* Mapping over the expertise array and rendering a button for each expertise */}
            {exprtise.map((exp) => (
              <button className="text-primary bg-text py-2 px-6 rounded-full">
                {exp.name}
              </button>
            ))}
          </div>
        </div>
        {/*//? contet two  */}
        <div className="w-full bg-background text-text md:px-6 px-3 md:py-7 py-5 rounded-md">
          {/* Rendering the ExampleOne component */}
          <ExampleOne />
        </div>
      </section>
    </>
  );
};

export default AboutMe;

//? -----------------------------------------------------------------------------------------------

/**
 * The ExampleOne component renders a code block with a copy button
 * The code block contains a sample code of a React component
 * The copy button copies the code to the clipboard when clicked
 */
const ExampleOne = () => {
  // State variable to keep track of whether the code has been copied
  const [copy, setCopy] = useState(false);

  const codeString = `
const AboutMe = () => {
  const [passion, setPassion] = useState("coding");

  useEffect(() => {
    setPassion("creating amazing web experiences");
  }, []);

     return (
       <>
           Hello, I am Oplano James Mulbah, 

          I passionate about Front-end React 
      </>
     );
   }
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Passion code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                {/* Rendering the check icon when the code has been copied */}
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                // Writing the code to the clipboard when the button is clicked
                navigator.clipboard.writeText(codeString);
                // Setting the copy state to true when the code has been copied
                setCopy(true);
                setTimeout(() => {
                  // Setting the copy state to false after 3 seconds
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="text-base my-1">
                <FaRegClipboard />
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={sunburst}
          customStyle={{ padding: "1rem" }}
        >
          {/* Rendering the code string as the code block content */}
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -------------------------------------------------------------------------------------------------
