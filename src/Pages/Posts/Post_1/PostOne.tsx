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

        {htmlTags.map((tag) => {
          return (
            <div className="pt-8 pb-5">
              <h2 className="md:text-3xl text-2xl pb-4 font-bold">
                <code>
                  &lt;{tag.tag}&gt; {tag.name} Tag &lt;/{tag.tag}&gt;
                </code>
              </h2>
              <p className="text-lg">{tag.text}</p>
            </div>
          );
        })}

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            How Do Web Pages Read HTML Tags?
          </h2>
          <p className="text-lg pb-4">{text4}</p>
          <p className="text-lg pb-2">An HTML tag must contain three parts:</p>

          <ul className="text-lg list-inside list-decimal ">
            <li className="pb-3">
              {" "}
              An opening tag — this will start with a &lt;&gt; symbol
            </li>
            <li className="pb-3">
              Content — the short instructions on how to display the on-page
              element
            </li>
            <li className="pb-3">
              {" "}
              A closing tag — this will end with a &lt;/&gt; symbol
            </li>
          </ul>
          <p className="text-lg">
            However, some HTML tags can be unclosed. That means that the HTML
            tag does not need to be closed with a &lt;/&gt;. You’ll typically
            use unclosed tags for metadata or line breaks.
          </p>
        </div>

        <div className="pt-8 pb-5">
          <h2 className="md:text-3xl text-2xl pb-4 font-bold">
            What’s the Difference Between Attributes and HTML Tags?
          </h2>
          <p className="text-lg pb-4">{text5}</p>
          <p className="text-lg pb-2">An HTML tag must contain three parts:</p>

          <ul className="text-lg list-inside list-disc ">
            <li className="pb-3">
              HTML tags contain instructions on how to display an on-page
              element. They begin with a &lt; and end with a &gt; and precede
              and follow the content of the element. (e.g &lt;b&gt; Bold Tag
              &lt;b&gt;)
            </li>
            <li className="pb-3">
              HTML Elements are the on-page content sandwiched within the tags.
              (&lt;b&gt; Bold Tag &lt;/b&gt;)
            </li>
            <li className="pb-3">
              HTML Attributes provide additional information about HTML elements
              and appear at within the HTML tag (e.g. &lt;html
              lang="en-US"&gt;).
            </li>
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

export default PostOne;

//? -------------------------------------------------------------------------------------------------

type HtmlTagsType = {
  id: number;
  name: string;
  tag: string;
  text: string;
};

const htmlTags: HtmlTagsType[] = [
  {
    id: 1,
    name: "Heading",
    tag: "h2",
    text: `The <h2> and </h2> are called HTML tags. The text you put between them is known as a "Heading Tag." These tags format the text as a Heading 2, which is a type of subheading on your webpage. Headings help break up your content, making it easier to read. You can use different heading tags (<h1>, <h2>, etc.) to create a clear structure in your content.`,
  },
  {
    id: 2,
    name: "Bold",
    tag: "b",
    text: `The <b> and </b> are called HTML tags. The text you put between them is known as a "Bold Tag." These tags make the text appear bold on your webpage. Bold text is great for highlighting important words or phrases. You can use this tag whenever you want to make something stand out.`,
  },
  {
    id: 3,
    name: "Italic",
    tag: "i",
    text: `The <i> and </i> are called HTML tags. The text you put between them is known as an "Italic Tag." These tags make the text appear italic on your webpage. Italic text is useful for emphasizing words or phrases. You can use this tag whenever you want to add a subtle emphasis to your content.`,
  },
  {
    id: 4,
    name: "underline",
    tag: "u",
    text: `The <u> and </u> are called HTML tags. The text you put between them is known as an "Underline Tag." These tags make the text appear underlined on your webpage. Underlined text can help draw attention to specific words or phrases. Use this tag when you want to highlight something important.`,
  },
  {
    id: 5,
    name: "Break",
    tag: "br",
    text: `The <br/> is an HTML tag known as the "Break Tag." It doesn't wrap around any text like other tags do. Instead, it creates a line break, moving the text that follows to a new line. This tag is useful when you want to add space between lines or separate content without starting a new paragraph. You can use it whenever you need to control the layout of your text.`,
  },
  {
    id: 6,
    name: "Horizontal Rule",
    tag: "hr",
    text: `The <hr/> is an HTML tag called the "Horizontal Rule Tag." It creates a horizontal line across the page, separating sections of content. This tag helps visually divide different parts of your webpage. You can use it to make your content look organized and easier to read.`,
  },

  {
    id: 6,
    name: "Horizontal Rule",
    tag: "hr",
    text: `The <hr/> is an HTML tag called the "Horizontal Rule Tag." It creates a horizontal line across the page, separating sections of content. This tag helps visually divide different parts of your webpage. You can use it to make your content look organized and easier to read.`,
  },
  {
    id: 7,
    name: "Image",
    tag: "img",
    text: `The <img> is an HTML tag used to add images to your webpage. You place the URL of the image inside the tag to show it on the page. This tag helps you include pictures, graphics, or icons. You can use it to make your content more visually appealing and engaging.`,
  },
  {
    id: 8,
    name: "Video",
    tag: "video",
    text: `The <video> is an HTML tag used to embed videos on your webpage. You provide the source of the video file inside the tag to display it. This tag allows visitors to watch videos directly on your site. You can use it to add tutorials, promotional clips, or other multimedia content.`,
  },
  {
    id: 9,
    name: "List",
    tag: "ol",
    text: `The <ul> and <ol> are HTML tags used to create lists. <ul> stands for "unordered list," which makes bullet-point lists, while <ol> stands for "ordered list," which creates numbered lists. These tags help organize content into easy-to-read lists. You can use them to present information clearly and systematically.`,
  },
  {
    id: 10,
    name: " Div",
    tag: "div",
    text: `The <div> is an HTML tag used to group and organize sections of your webpage. It doesn't affect the appearance of the content but helps with layout and styling. This tag is useful for applying CSS styles or organizing content into separate areas. You can use it to structure your page and make your design more manageable.`,
  },
  {
    id: 11,
    name: "Form",
    tag: "form",
    text: `The <form> is an HTML tag used to create forms on your webpage. Forms allow users to enter information, like text or selections, which can be sent to a server. This tag is useful for gathering user input, such as in contact forms or surveys. You can use it to interact with your visitors and collect data.`,
  },
  {
    id: 12,
    name: "Table",
    tag: "table",
    text: `The <table> is an HTML tag used to create tables on your webpage. Tables help you organize data into rows and columns. This tag makes it easy to display information in a structured format, like schedules or comparisons. You can use it to present data clearly and make your content more organized.`,
  },
];

//? -------------------------------------------------------------------------------------------------

const text1 = `Learn the building blocks of web pages! This easy-to-follow guide explains common HTML tags and how to use them. Think of it as your handy cheat sheet for creating your own web content. I will break down each tag in simple terms, so you can start building web pages even if you're completely new to coding.`;

const text2 = `HTML tags are like secret codes that tell your web browser what to do. They help make words bold or italic, add pictures, or create lists. Every webpage uses these tags in its HTML, which is just a fancy way of saying "the language websites use." Think of HTML as the recipe that tells your browser how to cook up a webpage!`;

const text3 = `The <p> and </p> are called HTML tags. The text you put between them is known as a "Paragraph Tag." These tags help format the text as a regular paragraph on your webpage. Using them makes your text easier to read and keeps your content organized. You can use these tags as many times as needed to create multiple paragraphs.`;

const text4 = `Servers read HTML code to understand and display content. They process the HTML from top to bottom, just like you read this guide. You can use as many or as few tags as you want to format your content. However, there are some essential HTML tags and rules that you need to follow.`;

const text5 = `Although this guide is all about HTML tags, it’s important to know the difference between HTML tags, elements, and attributes. An HTML element is an item on the page; it’s part of the web page’s content. An HTML tag affects how an HTML element appears. An HTML attribute describes the characteristics of that element. Here’s a breakdown of how elements, tags, and attributes work together:`;

//? -------------------------------------------------------------------------------------------------
