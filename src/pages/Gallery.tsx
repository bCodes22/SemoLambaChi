import React from 'react';

const Gallery = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Chapter Gallery</h1>
          <p className="text-xl">
            Capturing moments and memories of our brotherhood
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example grid item with placeholder image */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full bg-gray-300"></div> {/* Placeholder for image */}
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full bg-gray-300"></div> {/* Placeholder for image */}
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full bg-gray-300"></div> {/* Placeholder for image */}
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full bg-gray-300"></div> {/* Placeholder for image */}
            </div>

            {/* You can add more image placeholders here as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
