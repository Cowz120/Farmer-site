import Link from 'next/link';
import React from 'react'
import { CiEdit } from "react-icons/ci";

interface Props {
name: string;
position: string;
}


// const Topcomponent = ({name,position}:Props) => {
const Topcomponent = () => {
  return (
    <div className='flex items-center justify-between ml-6 mr-6   gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <div className='flex gap-10'>
        <div >
            <input type="file"
             id="myFile" 
             name="myfile"
            className='h-20 w-20 bg-gray-400 rounded-full  '
            //  onChange={(e)=>{
            //     console.log(e.target.files[0])
            //  }}
             required
             />            
        </div>
        <div >
        <div> 
         JOHN DOE
        </div>
        <div> 
         THE CEO
        </div>
        <div>
            <Link  href="./accountManagement/Editprofile" className='flex gap-4 items-center text-blue-600 underline'>
        <CiEdit className='underline' /><em>Edit Profile</em>
        </Link>
        </div>
        </div>
        </div>

      <div className= ' bg-green-400 h-6'>
        <select name="status" id="status"> 
            <option value="1">Active</option>
            <option value="2">Inactive</option>
        </select>

      </div>
    </div>
  )
}

export default Topcomponent