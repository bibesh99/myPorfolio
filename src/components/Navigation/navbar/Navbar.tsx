"use client";

import { usePathname } from 'next/navigation';
import {motion} from "framer-motion";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  if (pathname === '/') {
    return null; 
  }



  return (
    <div 
        className={`
            md:flex md:w-full navbar_content 
        `}
    >
        <motion.div 
            initial={{x:"-100%"}}
            animate={{x: "0%"}}
            transition={{duration: 1, ease:"easeOut"}}
            exit={{opacity: 1}}
            className='md:flex md:w-full text-white md:h-12 '
            style={{
                justifyContent: "flex-end",
                gap: "12px",
                alignItems: "center",
                marginRight: "12px"
            }}
        >
            <div>About</div>
            <div>Contact</div>
            
        </motion.div>
    </div>
  );
};

export default Navbar;
