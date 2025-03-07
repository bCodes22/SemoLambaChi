import React, { useState } from 'react';

// Import your local images
// Example structure - replace with your actual images
const imageGallery = {
  brotherhood: [
    // Add your brotherhood images here
    // Example:
    // {
    //   url: "/images/brotherhood/event1.jpg",
    //   caption: "Brotherhood Event 2024"
    // }
  ],
  philanthropy: [
    // Add your philanthropy images here
  ],
  social: [
    // Add your social event images here
  ],
  recruitment: [
    // Add your recruitment images here
  ]
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('brotherhood');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'brotherhood', name: 'Brotherhood' },
    { id: 'philanthropy', name: 'Philanthropy' },
    { id: 'social', name: 'Social Events' },
    { id: 'recruitment', name: 'Recruitment' }
  ];

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

      {/* Category Selection */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imageGallery[selectedCategory as keyof typeof imageGallery].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
