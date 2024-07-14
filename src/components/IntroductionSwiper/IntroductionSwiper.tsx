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
  );
}

export default IntroductionSwiper;
