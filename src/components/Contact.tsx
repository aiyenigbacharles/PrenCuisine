import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Custom hook to dynamically load the Paystack script
const usePaystackScript = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return scriptLoaded;
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    order: '',
    deliveryMethod: 'delivery',
    address: ''
  });

  const { toast } = useToast();
  const scriptLoaded = usePaystackScript();
  const publicKey = "pk_test_xxxxxxxxxx"; // Replace with your Paystack public key

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSuccess = (reference: any) => {
    console.log('Payment successful', reference);
    toast({
      title: "Order Placed!",
      description: "Your order has been received and payment was successful.",
    });
    // Here you would typically send the form data and payment reference to your backend
    console.log('Form data:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      order: '',
      deliveryMethod: 'delivery',
      address: ''
    });
  };

  const handlePaymentClose = () => {
    console.log('Payment window closed.');
    toast({
      title: "Payment Canceled",
      description: "The payment window was closed.",
      variant: "destructive"
    });
  }

  const items = [
    "Abacha",
    "Cream-Cookie Cake",
    "One Layer Cream Cake",
    "Small Chops",
    "Abacha, Fish, Ugba & Kpomo (both plates)",
    "Kunu Aya (75cl)",
    "Chocolate Cake",
    "Chin Chin",
    "Cream Cake - Chocolate Drip (2 layers size 6)",
    "Plain Cake (size 8)",
    "Samosa & Puffpuff",
    "Cupcakes",
  ];

  const getAmount = () => {
    if (formData.order) {
        const prices: { [key: string]: number } = {
            "Abacha": 4000,
            "Cream-Cookie Cake": 35000,
            "One Layer Cream Cake": 25000,
            "Small Chops": 40000,
            "Abacha, Fish, Ugba & Kpomo (both plates)": 100000,
            "Kunu Aya (75cl)": 2000,
            "Chocolate Cake": 35000,
            "Chin Chin": 24000,
            "Cream Cake - Chocolate Drip (2 layers size 6)": 40000,
            "Plain Cake (size 8)": 10000,
            "Samosa & Puffpuff": 40000,
            "Cupcakes": 15000,
        };
        return (prices[formData.order] || 0) * 100; // Amount in kobo
    }
    return 0;
  }

  const initializePayment = () => {
    // @ts-ignore
    if (!scriptLoaded || !window.PaystackPop) {
      toast({
        title: "Error",
        description: "Payment service is not available. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }

    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: formData.email,
      amount: getAmount(),
      phone: formData.phone,
      ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a unique reference
      onClose: handlePaymentClose,
      callback: handlePaymentSuccess
    });
    handler.openIframe();
  };

  const isFormValid = !formData.name || !formData.email || !formData.phone || !formData.order || (formData.deliveryMethod === 'delivery' && !formData.address);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Place Your <span className="text-red-600">Order</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your desired meal, and we'll get it to you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order *
                    </label>
                    <select
                      name="order"
                      value={formData.order}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select an item</option>
                      {items.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery or Pickup *
                    </label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="deliveryMethod" value="delivery" checked={formData.deliveryMethod === 'delivery'} onChange={handleInputChange} className="form-radio h-4 w-4 text-red-600"/>
                            <span className="ml-2 text-gray-700">Delivery</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="deliveryMethod" value="pickup" checked={formData.deliveryMethod === 'pickup'} onChange={handleInputChange} className="form-radio h-4 w-4 text-red-600"/>
                            <span className="ml-2 text-gray-700">Pickup</span>
                        </label>
                    </div>
                </div>

                {formData.deliveryMethod === 'delivery' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Address *
                      </label>
                      <Textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        required
                        className="w-full"
                        placeholder="Please provide your full delivery address"
                      />
                    </div>
                )}

                {formData.deliveryMethod === 'pickup' && (
                    <div className="p-4 bg-gray-100 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">Pickup Address</h4>
                      <p className="text-gray-600">
                        Hillside Estate (Close to Ainah Estate),<br />
                        FHA Karu, Abuja
                      </p>
                    </div>
                )}

                <Button
                  type="button"
                  onClick={initializePayment}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold transition-colors duration-300 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={isFormValid || !scriptLoaded}
                >
                  {scriptLoaded ? `Pay ₦${(getAmount() / 100).toLocaleString()}` : 'Loading Payment...'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
