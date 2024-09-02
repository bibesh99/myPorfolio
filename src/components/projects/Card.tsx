
interface Project_Details{
 project_name:string
 project_image:string
 project_short_details:string
 project_link:string
}

import Image from 'next/image'
import React from 'react'
import "./Card.css"
import Link from 'next/link'
const Card = ({project_name,project_image,project_short_details,project_link}:Project_Details) => {
  return (
    <div className='md:p-3 rounded-lg text-white cardProject'>
      <Link  href={project_link} className='flex flex-col'>
        <Image className='md:h-96 md:w-full rounded-lg' src={project_image} alt={project_name} height={1920} width={1080}/>
        <div className='md:text-2xl'>{project_name}</div> 
        <div>{project_short_details}</div>
      </Link>
    </div>
  )
}

export default Card
