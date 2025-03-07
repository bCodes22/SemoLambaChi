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
            {[
              "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
              "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80",
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
              "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
              "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
              "https://images.unsplash.com/photo-1523580785273-922f78ac3018?w=800&q=80",
            ].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Chapter Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;