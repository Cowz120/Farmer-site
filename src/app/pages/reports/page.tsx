import React from 'react'

import TopCommponent from './topComponent'
import Midcomponent from './mibcomponent'
import { Tablecomponent } from '../orders/Tablecomponent'

const Reports = () => {
  return (
    <div className='container mx-auto bg-white rounded-md p-4 w-full'>
      <h1 className='text-3xl font-bold'>Reports</h1>
    <div> <TopCommponent stats={[]} /></div>
    <div className='w-full border rounded-2xl padding-10 mx-6'><Midcomponent /></div>
    <div className='bottom-0 top-0 mx-6 py-6'> <Tablecomponent /></div>



    </div>
  )
}

export default Reports