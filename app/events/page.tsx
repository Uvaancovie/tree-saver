'use client';

import { useState } from 'react';

interface Event {
  id: number;
  eventName: string;
  date: string;
  location: string;
  registered: boolean;
}

export default function EventManagementPage() {
  const [events, setEvents] = useState<Event[]>([
    { id: 1, eventName: 'Tree Planting at Park A', date: '2023-11-20', location: 'Park A', registered: false },
    { id: 2, eventName: 'Clean-Up Drive at Park B', date: '2023-11-22', location: 'Park B', registered: true },
  ]);

  const toggleRegistration = (id: number) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, registered: !event.registered } : event
      )
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Event Management</h1>

      <h2 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Events</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Event Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border border-gray-300 px-4 py-2">{event.eventName}</td>
              <td className="border border-gray-300 px-4 py-2">{event.date}</td>
              <td className="border border-gray-300 px-4 py-2">{event.location}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => toggleRegistration(event.id)}
                  className={`px-4 py-2 rounded ${
                    event.registered
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {event.registered ? 'Unregister' : 'Register'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
