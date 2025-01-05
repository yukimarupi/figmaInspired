import React from 'react';


const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50 text-center relative">
      <div className="absolute inset-0">
        <img src="/images/Rectangle.png" alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">A Price To Suit Everyone</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <div className="text-4xl font-bold text-blue-800 mb-4">$40</div>
        <p className="text-gray-600 mb-8">UI Design Kit</p>
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full">Purchase Now</button>
      </div>
    </section>
  );
};

export default PricingSection;
