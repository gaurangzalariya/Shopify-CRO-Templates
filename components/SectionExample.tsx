import React from 'react';

const SectionExample: React.FC = () => {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shopify Section Example</h2>
            <p className="text-gray-700 mb-4">
                This is an example of a Shopify section styled with Tailwind CSS. 
                It demonstrates how to create high-converting sections using best practices.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
            </button>
        </section>
    );
};

export default SectionExample;