import { ProjectCard } from "./projectCard";
import { projects } from "../projectsData";
import Link from "next/link";

export const Client = () => {
  return (
    <div>
      <h2 className="text-5xl text-red-900 mb-16 font-[family-name:var(--font-cherry-bomb-one)]">
        Client work
      </h2>
      <div className="flex flex-col lg:px-16 gap-8 items-center">
        <div className="lg:flex-row flex flex-col gap-10 lg:grid-cols-3 w-full items-center">
          <Link className="lg:flex-2/3" href={`/work/${projects[0].id}`}>
            <ProjectCard
              key={projects[0].id}
              project={projects[0]}
              imageStyling="w-[80px] lg:w-[150px]"
            />
          </Link>

          <Link className="lg:flex-1/3" href={`/work/${projects[1].id}`}>
            <ProjectCard
              key={projects[1].id}
              project={projects[1]}
              imageStyling="w-[100px] lg:w-[150px]"
            />
          </Link>
        </div>
        <div className="lg:flex-row flex flex-col gap-8 lg:gap-6 lg:grid-cols-3 w-full items-center">
          <Link className="lg:flex-1/3" href={`/work/${projects[2].id}`}>
            <ProjectCard
              key={projects[2].id}
              project={projects[2]}
              imageStyling="w-[100px] lg:w-[200px]"
            />
          </Link>

          <Link className="lg:flex-2/3" href={`/work/${projects[1].id}`}>
            <ProjectCard
              key={projects[1].id}
              project={projects[1]}
              imageStyling="w-[150px] lg:w-[200px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
