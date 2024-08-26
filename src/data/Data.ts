// images
import DevTechImg from "/src/assets/Dev!Tech_Blog.png";
import Doecas_school from "/src/assets/borcas_school.png";
import reality from "/src/assets/reality.png";
import Naa_kai_img from "/src/assets/naa_kaai.png";
import kids_math from "/src/assets/kids_math.png";
import bina from "/src/assets/bina.png";

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
    projectID: 7,
    image: kids_math,
    projectTitle: "Math 4 Kids, a math game for Kids",
    projectDescription:
      "This is a web application designed to help kids learn Mathematics in a fun and interactive way. This project makes kids to learn mathematics in an easy and simple way. The project utilizes HTML, CSS, and JavaScript.",
    technologiesUsed: ["HTML", "Tailwind CSS", "Vanilla JavaScript"],
    liveDemo: "https://mulbahoplanojames.github.io/Math-4-Kids/",
    code: "https://github.com/mulbahoplanojames/Math-4-Kids",
  },
  {
    projectID: 1,
    image: DevTechImg,
    projectTitle: "Dev!Tech Blog and Ebooks",
    projectDescription:
      "A comprehensive blogging platform focusing on technology-related topics. Users can explore a wide range of ebooks and blogs. It provides a user-friendly interface to navigate through different sections of the web App. It also as a feature where users access OpenAi.",
    technologiesUsed: ["React", "Tailwind Css", "JavaScript"],
    liveDemo: "https://devtech-ebook-blog.netlify.app/",
    code: "https://github.com/mulbahoplanojames/Dev-Tech-Ebook---Blog",
  },
  {
    projectID: 2,
    image: Naa_kai_img,
    projectTitle: "Naa-Kaai-Kai-Enterprise",
    projectDescription:
      "This Project is for a web application on a company call Naa-Kaai-Kai Enterprise is a business venture focused on providing high-quality products and services tailored to meet customer needs. The company emphasizes customer satisfaction, innovative solutions, and a commitment to excellence in every aspect of its operations",
    technologiesUsed: ["React", "Tainwild CSS", "JavaScript"],
    liveDemo: "https://naa-kaai-kai-enterprise.vercel.app/",
    code: "https://github.com/mulbahoplanojames/SteveCom",
  },
  {
    projectID: 3,
    image: Doecas_school,
    projectTitle: "Dorcas Christain School",
    projectDescription:
      "This Project is for a web application the allow client and to unit with other business partners to buy products and view some of the latest blog posts..",
    technologiesUsed: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://dorcas-christain-school.vercel.app/",
    code: "https://github.com/mulbahoplanojames/Dorcas_Christain_School",
  },
  {
    projectID: 8,
    image: bina,
    projectTitle: "Binage!9 web Application",
    projectDescription:
      "This is a Front-end project for a web app that for a virtual company that is involve in developing web site and web applications for clients for a reasonable price and their work is done effectively",
    technologiesUsed: ["React", "Css Modules", "React Styled Components"],
    liveDemo: "https://binage9.netlify.app/",
    code: "https://github.com/mulbahoplanojames/Binage-9",
  },
  {
    projectID: 4,
    image: reality,
    projectTitle: "Nonimation Reality TV",
    projectDescription:
      "Nonimation Reality TV is an interactive web platform that lets users explore and engage with the world of reality television, offering features like voting for contestants and staying updated on the latest shows. The site is designed with a sleek, user-friendly interface that ensures a seamless experience across all devices.",
    technologiesUsed: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://nonimation-realitytv.netlify.app/",
    code: "",
  },
];

export default PROJECTS;
