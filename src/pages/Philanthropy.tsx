import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Trophy } from 'lucide-react';

const Philanthropy = () => {
  const philanthropyEvents = [
    {
      id: 1,
      title: "Annual Food Drive",
      date: "Fall 2023",
      impact: "10,000 meals donated",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      description: "Our chapter's signature food drive event supporting local food banks and families in need."
    },
    {
      id: 2,
      title: "Community Clean-Up",
      date: "Spring 2023",
      impact: "200 volunteer hours",
      image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80",
      description: "Brothers worked together to clean and beautify local parks and community spaces."
    },
    {
      id: 3,
      title: "Charity Basketball Tournament",
      date: "Summer 2023",
      impact: "$5,000 raised",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      description: "Annual basketball tournament raising funds for children's education initiatives."
    }
  ];

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

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-gray-600">Meals Donated Annually</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-2xl font-bold mb-2">1,000+</h3>
              <p className="text-gray-600">Volunteer Hours</p>
            </div>
            <div className="text-center p-6">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-2xl font-bold mb-2">$10,000+</h3>
              <p className="text-gray-600">Raised for Charity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Philanthropy Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philanthropyEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-purple-700 mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-700 font-semibold">Impact: {event.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Philanthropy Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
              "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=600&q=80",
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
              "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
            ].map((image, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={image}
                  alt={`Philanthropy Event ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
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