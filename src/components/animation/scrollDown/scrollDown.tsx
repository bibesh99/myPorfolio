"use client";
import React, { useEffect, useState } from 'react';
import { PiMouseSimpleLight } from "react-icons/pi";

const ScrollDown = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {
    const scrollAnimationPopUp = setTimeout(() => {
      setScrollAnimation(true);
    }, 8000);
    
    return () => {
      clearTimeout(scrollAnimationPopUp);
    };
  }, []);

  return (
    <>
      {scrollAnimation && (
        <div className='flex flex-col text-white'>
          <div className='flex flex-col justify-center items-center space-y-2'>
            <div className='animate-bounce text-3xl'>
              <PiMouseSimpleLight />
            </div>
            <div className='text-md'>
              Scroll Down
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollDown;
