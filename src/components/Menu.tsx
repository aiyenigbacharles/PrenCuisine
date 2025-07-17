import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';  // ➊ make sure you import Badge

const Featured = () => {
  const services = [
    {
      title: "Abacha",
      price: "₦4,000",
      description: "Deliciously spicy and vibrant African salad",
      image: "/images/Abacha 1.jpg"
    },
    {
      title: "Cream-Cookie Cake",
      price: "₦35,000",
      description: "Our irresistible cake, packed with cookie crumble and sweet cream",
      image: "/images/3 - Cream-Cookies.jpg"
    },
    {
      title: "One Layer Cream Cake",
      price: "₦25,000",
      description: "A delightful single-layer cake with luscious cream frosting",
      image: "/images/One layer cream.jpg"
    },
        {
      title: "Small Chops",
      price: "₦40,000",
      description: "Crispy samosas, fluffy puff-puff, and more savory bites",
      image: "/images/6 - Chops.jpg"
    },
    {
      title: "Abacha, Fish, Ugba & Kpomo (both plates)",
      price: "₦100,000",
      description: "A vibrant African salad, perfectly complemented by flavorful fish, ugba, & soft kpomo",
      image: "/images/Abacha, fish, ugba and kpomo.jpg"
    },
    {
      title: "Kunu Aya (75cl)",
      price: "₦2000",
      description: "Refreshing tigernut drink, subtly spiced",
      image: "/images/12 - Kunu.jpg"
    },
        {
      title: "Chocolate Cake",
      price: "₦35,000",
      description: "Pure chocolate bliss in every bite",
      image: "/images/2 - Chocolate.jpg"
    },
    {
      title: "Chin Chin",
      price: "₦24,000",
      description: "Delightfully crunchy fried dough, perfect for snacking",
      image: "/images/10 - Chinchin.jpg"
    },
    {
      title: "Cream Cake - Chocolate Drip (2 layers size  6)",
      price: "₦40,000",
      description: "A delightful single-layer cake with luscious cream frosting",
      image: "/images/chocolate drip and toppings.jpg"
    },
        {
      title: "Plain Cake (size 8)",
      price: "₦10,000",
      description: "Tender and moist cake, perfect for any occasion",
      image: "/images/Plain cream cake.jpg"
    },
    {
      title: "Samosa & Puff Puff",
      price: "₦40,000",
      description: "A vibrant African salad, perfectly complemented by flavorful fish, ugba, & soft kpomo",
      image: "/images/8 - Springrolls.jpg"
    },
    {
      title: "Cupcakes",
      price: "₦15,000",
      description: "Refreshing tigernut drink in a convenient grab-and-go bottle",
      image: "/images/cupcakes.jpg"
    },
  ];

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Here at Pren Cuisine, we bring flavor and joy to your events 
           and everyday moments. Explore our menu and let us cater to your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* ➋ Price badge — Option A: overlay on image */}
                <Badge className="absolute top-3 right-3 bg-red-600/90 text-white backdrop-blur-sm px-3 py-1 text-lg">
                  {item.price}
                </Badge>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* ➌ Price badge — Option B: inline (comment out if using Option A) */}
                  {/* <Badge className="bg-red-100 text-red-700">{item.price}</Badge> */}
                </div>

                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;