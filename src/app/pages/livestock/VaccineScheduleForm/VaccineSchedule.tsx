"use client";
import { useState } from 'react';

interface VaccineScheduleProps {
  closeDialog: () => void;
}

export default function VaccineSchedule({ closeDialog }: VaccineScheduleProps) {
  const [formData, setFormData] = useState({
    livestockType: '',
    animalName: '',
    age: '',
    weight: '',
    gender: '',
    vaccineType: '',
    vaccineDate: '',
    vaccineTime: '',
    notification: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
    closeDialog(); // Close the dialog on submit
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        notification: checked
          ? [...prev.notification, value]
          : prev.notification.filter(item => item !== value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Livestock Type</label>
        <select
          name="livestockType"
          value={formData.livestockType}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select livestock</option>
          <option value="cattle">Cattle</option>
          <option value="sheep">Sheep</option>
          <option value="goat">Goat</option>
          <option value="pig">Pig</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Animal Name</label>
        <input
          type="text"
          name="animalName"
          value={formData.animalName}
          onChange={handleInputChange}
          placeholder="Enter Name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter Age"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Enter Weight"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="mt-2 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">She</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">He</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Vaccine Type</label>
        <select
          name="vaccineType"
          value={formData.vaccineType}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Vaccine type</option>
          <option value="anthrax">Anthrax</option>
          <option value="foot-and-mouth">Foot and Mouth</option>
          <option value="rabies">Rabies</option>
          <option value="brucellosis">Brucellosis</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Vaccine</label>
        <input
          type="date"
          name="vaccineDate"
          value={formData.vaccineDate}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          name="vaccineTime"
          value={formData.vaccineTime}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notification Reminder</label>
        <div className="mt-2 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="notification"
              value="email"
              checked={formData.notification.includes('email')}
              onChange={handleInputChange}
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">Email</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              name="notification"
              value="sms"
              checked={formData.notification.includes('sms')}
              onChange={handleInputChange}
              className="form-checkbox h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">SMS</span>
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={closeDialog}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Create Schedule
        </button>
      </div>
    </form>
  );
}