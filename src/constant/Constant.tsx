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
