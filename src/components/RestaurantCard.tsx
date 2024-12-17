import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  menu: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onViewMenu: () => void;
}

const RestaurantCard = ({ restaurant, onViewMenu }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{restaurant.name}</h3>
          <p className="text-gray-500">{restaurant.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
          <Button onClick={onViewMenu}>View Menu</Button>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;