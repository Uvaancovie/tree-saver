'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Tree Planting', href: '/tree-planting' },
    { name: 'Volunteer Scheduling', href: '/volunteer-scheduling' },
    { name: 'Donations', href: '/donations' },
    { name: 'Progress Reports', href: '/progress-reports' },
    { name: 'Event Management', href: '/events' },
    { name: 'User Profiles', href: '/profiles' },
    { name: 'Notifications', href: '/notifications' },
    { name: 'Donation Dashboard', href: '/donations-dashboard' },
    { name: 'Impact Tracking', href: '/impact-tracking' },
    { name: 'CMS', href: '/cms' },
  ];

  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-lg font-bold">TreeSaver</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:bg-green-600 px-3 py-2 rounded-md"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-green-800">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md hover:bg-green-600"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
