"use client";
import React, { useEffect, useState, useRef } from 'react';
import { PiMouseSimpleLight } from "react-icons/pi";

const ScrollDown = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollAnimationPopUp = setTimeout(() => {
      setScrollAnimation(true);
    }, 8000);

    return () => {
      clearTimeout(scrollAnimationPopUp);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setIsVisible(false); // Hide the component when reaching the bottom of the page
      } else {
        setIsVisible(true); // Show the component when not at the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollAnimation && isVisible && (
        <div
          ref={scrollDownRef}
          className='fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent z-50 flex flex-col text-white'
        >
          <div className='flex flex-col justify-center items-center space-y-2'>
            <div className='animate-bounce text-3xl'>
              <PiMouseSimpleLight />
            </div>
            <div className='text-md md:w-48 text-center'>
              Scroll Down
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollDown;
