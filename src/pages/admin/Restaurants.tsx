import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { RestaurantList } from "@/components/admin/restaurants/RestaurantList";
import { RestaurantMetrics } from "@/components/admin/restaurants/RestaurantMetrics";
import BackButton from "@/components/BackButton";
import { restaurants as initialRestaurants } from "@/data/restaurants";
import { Restaurant } from "@/types/restaurant";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const handleEdit = (restaurant: Restaurant) => {
    // Handle edit functionality
    console.log("Editing restaurant:", restaurant);
  };

  const handleMetricsUpdate = (metrics: Restaurant['metrics']) => {
    setSelectedRestaurant(prev => ({
      ...prev,
      metrics
    }));
  };

  return (
    <div className="space-y-4">
      <BackButton to="/" label="Back to Home" />
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Restaurants</h2>
        <p className="text-muted-foreground">
          Manage restaurant listings and details
        </p>
      </div>
      <RestaurantMetrics 
        restaurant={selectedRestaurant}
        onMetricsUpdate={handleMetricsUpdate}
      />
      <RestaurantList 
        restaurants={restaurants}
        onEdit={handleEdit}
      />
    </div>
  );
}