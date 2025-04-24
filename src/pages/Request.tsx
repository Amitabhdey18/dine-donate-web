
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";

const Request = () => {
  const availableFoodItems = [
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
      <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Available Food Items</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableFoodItems.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Request;
