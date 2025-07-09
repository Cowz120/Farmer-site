"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function SecuritySettings() {
  const [email] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');

  const changePassword = async () => {
    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, currentPassword, newPassword }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('Error changing password');
    }
  };

  const enable2FA = async () => {
    try {
      const response = await fetch('/api/2fa/enable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('Error enabling 2FA');
    }
  };

  const verify2FA = async () => {
    try {
      const response = await fetch('/api/2fa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('Error verifying 2FA');
    }
  };

  return (
    <div className='w-fit h-fit mx-16 my-10 '>
      <Head>
        <title>Security Settings</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Security Settings</h1>

        {/* Password Change */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Change Password</h2>
          <input
            type="email"
            value={email}
            className="w-full p-2 mb-2 border rounded bg-gray-100"
          />
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={changePassword}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Change Password
          </button>
        </div>

        {/* 2FA Setup */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Two-Factor Authentication</h2>
          <input
            type="text"
            value={phone}
            className="w-full p-2 mb-2 border rounded bg-gray-100"
          />
          <button
            onClick={enable2FA}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mb-2"
          >
            Enable 2FA
          </button>
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={verify2FA}
            className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
          >
            Verify 2FA
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}