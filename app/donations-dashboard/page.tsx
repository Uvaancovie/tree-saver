'use client';

import { useState } from 'react';

interface Donation {
  id: number;
  name: string;
  email: string;
  amount: number;
  date: string;
}

export default function DonationDashboardPage() {
  const [donations] = useState<Donation[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', amount: 50, date: '2023-11-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', amount: 100, date: '2023-11-16' },
  ]);

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Donation Dashboard</h1>
      <div className="bg-gray-100 p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Donations: ${totalDonations}</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Amount ($)</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td className="border border-gray-300 px-4 py-2">{donation.name}</td>
                <td className="border border-gray-300 px-4 py-2">{donation.email}</td>
                <td className="border border-gray-300 px-4 py-2">{donation.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
