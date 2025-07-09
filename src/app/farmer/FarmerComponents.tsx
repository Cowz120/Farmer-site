 "use client";
 import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function ProfileCreation() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      dob: '',
      idtype: '',
      idNumber: '',
      idFront: null,
      idBack: null,
      portrait: null,
    },
    farming: {
      businessType: '',
      farmSize: '',
      farmDescription: '',
      businessName: '',
      coordinates: '',
      kycDocuments: null,
    },
    livestock: {
      nationality: '',
      regions: '',
      county: '',
      subCounty: '',
      ward: '',
      farmLocation: '',
      coordinates: '',
    },
  });

  const handleInputChange = (section: string, e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: { ...formData[section], [name]: value },
    });
  };

  const handleFileChange = (section: any, e: any) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [section]: { ...formData[section], [name]: files[0] },
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (step === 3) {
      // Final submission logic (e.g., API call)
      console.log('Final form data:', formData);
      // Redirect to a success page or reset form
      // router.push('/success');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      // Redirect to a previous page or home
      router.push('/');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="text-center font-bold text-lg mb-4">STEP 1 OF 3</div>
            <h2 className="text-2xl font-semibold text-center mb-2">Personal Information</h2>
            <p className="text-gray-600 text-center mb-6">
              Completing your profile will unlock all the features of the platform
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.personal.dob}
                  onChange={(e) => handleInputChange('personal', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Id Type" className="block text-sm font-medium text-gray-700">
                  Id Type
                </label>
                <select
                  id="idtype"
                  name="idtype"
                  value={formData.personal.idtype}
                  onChange={(e) => handleInputChange('personal', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Id Type</option>
                  <option value="nationalid">National ID</option>
                  <option value="passport">Passport</option>
                  
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                  ID Number
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.personal.idNumber}
                  onChange={(e) => handleInputChange('personal', e)}
                  placeholder="Enter your ID number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="idFront" className="block text-sm font-medium text-gray-700">
                  Upload ID (Front)
                </label>
                <input
                  type="file"
                  id="idFront"
                  name="idFront"
                  onChange={(e) => handleFileChange('personal', e)}
                  accept="image/*"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="idBack" className="block text-sm font-medium text-gray-700">
                  Upload ID (Back)
                </label>
                <input
                  type="file"
                  id="idBack"
                  name="idBack"
                  onChange={(e) => handleFileChange('personal', e)}
                  accept="image/*"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="portrait" className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"                  
                  onChange={(e) => handleFileChange('personal', e)}
                  accept="image/*"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="text-center font-bold text-lg mb-4">STEP 2 OF 3</div>
            <h2 className="text-2xl font-semibold text-center mb-2">Farm Information</h2>
            <p className="text-gray-600 text-center mb-6">
              Completing your profile will unlock all the features of the platform
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.farming.businessName}
                  onChange={(e) => handleInputChange('farming', e)}
                  placeholder="Enter business name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subCountry" className="block text-sm font-medium text-gray-700">
                  Business Type
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.farming.businessType}
                  onChange={(e) => handleInputChange('farming', e)}
                  placeholder="Enter business type"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="ward" className="block text-sm font-medium text-gray-700">
                  Farm Size
                </label>
                <input
                  type="text"
                  id="farmSize"
                  name="farmSize"
                  value={formData.farming.farmSize}
                  onChange={(e) => handleInputChange('farming', e)}
                  placeholder="Enter farm size in acres"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                  Farm Description
                </label>
                <input
                  type="text"
                  id="farmDescription"
                  name="farmDescription"
                  value={formData.farming.farmDescription}
                  onChange={(e) => handleInputChange('farming', e)}
                  placeholder="Enter Farm Description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="coordinates" className="block text-sm font-medium text-gray-700">
                  Capture Home Coordinates *
                </label>
                <input
                  type="text"
                  id="coordinates"
                  name="coordinates"
                  value={formData.farming.coordinates}
                  onChange={(e) => handleInputChange('farming', e)}
                  placeholder="Specify your village coordinates (e.g., lat, long)"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kycDocuments" className="block text-sm font-medium text-gray-700">
                  Upload KYC Documents
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <p className="text-sm text-gray-600">
                      Drag and drop or{' '}
                      <label
                        htmlFor="kycDocuments"
                        className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      >
                        Browse your file
                      </label>
                    </p>
                    <input
                      type="file"
                      id="kycDocuments"
                      name="kycDocuments"
                      onChange={(e) => handleFileChange('farming', e)}
                      accept=".pdf,.jpg,.png"
                      className="hidden"
                      required
                    />
                  </div> 
                </div>
              </div>*/}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="text-center font-bold text-lg mb-4">STEP 3 OF 3</div>
            <h2 className="text-2xl font-semibold text-center mb-2">Address Information</h2>
            <p className="text-gray-600 text-center mb-6">
              Completing your profile will unlock all the features of the platform
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="livestock" className="block text-sm font-medium text-gray-700">
                 Nationality
                </label>
                <select
                  id="nationality"
                  name="nationality"
                  value={formData.livestock.nationality}
                  onChange={(e) => handleInputChange('livestock', e)}
                  
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Nationality</option>
                  <option value="bi">Burundian</option>
                  <option value="ke">Kenyan</option>
                  <option value="rw">Rwandan</option>
                  <option value="ss">South Sudanese</option>
                  <option value="tz">Tanzanian</option>
                  <option value="ug">Ugandan</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
                  regions               </label>
                <select
                  id="regions"
                  name="regions"
                  value={formData.livestock.regions}
                  onChange={(e) => handleInputChange('livestock', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Region</option>
                  <option value="co">Coast Region</option>
                  <option value="na">Nairobi Region</option>
                  <option value="ce">Central Region</option>
                  <option value="rv">Rift Valley Region</option>
                  <option value="we">Western Region</option>
                  <option value="ny">Nyanza Region</option>
                  <option value="ea">Eastern Region</option>
                  <option value="ne">North Eastern Region</option>
                </select>
              </div>
              {/* <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="she"
                      checked={formData.livestock.gender === 'she'}
                      onChange={(e) => handleInputChange('livestock', e)}
                      className="form-radio"
                      required
                    />
                    <span className="ml-2">She</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="he"
                      checked={formData.livestock.gender === 'he'}
                      onChange={(e) => handleInputChange('livestock', e)}
                      className="form-radio"
                    />
                    <span className="ml-2">He</span>
                  </label>
                </div>
              </div> */}
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  County
                </label>
                <select
                  id="county"
                  name="county"
                  value={formData.livestock.county}
                  onChange={(e) => handleInputChange('livestock', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select  County</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                 Sub County
                </label>
                <select
                  id="subCounty"
                  name="subCounty"
                  value={formData.livestock.subCounty}
                  onChange={(e) => handleInputChange('livestock', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Sub County</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Ward
                </label>
               <select
                  id="ward"
                  name="ward"
                  value={formData.livestock.ward}
                  onChange={(e) => handleInputChange('livestock', e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Ward</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="frontMedia" className="block text-sm font-medium text-gray-700">
                  Farm Location
                </label>
                <input
                  type="text"
                  id="farmLocation"
                  name="farmLocation"
                  value={formData.livestock.farmLocation} 
                  onChange={(e) => handleInputChange('livestock', e)}
                  placeholder="Enter farm location"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                 
              </div>
              <div className="mb-4">
                <label htmlFor="backMedia" className="block text-sm font-medium text-gray-700">
                 Coordinates 
                </label>
                <input
                  type="text"
                  id="coordinates"
                  name="coordinates"
                  value={formData.livestock.coordinates}
                  onChange={(e) => handleFileChange('livestock', e)}
                  placeholder="Enter coordinates"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Complete
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Profile Creation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {renderStep()}
        </div>
      </div>
    </>
  );
}