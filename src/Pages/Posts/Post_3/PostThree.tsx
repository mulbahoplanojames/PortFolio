import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/blog2.webp";

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
          authorImage={postImage}
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
