import React from 'react'
import Topcommponent from './Topcommponent'
import { Tablecomponent } from './Tablecomponent'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
     <div className=' items-center'> <Topcommponent /></div>
      <div > <Tablecomponent /></div>
    </div>
  )
}

export default page
