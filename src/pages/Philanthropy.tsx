import React from 'react';
import { Link } from 'react-router-dom';

const Philanthropy = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Philanthropy</h1>
          <p className="text-xl">
            Making a difference in our community through service and dedication
          </p>
        </div>
      </section>

      {/* What is Philanthropy Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What is Philanthropy for Us?</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              [Your content will go here describing what philanthropy means to your chapter]
            </p>
          </div>
        </div>
      </section>

      {/* Fall Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Fall</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About the Event</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                [Your content will go here describing the Scott Wood Classic event]
              </p>
              <Link
                to="/contact"
                className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Get Involved
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src=""
                alt="Fall"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Spring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About the Event</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Details.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Get Involved
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src=""
                alt="Spring"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Support Our Cause?</h2>
          <p className="text-xl mb-8">
            Join us in making a difference in our community. Together we can create lasting impact.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Philanthropy;
