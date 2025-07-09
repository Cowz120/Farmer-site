import {  Syringe } from 'lucide-react';
import React from 'react';

const TopCommponent = () => {
  const stats = [
    {Icon:<Syringe /> , label: 'Total Livestock', value: '3,000', unit: 'No' },
    {Icon:<Syringe /> , label: 'Total Livestock Sold', value: '1,200', unit: 'No' },
    { Icon:<Syringe /> ,label: 'Total Vaccinated Livestock', value: '320', unit: '' },
    {Icon:<Syringe />, label: 'Total Cost of Vaccination', value: '3,000,000', unit: 'KES' },
  ];

  return (
    <div className="w-fit h-fit mx-auto p-6">
     
      <div className=" flex gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-800">{stat.label}</h2>
            <p className="text-xl font-bold text-blue-600 mt-2">
              {stat.value} {stat.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCommponent;