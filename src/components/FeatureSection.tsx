import React from 'react';
import Image from 'next/image';


const features = [
  {
    title: 'Title Goes Here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    icon: '/images/icon/Icon.png',  },
  {
    title: 'Title Goes Here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
    icon: '/images/icon/Icon.png', // 修正: 正しいパスを指定
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* 左側のテキスト */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Light, Fast & Powerful</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div>
                    <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側の画像 */}
          <div className="md:w-1/2">
            <Image
              src="/images/undraw_mobile_login_ikmv.png"
              alt="Mobile Login Illustration"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
