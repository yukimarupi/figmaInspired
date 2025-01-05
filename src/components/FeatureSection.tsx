import React from 'react';

const features = [
  {
    title: 'Light, Fast & Powerful',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/undraw_mention_6k5d.png',
  },
  {
    title: 'Responsive Design',
    description: 'Aenean commodo ligula eget dolor. Aenean massa.',
    image: '/images/undraw_social_influencer_sgsv.png',
  },
  {
    title: 'Customizable',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes.',
    image: '/images/undraw_happy_news_hxmt.png',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Light, Fast & Powerful</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <img src={feature.image} alt={feature.title} className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
