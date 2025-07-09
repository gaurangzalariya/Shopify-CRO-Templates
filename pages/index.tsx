import React from 'react';
import SectionExample from '../components/SectionExample';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Shopify Tailwind Showcase</h1>
      <p className="text-lg text-center mb-8">
        Explore high-converting Shopify sections and templates built with Tailwind CSS and CRO best practices.
      </p>
      <SectionExample />
    </div>
  );
};

export default Home;