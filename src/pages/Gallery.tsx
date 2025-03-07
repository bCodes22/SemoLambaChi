import React, { useState } from 'react';

// Define image categories and their collections
const imageGallery = {
  brotherhood: [
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
      caption: "Brotherhood Event 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      caption: "Chapter Meeting"
    },
    {
      url: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80",
      caption: "Social Event"
    },
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      caption: "Campus Activity"
    }
  ],
  philanthropy: [
    {
      url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
      caption: "Scott Wood Classic 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      caption: "Community Service"
    },
    {
      url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
      caption: "Food Drive"
    },
    {
      url: "https://images.unsplash.com/photo-1523580785273-922f78ac3018?w=800&q=80",
      caption: "Charity Event"
    }
  ],
  social: [
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      caption: "Formal 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
      caption: "Alumni Weekend"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      caption: "Chapter Dinner"
    },
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      caption: "Campus Event"
    }
  ],
  recruitment: [
    {
      url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      caption: "Rush Week"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
      caption: "Meet the Chapter"
    },
    {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      caption: "Information Session"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      caption: "Welcome Event"
    }
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
