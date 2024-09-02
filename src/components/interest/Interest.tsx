
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import {motion} from 'framer-motion';

const interests = [
  {
    Interest_Name: "App Development",
    Interest_Description: "Currently I am interested in App Development, so I am practicing React Native.",
    Interest_Image: "/assets/img/react_native.svg"
  },
  {
    Interest_Name: "Artificial Intelligence",
    Interest_Description: "I am also interested in AI and I have made an ANIME RECOMMENDATION system.",
    Interest_Image: "/assets/img/ai.png"
  },
  {
    Interest_Name: "3D Modelling",
    Interest_Description: "I am quit interested in 3D modelling because I believe its will help me to enhance the UI experience.",
    Interest_Image: "/assets/img/blender.png"
  },
];

const Interest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div 
      initial={{ x: '-100%' }}
      whileInView={{ x: '0%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='p-10 flex flex-col w-full h-screen'>
          <div className='md:text-3xl text-white'>
              Interests
            </div>
      <div className='h-[400px]'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{
            width: "240px",
            height: "320px"
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {interests.map((interest, index) => (
            <SwiperSlide 
              key={index} 
              style={{ 
                width: "240px", 
                height: "320px", 
                borderRadius: "18px", 
                backgroundColor: index % 2 == 0 ? "#83283e" : "#d359c0" 
              }} 
              className='size-72 p-3'
            >
              <p className='md:font-semibold'>{interest.Interest_Name}</p>
              <Image className='mt-3' src={interest.Interest_Image} alt={interest.Interest_Image} height={300} width={300}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <ul className='list list-disc text-white'>
          <li className='md:text-lg'>
            {interests[activeIndex].Interest_Description}
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Interest;
