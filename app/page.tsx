'use client';

import FeatureCard from './components/FeatureCard';

const features = [
  {
    title: 'Tree Planting Management',
    description: 'Track the number of trees planted, their species, and locations in real-time.',
    icon: '/icons/tree.svg',
  },
  {
    title: 'Volunteer Scheduling',
    description: 'Allow volunteers to register for events and assign tasks to ensure smooth operations.',
    icon: '/icons/volunteer.svg',
  },
  {
    title: 'Donation Management',
    description: 'Secure online donation processing with automated receipts for transparency.',
    icon: '/icons/donation.svg',
  },
  {
    title: 'Progress Reports',
    description: 'Generate visual reports showcasing the progress of tree-planting efforts.',
    icon: '/icons/reports.svg',
  },
  {
    title: 'Event Management',
    description: 'Create and manage tree-planting events with seamless volunteer registration.',
    icon: '/icons/events.svg',
  },
  {
    title: 'User Profiles',
    description: 'Enable supporters and volunteers to create and manage their profiles.',
    icon: '/icons/profile.svg',
  },
  {
    title: 'Notification System',
    description: 'Send automated notifications to users about events and progress updates.',
    icon: '/icons/notifications.svg',
  },
  {
    title: 'Donation Dashboard',
    description: 'Admins can view real-time donation summaries and donor details.',
    icon: '/icons/dashboard.svg',
  },
  {
    title: 'Impact Tracking',
    description: 'Monitor the impact of tree-planting efforts on conservation goals.',
    icon: '/icons/impact.svg',
  },
  {
    title: 'Content Management System',
    description: 'Admins can update educational material and recent news for better engagement.',
    icon: '/icons/cms.svg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-700">Welcome to TreeSaver CRM</h1>
        <p className="mt-4 text-lg text-gray-600">
          A comprehensive platform to manage tree-planting efforts, volunteers, donations, and more.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </main>
    </div>
  );
}
