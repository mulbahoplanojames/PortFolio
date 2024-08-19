import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import PostHero from "../Post_Hero/PostHero";
import postImage from "/src/assets/blog1.webp";

const PostOne = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white h-fit bg-background">
        <PostHero
          postImage={postImage}
          postTitle={"HTML TAGS"}
          postDate={"Aug 21, 2022"}
          authorImage={postImage}
          authorName={"By: Oplano James Mulbah"}
        />

        <div className="pt-8 pb-3">
          <p className="text-lg pb-12">{text1}</p>
          <h1 className="text-3xl pb-4 font-bold">What are HTML Tags?</h1>
          <p className="text-lg ">{text2}</p>
        </div>

        <div className="pt-8 pb-5">
          <h1 className="text-3xl pb-4 font-bold">Examples Of HTML Tags</h1>
          <h2 className="text-2xl pb-4 font-bold">
            <code>&lt;p&gt; Paragraph Tag &lt;/p&gt;</code>
          </h2>
          <p className="text-lg">{text3}</p>
        </div>

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            <code>&lt;h2&gt; Heading Tag &lt;/h2&gt;</code>
          </h2>
          <p className="text-lg">{text4}</p>
        </div>

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            <code>&lt;b&gt; Bold Tag &lt;/b&gt;</code>
          </h2>
          <p className="text-lg">{text5}</p>
        </div>

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            <code>&lt;i&gt; Italic Tag &lt;/i&gt;</code>
          </h2>
          <p className="text-lg">{text6}</p>
        </div>

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            <code>&lt;u&gt; Underline Tag &lt;/u&gt;</code>
          </h2>
          <p className="text-lg">{text7}</p>
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

export default PostOne;

const text1 = `Learn the building blocks of web pages! This easy-to-follow guide explains common HTML tags and how to use them. Think of it as your handy cheat sheet for creating your own web content. I will break down each tag in simple terms, so you can start building web pages even if you're completely new to coding.`;

const text2 = `HTML tags are like secret codes that tell your web browser what to do. They help make words bold or italic, add pictures, or create lists. Every webpage uses these tags in its HTML, which is just a fancy way of saying "the language websites use." Think of HTML as the recipe that tells your browser how to cook up a webpage!`;

const text3 = `The <p> and </p> are called HTML tags. The text you put between them is known as a "Paragraph Tag." These tags help format the text as a regular paragraph on your webpage. Using them makes your text easier to read and keeps your content organized. You can use these tags as many times as needed to create multiple paragraphs.`;

const text4 = `The <h2> and </h2> are called HTML tags. The text you put between them is known as a "Heading Tag." These tags format the text as a Heading 2, which is a type of subheading on your webpage. Headings help break up your content, making it easier to read. You can use different heading tags (<h1>, <h2>, etc.) to create a clear structure in your content.`;

const text5 = `The <b> and </b> are called HTML tags. The text you put between them is known as a "Bold Tag." These tags make the text appear bold on your webpage. Bold text is great for highlighting important words or phrases. You can use this tag whenever you want to make something stand out.`;

const text6 = `The <i> and </i> are called HTML tags. The text you put between them is known as an "Italic Tag." These tags make the text appear italic on your webpage. Italic text is useful for emphasizing words or phrases. You can use this tag whenever you want to add a subtle emphasis to your content.`;

const text7 = `The <u> and </u> are called HTML tags. The text you put between them is known as an "Underline Tag." These tags make the text appear underlined on your webpage. Underlined text can help draw attention to specific words or phrases. Use this tag when you want to highlight something important.`;

const text8 = ``;
const text9 = ``;
const text10 = ``;
const text11 = ``;
const text12 = ``;
const text13 = ``;
const text14 = ``;
