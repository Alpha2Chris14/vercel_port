"use client"

import { Globe } from "./Globe";

Globe;

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        
      </span>

      {typeof window !== 'undefined' && 
      
      <Globe className="md:top-5 top-7 " />}    
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}