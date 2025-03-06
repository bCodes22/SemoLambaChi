import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Our Chapter</h1>
          <p className="text-xl">
            Delta-Phi Zeta Chapter of Lambda Chi Alpha at Southeast Missouri State University
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To foster personal development and leadership through academic excellence,
                brotherhood, and service to others.
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Loyalty, duty, respect, service and stewardshi[, honor, integrity, and personal courage
                guide everything we do.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Our Brotherhood</h3>
              <p className="text-gray-600">
                A diverse community of men committed to excellence and lifelong friendship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://photos.app.goo.gl/YfHFV4H5MQqQ51FRA"
                alt="Chapter History"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-Very dark cyan - lime green.-600 mb-4">
                Founded in 1991, the Delta-Phi Zeta Chapter of Lambda Chi Alpha at
                Southeast Missouri State University has been creating brotherhood,
                academic excellence, and leadership for generations of men.
              </p>
              <p className="text-Very dark cyan - lime green.-600 mb-4">
                Our chapter has consistently been recognized for its achievements in
                academics, philanthropy, and campus involvement. We take pride in our
                rich history and continue to build upon the strong foundation laid by
                our founding fathers.
              </p>
              <p className="text-2E1A4B-600">
                Through the years, we have maintained our commitment to developing
                men of character who make lasting contributions to their communities
                and professions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Chapter Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Cole Douglas",
                position: "Chapter President",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
              },
              {
                name: "Layne Collier",
                position: "Vice President",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
              },
              {
                name: "Oliver Romero",
                position: "Treasurer",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80"
              }
            ].map((leader) => (
              <div key={leader.name} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-gray-600">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;