"use client";
// components/TransactionList.tsx
import { useState } from 'react';

interface Transaction {
  id: number;
  title: string;
  amount: string;
  date: string;
  status: string;
}

const transactions: Transaction[] = [
  { id: 1, title: 'Sell Cow 001', amount: '+20,000 KES', date: 'September 15, 2024', status: 'Completed' },
  { id: 2, title: 'Sell Chicken Batc', amount: '+20,000 KES', date: 'September 15, 2024', status: 'Completed' },
  { id: 3, title: 'Buy Feed', amount: '-5000 KES', date: 'September 15, 2024', status: 'Completed' },
  { id: 4, title: 'Sell Chicken Batc', amount: '+20,000 KES', date: 'September 15, 2024', status: 'Completed' },
  { id: 5, title: 'Buy Feed', amount: '-5000 KES', date: 'September 15, 2024', status: 'Completed' },
  { id: 6, title: 'Sell Chicken Batc', amount: '+20,000 KES', date: 'September 15, 2024', status: 'Completed' },
];

export default function TransactionList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleTransactions, setVisibleTransactions] = useState(6);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleTransactions((prev) => prev + 6);
  };

  return (
    <div className="max-w-2xl mx-auto border bg-white rounded-lg p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="space-y-4">
        {filteredTransactions.slice(0, visibleTransactions).map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold">{transaction.title}</h2>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div className="text-right">
              <p
                className={`text-lg font-semibold ${
                  transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.amount}
              </p>
              <p className="text-sm text-gray-500">{transaction.status}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleTransactions < filteredTransactions.length && (
        <button
          onClick={handleViewMore}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          View More
        </button>
      )}
    </div>
  );
}