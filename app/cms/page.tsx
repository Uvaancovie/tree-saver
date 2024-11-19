'use client';

import { useState } from 'react';

interface CMSContent {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function CMSPage() {
  const [content, setContent] = useState<CMSContent[]>([
    { id: 1, title: 'Tree Planting 101', description: 'Learn about tree planting.', date: '2023-11-15' },
    { id: 2, title: 'Deforestation Awareness', description: 'Understand the impact of deforestation.', date: '2023-11-14' },
  ]);

  const [newContent, setNewContent] = useState({ title: '', description: '' });

  const addContent = () => {
    if (newContent.title && newContent.description) {
      setContent([
        ...content,
        { ...newContent, id: content.length + 1, date: new Date().toISOString().split('T')[0] },
      ]);
      setNewContent({ title: '', description: '' });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Content Management System</h1>
      {/* Add Content Form */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Content</h2>
        <input
          type="text"
          placeholder="Title"
          value={newContent.title}
          onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <textarea
          placeholder="Description"
          value={newContent.description}
          onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        ></textarea>
        <button
          onClick={addContent}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
        >
          Add Content
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {content.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-700">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
