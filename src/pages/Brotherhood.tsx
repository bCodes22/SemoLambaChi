import React from 'react';
import { Users, Star, Heart } from 'lucide-react';

const Brotherhood = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Brotherhood</h1>
          <p className="text-xl">
            Building lifelong bonds and fostering personal growth through shared experiences
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Brotherhood Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Unity</h3>
              <p className="text-gray-600">
                Standing together as one, supporting each other through life's journey
              </p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for greatness in academics, leadership, and character
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600">
                Giving back to our community and making a positive impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brotherhood Spotlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Brotherhood Spotlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Layton Karcher",
                year: "Senior",
                major: "Mcdonalds",
                image: "",
                quote: "Lambda Chi Alpha has given me lifelong friendships, invaluable leadership experience and Kyle Fischer"
              },
              {
                name: "Jack Ladig",
                year: "Senior",
                major: "Education",
                image: "",
                quote: "Being part of this brotherhood has helped me grow my muscles."
              },
              {
                name: "Zach Grossmann",
                year: "Senior",
                major: "Spirits",
                image: "",
                quote: "The Spirits are high with this chapter"
              }
            ].map((brother) => (
              <div key={brother.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={brother.image}
                  alt={brother.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{brother.name}</h3>
                  <p className="text-gray-600 mb-2">{brother.year} - {brother.major}</p>
                  <p className="text-gray-700 italic">"{brother.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brotherhood Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Brotherhood Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src=""
                alt="Brotherhood Event"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Social Events</h3>
              <p className="text-gray-600">
                From formal gatherings to casual hangouts, our brotherhood bonds grow stronger
                through shared experiences and memorable moments.
              </p>
            </div>
            <div>
              <img
                src=""
                alt="Community Service"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Community Service</h3>
              <p className="text-gray-600">
                Together we make a difference in our community through regular volunteer
                work and charitable initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brotherhood;
