
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Client",
      content: "Pren Cuisine made our wedding day absolutely perfect! The food was exceptional and the service was flawless. Our guests are still talking about how amazing everything tasted.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      role: "Corporate Event",
      content: "We've used Pren Cuisine for multiple corporate events and they never disappoint. Professional, reliable, and the food quality is consistently outstanding.",
      rating: 5
    },
    {
      name: "Grace Okafor",
      role: "Birthday Celebration",
      content: "The small chops platter for my birthday party was a huge hit! Everything was fresh, flavorful, and beautifully presented. Highly recommended!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Anniversary Dinner",
      content: "Pren Cuisine catered our anniversary dinner and exceeded all expectations. The attention to detail and authentic flavors made it a night to remember.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-base sm:text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Pren Cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-red-600 font-bold text-base sm:text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-600 mb-4 px-4">
            Ready to create your own amazing experience?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors duration-300 text-base sm:text-lg font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
