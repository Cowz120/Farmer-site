import React from 'react'
import Topcommponent from './Topcommponent'
import { Tablecomponent } from './Tablecomponent'

const page = () => {
  return (
    <div className='flex flex-col bg-white rounded-md gap-10 p-6'>
     <div className=' items-center'> <Topcommponent /></div>
      <div > <Tablecomponent /></div>
    </div>
  )
}

export default page
