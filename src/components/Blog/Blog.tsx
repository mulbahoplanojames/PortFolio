import { useEffect, useState } from "react";
import { blogData } from "../../constant/Constant";
import { Cover } from "../ui/cover";
import image from "/src/assets/blog7.webp";

const Blog = () => {
  const [items, setItems] = useState(blogData);
  const [visible, setVisible] = useState(3);

  // Show more items
  const showMoreItems = () => {
    setVisible((prev) => prev + 3);
  };

  // Update items on Mount
  useEffect(() => {
    setItems(blogData.slice(0, visible));
  }, [visible]);

  type mainBlodType = {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
  };

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
          <a
            rel="noopener noreferrer"
            href={mainBlog.link}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 hover:scale-105 transition-all duration-300"
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
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, visible).map((blog) => (
              <a
                rel="noopener noreferrer"
                href={blog.link}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hover:scale-105 transition-all duration-300"
                key={blog.id}
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
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
              onClick={showMoreItems}
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
