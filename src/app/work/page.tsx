"use client";
import { BackgroundShapes } from "./BackgroundShapes";
import { Client } from "./category/client";


export default function Code() {
  return (
    <main className="px-4 lg:px-32 flex flex-col bg-[var(--secondary)] h-full w-full ">
      {/* <InspoPage/> */}
      <BackgroundShapes />
      <div className="flex flex-row justify-between">
        {/* <CategoryButtonGroup /> */}
        {/* <button
          type="button"
          className="lg:px-4 lg:py-2 py-2 cursor-pointer text-md font-bold px-4 hover:border-[var(--primary)] border-[var(--secondary)] border-1 transition-all duration-200 text-[var(--primary)] w-fit rounded-md"
        >
          Arts
        </button> */}
      </div>
      <div className="flex flex-col lg:gap-32 gap-16">
        <Client />
        {/* <Academic />
        <Hobby /> */}
      </div>
    </main>
  );
}

//Remaining to be able to share:

//Add project content:
// client: Prosper AI, Arkivverket, Chubben, coming soon
// academic: Save my city, black horizon
// hobby: AI daily digest, Quest, computas tikamp

//TODO:
// AI daily digest:
// - Host llm locally with docker, write terraform script, set up sidecar containers, make python app and llm communicate
//
//
