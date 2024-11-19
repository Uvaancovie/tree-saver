'use client';

import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
}

export default function NotificationsPage() {
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Upcoming Tree Planting Event',
      message: 'Join us for a tree-planting event on November 20th at Central Park!',
      date: '2023-11-15',
    },
    {
      id: 2,
      title: 'Donation Update',
      message: 'Your recent donation helped plant 50 new trees in the Amazon rainforest.',
      date: '2023-11-14',
    },
    {
      id: 3,
      title: 'Progress Update',
      message: 'We have planted 1,000 trees this month! Thank you for your support.',
      date: '2023-11-13',
    },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-green-700">{notification.title}</h2>
            <p className="text-gray-600 mt-2">{notification.message}</p>
            <p className="text-sm text-gray-400 mt-1">{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
