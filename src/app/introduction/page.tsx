"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { FaHandPointRight } from "react-icons/fa";





import './page.css';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Skills from '@/components/Skills/Skills';

const Introduction = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [isTypewriting, setTypewriting] = useState(true);
  const [isTypewriting1, setTypewriting1] = useState(true);
  const [isTypewriting2, setTypewriting2] = useState(true);

  const [translation, setTranslation] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);


  const [showFourthSection, setShowFourthSection] = useState(false);


  const [flip, setFlip] = useState(true);

  const { ref: introTypewriterRef, inView: introTypeWriterIsVisible, entry } = useInView({
    threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
  });


  const { ref: fourthSectionRef, inView: fourthSectionIsVisible } = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    const observerForSecondDiv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showSecondSection');
        } else {
          entry.target.classList.remove('showSecondSection');
        }
      });
    });

    const hiddenDivs = document.querySelectorAll('.hideSecondSection');
    hiddenDivs.forEach((el) => observerForSecondDiv.observe(el));

    return () => {
      hiddenDivs.forEach((el) => observerForSecondDiv.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const observerForSkillsDiv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showSkillsScection');
        } else {
          entry.target.classList.remove('showSkillsScection');
        }
      });
    });

    const hiddenDivs = document.querySelectorAll('.hideSkillsSection');
    hiddenDivs.forEach((el) => observerForSkillsDiv.observe(el));

    return () => {
      hiddenDivs.forEach((el) => observerForSkillsDiv.unobserve(el));
    };
  }, []);


  useEffect(() => {
    setIsTransitioning(true);
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.body.classList.remove('no-scroll');
    }, 1000);

    const typewritingTimer = setTimeout(() => {
      setTypewriting(false);
    }, 800);

    const typewritingTimer1 = setTimeout(() => {
      setTypewriting1(false);
    }, 2500);

    const typewritingTimer2 = setTimeout(() => {
      setTypewriting2(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(typewritingTimer);
      clearTimeout(typewritingTimer1);
      clearTimeout(typewritingTimer2);

      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(()=>{
    if(fourthSectionIsVisible){
      setShowFourthSection(true);
    }else{
      setShowFourthSection(false);
    }
  },[fourthSectionIsVisible])

  useEffect(() => {
    if (entry) {
      const maxTranslation = window.innerWidth * 0.6;
      const newTranslation = entry.intersectionRatio === 0 ? 0 : Math.min(entry.intersectionRatio * maxTranslation, maxTranslation);

      if (newTranslation < 200) {
        setResetAnimation(true);

      } else {
        setResetAnimation(false);
  
      }

      setTranslation(newTranslation);
    }
  }, [entry]);

  useEffect(() => {
    const handleScroll = () => {
      if (!introTypeWriterIsVisible && translation > 0) {
        setResetAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [introTypeWriterIsVisible, translation]);

  return (
    <div className="w-screen h-screen snap snap-y snap-mandatory overflow-auto scroll-smooth bg-neutral-900">
      <div className="snap-start h-screen">

        <motion.div
          className="relative flex flex-col h-screen bg-neutral-950 text-white"
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-cover bg-center bg-neutral-900">
            <div style={{ transform: `translateX(-${resetAnimation ? 0 : translation}px)` }} className="flex flex-col space-y-4 mt-24 p-16 text-left introTypeWriter">
              {!isTypewriting && (
                <div className="md:text-4xl font-bold">
                  <Typewriter
                    words={["Hi Everyone!"]}
                    typeSpeed={120}
                    delaySpeed={0}
                  />
                </div>
              )}
              {!isTypewriting1 && (
                <div className="md:text-3xl font-semibold">
                  <Typewriter
                    words={["I am Bibesh Gurung, Currently A Web Developer."]}
                    typeSpeed={50}
                    delaySpeed={0}
                  />
                </div>
              )}
              {!isTypewriting2 && (
                <div className="md:text-3xl font-semibold">
                  <Typewriter
                    words={["And This Is My Intro!"]}
                    typeSpeed={120}
                    delaySpeed={0}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div ref={introTypewriterRef} className="bg-neutral-900 w-full h-screen snap-center mt-2">
        
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 500,
          modifier: 1,
          
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        simulateTouch={true}
        className="mySwiper flex"
      >
             <SwiperSlide className='h-screen  justify-center items-center '>

         
        <div  className='flex text-3xl h-full w-full text-white gap-7'>


              <section className='  p-16 w-full flex flex-col space-y-12'>
                
                <div className='hideSecondSection'>Introduction</div>
                <div className='hideSecondSection text-2xl flex flex-col space-y-2'>
                  <div>
                  My Name is Bibesh Gurung and I was born in Pokhara,Nepal on 2002 AD.
                  </div>
                  <div>
                  I am Currently Interested in Web Development.
                  </div>
                </div>
                <div className='hideSecondSection text-2xl flex'>
                <button className="flex hover:scale-105 space-x-2 justify-center items-center hideSecondSection" onClick={() => setFlip((prevState) => !prevState)}>
                  <div>
                    <FaHandPointRight />
                  </div>
                  <div>
                  And This Is Me!
                  </div> 
                </button>
                </div>
              </section>

              <section className=' hideSecondSection flex justify-end w-full p-36'>
                <motion.div

        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="Card"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            style={{ display: flip ? "block" : "none" }}
            className="front"
          >
                            <Image className='h-96 w-[40rem]' src="/assets/img/homeTown.jpg" alt='homeTown' width={2000} height={1000}/>
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            style={{ display: flip ? "none" : "block" }}
            transition={{ duration: 0.7 }}
            className="back"
          >
                    <Image className='h-96 w-[40rem]' src="/assets/img/me.jpeg" alt='me' width={2000} height={1000}/>
          </motion.div>
 
        </motion.div>
      </motion.div>
              </section>
        </div>

              </SwiperSlide>
              <SwiperSlide className='h-screen w-screen  justify-center items-center '>

         
<div  className='flex text-3xl h-full w-screen  justify-center items-center  text-white gap-7 '>


      <section className='  p-16 w-[60%] flex flex-col space-y-12'>
        
        <div className=''>Education</div>
        <div className=' text-2xl flex flex-col space-y-2'>
          <div>
            School Level from Global Collegiate School.
          </div>
          <div>
            +2 Level On Commerce from Global Collegiate School.
          </div>
          <div>
            My Bachelor In Information Technology from Informatics Collage Pokhara.
          </div>
        </div>
        <div className=' text-2xl flex'>

        </div>
      </section>

      
</div>

      </SwiperSlide>
        </Swiper>



      </div>
        <Skills/>

      <div ref={fourthSectionRef} className="bg-neutral-900 w-full h-screen snap-center mt-2">
        {showFourthSection && (
          <motion.div
            className="text-3xl p-16 text-white"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            My Interest
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Introduction;
