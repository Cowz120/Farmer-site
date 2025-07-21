import React from 'react'
import AnimalStats from './top'
import Table from './table'

const page = () => {
  return (
    <div className='bg-white rounded-md p-4 w-full'>
      <AnimalStats />
      <Table/>
    </div>
  )
}

export default page