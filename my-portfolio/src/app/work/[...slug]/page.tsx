import { projects } from "../projectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: [p.id] }));
}

export default function ProjectPage({ params }: PageProps) {
  const id = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const themeText: Record<"red" | "blue" | "green" | "grey", string> = {
    red: "text-red-900",
    blue: "text-blue-900",
    green: "text-green-900",
    grey: "text-gray-900",
  };

  return (
    <main className="px-4 lg:px-32 py-8 bg-[var(--secondary)] text-[var(--primary)] min-h-screen">
      <Link
        href="/work"
        className="text-[var(--primary)] underline mb-6 inline-block"
      >
        &larr; Back to all projects
      </Link>

      <div className="bg-white rounded-2xl p-6 lg:p-10 shadow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src={project!.image}
              alt={project!.title}
              width={300}
              height={300}
              className="rounded-xl"
              priority
            />
          </div>

          <div className="flex-1">
            <h1
              className={`text-4xl lg:text-6xl font-[family-name:var(--font-cherry-bomb-one)] ${
                themeText[project!.theme]
              }`}
            >
              {project!.title}
            </h1>
            <p className="mt-4 text-gray-700">{project!.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project!.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project!.roles?.length ? (
              <div className="mt-4">
                <span className="font-semibold">Roles: </span>
                <span>{project!.roles.join(", ")}</span>
              </div>
            ) : null}
          </div>
        </div>

        <section className="mt-10 space-y-6">
          {project!.content?.caseDescription && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="whitespace-pre-line">
                {project!.content.caseDescription.trim()}
              </p>
            </div>
          )}

          {project!.content?.caseTechStack?.length ? (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project!.content.caseTechStack.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
