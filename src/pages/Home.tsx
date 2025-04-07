import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, GraduationCap } from 'lucide-react';
import BackImage from "../Lambda/Background.jpg";
import InstaPost1 from '../Lambda/Instapost.jpeg';
import InstaPost2 from '../Lambda/Instapost2.jpg';
import InstaPost3 from '../Lambda/Instapost3.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to Lambda Chi Alpha
            </h1>
            <p className="text-xl mb-8">
              Delta-Phi Zeta Chapter at Southeast Missouri State University
            </p>
            <Link
              to="/rush"
              className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Join Our Brotherhood
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Chapter Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Chapter Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1523580846011-d3a5bc25702b' : i === 2 ? '1523580494863-6f3031224c94' : '1523580785273-922f78ac3018'}?w=800&q=80`}
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Chapter Achievement {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Highlighting our recent accomplishments and community impact.
                  </p>
                  <Link
                    to="/news"
                    className="text-purple-700 hover:text-purple-600 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Follow Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { url: "https://www.instagram.com/semolambdachi", img: InstaPost1 },
              { url: "https://www.instagram.com/semolambdachi", img: InstaPost2 },
              { url: "https://www.instagram.com/semolambdachi", img: InstaPost3 }
            ].map((post, index) => (
              <div key={index}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={post.img} 
                    alt={`Instagram Post ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/semolambdachi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-700 hover:text-purple-600 font-semibold"
            >
              Follow us on Instagram
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
