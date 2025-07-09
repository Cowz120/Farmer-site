import React, { ReactNode } from 'react'
import { FaArrowRight } from "react-icons/fa6";

interface ProfileServiceProps {
  image:  ReactNode;
  name: string;
  description: string

  
}


const ProfileService = ({image, name, description}: ProfileServiceProps) => {
  return (
    <div className=' flex gap-4 border-1  border-gray-400 hover:bg-blue-300 p-4 m-4 rounded '>
      
     <p>{image}</p>
      <div className='flex items-center gap-3 justify-between'>
        <div  className='flex flex-col justify-center'>
      <p className='text-xl font-bold'>{name}</p>
      
      <p className='text-gray-600'>{description}</p>
      </div>
       <FaArrowRight  className='text-2xl text-white'/>
      </div>
      
    
    </div>
  )
}

export default ProfileService