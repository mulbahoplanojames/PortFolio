import { useEffect, useState } from "react";
import PROJECTS from "../../data/Date";
import ProjectCard from "../Project_Card/ProjectCard";

const Portfolio: React.FC = () => {
  const [items, setItems] = useState(PROJECTS);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prev) => prev + 1);
  };

  // Updating items state on mount
  useEffect(() => {
    // Setting items state to slice of blogData from 0 to visible state
    setItems(PROJECTS.slice(0, visible));
  }, [visible]); // Updating items state whenever visible state changes

  return (
    <>
      <div className="w-full md:px-20 px-2 md:py-16 py-8 bg-background text-text">
        <h1 className="md:text-4xl text-3xl text-center font-semibold pb-3">
          Recent Works
        </h1>
        <p className="text-center text-lg pb-10">
          Showcasing my recent projects and achievements
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8 items-center justify-center">
          {items.slice(0, visible).map((project) => {
            return (
              <ProjectCard
                key={project.projectID}
                image={project.image}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                technologiesUsed={project.technologiesUsed}
                liveDemo={project.liveDemo}
                code={project.code}
              />
            );
          })}
        </div>

        {/* Button to show more posts */}
        <div className="flex justify-center mt-7">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
            onClick={showMoreItems}
          >
            Preview More Works...
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
