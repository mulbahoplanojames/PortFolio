// images
import DevTechImg from "/src/assets/Dev!Tech_Blog.png";
import Doecas_school from "/src/assets/borcas_school.png";
import techspace from "/src/assets/techspace.png";
import Naa_kai_img from "/src/assets/naa_kaai.png";
import kids_math from "/src/assets/kids_math.png";
import wilfix from "/src/assets/wlifix.png";
import weedorUI from "/src/assets/weedorUI.png";

type ProjectType = {
  projectID: number;
  image: string;
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  liveDemo: string;
  code: string;
};

const PROJECTS: ProjectType[] = [
  {
    projectID: 1,
    image: weedorUI,
    projectTitle: "WeedorUI Components Library",
    projectDescription:
      "I developed this UI Components Library to streamline the process of building reusable components for my projects, significantly reducing development time. By utilizing this library, developers can adhere to the DRY (Don't Repeat Yourself) principle, promoting efficiency and code reusability.",
    technologiesUsed: ["HTML", "Tailwind CSS", "Typescript", "MDX"],
    liveDemo: "https://weedorui.vercel.app/",
    code: "https://github.com/mulbahoplanojames/WeedorUI",
  },
  {
    projectID: 2,
    image: techspace,
    projectTitle: "TechSpace StartUp Company",
    projectDescription:
      "I am a founder of TechSpace which is a startup for creating customized websites and applications tailored to meet your specific needs. Our dedicated team of developers and designers collaborates closely with clients to transform ideas into engaging digital experiences. Let us partner with you to bring your vision to life and elevate your online presence!",
    technologiesUsed: ["React", "Tailwind CSS", "Typescript"],
    liveDemo: "https://techspace-one.vercel.app/",
    code: "",
  },
  {
    projectID: 3,
    image: wilfix,
    projectTitle: "Movie App",
    projectDescription:
      "I Created this Movie App utilizing React, Tailwind CSS, Next.js, and TypeScript, designed to deepen understanding of integrating and handling data from external APIs. This project combines modern front-end frameworks and styling tools to deliver a dynamic user experience, while offering a hands-on approach to working with real-time data.",
    technologiesUsed: ["Next JS", "Tailwind CSS", "Shadcn Ui"],
    liveDemo: "https://wilfixmovieapp.vercel.app/",
    code: "https://github.com/mulbahoplanojames/Binage-9",
  },
  {
    projectID: 4,
    image: kids_math,
    projectTitle: "Math 4 Kids, a math game for Kids",
    projectDescription:
      "This is a web application designed to help kids learn Mathematics in a fun and interactive way. This project makes kids to learn mathematics in an easy and simple way. The project utilizes HTML, CSS, and JavaScript.",
    technologiesUsed: ["HTML", "Tailwind CSS", "Vanilla JavaScript"],
    liveDemo: "https://mulbahoplanojames.github.io/Math-4-Kids/",
    code: "https://github.com/mulbahoplanojames/Math-4-Kids",
  },
  {
    projectID: 5,
    image: DevTechImg,
    projectTitle: "Dev!Tech Blog and Ebooks",
    projectDescription:
      "A comprehensive blogging platform focusing on technology-related topics. Users can explore a wide range of ebooks and blogs. It provides a user-friendly interface to navigate through different sections of the web App. It also as a feature where users access OpenAi.",
    technologiesUsed: ["React", "Tailwind Css", "JavaScript"],
    liveDemo: "https://devtech-ebook-blog.netlify.app/",
    code: "https://github.com/mulbahoplanojames/Dev-Tech-Ebook---Blog",
  },

  {
    projectID: 6,
    image: Naa_kai_img,
    projectTitle: "Naa-Kaai-Kai-Enterprise",
    projectDescription:
      "This Project is for a web application on a company call Naa-Kaai-Kai Enterprise is a business venture focused on providing high-quality products and services tailored to meet customer needs. The company emphasizes customer satisfaction, innovative solutions, and a commitment to excellence in every aspect of its operations",
    technologiesUsed: ["React", "Tainwild CSS", "JavaScript"],
    liveDemo: "https://naa-kaai-kai-enterprise.vercel.app/",
    code: "https://github.com/mulbahoplanojames/SteveCom",
  },
  {
    projectID: 7,
    image: Doecas_school,
    projectTitle: "Dorcas Christain School",
    projectDescription:
      "This Project is for a web application the allow client and to unit with other business partners to buy products and view some of the latest blog posts..",
    technologiesUsed: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://dorcas-christain-school.vercel.app/",
    code: "https://github.com/mulbahoplanojames/Dorcas_Christain_School",
  },
];

export default PROJECTS;
