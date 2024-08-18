type NavLinksType = {
  label: string;
  path: string;
};

const Navlinks: NavLinksType[] = [
  {
    label: "Portfolio",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Technologies",
    path: "/technologies",
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

const laptop: string = "/src/assets/laptop-screen.png";
const diy: string = "/src/assets/diy.png";
const targeted: string = "/src/assets/targeted.png";

type ServicesType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const servicesData: ServicesType[] = [
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
