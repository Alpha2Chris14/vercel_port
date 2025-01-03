'use client'

import React, { useEffect, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenetateEffect'
import MagicButton from './ui/MagicButton'
import { FaFileInvoice, FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data';
import Link from 'next/link';
import Image from 'next/image'

const Hero = () => {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    <div className="pb-20 pt-[100px]" >
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
          <Spotlight className='top-10 left-full h-[60vh] w-[50vw] ' fill="purple" />
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] ' fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

       
    <div className='flex md:flex-row flex-col items-center justify-center relative md:my-16 -my-10 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col text-start max-sm:mb-10'>
        <h2 className='uppercase tracking-widest text-sm md:text-sm text-start text-blue-100 max-w-80'>
          {/* Hello, I am */}
        </h2>
        <p className='text-start text-[38px] md:text-6xl lg:text-6xl font-bold md:-mb-2 -mb-4'>Creative</p>
        
        {isClient && (
          <TextGenerateEffect
            className='text-start text-[36px] md:text-6xl lg:text-6xl'
            words='Frontend Developer'
          />
        )}

        <p className='text-start justify-center md:w-2/3 w-full md:tracking-wider leading-6 mb-4 text-sm md:text-lg lg:text-lg'>
          Hi, I&apos;m <span className='text-purple md:border-b-2 border-b border-purple'>Wisdom Kayea</span> a Frontend Developer passionate about Designing and Developing creative and scalable websites with great performance and user experience.
        </p>

        <div className='flex items-start gap-4 max-sm:mt-6 mt-3'>
          
          <a href="#projects">
            <MagicButton
              title='Show my Work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>

          <a href="https://drive.google.com/file/d/1XgZfl8Blk-eVTk5aL6iqh7WXkhUmsN7B/view?usp=drive_link">
            <MagicButton
              title='Resume'
              icon={<FaFileInvoice />}
              position='right'
            />
          </a>

        </div>

        </div>

        <div>
            <Image 
              src='/web-profile.png'
              alt='profile'
              width={300}
              height={300}
            />
          </div> 
        
      </div>
    </div>
    
  );
};

export default Hero;
