'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateOtpService, validateOtpService } from './otpService';
import { useRouter } from 'next/navigation';

interface Props {
  email: string;
}

interface UserProfile {
  isComplete: boolean;
}

const OTPVerification = ({ email }: Props) => {
  const [otp, setOtp] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(176); // 2:56 in seconds
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = async () => {
    setError('');
    setSuccess('');

    try {
      await generateOtpService(email);
      setTimeRemaining(180);
      setCanResend(false);
      setSuccess('New OTP sent to your email!');
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP. Please try again.');
    }
  };

  const checkUserProfileAndRoute = async () => {
    try {
      // Simulated API call to check user profile status
      // Replace with actual API call to your backend
      const response = await fetch('/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary auth headers
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile status');
      }

      const profileData: UserProfile = await response.json();
      
      // Route based on profile completion status
      if (profileData.isComplete) {
        router.push('/dashboard');
      } else {
        router.push('/profile');
      }
    } catch (err: any) {
      // Fallback to profile creation if profile check fails
      setError(err.message || 'Error checking profile status');
      router.push('/profile');
    }
  };

  const handleVerify = async () => {
    if (!otp || otp.length < 6 || isLoading) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await validateOtpService({ email, code: otp });
      setSuccess('OTP verified successfully!');
      
      // Check profile status and route accordingly
      await checkUserProfileAndRoute();
      
    } catch (err: any) {
      setError(err.message || 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Enter OTP To Verify</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm items-center text-gray-600">
            Please enter the verification code just sent to your email
          </p>
          {error && (
            <p className="text-center text-sm text-red-600">{error}</p>
          )}
          {success && (
            <p className="text-center text-sm text-green-600">{success}</p>
          )}
          <div className="space-y-2 items-center">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-center text-sm text-gray-600">
              Time Remaining: {formatTime(timeRemaining)}
            </p>
            <p
              className={`text-center text-sm ${
                canResend && !isLoading
                  ? 'text-blue-600 cursor-pointer hover:underline'
                  : 'text-gray-400'
              }`}
              onClick={handleResend}
            >
              Didn’t get code? Send again
            </p>
          </div>
          <Button
            className="w-full"
            onClick={handleVerify}
            disabled={!otp || otp.length < 6 || isLoading}
          >
            {isLoading ? 'Processing...' : 'Verify'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerification;