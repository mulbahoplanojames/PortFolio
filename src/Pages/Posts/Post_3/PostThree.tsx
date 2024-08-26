import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/blog2.webp";
import authorAvatar from "/src/assets/oplano.jpg";

import { FaRegClipboard } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

// react syntax Highlighter
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const PostThree = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white h-fit bg-background">
        <PostHero
          postImage={postImage}
          postTitle={
            "Getting Started with JavaScript Functions: A Beginner's Guide"
          }
          postDate={"Aug 21, 2024"}
          authorImage={authorAvatar}
          authorName={"By:Oplano James Mulbah"}
        />

        <div className="pt-8 pb-4">
          <p className="text-lg">{text1}</p>
        </div>

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4">What is a JavaScript Function?</h1>
          <p className="text-lg pb-4">{text2}</p>
          <p className="text-lg">{text3}</p>
        </div>

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4">Why Use Functions?</h1>
          <p className="text-lg pb-4">Here’s why functions are awesome:</p>
          <ul className="text-lg list-decimal list-inside">
            <li className="pb-4">{list1}</li>
            <li className="pb-4">{list2}</li>
            <li className="pb-4">{list3}</li>
          </ul>
        </div>

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4">
            How to Create a Function in JavaScript?
          </h1>
          <p className="text-lg pb-4">
            Creating a function in JavaScript is like writing your own recipe.
            Here’s how you do it:
          </p>
          <ul className="text-lg list-decimal list-inside">
            <li className="pb-4">{createList1}</li>
            <li className="pb-4">{createList2}</li>
            <li className="pb-4">{createList3}</li>
            <li className="pb-4">{createList4}</li>
            <li className="pb-4">{createList5}</li>
          </ul>
        </div>

        <ExampleOne />

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4">Calling a Function</h1>
          <p className="text-lg pb-4">
            Now that you’ve created your function, how do you use it? Simple!
            You "call" the function by writing its name followed by parentheses,
            and passing any necessary arguments (the actual values) into those
            parentheses.
          </p>
        </div>

        <ExampleTwo />

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4">A Few More Examples</h1>
          <p className="text-lg pb-4">1. Function Without Parameters:</p>
          <p className="text-lg pb-4">
            Not all functions need parameters. Here’s a function that simply
            prints a greeting:
          </p>
        </div>

        <ExampleThree />

        <div className="pt-8 pb-4">
          <p className="text-lg pb-4">2. Function with Multiple Parameters:</p>
          <p className="text-lg pb-4">
            You can pass multiple parameters into a function:
          </p>
        </div>

        <ExampleFour />

        <div className="pt-8 pb-4">
          <p className="text-lg pb-4">3. Returning a Value:</p>
          <p className="text-lg pb-4">
            Remember, a function can return a value, which can then be used
            elsewhere in your code:
          </p>
        </div>

        <ExampleFive />

        <div className="pt-8 pb-4">
          <h1 className="text-3xl pb-4 font-bold">
            Conclusion: Practice Makes Perfect
          </h1>
          <p className="text-lg pb-4">
            Functions are a fundamental part of JavaScript, and with practice,
            they’ll become second nature to you. Start by writing simple
            functions like the ones in this guide. As you get more comfortable,
            you can create more complex functions to tackle bigger problems.
          </p>
          <p className="text-lg pb-4">
            Remember, the key to mastering functions is to experiment and play
            around with them. The more you use them, the more powerful your
            coding skills will become.
          </p>
          <p>Happy coding!</p>
        </div>

        {/* back to home  */}
        <Link
          to="/"
          className="fixed top-[10rem] md:right-10 right-4 w-10 h-10 bg-text rounded-full flex justify-center items-center text-black"
        >
          <AiFillHome className="w-6 h-6" />
        </Link>
      </section>
    </>
  );
};

export default PostThree;

//? -----------------------------------------------------------------------------------------------

const ExampleOne = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `
    function calculateArea(width, height) {
      return width * height;
  }
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Example code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
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
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -------------------------------------------------------------------------------------------------

//? -----------------------------------------------------------------------------------------------

const ExampleTwo = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `
  let area = calculateArea(5, 10);
  console.log(area); // Outputs: 50
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Example code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
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
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -------------------------------------------------------------------------------------------------

//? -----------------------------------------------------------------------------------------------

const ExampleThree = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `
  function sayHello() {
      console.log("Hello, world!");
  }

  sayHello(); // Outputs: Hello, world!
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Example code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
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
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -------------------------------------------------------------------------------------------------

//? -----------------------------------------------------------------------------------------------

const ExampleFour = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `
  function greetUser(firstName, lastName) {
      console.log("Hello, " + firstName + " " + lastName + "!");
  }

  greetUser("John", "Doe"); // Outputs: Hello, John Doe!
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Example code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
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
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -----------------------------------------------------------------------------------------------

//? -----------------------------------------------------------------------------------------------

const ExampleFive = () => {
  const [copy, setCopy] = useState(false);

  const codeString = `
  function addNumbers(a, b) {
      return a + b;
  }

  let sum = addNumbers(3, 7);
  console.log(sum); // Outputs: 10
`;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <div className="flex justify-between px-4 text-text text-sm items-center">
          <p className="">Example code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-sm my-1">
                <BsCheck />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
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
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

//? -------------------------------------------------------------------------------------------------
const text1 = `  If you're just starting out with JavaScript, you’ve probably heard
            about something called "functions." They might sound a bit
            mysterious, but don’t worry—they’re not as complicated as they seem.
            By the end of this guide, you'll know what functions are, why
            they’re useful, and how to create and use them in your code. Let’s
            dive in!`;

const text2 = `Think of a function like a recipe in a cookbook. Just like a recipe tells you how to make a dish, a function tells your computer how to perform a task. Once you've written the recipe (the function), you can use it over and over again without having to write out the instructions each time.`;

const text3 = `In technical terms, a function is a block of reusable code that performs a specific task. You define it once, and then you can "call" or use it whenever you need it.`;

const list1 = `Reusability: Imagine you have a piece of code that calculates the area of a rectangle. If you need to calculate the area multiple times, instead of writing the same code over and over again, you can put it in a function and just call that function whenever you need it.`;

const list2 = `Organization: Functions help you organize your code into manageable sections, making it easier to read and understand.`;

const list3 = `Maintainability: If you need to update the code that calculates the area of a rectangle, you only have to change it in one place—inside the function. This makes your code easier to maintain.`;

const createList1 = `Declare the function: Start with the function keyword.`;

const createList2 = `Name the function: Give your function a name that describes what it does. For example calculateArea.`;

const createList3 = `Add parameters (optional): Inside parentheses (), you can add variables that your function will use. These are called parameters.`;

const createList4 = `Write the code: Inside curly braces {}, write the code that you want the function to execute.`;

const createList5 = `Return a value (optional): You can use the return keyword to send a value back when the function is called.`;
