import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

const interests = [
  {
    Interest_Name: "App Development",
    Interest_Description: "Currently I am interested in App Development, so I am practicing React Native.",
    Interest_Image: "/assets/img/react_native.svg"
  },
  {
    Interest_Name: "Artificial Intelligence",
    Interest_Description: "I am also interested in AI and I have made an ANIME RECOMMENDATION system.",
    Interest_Image: "/assets/img/react_native.svg"
  }
];

const Interest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='p-10 flex flex-col'>

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
                backgroundColor: index === 0 ? "#FFB6C1" : "#c6b6ff" 
              }} 
              className='size-72 p-3'
            >
              {interest.Interest_Name}
              <Image className='mt-3' src={interest.Interest_Image} alt={interest.Interest_Image} height={300} width={300}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <ul className='list list-disc'>
          <li>
            {interests[activeIndex].Interest_Description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Interest;
