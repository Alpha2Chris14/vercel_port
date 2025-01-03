"use client";

import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact' >
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <Image 
            src="/footer-grid.svg" 
            alt="grid" 
            width={20}
            height={20}
            className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]' >
                Ready to take your
                <span className='text-purple'> digital presense to the next level?</span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center' >Reach out to me today and let&apos;s discuss how i can help you achieve your goals</p>
            <a href="mailto:wisdomkayea16@gmail.com">
                <MagicButton
                    title='Lets get in touch'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex w-full px-2 md:px-32 mt-16 md:flex-row flex-col justify-between items-center' >
            <p className='md:text-base text-sm md:font-normal font-light' >Copyright © 2024 Wisdom Kayea </p>
            <div className='flex items-center pt-4 md:pt-0 md:gap-3 gap-6' >
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 z-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black 300 ' >
                        <Link href={profile.href}  target="_blank" rel="noopener noreferrer">
                        <Image 
                        src={profile.img} 
                        alt="profile.id"
                        width={20}
                        height={20} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;