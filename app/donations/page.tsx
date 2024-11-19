'use client';

import { useState } from 'react';

export default function DonationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    if (name && email && amount) {
      alert(`Thank you for your donation of $${amount}, ${name}!`);
      setName('');
      setEmail('');
      setAmount('');
    } else {
      alert('Please fill in all fields to proceed with the donation.');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Make a Donation</h1>
      <div className="bg-gray-100 p-6 rounded shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="amount">
            Donation Amount ($)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
            placeholder="Enter the amount"
          />
        </div>
        <button
          onClick={handleDonate}
          className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
