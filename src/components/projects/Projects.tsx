

import React from 'react';
import {motion} from 'framer-motion';
import Card from './Card';


const Project_Details =[
  {  
  project_name: "Tailor Ease",
  project_image: "/assets/img/projects/tailorEase4.png",
  project_details: "Tailor Ease was my Final Year Project",
  project_link: "/"
  },
  {  
    project_name: "Tailor Ease",
    project_image: "/assets/img/projects/tailorEase2.png",
    project_details: "Tailor Ease was my Final Year Project",
    project_link: "/"
  },

]


const Projects:React.FC = () => {
  return (
    <div className="md:p-12 w-full h-full md:space-y-7 flex flex-col">
        <motion.div 
          initial={{ x: '-30%' }}  
          whileInView={{x: '0%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className='md:text-2xl text-white '>
            Projects
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
          {Project_Details.map((project, index) => (
            <motion.div 
              initial={{ y: '-50%' }}  
              whileInView={{y: '0%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              exit={{ opacity: 1 }}
              key={index} className=''>
              <Card 
                project_link={project.project_link}
                project_name={project.project_name} 
                project_image={project.project_image} 
                project_short_details={project.project_details} 
              />
            </motion.div>
          ))}
        </div>

    </div>
  )
}

export default Projects