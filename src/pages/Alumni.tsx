import React from 'react';
import { Users, Building, Gift } from 'lucide-react';

const Alumni = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Alumni Network</h1>
          <p className="text-xl">
            Staying connected with our brotherhood beyond graduation
          </p>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">
                Connect with brothers across different industries and locations
              </p>
            </div>
            <div className="text-center p-6">
              <Building className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">
                Exclusive access to alumni events and chapter gatherings
              </p>
            </div>
            <div className="text-center p-6">
              <Gift className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Giving Back</h3>
              <p className="text-gray-600">
                Opportunities to mentor and support current chapter members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Alumni Spotlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas Anderson",
                year: "Class of 2015",
                position: "Senior Software Engineer at Google",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
                quote: "The leadership skills I developed in Lambda Chi Alpha were instrumental in my career success."
              },
              {
                name: "William Parker",
                year: "Class of 2010",
                position: "Managing Director at Goldman Sachs",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
                quote: "The network I built through our fraternity opened doors throughout my career."
              },
              {
                name: "Michael Zhang",
                year: "Class of 2018",
                position: "Startup Founder",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
                quote: "The entrepreneurial spirit I developed as chapter president inspired me to start my own company."
              }
            ].map((alumni) => (
              <div key={alumni.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
                  <p className="text-gray-600 mb-2">{alumni.year}</p>
                  <p className="text-purple-700 mb-4">{alumni.position}</p>
                  <p className="text-gray-700 italic">"{alumni.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Involved</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ways to Connect</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
                    Join our Alumni Association
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
                    Attend Alumni Events
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
                    Mentor Current Members
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
                    Support Chapter Initiatives
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Update Your Information</h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded transition-colors"
                  >
                    Stay Connected
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;