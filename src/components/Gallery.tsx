import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Delicious small chops platter",
      title: "Small Chops Platter"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      alt: "Beautiful cake decoration",
      title: "Custom Cake Design"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Event setup",
      title: "Event Catering Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Nigerian jollof rice",
      title: "Signature Jollof Rice"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      alt: "Fresh drinks",
      title: "Refreshing Beverages"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Wedding catering",
      title: "Wedding Catering"
    }
  ];

  // Meal images for the scrolling slider
  const mealImages = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565895405229-71b7d14f9662?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565299585323-38174c6a3b9e?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our culinary creations and see the artistry that goes into every dish we prepare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Meal Images Slider */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our <span className="text-red-600">Delicious Meals</span>
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_10s_linear_infinite] hover:pause">
              {/* First set of images */}
              {mealImages.map((src, index) => (
                <div key={index} className="flex-shrink-0 mx-2">
                  <img
                    src={src}
                    alt={`Delicious meal ${index + 1}`}
                    className="w-72 h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {mealImages.map((src, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-2">
                  <img
                    src={src}
                    alt={`Delicious meal ${index + 1}`}
                    className="w-72 h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600">
            Want to see more? Follow us on social media for daily updates and behind-the-scenes content!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
