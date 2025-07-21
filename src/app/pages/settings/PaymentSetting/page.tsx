'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentMethods() {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Settings updated');
      router.push('/success');
    } catch (err) {
      setError('Failed to update settings. Please try again.');
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className="w-fit h-screen bg-white flex flex-col text-black p-10  ">
      <h2 className="text-lg font-semibold mb-3 text-gray-400">Payment Methods</h2>
      <div className="bg-white text-black p-4  space-y-4 flex-1">
        {error && <div className="text-red-500 text-sm">{error}</div>}
        
        <section>
          <h3 className="text-md font-medium mb-1">Account Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Name</label>
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Account Number</label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-20">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-28">
                <label className="block text-sm font-medium text-gray-700">Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-md font-medium mb-1">M-PESA Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-1.5 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Update settings
          </button>
        </div>
      </div>
    </div>
  );
}