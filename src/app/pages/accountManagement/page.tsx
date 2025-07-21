 "use server";
 import React from 'react'
import Topcomponent from './topcomponent'
import Bodycomponent from './bodycomponent'

const page = () => {
  return (
    <div className='flex flex-col gap-10 bg-white rounded-md p-4 w-full'>
      <h1 className='text-4xl font-bold gap-10'>My Profile</h1>

      <Topcomponent/>
      <Bodycomponent/>
    </div>
  )
}

export default page