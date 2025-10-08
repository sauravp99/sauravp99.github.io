import { projects } from "../projectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: [p.id] }));
}

export default function TestPage({ params }: PageProps) {
  const id = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const themeBorder: Record<"red" | "blue" | "green" | "grey", string> = {
    red: "border-red-900",
    blue: "border-blue-900",
    green: "border-green-900",
    grey: "border-gray-900",
  };

  const shapesByTheme: Record<
    "red" | "blue" | "green" | "grey",
    { shape1: string; shape2: string; shape3: string }
  > = {
    red: {
      shape1: "/fluid_red1.svg",
      shape2: "/fluid_red2.svg",
      shape3: "/fluid_blue1.svg",
    },
    blue: {
      shape1: "/fluid_blue1.svg",
      shape2: "/fluid_red2.svg",
      shape3: "/fluid_red1.svg",
    },
    green: {
      shape1: "/fluid_blue1.svg",
      shape2: "/fluid_red1.svg",
      shape3: "/fluid_red2.svg",
    },
    grey: {
      shape1: "/fluid_red1.svg",
      shape2: "/fluid_blue1.svg",
      shape3: "/fluid_red2.svg",
    },
  };

  const shapes = shapesByTheme[project!.theme];

  const paragraphs = splitParagraphs(project!.content?.caseDescription);

  return (
    <main className="px-4 lg:px-32 py-8 bg-[var(--secondary)] text-[var(--primary)] min-h-screen">
      <header className="flex items-start justify-start">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] px-3 lg:px-4 py-1.5 lg:py-2 font-semibold shadow-sm hover:bg-white/70 transition-colors"
        >
          Back
        </Link>
      </header>

      {/* Hero carousel */}
      <section className="relative py-8 lg:py-16">
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [scroll-behavior:smooth]">
            {/* Slide 1: Title + Description */}
            <div id="slide-1" className="snap-center shrink-0 w-full flex justify-center px-4">
              <div className="relative bg-white rounded-[2rem] shadow px-8 py-10 lg:px-16 lg:py-14 min-h-[320px] lg:min-h-[460px] max-w-4xl w-full">
                <h1 className={clsx("text-4xl lg:text-6xl text-center font-[family-name:var(--font-cherry-bomb-one)]")}>{project!.title}</h1>
                <p className="text-center text-base lg:text-lg mt-4 max-w-[48ch] opacity-80 mx-auto">{project!.description}</p>
                <a href="#slide-3" aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">‹</a>
                <a href="#slide-2" aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">›</a>
              </div>
            </div>

            {/* Slide 2: Role + Keywords */}
            <div id="slide-2" className="snap-center shrink-0 w-full flex justify-center px-4">
              <div className="relative bg-white rounded-[2rem] shadow px-8 py-10 lg:px-16 lg:py-14 min-h-[320px] lg:min-h-[460px] max-w-4xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-sm">
                  <div>
                    <div className="opacity-70">Role</div>
                    <ul className="mt-3 space-y-1">
                      {(project!.roles?.length ? project!.roles : ["Design", "Frontend"]).map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="opacity-70">Keywords</div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project!.tags.map((tag) => (
                        <li key={tag} className="bg-white/70 border border-black/5 rounded-full px-3 py-1 text-xs">{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href="#slide-1" aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">‹</a>
                <a href="#slide-3" aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">›</a>
              </div>
            </div>

            {/* Slide 3: Tech Stack or Visual */}
            <div id="slide-3" className="snap-center shrink-0 w-full flex justify-center px-4">
              <div className="relative bg-white rounded-[2rem] shadow px-8 py-10 lg:px-16 lg:py-14 min-h-[320px] lg:min-h-[460px] max-w-4xl w-full">
                <div className="flex flex-col items-center justify-center gap-6">
                  {project!.content?.caseTechStack?.length ? (
                    <>
                      <h2 className="text-xl font-semibold">Tech Stack</h2>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project!.content.caseTechStack.map((t) => (
                          <span key={t} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Image src={project!.image} alt={project!.title} width={260} height={260} className="object-contain" />
                  )}
                </div>
                <a href="#slide-2" aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">‹</a>
                <a href="#slide-1" aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition">›</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating content + cards */}
      <section id="overview" className="mt-10 lg:mt-16 space-y-24">
        {paragraphs.slice(0, 4).map((para, i) => (
          <div key={i} className="relative">
            {/* Background decorative shape per block */}
            {i === 0 && (
              <Image
                src={shapes.shape1}
                alt="decor"
                width={700}
                height={500}
                className="absolute -z-10 -left-6 lg:left-8 -top-8 w-[55%] lg:w-[38%] opacity-70"
              />
            )}
            {i === 1 && (
              <Image
                src={shapes.shape2}
                alt="decor"
                width={700}
                height={500}
                className="absolute -z-10 right-8 -top-10 w-[55%] lg:w-[38%] opacity-70"
              />
            )}
            {i === 2 && (
              <Image
                src={shapes.shape3}
                alt="decor"
                width={700}
                height={500}
                className="absolute -z-10 left-8 -top-10 w-[55%] lg:w-[38%] opacity-70"
              />
            )}

            <div
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              )}
            >
              {/* Text block */}
              <div className="prose max-w-none text-sm leading-6 lg:text-base lg:leading-7">
                <p className="mb-3">{para}</p>
                {i === 0 && (
                  <p className="opacity-80">
                    {project!.content?.caseStudy ||
                      "This case explores constraints, outcomes, and measurable impact across stakeholders."}
                  </p>
                )}
              </div>

              {/* White card with themed bottom border */}
              <Card className={clsx("mt-4 lg:mt-0", themeBorder[project!.theme])}>
                {/* Placeholder image area or logo */}
                <div className="h-[140px] lg:h-[220px] flex items-center justify-center">
                  <Image
                    src={project!.image}
                    alt={project!.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        ))}
      </section>

      {/* Final large card */}
      <section id="details" className="mt-24 lg:mt-32">
        <Card className={themeBorder[project!.theme]}>
          <div className="min-h-[220px] lg:min-h-[320px] flex items-center justify-center">
            <p className="max-w-3xl text-center opacity-80">
              {project!.content?.caseSolution ||
                "Additional details, solution highlights, and outcomes can be placed here."}
            </p>
          </div>
        </Card>
      </section>
    </main>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow border-b-[0.6rem] lg:border-b-[0.9rem] w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

function splitParagraphs(text?: string) {
  if (!text) return [] as string[];
  // Split by double newlines or bullet markers, trim empties
  const parts = text
    .split(/\n\s*\n|•/g)
    .map((s) => s.replace(/^[-–\s]+/, "").trim())
    .filter(Boolean);
  // Ensure at least some content
  if (parts.length === 0) return [text.trim()];
  return parts;
}
