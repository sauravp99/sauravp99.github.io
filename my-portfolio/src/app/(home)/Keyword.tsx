"use client"
import { ComponentProps, useCallback, useState } from "react";


export type KeywordType =  "default"  | "code" | "design" | "art";
export type KeywordAction = "hover" | "clicked";
export interface IKeyword {
    type: KeywordType;
    action: KeywordAction;
}

export const KeywordText = ({ 
  keywordType,
  setActiveKeyword
}: { 
  keywordType: KeywordType;     
  setActiveKeyword: (keyword: IKeyword) => void;
}) => {
  const colorClass = {
    code: "hover:text-red-300",
    design: "hover:text-blue-300",
    art: "hover:text-green-300",
    default: ""
  }[keywordType];

  
  return (
    <span   
      onMouseEnter={() => setActiveKeyword({type: keywordType, action: "hover"})}
      onMouseLeave={() => setActiveKeyword({type: "default", action: "hover"})}
      onClick={() => setActiveKeyword({type: keywordType, action: "clicked"})}
      className={`${colorClass} underline transition-colors duration-300 inline cursor-pointer`}
    >
      {keywordType}
    </span>
  );
}
