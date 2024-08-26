import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/frontend.avif";
import authorAvatar from "/src/assets/oplano.jpg";

const PostFive = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white h-fit bg-background">
        <PostHero
          postImage={postImage}
          postTitle={"Five (5) Steps to Learn Front-End Development 🚀"}
          postDate={"Aug 26, 2024"}
          authorImage={authorAvatar}
          authorName={"By: Oplano James Mulbah"}
        />

        <div className="pt-8 pb-4">
          <p className="text-lg">
            Starting your journey in front-end development can be both exciting
            and overwhelming. To make it easier, here’s a simple guide to the
            key steps you should follow. By mastering these, you'll be well on
            your way to creating amazing websites that look great and work
            smoothly.
          </p>
        </div>

        {labraries.map((library) => {
          return (
            <div className="pt-8 pb-2">
              <h1 className="text-3xl pb-4 font-bold">
                {library.id}. {library.name}
              </h1>
              <p className="text-lg">{library.text}</p>
              <ul className="pt-8 pb-5 list-inside list-disc">
                {library.steps.map((step) => {
                  return <li className="text-lg pb-4">{step.text}</li>;
                })}
              </ul>
            </div>
          );
        })}

        <p className="text-lg pb-4">
          By following these steps, you’ll build a strong foundation in
          front-end development. Take it one step at a time, and soon you’ll be
          creating websites that are not only beautiful but also functional and
          user-friendly. <p>Happy coding!</p>
        </p>

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

export default PostFive;

type LibrariesType = {
  id: number;
  name: string;
  text: string;
  steps: { id: number; text: string }[];
};

const labraries: LibrariesType[] = [
  {
    id: 1,
    name: "Step 1: Basics",
    text: `Before diving into the code, it's crucial to understand the underlying concepts that power the web. This foundational knowledge will make learning front-end development more intuitive.`,
    steps: [
      {
        id: 1,
        text: "Internet: Begin by understanding how the internet works. Learn about the infrastructure that connects millions of devices, the role of ISPs, and how data is transmitted across the globe. This knowledge helps you appreciate how your web pages are delivered to users.",
      },
      {
        id: 2,
        text: "HTTP: The Hypertext Transfer Protocol (HTTP) is the protocol that governs the communication between web browsers and servers. Understand the basics of HTTP requests and responses, status codes, and methods like GET and POST. Knowing this will aid in debugging issues and optimizing web performance",
      },
      {
        id: 3,
        text: "Browser: Browsers are the tools through which users interact with the web. Learn how browsers interpret HTML, CSS, and JavaScript to render web pages. Understanding the browser's rendering engine will help you write code that is efficient and compatible across different browsers.",
      },
      {
        id: 4,
        text: "Domain & Hosting: Every website needs a domain name and a hosting service to be accessible online. Learn how domain names are registered and how hosting services work to store and serve your website’s files. This knowledge is essential when you’re ready to launch your projects.",
      },
    ],
  },
  {
    id: 2,
    name: "Step 2: HTML",
    text: "HTML (HyperText Markup Language) is the foundation of every web page. It's what gives structure to your content, and mastering it is the first step toward building any website.",
    steps: [
      {
        id: 1,
        text: "Basic Tags: Start with the basic building blocks of HTML. Tags like <div>, <span>, <p>, <a>, and <img> are essential for creating any web page. Each tag serves a specific purpose, and understanding their roles will allow you to structure your content effectively.",
      },
      {
        id: 2,
        text: "Semantic HTML: Move beyond basic tags and start using semantic HTML, which gives meaning to your content. Tags like <header>, <footer>, <article>, and <section> improve accessibility and SEO by helping search engines and assistive technologies understand the structure of your content.",
      },
      {
        id: 3,
        text: "Forms & Tables: Forms are essential for collecting user input, while tables are used to display data in a structured way. Learn how to create forms with input fields, buttons, and validation, and how to build tables that are both accessible and easy to read. Mastering these will enable you to build interactive and data-driven websites.",
      },
    ],
  },
  {
    id: 3,
    name: "Step 3: CSS",
    text: "CSS (Cascading Style Sheets) is what brings your HTML to life. It’s how you control the appearance of your web pages, from colors and fonts to layouts and animations.",
    steps: [
      {
        id: 1,
        text: "Basics: Begin by learning the syntax and structure of CSS. Understand how to apply styles to HTML elements, how to use classes and IDs, and how to manage colors, fonts, and spacing. These are the fundamentals that will allow you to start styling your web pages.",
      },
      {
        id: 2,
        text: "CSS Selectors: CSS selectors are used to target specific HTML elements for styling. Learn about basic selectors like class and ID selectors, as well as more advanced ones like attribute selectors, pseudo-classes, and pseudo-elements. Mastering selectors will give you precise control over your styles.",
      },
      {
        id: 3,
        text: "Creating Layouts: Layouts are a crucial aspect of web design. Learn how to use Flexbox and Grid, two powerful CSS tools that allow you to create flexible and responsive layouts. Understanding these will enable you to design web pages that look great on any screen size.",
      },
      {
        id: 4,
        text: "Position: The position property allows you to control the placement of elements on your page. Learn the difference between relative and absolute positioning, as well as fixed and sticky positioning. This knowledge is essential for creating complex layouts and interactive elements.",
      },
      {
        id: 5,
        text: "Box Model: The CSS box model defines how elements are structured and spaced on the page. Understanding how margin, padding, border, and content work together will help you control the spacing and alignment of elements, ensuring your designs look polished and professional.",
      },
      {
        id: 6,
        text: "Responsive Web Design: With the wide variety of devices in use today, responsive design is crucial. Learn how to use media queries to create designs that adapt to different screen sizes, ensuring that your websites look great on desktops, tablets, and mobile devices. Responsive design is key to providing a seamless user experience across all devices.",
      },
    ],
  },
  {
    id: 4,
    name: "Step 4: JavaScript",
    text: "JavaScript is the programming language that makes your web pages interactive. It allows you to add dynamic content, respond to user input, and create rich web applications.",
    steps: [
      {
        id: 1,
        text: "Basic Syntax: Start with the fundamentals of JavaScript, including variables, operators, and data types. Understanding the basic syntax is crucial for writing your first scripts and building a strong foundation for more advanced topics.",
      },
      {
        id: 2,
        text: "Basic Syntax: Start with the fundamentals of JavaScript, including variables, operators, and data types. Understanding the basic syntax is crucial for writing your first scripts and building a strong foundation for more advanced topics.",
      },
      {
        id: 3,
        text: "Loops & Functions: Loops allow you to execute code repeatedly, while functions let you encapsulate and reuse code. Learn how to use loops to iterate over data and how to create functions to organize your code. These concepts are essential for writing efficient and maintainable code.",
      },
      {
        id: 4,
        text: "DOM Selectors & Manipulation: The Document Object Model (DOM) represents the structure of a web page. Learn how to use DOM selectors to access elements on the page and how to manipulate these elements using JavaScript. This knowledge is key to creating dynamic and interactive web pages.",
      },
      {
        id: 5,
        text: "JS Modules: As your JavaScript projects grow, organizing your code becomes important. Learn about modules, which allow you to break your code into smaller, reusable pieces. Understanding how to export and import modules will help you manage large codebases more effectively.",
      },
      {
        id: 6,
        text: "Advanced Topics: Once you’re comfortable with the basics, it’s time to explore more advanced concepts. Asynchronous JavaScript allows you to handle tasks that take time to complete, like fetching data from an API. Learn about promises, async/await, and the event loop to manage asynchronous code. Prototypes are a key concept in JavaScript’s object-oriented programming, and ES6 features like destructuring, arrow functions, and template literals will make your code more modern and concise.",
      },
    ],
  },
];
