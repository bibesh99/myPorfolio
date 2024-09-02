"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { FaHandPointRight } from "react-icons/fa";
import './IntroductionSwiper.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IntroductionSwiper = () => {
  const [flip, setFlip] = useState(true);

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
  return (
    <div>
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
        modules={[EffectCoverflow, Navigation]}
        simulateTouch={true}
        className="mySwiper flex overflow-x-hidden"
      >
             <SwiperSlide className='h-screen  justify-center items-center '>

         
        <div  className='md:flex md:text-3xl h-full w-full text-white'>
              <section className='  md:p-16 p-4 w-full flex flex-col space-y-12'>
                
                <div className='hideSecondSection md:text-3xl text-xl'>Introduction</div>
                <div className='hideSecondSection md:text-3xl text-xl flex flex-col space-y-2'>
                  <div>
                  My Name is Bibesh Gurung and I was born in Pokhara,Nepal on 2002 AD.
                  </div>
                  <div>
                  I am Currently a in Web Developer.
                  </div>
                </div>
                <div className='hideSecondSection md:text-2xl text-xl flex'>
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

              <section className=' hideSecondSection flex justify-end w-full md:p-36'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip ? 0 : 180 }}>
                    <motion.div
                      transition={{ duration: 0.7 }}
                      animate={{ rotateY: flip ? 0 : 180 }}
                      className="Card">
                        <motion.div
                          transition={{ duration: 0.7 }}
                          animate={{ rotateY: flip ? 0 : 180 }}
                          style={{ display: flip ? "block" : "none" }}
                          className="front">
                              <Image 
                                className='md:h-96 md:w-[40rem] rounded-lg md:p-0 p-9' 
                                src="/assets/img/homeTown.jpg" 
                                alt='homeTown' 
                                width={2000} height={1000}/>
                        </motion.div>
                        <motion.div
                          initial={{ rotateY: 180 }}
                          animate={{ rotateY: flip ? 180 : 0 }}
                          style={{ display: flip ? "none" : "block" }}
                          transition={{ duration: 0.7 }}
                          className="back">
                            <Image 
                              className='md:h-96 md:w-[40rem] rounded-lg md:p-0 p-9' 
                              src="/assets/img/me.jpeg" 
                              alt='me' 
                              width={2000} 
                              height={1000}/>
                        </motion.div>
                    </motion.div>
                </motion.div>
              </section>
        </div>

              </SwiperSlide>
              <SwiperSlide className='h-screen w-screen'>
                  <div  className='md:flex text-3xl h-full w-screen  md:justify-center md:items-center  text-white md:gap-7 '>
                    <section className=' md:p-16 p-4 md:w-[60%] flex flex-col md:space-y-12 space-y-7'>
                      <div className=''>Education</div>
                      <div className=' md:text-2xl text-xl flex flex-col md:space-y-20 space-y-12'>
                        <motion.div 
                          initial={{ x: '-100%' }}  
                          whileInView={{x: '0%' }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          exit={{ opacity: 1 }}
                          className='flex justify-between items-center'>
                          <div className='md:w-96 w-48'>
                            <Image className='md:size-48 size-28' src="/assets/img/global.png" alt='GCS' width={2000} height={1000}/>
                          </div>
                          <div className='w-full'>
                            <p className='font-bold'>School Level (SEE) and +2 (Management)</p>
                            <p>I complete my School Level on 2019 AD. and +2 level in Management on 2021 AD.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ x: '100%' }}  
                          whileInView={{x: '0%' }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          exit={{ opacity: 1 }}                          
                          className='flex justify-between items-center'>
                          <div>
                            <p className='font-bold'>Bachelor In Information Technology</p>
                            <p>
                              I will be completing my Bachelor on 2024 AD.
                            </p>
                          </div>
                          <div className=''>
                          <Image className='w-72 md:h-28 h-16' src="/assets/img/icp.png" alt='ICP' width={2000} height={1000}/>
                          </div>
                        </motion.div>
                      </div>
                    </section>

      
                  </div>

      </SwiperSlide>
        </Swiper>

    </div>
  );
}

export default IntroductionSwiper;
