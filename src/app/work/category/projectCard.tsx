import { useState } from "react";
import { Project } from "../projectsData";
import Image from "next/image";
interface Props {
  project: Project;
  imageStyling?: string;
  className?: string;
}
export const ProjectCard = ({ project, imageStyling, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorTheme = {
    red: { background: "bg-red-900", border: " border-red-900" },
    blue: { background: "bg-blue-900", border: " border-blue-900" },
    green: { background: "bg-green-900", border: " border-green-900" },
    grey: { background: "bg-gray-900", border: " border-gray-900" },
  }[project.theme];

  return (
    <div
      className={` ${
        isHovered ? "translate-y-[-8px]" : "translate-y-0"
      } flex justify-center border-b-[0.5rem] lg:border-b-[1rem] hover:border-[0.3rem] hover:rounded-2xl  ${
        colorTheme?.border
      } bg-white transition-all rounded-2xl min-h-[300px] max-w-[300px] lg:max-w-[900px] lg:min-w-[400px] lg:min-h-[600px] w-full h-full cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full items-center flex justify-center`}>
        <Image
          src={project.image}
          alt={project.title}
          className={imageStyling}
          width={200}
          height={200}
          priority
        />
      </div>
        <div
        className={`p-6 ${
          isHovered ? "opacity-100" : "opacity-0"
        } absolute bottom-0 transition-opacity duration-200 ease-in-out left-0 w-full ${
          colorTheme?.background
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className=" mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`bg-white text-[var(--primary)] text-xs px-2 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
