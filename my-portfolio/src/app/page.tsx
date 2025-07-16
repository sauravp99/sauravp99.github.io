"use client";
import Image from "next/image";
import {IKeyword, KeywordText} from "./(home)/Keyword";
import { useEffect, useState } from "react";


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
	  
	  // Track the current and previous images for smooth transitions
	  const [currentImage, setCurrentImage] = useState("/avatar_hello.svg");
	  const [prevImage, setPrevImage] = useState("");
	  const [isTransitioning, setIsTransitioning] = useState(false);
	  
	  // Update images when activeKeyword changes
	  useEffect(() => {
	    // Get the new image based on keyword
	    let newImage = "/avatar_hello.svg";
	    switch (activeKeyword.type) {
	      case "code": newImage = "/avatar_code.svg"; break;
	      case "design": newImage = "/avatar_code.svg"; break;
	      case "art": newImage = "/avatar_art.svg"; break;
	    }
	    
	    // Don't transition on initial render or if image hasn't changed
	    if (prevImage === "" || newImage === currentImage) {
	      setCurrentImage(newImage);
	      setPrevImage(newImage);
	      return;
	    }
	    
	    // Start transition
	    setIsTransitioning(true);
	    setPrevImage(currentImage);
	    setCurrentImage(newImage);
	    
	    // Reset transition flag after animation completes
	    const timer = setTimeout(() => {
	      setIsTransitioning(false);
	    }, 500); // Match this with your CSS animation duration
	    
	    return () => clearTimeout(timer);
	  }, [activeKeyword.type]);

  return (
    <div
      className={`flex flex-col h-full justify-between ${getBackgroundClass()} px-8 lg:px-32 transition-colors duration-300`}
    >
      <main className="flex flex-col gap-16 h-full text-4xl lg:text-6xl text-center justify-center items-center sm:text-left font-[family-name:var(--font-cherry-bomb-one)]">
        <p>Hi! I am Saurav</p>
        <div className="relative lg:w-96 lg:h-96 w-[300px] h-[300px] overflow-hidden">
          {/* Previous image that slides out to the left */}
          {isTransitioning && (
            <Image
              aria-hidden
              src={prevImage}
              alt="Previous avatar illustration"
              className={`absolute inset-0 slide-out-left`}
              width={300}
              height={300}
            />
          )}
          
          {/* Current image that slides in from the right */}
          <Image
            aria-hidden
            src={currentImage}
            alt="Avatar illustration"
            className={`absolute inset-0 ${isTransitioning ? 'slide-in-right' : ''}`}
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
      </main>
    </div>
  );
}
