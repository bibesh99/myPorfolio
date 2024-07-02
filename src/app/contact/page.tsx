import React from 'react';


const Wrapper = `
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

const Page = () => {
  return (
    <div style={{
      scrollSnapType: "y mandatory",
      maxHeight: "100vh",
      overflowY: "scroll"
    }}>
      <div className="snap-center h-screen w-screen bg-red-500 flex items-center justify-center">
        Page 1
      </div>
      <div className="snap-center h-screen w-screen bg-green-500 flex items-center justify-center">
        Page 2
      </div>
      <div className="snap-center h-screen w-screen bg-blue-500 flex items-center justify-center">
        Page 3
      </div>
    </div>
  );
};

export default Page;
