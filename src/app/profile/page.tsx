import React from 'react'
import ProfileService from './profileService'
import  Link  from 'next/link' 
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='border-b-2 border-gray-400 mb-4'>
        <h1 className='text-3xl font-bold'>Profile</h1>
        <p className='text-gray-600'>Create your profile to start selling and buying livestock</p>
      </div>
      
      <p>Please select your role. Whether you're a farmer looking to sell livestock or a buyer interested in purchasing</p>
      <div className='flex flex-col gap-4'>
        <Link href='/farmer' >
        <ProfileService image={<CgProfile className='text-4xl' />} name={'Farming Service'} description={'Looking to purchase high-quality livestock'}/>
        </Link>
        <Link href='/buyer'>
        <ProfileService image={<CgProfile className='text-4xl' />} name={'Buying Service'} description={'Farmer ready to sell your high-quality livestock'}/>
        </Link>
     
      </div>
    </div>
      
    
  )
}

export default Profile