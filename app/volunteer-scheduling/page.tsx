'use client';

import { useState } from 'react';

interface Task {
  id: number;
  taskName: string;
  date: string;
  status: string;
}

export default function VolunteerSchedulingPage() {
  const [tasks] = useState<Task[]>([
    { id: 1, taskName: 'Tree Planting at Park A', date: '2023-11-20', status: 'Scheduled' },
    { id: 2, taskName: 'Clean-Up Drive at Park B', date: '2023-11-22', status: 'Completed' },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Volunteer Scheduling</h1>

      <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Tasks</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Task Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-300 px-4 py-2">{task.taskName}</td>
              <td className="border border-gray-300 px-4 py-2">{task.date}</td>
              <td className="border border-gray-300 px-4 py-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
