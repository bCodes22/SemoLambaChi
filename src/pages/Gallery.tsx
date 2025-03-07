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
            {/* Add your images here using this template */}
            {/* Example:
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/path/to/your/image.jpg"
                alt="Event description"
                className="w-full h-full object-cover"
              />
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
