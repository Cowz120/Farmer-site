// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livestock Distribution',
  description: 'Livestock distribution by value chain, breed, and gender',
};

interface LivestockData {
  valueChain: string;
  gender: string;
  breedA: number;
  breedB: number;
}

function Test() {
  const livestockData: LivestockData[] = [
    {
      valueChain: 'Meat Livestock',
      gender: 'Male',
      breedA: 120,
      breedB: 110,
    },
    {
      valueChain: 'Dairy Livestock',
      gender: 'Female',
      breedA: 85,
      breedB: 95,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Livestock Distribution
        </h1>
        <p className="text-lg text-center mb-6">
          Summary of livestock by value chain, breed, and gender
        </p>
        <div className="w-full overflow-x-auto">
          <table className="w-4/5 max-w-4xl mx-auto my-8 text-base shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-green-500 text-white font-bold">
                <th className="py-3 px-4 text-center border border-gray-200">Value Chain</th>
                <th className="py-3 px-4 text-center border border-gray-200">Gender</th>
                <th className="py-3 px-4 text-center border border-gray-200">Breed A</th>
                <th className="py-3 px-4 text-center border border-gray-200">Breed B</th>
              </tr>
            </thead>
            <tbody>
              {livestockData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                  } hover:bg-gray-200 transition-colors`}
                >
                  <td className="py-3 px-4 text-center border border-gray-200">{row.valueChain}</td>
                  <td className="py-3 px-4 text-center border border-gray-200">{row.gender}</td>
                  <td className="py-3 px-4 text-center border border-gray-200">{row.breedA}</td>
                  <td className="py-3 px-4 text-center border border-gray-200">{row.breedB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
export default Test;