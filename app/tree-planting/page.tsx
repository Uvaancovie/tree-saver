'use client';

import { useState } from 'react';

interface Tree {
  id: number;
  species: string;
  location: string;
  date: string;
}

export default function TreePlantingPage() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const addTree = () => {
    if (species && location && date) {
      const newTree: Tree = {
        id: trees.length + 1,
        species,
        location,
        date,
      };
      setTrees([...trees, newTree]);
      setSpecies('');
      setLocation('');
      setDate('');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Tree Planting Management</h1>

      {/* Form to add trees */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Add Tree Planting Data</h2>
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <button
          onClick={addTree}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
        >
          Add Tree
        </button>
      </div>

      {/* Tree List */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Tree Planting Records</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Species</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {trees.map((tree) => (
            <tr key={tree.id}>
              <td className="border border-gray-300 px-4 py-2">{tree.id}</td>
              <td className="border border-gray-300 px-4 py-2">{tree.species}</td>
              <td className="border border-gray-300 px-4 py-2">{tree.location}</td>
              <td className="border border-gray-300 px-4 py-2">{tree.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
