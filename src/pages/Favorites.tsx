import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const initialFavorites = [
  {
    id: 1,
    name: "Burger Palace",
    image: "/placeholder.svg",
    rating: 4.5,
    cuisine: "American",
    deliveryTime: "25-35 min",
    minimumOrder: "₹200",
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "/placeholder.svg",
    rating: 4.8,
    cuisine: "Italian",
    deliveryTime: "30-40 min",
    minimumOrder: "₹300",
  },
  {
    id: 3,
    name: "Sushi Express",
    image: "/placeholder.svg",
    rating: 4.6,
    cuisine: "Japanese",
    deliveryTime: "35-45 min",
    minimumOrder: "₹400",
  },
];

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);
  const { toast } = useToast();

  const handleRemoveFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
    toast({
      title: "Removed from favorites",
      description: "Restaurant has been removed from your favorites.",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{restaurant.name}</h3>
                      <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFavorite(restaurant.id)}
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                  
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>Delivery: {restaurant.deliveryTime}</p>
                    <p>Min. Order: {restaurant.minimumOrder}</p>
                  </div>
                  
                  <Button asChild className="w-full mt-4">
                    <Link to={`/restaurant/${restaurant.id}`}>
                      Order Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {favorites.length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-gray-400" />
              <h2 className="mt-4 text-xl font-semibold">No favorites yet</h2>
              <p className="mt-2 text-gray-600">
                Start adding restaurants to your favorites list!
              </p>
              <Button asChild className="mt-6">
                <Link to="/">Browse Restaurants</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}