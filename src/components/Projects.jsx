import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start" // center content on mobile
          >
            <div className="w-full flex justify-center lg:w-1/4">
              {" "}
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left">
              {" "}
              <h6 className="w-full max-w-xl lg:w-3/4 flex items-center justify-center lg:justify-start">
                {" "}
                {project.title}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-neutral-400 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex justify-center lg:justify-start">
                {" "}
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
