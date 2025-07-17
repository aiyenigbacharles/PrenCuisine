
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-red-600">Pren Cuisine</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where passion meets flavor, and every dish tells a story of culinary excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
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
            <div className="relative">
              <img 
                src="/images/Rosetansi.jpg"
                alt="About Pren Cuisine"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-red-600">🍽️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To create exceptional culinary experiences that celebrate the rich flavors of Nigerian cuisine 
                  while embracing global culinary traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-red-600">❤️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Our Values</h4>
                <p className="text-gray-600 leading-relaxed">
                  Quality, authenticity, and customer satisfaction are at the heart of everything we do. 
                  We believe in using fresh, locally-sourced ingredients whenever possible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-red-600">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
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
