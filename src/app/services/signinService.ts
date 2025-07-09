"use server";
export const signinService = async (signinContent:{email:string ,password:string}) => {
    console.log("data on server",signinContent);
    try {
       const response = await fetch('http://41.80.34.214:9098/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinContent ),
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
