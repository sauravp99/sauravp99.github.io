import { ProjectCard } from "./projectCard"
import { projects } from "../projectsData"

export const Hobby = () => {
    return (
        <div>
            <h2 className="text-5xl text-green-900 my-16 font-[family-name:var(--font-cherry-bomb-one)]">
                Hobby work
            </h2>
            <div className="lg:flex-row flex flex-col gap-8 lg:px-16 lg:gap-6 lg:grid-cols-3 w-full items-center">
                <ProjectCard
                    key={projects[2].id}
                    project={projects[2]}
                    imageStyling="w-[150px] lg:w-[200px]"
                />

                <ProjectCard
                    key={projects[1].id}
                    project={projects[1]}
                    imageStyling="w-[150px] lg:w-[200px]"
                />
            </div>
        </div>
    );
}