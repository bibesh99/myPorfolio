"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Define TypeScript interfaces for the skill data
interface Skill {
  category: string;
  name: string;
  imageSrc: string;
  experience: string;
}

const skillsData: Skill[] = [
  { category: "Frontend Technologies", name: "Next.js", imageSrc: "/assets/img/nextJs.webp", experience: "1 Year" },
  { category: "Frontend Technologies", name: "React.js", imageSrc: "/assets/img/reactJs.png", experience: "1.5 Years" },
  { category: "Frontend Technologies", name: "JavaScript", imageSrc: "/assets/img/javascript.png", experience: "1.5 Years" },
  { category: "Frontend Technologies", name: "Tailwind CSS", imageSrc: "/assets/img/tailwind.png", experience: "1.5 Years" },
  { category: "Frontend Technologies", name: "HTML", imageSrc: "/assets/img/html.png", experience: "3 Years" },
  { category: "Frontend Technologies", name: "CSS", imageSrc: "/assets/img/css.png", experience: "3 Years" },
  { category: "Backend Technologies", name: "Node.js", imageSrc: "/assets/img/nodeJs.png", experience: "1 Year" },
  { category: "Backend Technologies", name: "Express.js", imageSrc: "/assets/img/express.png", experience: "1 Year" },
  { category: "Backend Technologies", name: "ASP.NET Core", imageSrc: "/assets/img/Asp.png", experience: "3 Months" },
  { category: "Databases", name: "PostgreSQL", imageSrc: "/assets/img/postgreSQL.png", experience: "1 Year" },
  { category: "Databases", name: "MongoDB", imageSrc: "/assets/img/mongoDB.png", experience: "1.5 Years" },
  { category: "Databases", name: "MySQL", imageSrc: "/assets/img/mySQL.png", experience: "2 Years" },
];

const Skills: React.FC = () => {
  const [showThirdSection, setShowThirdSection] = useState(false);
  const { ref: thirdSectionRef, inView: thirdSectionIsVisible } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setShowThirdSection(thirdSectionIsVisible);
  }, [thirdSectionIsVisible]);

  return (
    <div ref={thirdSectionRef} className="bg-neutral-900 w-full h-full snap-center">
      {showThirdSection && (
        <motion.div
          className="text-3xl md:p-5 p-1 text-white"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='md:flex md:flex-col md:space-y-2 '>
            <div className='md:text-3xl md:ml-10 md:mt-0 mt-14'>Skills</div>
            <div className='flex flex-col space-y-3'>
              {["Frontend Technologies", "Backend Technologies", "Databases"].map((category) => (
                <div key={category} className='logos flex flex-col'>
                  <div className='text-xl w-full flex justify-end'>{category}</div>
                  <div className='flex justify-center md:space-x-3 space-x-1'>
                    {skillsData
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <HoverCard key={skill.name}>
                          <HoverCardTrigger>
                            <div className='logo flex flex-col items-center md:size-40 size-16 md:h-40 h-28 transition-transform duration-300 ease-in-out hover:scale-105'>
                              <Image className='md:size-32 overflow-hidden' src={skill.imageSrc} alt={skill.name} height={1000} width={800} />
                              <div className='md:text-xl text-[11px]  text-center'>{skill.name}</div>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-neutral-950 bg-opacity-70">
                            <div className="flex justify-between space-x-3">
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">{skill.name}</h4>
                                <p className="text-sm">Experience - {skill.experience}</p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
