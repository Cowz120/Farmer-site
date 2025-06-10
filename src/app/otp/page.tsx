import React from 'react'
import OTPVerification from './OtpComponent'

interface Props {
  searchParams: {
    email: string;
  };
}

const page = async ({searchParams}:Props) => {
  const {email} = await searchParams;
  return (
    <OTPVerification email={email}/>
  )
}

export default page