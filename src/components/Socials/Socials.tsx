
import React from 'react';
import {motion} from 'framer-motion';




const Socials = () => {
  return (
    <div className='w-full h-screen flex flex-col text-white p-10'>
        <motion.div
                 initial={{ x: '-100%' }}  
                 whileInView={{x: '0%' }}
                 transition={{ duration: 1, ease: 'easeOut' }}
                 exit={{ opacity: 1 }}
                 className="md:text-3xl"
            >
            Socials
        </motion.div>
       
    </div>
  )
}

export default Socials