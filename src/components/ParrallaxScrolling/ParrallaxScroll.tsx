import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParrallaxScroll = () => {
  return (
    <div>
      <Parallax 
        pages={5}
        style={{
          scrollbarWidth: "none",
          height: "100vh",
    
        }}
      >
        <ParallaxLayer 
          className='size-16' 
          offset={0}
          sticky={{ start: 1, end: 3 }} 
          style={{
            width:'30%',
            alignItems:'center',
            backgroundColor: 'red'
            }}>
          <div className={`text-3xl text-white  `}>
            <div className='mt-24'>I&apos;m a sticky layer</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ justifyContent: 'flex-end'}}>
          <div className={`text-3xl text-white `}>
            <p>I&apos;m not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ justifyContent: 'flex-end' }}>
        <div className={`text-3xl text-white `}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParrallaxScroll;
