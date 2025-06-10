import React from 'react'

export const CreateAccount = () => {
  return (
    <div>
    <div className=' items-center justify-center w-fit h-fit bg-white'>
        <div className=' flex flex-col items-center justify-center h-screen'>
            <h1 className='text-center text-black'>CREATE ACCOUNT</h1>
      <p className='text-center text-black'>Welcome! create an account to access livestock marketplace platform</p>
      
        </div>
        <div className='flex flex-col justify-between h-screen'>
        <div>
        <label htmlFor="name" className=' text-black text- right'>First Name</label>
        <input type="text" name="name" id="name" className='border-2 border-black rounded-lg text-gray p-2'/>
        

        
            <label htmlFor="email" className='text-right text-black'>Last Name</label>
            <input type="email" name="" id="name" className='border-2 border-black text-black rounded-lg p-2'/>
        </div>
       </div>
       
        
        <div>
            <div className='flex flex-row'>
                <label htmlFor="email" className=' text-black text- right'>Email Address</label>
                <input type="email" name="email" id="email" className='border-2 border-black text-black rounded-lg p-2'/>
            </div>
            <div className='flex flex-row'>
            <label htmlFor="phone" className=' text-black text- right'>Phone Number</label>
            <input type="number" name="phone" id="phone" className='border-2 border-black  text-blackrounded-lg p-2'/>
        </div>
            <label htmlFor="password" className='text- right text-black'>Password</label>
            <input type="password" name="password" id="password" className='border-2 border-black  text-black rounded-lg p-2'/>
        </div>
        <div className='flex flex-row'>
            <label htmlFor="confirmPassword" className='text-right text-black'>Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className='border-2 border-black text-black rounded-lg p-2'/>
      
    </div>

    </div>
    </div>
  )
}
