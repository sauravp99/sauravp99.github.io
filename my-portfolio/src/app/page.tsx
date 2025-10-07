"use client";
import Image from "next/image";
import {IKeyword, KeywordText} from "./(home)/Keyword";
import { useState } from "react";
import Link from "next/link";


export default function Home() {

	const [activeKeyword, setActiveKeyword] = useState<IKeyword>({
		type: "default",
		action: "hover"
	  });
	  
	  const getBackgroundClass = () => {
		console.log("Getting background class for ", activeKeyword.type);
		switch (activeKeyword.type) {
		  case "code": return "bg-red-900";
		  case "design": return "bg-blue-900";
		  case "art": return "bg-green-900";
		  case "default":
		  default: return "bg-[var(--primary)]";
		}
	  };
	  
  return (
    <div
      className={`flex flex-col h-full justify-between bg-[var(--primary)] px-8 lg:px-32 transition-colors duration-300`}
    >
      <main className="flex flex-col gap-16 h-full text-center justify-center items-center sm:text-left font-[family-name:var(--font-cherry-bomb-one)]">
        <p className="lg:text-5xl text-3xl">Hi! I am Saurav</p>
        <div className="relative text-2xl lg:text-4xl lg:w-96 lg:h-96 w-[300px] h-[300px] overflow-hidden">
          <Image
            aria-hidden
            src="/avatar_hello.svg"
            alt="Avatar illustration"
            className={`absolute inset-0`}
            width={300}
            height={300}
            priority
          />
        </div>
        <p className="cursor-default">
          I love to{" "}
          <KeywordText keywordType="code" setActiveKeyword={setActiveKeyword}/>{", "}
          <KeywordText keywordType="design" setActiveKeyword={setActiveKeyword}/>{", "}
          and make{" "}
          <KeywordText keywordType="art" setActiveKeyword={setActiveKeyword}/>{"!"}
        </p>
		<p className="text-2xl">
		welcome to my portfolio
		</p>
		<Link href="/code">{"->"}</Link>
      </main>
    </div>
  );
}
