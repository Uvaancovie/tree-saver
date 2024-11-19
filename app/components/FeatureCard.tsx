'use client';

import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
      <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
      <h2 className="text-lg font-semibold text-green-700">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
