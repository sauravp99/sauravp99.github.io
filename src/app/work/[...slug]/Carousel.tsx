"use client";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  id: string
  title: string;
  description: string;
  techStack?: string[];
  image: string;
}

function ComingSoonOverlay() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 rounded-[2rem] bg-white/90 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        {/* Simple construction icon */}
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <rect x="12" y="32" width="24" height="4" rx="1" fill="#16A34A"/>
          <rect x="16" y="26" width="16" height="4" rx="1" fill="#22C55E"/>
          <rect x="20" y="20" width="8" height="4" rx="1" fill="#4ADE80"/>
        </svg>
        <div className="text-xs lg:text-sm font-semibold text-[var(--primary)]">Content coming soon</div>
      </div>
    </div>
  );
}

export function HeroCarousel({ id, title, description, techStack, image }: Props) {
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section className="relative">
      <div className="relative">
        {/* Track */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [scroll-behavior:smooth]">
          {/* Slide 1: Title + Description */}
          <div id={`slide-1${id}`} className="snap-center shrink-0 w-full flex justify-center px-4">
            <div className="group relative bg-white rounded-[2rem] shadow px-8 py-10 lg:px-16 lg:py-14 min-h-[320px] lg:min-h-[460px] w-full lg:w-[80%] mx-auto">
              <h1 className={clsx("text-4xl lg:text-6xl text-center font-[family-name:var(--font-cherry-bomb-one)]")}>{title}</h1>
              <p className="text-center text-base lg:text-lg mt-4 max-w-[48ch] opacity-80 mx-auto">{description}</p>
              <button type="button" aria-label="Next" onClick={() => goTo(`slide-2${id}`)} className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition-opacity duration-200 lg:opacity-30 group-hover:opacity-100 focus-visible:opacity-100">›</button>
              <ComingSoonOverlay />
            </div>
          </div>

          {/* Slide 2: Role + Keywords */}
          <div id={`slide-2${id}`} className="snap-center shrink-0 w-full flex justify-center px-4">
            <div className="group relative bg-white rounded-[2rem] shadow px-6 lg:px-10 py-8 lg:py-12 min-h-[320px] lg:min-h-[460px] w-full lg:w-[80%] mx-auto">
              <div className="flex flex-row w-full h-full gap-6 px-4 lg:gap-8 items-center justify-center">
                {/* Middle: Body text */}
                <div className="text-sm lg:text-[15px] leading-6 lg:leading-7">
                  <p>
                    {description}
                  </p>
                  <p className="mt-3 opacity-80">
                    {description}
                  </p>
                </div>

                <div className="text-sm lg:text-[15px] leading-6 lg:leading-7">
                  <p>
                    {description}
                  </p>
                  <p className="mt-3 opacity-80">
                    {description}
                  </p>
                </div>
              </div>
              <button type="button" aria-label="Previous" onClick={() => goTo(`slide-1${id}`)} className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition-opacity duration-200 lg:opacity-30 group-hover:opacity-100 focus-visible:opacity-100">‹</button>
              <button type="button" aria-label="Next" onClick={() => goTo(`slide-3${id}`)} className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition-opacity duration-200 lg:opacity-30 group-hover:opacity-100 focus-visible:opacity-100">›</button>
              <ComingSoonOverlay />
            </div>
          </div>

          {/* Slide 3: Tech Stack or Visual */}
          <div id={`slide-3${id}`} className="snap-center shrink-0 w-full flex justify-center px-4">
            <div className="group relative bg-white rounded-[2rem] shadow px-8 py-10 lg:px-16 lg:py-14 min-h-[320px] lg:min-h-[460px] w-full lg:w-[80%] mx-auto">
              <div className="flex flex-col items-center justify-center gap-6">
                {techStack?.length ? (
                  <>
                    <h2 className="text-xl font-semibold">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.map((t) => (
                        <span key={t} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <Image src={image} alt={title} width={260} height={260} className="object-contain" />
                )}
              </div>
              <button type="button" aria-label="Previous" onClick={() => goTo(`slide-2${id}`)} className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition-opacity duration-200 lg:opacity-30 group-hover:opacity-100 focus-visible:opacity-100">‹</button>
              <button type="button" aria-label="Next" onClick={() => goTo(`slide-1${id}`)} className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] bg-white/70 hover:bg-white transition-opacity duration-200 lg:opacity-30 group-hover:opacity-100 focus-visible:opacity-100">›</button>
              <ComingSoonOverlay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
