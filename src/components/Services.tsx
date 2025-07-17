
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
const services = [
  {
    title: "Chocolate Cake",
    description: "A rich, moist slice of chocolate heaven. Layered with a velvety smooth frosting",
    image: "/images/Chocolate cake.jpg"
  },
  {
    title: "Cream-Cookie Cake",
    description: "Our irresistible cake, packed with cookie crumble & sweet cream",
    image: "/images/3 - Cream-Cookies.jpg"
  },
  {
    title: "Kunu Aya",
    description: "Refreshing tigernut drink, subtly spiced",
    image: "/images/Kunu aya.jpg"
  },
  {
    title: "Small Chops",
    description: "A colorful mix of samosa, puff puff, spring rolls, and more",
    image: "/images/6 - Chops.jpg"
  },
  {
    title: "Ofe Akwu & Coconut Rice",
    description: "Flavorful palm nut soup & Fragrant rice cooked in rich coconut milk",
    image: "/images/5 - Ofe akwu - coconut rice.jpg"
  },
  {
    title: "Chin Chin",
    description: "Crispy, crunchy snack bites with a buttery flavor",
    image: "/images/10 - Chinchin.jpg"
  },
  {
    title: "Abacha",
    description: "Traditional Nigerian salad, a flavorful medley of sliced cassava",
    image: "/images/Abacha.jpg"
  },
  {
    title: "Cupcakes",
    description: "Delightful mini cakes, perfect for any craving",
    image: "/images/cupcakes.jpg"
  },
  {
    title: "Foil Cake",
    description: "Moist, rich cake baked to perfection in foil, ensuring freshness",
    image: "/images/Foil cake.jpg"
  },
  {
    title: "One Layer Cream Cake",
    description: "A delightful single-layer cake with luscious cream frosting",
    image: "/images/One layer cream.jpg"
  },
  {
    title: "Puff Puff",
    description: "Golden-fried, light, & airy sweet dough balls",
    image: "/images/7 - Puffpuff.jpg"
  },
  {
    title: "Chocolate Drip & Toppings",
    description: "Rich chocolate cake, elegantly draped with delicious toppings",
    image: "/images/chocolate drip and toppings.jpg"
  }
];

  // return (
  //   <section id="services" className="py-20 bg-white">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
  //           Our <span className="text-red-600">Menu</span>
  //         </h2>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           Welcome to Pren Cuisine, your go-to destination for delicious small chops, 
  //           soups, refreshing drinks, and mouthwatering cakes. We bring flavor and joy to your events 
  //           and everyday moments. Explore our menu and let us cater to your taste buds!
  //         </p>
  //       </div>
        
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  //         {services.map((service, index) => (
  //           <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
  //             <div className="relative overflow-hidden rounded-t-lg">
  //               <img 
  //                 src={service.image} 
  //                 alt={service.title}
  //                 className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  //             </div>
  //             <CardContent className="p-8">
  //               <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
  //                 {service.title}
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed">
  //                 {service.description}
  //               </p>
  //             </CardContent>
  //           </Card>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Services;
