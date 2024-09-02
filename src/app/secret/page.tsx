import React from 'react';

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative h-screen w-full">
        <video
          src="/assets/video/zengetsu.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          
        />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Page;
