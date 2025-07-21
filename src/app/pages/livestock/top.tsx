"use client";
import { useRouter } from 'next/navigation';
import AddLivestockDialog from './AddStock/AddLivestockDialog';
import { useState } from 'react';

function AnimalStats() {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { label: 'Cows', value: '2,300' },
    { label: 'Chickens', value: '100' },
    { label: 'Goats', value: '900' },
    { label: 'Male', value: '1,300' },
    { label: 'Female', value: '1,200' },
    { label: 'Pregnant', value: '500' },
  ];

  const handleAddStock = () => {
    setIsOpen(true);
  };
  console.log(isOpen);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">LIVESTOCK</h1>
        <button
          onClick={handleAddStock}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add New Stock
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-sm"
          >
            <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <AddLivestockDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
export default AnimalStats;