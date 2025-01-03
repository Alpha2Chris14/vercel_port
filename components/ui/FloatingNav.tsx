"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
      useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (isClient && typeof current === "number") {
          let previous = scrollYProgress.getPrevious() ?? 0;
          let direction = current - previous;
    
          if (scrollYProgress.get() < 0.05) {
            setVisible(false);
          } else if (direction > 0) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }
      });
      
      if (!isClient) {
        return null;
      }

 
  return (
    <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={cn("fixed bottom-4 left-1/2 transform -translate-x-1/2", className)}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
          <button className="px-2 max-sm:px-0 group">
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
            <span className="z-10 absolute inset-x-0 w-1/2 mx-auto h-px bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-blue-500 group-hover:to-transparent" />
          </button>
            
            {/* <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span> */}
          
          </Link>
        ))}
      </motion.div>
    )}
    </AnimatePresence>
  );
};
