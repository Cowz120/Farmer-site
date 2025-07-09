'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditBusinessProfile() {
  const router = useRouter();

  // Initial form state based on provided details
  const [formData, setFormData] = useState({
    businessName: '',
    country: '',
    city: '',
    industry: '',
    customerType: '',
    role: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/business-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Profile updated successfully!');
        router.push('/business-profile');
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      toast.error('An error occurred while updating profile');
    }
  };

  // Handle back navigation
  const handleBack = () => {
    router.push('/business-profile');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Update Business Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            placeholder='business name'
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          > 
           <option value="">Select county</option>
           <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Burundi">Burundi</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="South Africa">South Africa</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Somalia">Somalia</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Comoros">Comoros</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Réunion">Réunion</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Ascension Island">Ascension Island</option>
            <option value="Tristan da Cunha">Tristan da Cunha</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
           
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          > 
           <option value="">Select city</option>
           <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Kitale">Kitale</option>
            <option value="Kampala">Kampala</option>
            </select>
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          > 
          <option value="">Select industry</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="customerType" className="block text-sm font-medium text-gray-700">
            Customer Type
          </label>
          <select
            id="customerType"
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select customer type</option>
            <option value="Individual">Individual</option>
            <option value="Business">Business</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select role</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}