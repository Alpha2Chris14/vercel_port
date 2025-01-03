'use client';

import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe"
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { stacks } from '@/data';
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') { // Ensure navigator is only accessed on the client side
      navigator.clipboard.writeText('wisdomkayea16@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{ 
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
       }}  
        
    >

      <div className={`${id === 6 && 'flex justify-center'} h-full `} >
       <div className="w-full h-full absolute" >
        {img && ( 
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover, object-center')}
          />
        )}
       </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`} > 
           {spareImg && (
           <img
           src={spareImg}
           alt={spareImg}
           className={cn(imgClassName, 'object-cover, object-center w-full h-full')}
         />
          )}
        </div>
          

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )} >
            <div className="font-sans font-extra-light md:w-28 w-44 text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:txt-3xl max-w-96 z-10 ">
            {title}
            </div>
          

          {id === 2 && <GlobeDemo /> }

          {id === 1 && (
            <div className="flex gap-3 lg:gap-3 w-fit absolute right-0 lg:right-0" >
              
              <div className=" grid grid-flow-col grid-rows-3 grid-cols-2 max-sm:mt-20 max-sm:flex max-sm:flex-col gap-1 lg:gap-4">
                {stacks.map(({
                 id, itemOne, itemTwo, iconOne, iconTwo,
                }) => (

                  <div key={id} className="grid grid-flow-col max-sm:mt-[11px] gap-3 lg:gap-4">

                    <div className="flex flex-col gap-3 lg:gap-4">
                          {/* leftside mapping */}

                          {itemOne.map((item) => (
                            <span key={item} className="flex items-center gap-2 py-3 lg:py-5 lg:px-5 px-4 text-xs lg:text-sm opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132E]" >
                                  {item} 
                                  {iconOne.map((icon, index) => (
                                      <div key={icon} >
                                      <Image 
                                      src={icon}
                                      alt={icon}
                                      width={15}
                                      height={15}
                                    />
                                    </div>
                                  ))}
                            </span>
                          ))}
                    </div>
                      
                      
                    <div className="flex flex-col gap-10 lg:gap-4">
                      {/* rightside mapping */}

                      {itemTwo.map((item) => (
                        <span key={item} className="flex items-center gap-2 py-3 lg:py-5 lg:px-5 px-4 text-xs lg:text-sm opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132E]" >                       
                              {item} 
                              {iconTwo.map((icon, index) => (
                                  <div key={icon} >
                                    <Image 
                                    src={icon}
                                    alt={icon}
                                    width={15}
                                    height={15}
                                  />
                                  </div>
                              ))}
                        </span>
                      ))}
                    </div>


                  </div>
                ))} 
 
              </div>         
            </div>

          )}

{id === 6 && (
        <div className="mt-5 md:-mt-7 relative">
          <div className={`absolute -bottom-5 right-0`}>
          {isClient && (
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
              />
            )}
          </div>

          <MagicButton
            title={copied ? 'Email copied' : 'Copy my email'}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="`bg-[#161a31]"
            handleClick={handleCopy}
          />
        </div>
      )}
          
      </div>
    </div>
    </div>
  );
};
