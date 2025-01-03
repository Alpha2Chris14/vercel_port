"use client"

import { projects } from '@/data'
import React, { Children } from 'react'
import { CardBody, CardContainer } from './ui/3d-card'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className="md:-mt-32 pt-20 sm:pt-20 pb-20" id="projects">
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple' >Recent Projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8'>
            {projects.map(({
                id, title, des, img, iconLists, link,
            }) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[460px] w-[80vw] cursor-pointer'>
                     <CardContainer>
                     <Link href={link} target="_blank" rel="noopener noreferrer">
                        <CardBody>                           
                        <div className='relative flex item-center justify-center w-[80vw] overflow-hidden sm:w-[460px] h-[35vh] md:h-[45vh] lg:h-[45vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#13162d]'>
                        <Image
                            src={img}
                            alt={title}
                            width={500}
                            height={500}
                            className='z-10 rounded-3xl overflow-hidden absolute rotate-2 bottom-1'
                        /> 
                        </div>
                        
                       </div>
                       <h1 className='font-bold lg:text-2xl md:text-xl pl-1 text-bale line-clamp-1'>
                            {title}
                       </h1>

                       <p className='lg:text-lg lg:font-normal font-light pl-1 text-sm line-clamp-2'>
                        {des}
                       </p>
                        
                        <div className='flex item-center justify-between mt-7 mb-3' >
                            <div className='flex items-center justify-center' >
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{transform: `translateX(-${5 * index * 2}px)`}}  >
                                        <Image 
                                          src={icon}  
                                          alt={icon}
                                          width={100}
                                          height={100}
                                          className='p-2' 
                                        />
                                    </div>
                                 ))}
                            </div>
                            <div className='flex justify-center py-4'>
                                <p className='flex lg:text-base md:text-xs text-sm sm:text-[10px] text-purple'>Checkout Live Site</p>
                                <FaLocationArrow className='ms-3'
                                color='#cbacf9'
                                />
                            </div>
                        </div>
                        </CardBody>
                        </Link>
                    </CardContainer>
                </div>

            ))}
        </div>
    </div>
  )
}

export default RecentProjects;