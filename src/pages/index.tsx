import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import MiddleSection from '../components/MiddleSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <MiddleSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Home;
