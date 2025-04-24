
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { food } from "lucide-react";

interface FoodCardProps {
  title: string;
  quantity: string;
  location: string;
  expiresIn: string;
  image: string;
}

const FoodCard = ({ title, quantity, location, expiresIn, image }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <food className="h-4 w-4" />
            Quantity: {quantity}
          </p>
          <p>Location: {location}</p>
          <p className="text-orange-600">Expires in: {expiresIn}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          Request Food
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
