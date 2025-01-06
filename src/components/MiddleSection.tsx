import React from 'react';
import Image from 'next/image';

const middleFeatures = [
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    image: '/images/undraw_happy_news_hxmt.png',
  },
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    image: '/images/undraw_social_influencer_sgsv.png',
  },
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    image: '/images/undraw_mention_6k5d.png',
  },
];

const MiddleSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {middleFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 shadow-md rounded-lg">
              <Image
                src={feature.image}
                alt={feature.title}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
