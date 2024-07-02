
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Skills = () => {
    const [showThirdSection, setShowThirdSection] = useState(false);
    const { ref: thirdSectionRef, inView: thirdSectionIsVisible } = useInView({
        threshold: 0.1
      });

      useEffect(()=>{
        if(thirdSectionIsVisible){
            setShowThirdSection(true);
        }
        else{
            setShowThirdSection(false);
        }
      },[thirdSectionIsVisible])

  return (
    <div ref={thirdSectionRef} className="bg-neutral-900  w-full h-full snap-center">
    {showThirdSection && (
      <motion.div
        className="text-3xl p-5 text-white"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='md:flex md:flex-col md:space-y-3'>
          <div className='text-3xl ml-10'>Skills</div>
          <div className=' flex flex-col space-y-3 '>
            <div className='text-xl w-full flex justify-end'>Frontend Technologies</div>
            <div className='logos flex justify-center space-x-2'>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36  bg-white' src="/assets/img/nextJs.webp" alt='Next.js' height={1000} width={800} />
              <div className='md:text-xl text-center'>Next.js</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Next.js</h4>
                    <p className="text-sm">
                      Experience - 1 Years
                    </p>

                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/reactJs.png" alt='React.js' height={1000} width={800} />
              <div className='md:text-xl text-center'>React.js</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 transition-all ease-in-out delay-200  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Rect.js</h4>
                    <p className="text-sm">
                      Experience - 1.5 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/javascript.png" alt='Javascript' height={1000} width={800} />
              <div className='md:text-xl text-center'>JavaScript</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Javascript</h4>
                    <p className="text-sm">
                      Experience - 1.5 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/tailwind.png" alt='tailwind' height={1000} width={800} />
              <div className='md:text-xl text-center'>Tailwind CSS</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Tailwind CSS</h4>
                    <p className="text-sm">
                      Experience - 1.5 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/html.png" alt='HTML' height={1000} width={800} />
              <div className='md:text-xl text-center'>HTML</div>
            </div>
            </HoverCardTrigger> 
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">HTML</h4>
                    <p className="text-sm">
                      Experience - 3 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/css.png" alt='CSS' height={1000} width={800} />
              <div className='md:text-xl text-center'>CSS</div>
            </div> 
            </HoverCardTrigger>  
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">CSS</h4>
                    <p className="text-sm">
                      Experience - 3 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            </div>
            <div className='logos flex flex-col'>
            <div className='text-xl w-full flex justify-end'>Backend Technologies</div>
            <div className='flex justify-center space-x-3'>
            <HoverCard>
            <HoverCardTrigger>         
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/nodeJs.png" alt='nodeJs' height={1000} width={800} />
              <div className='md:text-xl text-center'>Node.js</div>
            </div>
            </HoverCardTrigger>   
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Node.js</h4>
                    <p className="text-sm">
                      Experience - 1 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>  
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/express.png" alt='express' height={1000} width={800} />
              <div className='md:text-xl text-center'>Express.js</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Express.js</h4>
                    <p className="text-sm">
                      Experience - 1 Years
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden ' src="/assets/img/Asp.png" alt='Asp .net core' height={1000} width={800} />
              <div className='md:text-xl text-center'>ASP.NET Core</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">ASP.NET Core</h4>
                    <p className="text-sm">
                      Experience - 3 Months
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
            </div>
            </div>
            <div className='logos flex flex-col '>
            <div className='text-xl flex w-full justify-end'>Databases</div>
            <div className='flex space-x-3 justify-center'>
      
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden' src="/assets/img/postgreSQL.png" alt='postgreSQL' height={1000} width={800} />
              <div className='md:text-xl text-center'>PostgreSQL</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">PostgreSQL</h4>
                    <p className="text-sm">
                      Experience - 1 Year
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
      </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image className='md:size-36 overflow-hidden ' src="/assets/img/mongoDB.png" alt='MongoDB' height={1000} width={800} />
              <div className='md:text-xl text-center'>MongoDB</div>
            </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">MongoDB</h4>
                    <p className="text-sm">
                      Experience - 1.5 Year
                    </p>
            
                  </div>
                </div>
            </HoverCardContent>
</HoverCard>
            <HoverCard>
            <HoverCardTrigger>
            <div className='logo flex flex-col items-center size-40 transition-transform duration-300 ease-in-out hover:scale-105'>
                        <Image className='md:size-36 overflow-hidden' src="/assets/img/mySQL.png" alt='mySQL' height={1000} width={800} />
                        <div className='md:text-xl text-center'>MySQL</div>
                      </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80  bg-neutral-950 bg-opacity-70  ">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">MySQL</h4>
                              <p className="text-sm">
                                Experience - 2 Year
                              </p>
                            </div>
                          </div>
            </HoverCardContent>
</HoverCard>

            </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </div>

  )
}

export default Skills
