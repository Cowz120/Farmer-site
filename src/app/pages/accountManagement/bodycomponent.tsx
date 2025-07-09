import Link from 'next/link'
import React from 'react'
import { CiEdit } from "react-icons/ci";

// interface Props {
// firstname: string;
// lastname: string;
// email: string;
// phone: string;
// bio: string;
// }




const Bodycomponent = ( ) => {
  return (
    <div className='flex flex-col gap-10'>
    <div className='border-2 border-gray-300 rounded-lg p-10  ml-6 mr-6 gap-10'>
        <div className='flex w-full justify-between'>
            <h1 className='text-bold text-2x1'>Personal Data</h1>
            <Link href="./accountManagement/Editprofile" className='flex  items-center gap-1 border-1 border-gray-400 rounded-2xl w-fit px-2'>
             <CiEdit />Edit
            </Link>
        </div>
        <div className='flex gap-10 items-center justify-between'>
        <div className=''>
            <p>First Name</p>

        </div>
        <div>
         Last Name
        </div>

        </div>
        <div  className='flex gap-10 items-center justify-between '>
            <div>
        <p> Email Address</p>
            </div>
            <div>
        <p>Phone Number</p>
            </div>
        </div>
        <div className='flex gap-10 items-center justify-between'>
        <div>
            <p>Bio</p>
        </div>
       </div>
    </div>





  <div className='border-2 border-gray-300 rounded-lg p-10  ml-6 mr-6 gap-10'>
        <div className='flex w-full justify-between'>
            <h1 className='text-bold text-2x1'>Other Details</h1>
            <Link href="./accountManagement/Updateprofile" className='flex  items-center gap-1 border-1 border-gray-400 rounded-2xl w-fit px-2'>
             <CiEdit />Edit
            </Link>
        </div>
        <div className='flex gap-10 items-center justify-between'>
        <div className=''>
            <p>City</p>

        </div>
        <div>
        Country
        </div>

        </div>
        <div  className='flex gap-10 items-center justify-between '>
            <div>
        <p> Business Name</p>
            </div>
            <div>
        <p>Industry</p>
            </div>
        </div>
        <div className='flex gap-10 items-center justify-between'>
        <div>
            <p>Role</p>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Bodycomponent