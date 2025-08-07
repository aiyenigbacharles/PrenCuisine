
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-red-600">Pren Cuisine</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Where passion meets flavor, and every dish tells a story of culinary excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Story</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Founded by <b>Rosetansi Emejulu</b> with a deep love for Nigerian cuisine, Pren Cuisine is dedicated to 
                creating memorable dining experiences. Rosetansi's vision and commitment to authentic recipes 
                and quality ingredients have been the cornerstone of our growth, ensuring every dish brings joy and strengthens bonds. From humble beginnings, 
                we've become a trusted name, consistently delivering culinary excellence.
              </p>
              {/* <p className="text-gray-600 leading-relaxed text-lg">
                From our humble beginnings to becoming a trusted name in catering, we've maintained our commitment 
                to using the finest ingredients, traditional cooking methods, and innovative presentation to deliver 
                culinary experiences that exceed expectations.
              </p> */}
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="/images/Rosetansi.jpg"
                alt="About Pren Cuisine"
                className="rounded-lg shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl text-red-600">🍽️</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Our Mission</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To create exceptional culinary experiences that celebrate the rich flavors of Nigerian cuisine 
                  while embracing global culinary traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl text-red-600">❤️</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Our Values</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Quality, authenticity, and customer satisfaction are at the heart of everything we do. 
                  We believe in using fresh, locally-sourced ingredients whenever possible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl text-red-600">🎯</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Our Vision</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To be the leading catering service that brings communities together through the universal 
                  language of exceptional food and hospitality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
