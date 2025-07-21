"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ProfileProps {
  image: string;
  name: string;
  email: string;
  code: string;
  phone: string;
  language: string;
  country: string;
  timeZone: string;
}

function ProfilePage({ name, email, phone, code, language, country, timeZone }: ProfileProps) {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePic = () => {
    setProfilePic(null);
  };

  return (
      <div className="flex flex-col flex-items-center justify-center bg-white shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Profile Settings</h1>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24 rounded-full bg-amber-200 overflow-hidden  mb-4">
            {profilePic ? (
              <Image
                src={profilePic}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center ">
                Add Image
              </div>
            )}
          </div>
          <div className="flex space-x-4">
            <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
              Change Profile Picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
            <button
              onClick={handleDeletePic}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete Picture
            </button>
          </div>
        </div>

        {/* Account Creation Prompt */}
        <p className="text-center text-gray-600 mb-6">
          Please create an account to access Mula services
        </p>

        {/* Profile Information */}
        <div className="space-y-4">
          <div className='flex gap-4'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex">
              <select
                value={code}
                
                className="mt-1 w-20 p-2 border border-gray-300 rounded-l bg-gray-100"
              >
                <option value="">Select Code</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+1">+1 (CA)</option>
                <option value="+254">+254 (KE)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                value={phone}
                
                className="mt-1 flex-1 p-2 border border-gray-300 rounded-r bg-gray-100"
              />
            </div>
          </div>
          </div>
          <div className='flex  w-full gap-2'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              value={language}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded bg-gray-100"
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="sw">Swahili</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              value={country}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded bg-gray-100"
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="KE">Kenya</option>
              {/* Add more countries as needed */}
            </select>
          </div>
         

          <div>
            <label className="block text-sm font-medium text-gray-700">Time Zone</label>
            <select
              value={timeZone}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded bg-gray-100"
            >
              <option value="">Select a timezone</option>
              <option value="Africa/Bangui">Central Africa Time (GMT +2)</option>
              <option value="America/New_York">America/New_York (EST)</option>
              <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
              <option value="Europe/London">Europe/London (GMT)</option>
              <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
              {/* Add more timezones as needed */}
            </select>
            
          </div>
        </div>
         </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Update Settings
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
  );
}

export default ProfilePage;