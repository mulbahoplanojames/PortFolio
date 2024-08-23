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
      <div className="max-w-lg md:p-4 p-3 shadow-md rounded-md bg-background border-spacing-1 border border-primary text-text">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-scale w-full rounded-md md:h-64 h-56 bg-gray-500"
            />
          </div>
          <div className="space-y-3">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-text">
                {projectTitle}
              </h3>
            </a>
            <p className="leading-snug text-base text-text">
              {projectDescription.slice(0, 200)} .....
            </p>
          </div>
          {/* technology used */}
          <div className="flex items-center flex-wrap gap-3">
            {technologiesUsed.map((tech, index) => (
              <p
                key={index}
                className="w-fit h-fit py-1 px-2 rounded-md text-sm bg-primary text-text"
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
              className="text-lg font-medium text-text flex items-center gap-1"
            >
              Code
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={liveDemo}
              className="text-lg font-medium text-text flex items-center gap-1"
            >
              Live Demo
              <FaSquareArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
