"use client";
import Image from "next/image";
import { useCallback, useState } from "react";

// Define a type for the theme options
type ThemeType = "default" | "code" | "design" | "art";

// Custom hook for theme management
function useThemeManager() {
  const [activeTheme, setActiveTheme] = useState<ThemeType>("default");
  
  const getBackgroundClass = useCallback(() => {
    switch (activeTheme) {
      case "code": return "bg-red-900";
      case "design": return "bg-blue-900";
      case "art": return "bg-green-900";
      default: return "bg-[var(--primary)]";
    }
  }, [activeTheme]);
  
  return {
    activeTheme,
    setTheme: setActiveTheme,
    resetTheme: () => setActiveTheme("default"),
    backgroundClass: getBackgroundClass()
  };
}

// Keyword component for better reusability
function Keyword({ 
  type, 
  children, 
  onHover 
}: { 
  type: ThemeType; 
  children: React.ReactNode; 
  onHover: (type: ThemeType) => void;
}) {
  const colorClass = {
    code: "hover:text-red-300",
    design: "hover:text-blue-300",
    art: "hover:text-green-300",
    default: ""
  }[type];

  return (
    <span
      className={`${colorClass} underline transition-colors duration-300 inline cursor-pointer`}
      onMouseEnter={() => onHover(type)}
      onMouseLeave={() => onHover("default")}
    >
      {children}
    </span>
  );
}

export default function Home() {
  const { backgroundClass, setTheme } = useThemeManager();

  return (
    <div
      className={`flex flex-col h-full justify-between ${backgroundClass} px-8 lg:px-32 transition-colors duration-300`}
    >
      <main className="flex flex-col gap-16 h-full text-4xl lg:text-6xl text-center justify-center items-center sm:text-left font-[family-name:var(--font-cherry-bomb-one)]">
        <p>Hi! I am Saurav</p>
        <Image
          aria-hidden
          src="/avatar_hello.svg"
          alt="Illustation of an avatar waving"
          className="lg:w-96 lg:h-96"
          width={300}
          height={300}
        />
        <p className="cursor-default">
          I love to{" "}
          <Keyword type="code" onHover={setTheme}>code</Keyword>,{" "}
          <Keyword type="design" onHover={setTheme}>design</Keyword>
          , and make{" "}
          <Keyword type="art" onHover={setTheme}>art!</Keyword>
        </p>
      </main>
      {/* <footer className="text-2xl text-[var(--primary)] justify-between flex flex-row w-full lg:justify-center lg:items-center lg:gap-64 gap-8">
        <section className="bg-[var(--secondary)] border-b-16 border-red-400 flex gap-4 justify-center rounded-t-xl w-full py-2 lg:px-16 lg:py-8 items-center lg:w-fit hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </section>
        <section className="bg-[var(--secondary)] flex gap-4 border-b-16 border-blue-400 justify-center rounded-t-xl w-full py-2 lg:px-16 lg:py-8 items-center lg:w-fit hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Art
        </section>
      </footer> */}
    </div>
  );
}
