
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { HandHeart, Utensils, Store } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const foodItems = [
    {
      title: "Fresh Pastries Assortment",
      quantity: "20 pieces",
      location: "Downtown Cafe",
      expiresIn: "12 hours",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Cooked Meals",
      quantity: "15 portions",
      location: "Grand Hotel",
      expiresIn: "8 hours",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Sandwiches",
      quantity: "30 pieces",
      location: "Express Cafe",
      expiresIn: "6 hours",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Connecting Surplus Food<br />with Those in Need
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our mission to reduce food waste and help feed communities by connecting hotels and cafes with NGOs and individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 w-full sm:w-auto">
                I Want to Donate Food
              </Button>
            </Link>
            <Link to="/request">
              <Button variant="outline" className="text-lg py-6 w-full sm:w-auto">
                I Need Food
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">List Surplus Food</h3>
              <p className="text-gray-600">Hotels and cafes can easily list their surplus food items</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">NGOs and individuals can browse and request available food</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Distribute</h3>
              <p className="text-gray-600">Coordinate pickup and distribute food to those in need</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Food Section */}
      <section id="available-food" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Available Food</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="text-lg">
              View All Available Food
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">5,000+</div>
              <p className="text-gray-600">Meals Donated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <p className="text-gray-600">Partner Hotels & Cafes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">20+</div>
              <p className="text-gray-600">NGO Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
