import React from 'react';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Introduce Your Product Quickly & Effectively</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Purchase UI Kit</button>
            <button className="border border-blue-800 text-blue-800 px-6 py-3 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2">
        <Image
            src="/images/Group.png"
            alt="Group Image"
            width={500} // 必要に応じて変更
            height={500} // 必要に応じて変更
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
