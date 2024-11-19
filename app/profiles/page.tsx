'use client';

import { useState } from 'react';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: 'Supporter' | 'Volunteer';
  bio: string;
}

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<UserProfile[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Volunteer',
      bio: 'Passionate about tree planting and environmental conservation.',
    },
  ]);

  const [newProfile, setNewProfile] = useState({
    name: '',
    email: '',
    role: 'Supporter',
    bio: '',
  });

  const addProfile = () => {
    if (newProfile.name && newProfile.email && newProfile.bio) {
      setProfiles([
        ...profiles,
        { ...newProfile, id: profiles.length + 1 } as UserProfile,
      ]);
      setNewProfile({ name: '', email: '', role: 'Supporter', bio: '' });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">User Profiles</h1>

      {/* Add Profile Form */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Create Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        />
        <select
          value={newProfile.role}
          onChange={(e) => setNewProfile({ ...newProfile, role: e.target.value as 'Supporter' | 'Volunteer' })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        >
          <option value="Supporter">Supporter</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <textarea
          placeholder="Short Bio"
          value={newProfile.bio}
          onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
          className="block w-full mb-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
        ></textarea>
        <button
          onClick={addProfile}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
        >
          Add Profile
        </button>
      </div>

      {/* Profiles List */}
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold text-green-700">{profile.name}</h2>
            <p className="text-gray-600">{profile.role}</p>
            <p className="text-gray-600">{profile.email}</p>
            <p className="text-sm text-gray-400">{profile.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
