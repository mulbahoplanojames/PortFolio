// Importing useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Importing blogData constant from Constant file
import { blogData } from "../../constant/Constant";

// Importing Cover component from ui folder
import { Cover } from "../ui/cover";

// Importing image from assets folder
import image from "/src/assets/blog1.webp";

// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

// Creating Blog functional component
const Blog = () => {
  // Initializing items state with blogData and setItems function to update the state
  const [items, setItems] = useState(blogData);

  // Initializing visible state with 3 and setVisible function to update the state
  const [visible, setVisible] = useState(3);

  // Function to show more items when button is clicked
  const showMoreItems = () => {
    // Increasing visible state by 3
    setVisible((prev) => prev + 3);
  };

  // Updating items state on mount
  useEffect(() => {
    // Setting items state to slice of blogData from 0 to visible state
    setItems(blogData.slice(0, visible));
  }, [visible]); // Updating items state whenever visible state changes

  // Type for mainBlog object
  type mainBlodType = {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
  };

  // Initializing mainBlog object
  const mainBlog: mainBlodType = {
    title: "HTML TAGS",
    description:
      "In the world of web development, HTML tags are the building blocks that bring web pages to life. This blog dives deep into the essential role of HTML tags, exploring how they define the structure, content, and functionality of websites. Whether you're a beginner looking to grasp the basics or a seasoned developer seeking to refine your skills, this guide will help you understand the power of HTML tags.",
    image: image,
    date: "Aug 21, 2022",
    link: "/html-tags",
  };

  return (
    <>
      <section
        className="bg-gradient-to-r from-primary to-background text-gray-800"
        id="/blog"
      >
        <h1 className="text-3xl md:text-4xl font-semibold max-w-7xl mx-auto text-center pt-10 relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-r from-text to-white ">
          The <Cover>BlogSpot</Cover>
        </h1>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Main blog post */}
          <Link
            rel="noopener noreferrer"
            to={mainBlog.link}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 hover:scale-105 transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={mainBlog.image}
              alt={mainBlog.title}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {mainBlog.title}
              </h3>
              <span className="text-xs text-gray-600">{mainBlog.date}</span>
              <p>{mainBlog.description}</p>
            </div>
          </Link>
          {/* Other blog posts */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, visible).map((blog) => (
              <Link
                rel="noopener noreferrer"
                to={blog.link}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hover:scale-105 transition-all duration-300"
                key={blog.id}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 bg-gray-500"
                  src={blog.image}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {blog.title}
                  </h3>
                  <span className="text-xs text-gray-600">{blog.date}</span>
                  <p>{blog.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Button to show more posts */}
          <div className="flex justify-center">
            {visible < blogData.length && (
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
                onClick={showMoreItems}
              >
                Load more posts...
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
