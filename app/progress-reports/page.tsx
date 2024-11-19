'use client';

import React from 'react';

interface ProgressReport {
  location: string;
  treesPlanted: number;
}

const dummyReports: ProgressReport[] = [
  { location: 'Location A', treesPlanted: 50 },
  { location: 'Location B', treesPlanted: 75 },
  { location: 'Location C', treesPlanted: 30 },
];

export default function ProgressReportsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Progress Reports</h1>

      <h2 className="text-lg font-semibold text-gray-700 mb-4">Tree Planting Progress</h2>
      <div className="space-y-4">
        {dummyReports.map((report) => (
          <div key={report.location} className="space-y-2">
            <p className="font-semibold text-gray-700">{report.location}</p>
            <div className="bg-gray-200 h-6 rounded">
              <div
                className="bg-green-700 h-6 rounded"
                style={{ width: `${report.treesPlanted}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{report.treesPlanted} trees planted</p>
          </div>
        ))}
      </div>
    </div>
  );
}
