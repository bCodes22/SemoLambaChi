import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Rush Week",
      date: "March 15-19, 2024",
      time: "Various Times",
      location: "Campus Center",
      description: "Join us for a week of events to learn more about Lambda Chi Alpha and meet our brothers.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
    },
    {
      id: 2,
      title: "Alumni Networking Night",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "University Union",
      description: "Connect with Lambda Chi Alpha alumni and learn about career opportunities.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&q=80"
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "April 20, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Cape Girardeau Community Center",
      description: "Join us for our monthly community service event helping local organizations.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Chapter Events</h1>
          <p className="text-xl">
            Stay connected with our brotherhood through various events and activities
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Calendar</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-gray-600">
              Interactive calendar component will be implemented here
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
              "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
            ].map((image, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;