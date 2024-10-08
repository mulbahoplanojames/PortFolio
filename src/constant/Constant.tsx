type NavLinksType = {
  label: string;
  path: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const Navlinks: NavLinksType[] = [
  {
    label: "Portfolio",
    path: "/Portfolio",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const footerlinks: NavLinksType[] = [
  {
    label: "Portfolio",
    path: "/Portfolio",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default Navlinks;

// =====================================================================================

type ExpertiseType = {
  id: number;
  name: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const exprtise: ExpertiseType[] = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "Typescript",
  },
  {
    id: 4,
    name: "HTML5",
  },
  {
    id: 5,
    name: "CSS3",
  },
  {
    id: 6,
    name: "Tailwind CSS",
  },
  {
    id: 7,
    name: "Styled Components",
  },
  {
    id: 8,
    name: "Git",
  },
];

// =====================================================================================

import laptop from "/src/assets/laptop-screen.png";
import diy from "/src/assets/diy.png";
import targeted from "/src/assets/targeted.png";

type ServicesType = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const servicesData: ServicesType[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    icon: laptop,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing user interfaces that enhance user experiences.",
    icon: diy,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Boost your website speed and efficiency for better user experiences and engagament.",
    icon: targeted,
  },
];

//? ------------------------------------------------------------------------------------------------------

import pythonblog from "/src/assets/python5.png";
import blog2 from "/src/assets/blog2.webp";
import blog3 from "/src/assets/python2.png";
// import blog4 from "/src/assets/blog4.webp";
import blog5 from "/src/assets/blog5.webp";
import blog6 from "/src/assets/blog6.webp";
import blog7 from "/src/assets/frontend.avif";

export type BlogType = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const blogData: BlogType[] = [
  {
    id: 1,
    title: "How to Learn Python in 2024: A Comprehensive Guide",
    description:
      "Python continues to be one of the most popular and versatile programming languages in 2024.",
    image: pythonblog,
    date: "Aug 21, 2024",
    link: "/python-in-2024",
  },
  {
    id: 2,
    title: "Getting Started with JavaScript Functions: A Beginner's Guide",
    description:
      "Dive into the world of JavaScript functions with this comprehensive beginner's guide. Learn the basics of creating, calling, and utilizing functions to write cleaner, more efficient code.",
    image: blog2,
    date: "Aug 21, 2024",
    link: "/javascript-functions",
  },
  {
    id: 3,
    title: "Top 10 Python Libraries Every Developer Should Know in 2024",
    description:
      "Python’s extensive library ecosystem is one of its biggest strengths, enabling developers to quickly build robust applications across various domains.",
    image: blog3,
    date: "Aug 30, 2024",
    link: "/python-libraries",
  },
  {
    id: 4,
    title: "5 Steps to Learn Front-End Development 🚀",
    description:
      "Starting your journey in front-end development can be both exciting and overwhelming. To make it easier, here’s a simple guide to the key steps you should follow.",
    image: blog7,
    date: "Aug 21, 2022",
    link: "/five-steps-to-learn-front-end-development",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing user interfaces that enhance user experiences.",
    image: blog5,
    date: "Aug 21, 2022",
    link: "/",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description:
      "Boost your website speed and efficiency for better user experiences and engagament.",
    image: blog6,
    date: "Aug 21, 2022",
    link: "/",
  },
];
