"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from "react-icons/ai";
import { useSidebar } from '@/components/ui/sidebar';


const Navbar = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const handleClick = () => {
    toggleSidebar();
  };

  return (
    <div className='flex  items-center bg-white h-16 shadow-lg'>
      <AiOutlineMenu  className='text-2xl text-red-600 border rounded bg-red-300' onClick={handleClick} />
      <div className='flex items-center   h-16  '>

    {(pathname && pathname.split("/").pop()?.toUpperCase()) || ""}
      </div>

        <div>
          
        </div>
    </div>
  )
}

export default Navbar