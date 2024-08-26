import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/python2.png";

const PostFour = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white h-fit bg-background">
        <PostHero
          postImage={postImage}
          postTitle={
            "Top 10 Python Libraries Every Developer Should Know in 2024"
          }
          postDate={"Aug 22, 2024"}
          authorImage={postImage}
          authorName={"By: Abdalla Alaar"}
        />

        <div className="pt-8 pb-4">
          <p className="text-lg">
            Python’s extensive library ecosystem is one of its biggest
            strengths, enabling developers to quickly build robust applications
            across various domains. In this blog post, we’ll explore the top 10
            Python libraries that are essential for developers in 2024. These
            libraries span different areas such as data science, machine
            learning, web development, and automation. By understanding and
            utilizing these libraries, you can significantly enhance your
            productivity and expand your project’s capabilities.
          </p>
        </div>

        {labraries.map((library) => {
          return (
            <div className="pt-8 pb-4">
              <h1 className="text-3xl pb-4 font-bold">
                {library.id}. {library.name}
              </h1>
              <p className="text-lg">{library.text}</p>
            </div>
          );
        })}

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

export default PostFour;

type LibrariesType = {
  id: number;
  name: string;
  text: string;
};

const labraries: LibrariesType[] = [
  {
    id: 1,
    name: "Pandas",
    text: "Pandas is the go-to library for data manipulation and analysis. With its DataFrame object, you can perform operations like filtering, grouping, and merging datasets with ease. In 2024, Pandas continues to evolve with performance enhancements and new features that make handling large datasets more efficient.",
  },
  {
    id: 2,
    name: "NumPy",
    text: "NumPy remains the cornerstone of numerical computation in Python. It provides support for large multidimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays. Whether you’re working on data analysis, machine learning, or scientific computing, NumPy is indispensable.",
  },
  {
    id: 3,
    name: "TensorFlow",
    text: "TensorFlow is one of the leading libraries for machine learning and deep learning. It’s widely used for building neural networks and deploying machine learning models in production. TensorFlow 3.0, released in 2024, brings improved performance, support for new hardware accelerators, and enhanced integration with TensorFlow Extended (TFX) for end-to-end machine learning pipelines.",
  },
  {
    id: 4,
    name: "Metaplotlib",
    text: "Matplotlib is the classic library for creating static, animated, and interactive visualizations in Python. Although it’s been around for years, Matplotlib is still widely used due to its versatility and extensive customization options. In 2024, Matplotlib continues to receive updates that make it easier to create publication-quality plots.",
  },
  {
    id: 5,
    name: "Scikit-learn",
    text: "Scikit-learn is a must-have for traditional machine learning tasks. It offers simple and efficient tools for data mining and data analysis. With updates in 2024, Scikit-learn introduces new algorithms, better integration with other libraries, and enhanced model evaluation techniques.",
  },
  {
    id: 6,
    name: "Flask",
    text: "Flask is a lightweight web framework that’s perfect for building small to medium-sized web applications. Its simplicity and flexibility make it a favorite among developers who need a quick and easy way to get a web application up and running. Flask’s 2024 update focuses on security improvements and better support for modern web standards.",
  },
  {
    id: 7,
    name: "Django",
    text: "Django is a high-level web framework that encourages rapid development and clean, pragmatic design. It comes with a lot of built-in features, including an ORM, authentication, and an admin panel. Django 4.2, released in 2024, introduces new features like async views and improved database support, making it more powerful than ever.",
  },
  {
    id: 8,
    name: "PyTorch",
    text: "PyTorch is another major player in the deep learning space, particularly known for its dynamic computation graph and ease of use. It’s widely adopted in both academia and industry for research and production. In 2024, PyTorch continues to lead with innovations in distributed training and model deployment.",
  },
  {
    id: 9,
    name: "Requests",
    text: "Requests is a simple yet powerful library for making HTTP requests in Python. It abstracts the complexities of making HTTP requests behind a simple API, making it a breeze to interact with web services and APIs. The 2024 version of Requests includes performance improvements and better handling of HTTP/3.",
  },
  {
    id: 10,
    name: "Beautiful Soup",
    text: "RBeautiful Soup is a library for web scraping, allowing you to parse HTML and XML documents easily. It’s particularly useful for extracting data from websites and is often used in conjunction with Requests. Beautiful Soup 5.0, coming in 2024, introduces faster parsing capabilities and better support for modern web standards.",
  },
];
