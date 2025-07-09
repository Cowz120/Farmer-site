"use server";
export const generateOtpService = async (email:string) => {
    console.log("data on server",email);
    try {
       const response = await fetch('http://41.80.34.214:9098/api/auth/generate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // if (!response.ok) {
      //   throw new Error('Failed to resend OTP');
      // }

      const data = await response.json();
      console.log("data from the server",data);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const validateOtpService = async (otpContent:{email:string, code:string}) => {
    console.log("data on server",otpContent);
    try {
       const response = await fetch('http://41.80.34.214:9098/api/auth/validate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpContent),
      });

    //   if (!response.ok) {
    //     throw new Error('Failed to resend OTP');
    //   }

      const data = await response.json();
      console.log("data from the server",data);
    } catch (error) {
        console.log("the error======>",error);
        throw error;
    }
}
 