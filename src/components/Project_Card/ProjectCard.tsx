import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  key: number;
  image: string;
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  liveDemo: string;
  code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  projectTitle,
  projectDescription,
  technologiesUsed,
  liveDemo,
  code,
}) => {
  return (
    <>
      <Link to={liveDemo} target="_blank">
        <div className="md:p-4 bg-background border-spacing-1 border-primary text-text group max-w-lg p-3 border rounded-md shadow-md">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={image}
                alt=""
                className="object-scale md:h-72 block w-full h-56 bg-gray-500 rounded-md"
              />
            </div>
            <div className="space-y-3">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-text group-hover:underline md:text-2xl text-2xl font-semibold">
                  {projectTitle}
                </h3>
              </a>
              <p className="text-text text-base leading-snug">
                {projectDescription.slice(0, 200)} .....
              </p>
            </div>
            {/* technology used */}
            <div className="flex flex-wrap items-center gap-3">
              {technologiesUsed.map((tech, index) => (
                <p
                  key={index}
                  className="w-fit h-fit bg-primary text-text px-2 py-1 text-sm rounded-md"
                >
                  {tech}
                </p>
              ))}
            </div>
            {/* code and live demo  */}
            <div className="flex items-center justify-between">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={code}
                className="text-text flex items-center gap-1 text-lg font-medium"
              >
                Code
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={liveDemo}
                className="text-text flex items-center gap-1 text-lg font-medium"
              >
                Live Demo
                <FaSquareArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
