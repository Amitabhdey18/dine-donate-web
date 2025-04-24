
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Donate = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    expiryTime: "",
    pickupAddress: "",
    contactNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic will be implemented later
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Donate Surplus Food</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <Label htmlFor="itemName">Food Item Name</Label>
            <Input
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="E.g., Fresh Pastries"
              required
            />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="E.g., 20 pieces"
              required
            />
          </div>
          <div>
            <Label htmlFor="expiryTime">Best Before</Label>
            <Input
              id="expiryTime"
              name="expiryTime"
              type="datetime-local"
              value={formData.expiryTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="pickupAddress">Pickup Address</Label>
            <Input
              id="pickupAddress"
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              placeholder="Enter pickup location"
              required
            />
          </div>
          <div>
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Your contact number"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            List Food for Donation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
