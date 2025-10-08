"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isKeywordsHighlighted, setIsKeywordsHighlighted] = useState(false);

  return (
    <main className="flex flex-col bg-[var(--primary)] px-8 lg:px-32 min-h-[calc(100vh-48px)] justify-between py-8">
      <div className="flex flex-col items-center justify-center flex-grow gap-6 md:gap-8">
        <p className="lg:text-5xl text-4xl font-[family-name:var(--font-cherry-bomb-one)]">
          Hi! I am Saurav
        </p>
        <Image
          aria-hidden
          src="/avatar_hello.svg"
          alt="Avatar illustration"
          className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]"
          width={300}
          height={300}
          priority
        />
        <p className="cursor-default [&_span]:transition-colors lg:text-5xl text-3xl [&_span]:duration-300 font-[family-name:var(--font-cherry-bomb-one)]">
          I love to{" "}
          <span
            className={`hover:text-red-300 ${
              isKeywordsHighlighted ? "text-red-300" : ""
            }`}
          >
            Code
          </span>
          {", "}
          <span
            className={`hover:text-blue-300 ${
              isKeywordsHighlighted ? "text-blue-300" : ""
            }`}
          >
            Design
          </span>
          {", "}
          and make{" "}
          <span
            className={`hover:text-green-300 ${
              isKeywordsHighlighted ? "text-green-300" : ""
            }`}
          >
            Art
          </span>
          {"!"}
        </p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="text-2xl mb-2 font-[family-name:var(--font-cherry-bomb-one)]">
          welcome to my portfolio
        </p>
        <Link
          href="/work"
          className="text-4xl transition-transform hover:translate-x-2"
        >
          <span
            onMouseEnter={() => setIsKeywordsHighlighted(true)}
            onMouseLeave={() => setIsKeywordsHighlighted(false)}
          >
            {"->"}
          </span>
        </Link>
      </div>
    </main>
  );
}
