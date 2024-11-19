'use client';

import { useState } from 'react';

interface ImpactData {
  id: number;
  location: string;
  species: string;
  count: number;
  date: string;
}

export default function ImpactTrackingPage() {
  const [impactData] = useState<ImpactData[]>([
    { id: 1, location: 'Amazon Rainforest', species: 'Oak', count: 500, date: '2023-11-15' },
    { id: 2, location: 'Central Park', species: 'Maple', count: 300, date: '2023-11-14' },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Impact Tracking</h1>
      <div className="space-y-4">
        {impactData.map((data) => (
          <div key={data.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-700">{data.location}</h2>
            <p className="text-gray-600">Species: {data.species}</p>
            <p className="text-gray-600">Count: {data.count}</p>
            <p className="text-sm text-gray-400">Date: {data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
