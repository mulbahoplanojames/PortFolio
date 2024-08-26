import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/python5.png";
import authorAvatar from "/src/assets/abdo.jpg";

import PostTwoBody from "./PostTwoBody";

const PostTwo = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white h-fit bg-background">
        <PostHero
          postImage={postImage}
          postTitle={"How to Learn Python in 2024: A Comprehensive Guide"}
          postDate={"Aug 22, 2024"}
          authorImage={authorAvatar}
          authorName={"By: Abdalla Aleer"}
        />

        <div className="pt-8 pb-3">
          <p className="text-lg pb-6">{text1}</p>
        </div>

        <PostTwoBody />
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

export default PostTwo;

const text1 = `Python continues to be one of the most popular and versatile programming languages in 2024. Whether you're looking to break into the tech industry, enhance your data analysis skills, or automate tasks, learning Python is a smart move. Here’s a step-by-step guide to help you master Python in 2024.`;
