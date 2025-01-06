import React from 'react';
import Image from 'next/image';

const middleFeatures = [
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: '/images/undraw_happy_news_hxmt.png',
  },
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: '/images/undraw_social_influencer_sgsv.png',
  },
  {
    title: 'Light, Fast & Powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: '/images/undraw_mention_6k5d.png',
  },
];

const MiddleSection: React.FC = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {middleFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
            >
              {/* 画像部分（左側固定） */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
              </div>

              {/* テキスト部分（右側固定） */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {index === 2 && (
                  <button className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900">
                    Purchase Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default MiddleSection;