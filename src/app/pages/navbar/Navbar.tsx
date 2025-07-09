"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='flex  items-center bg-white h-16  shadow-lg'>
      <AiOutlineMenu  className='text-2xl text-red-600 border rounded bg-red-300' />
      <div className='flex items-center   h-16  '>

        {pathname.split("/").pop().toUpperCase()}
      </div>

        <div>
          
        </div>
    </div>
  )
}

export default Navbar