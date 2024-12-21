import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { RestaurantList } from "@/components/admin/restaurants/RestaurantList";
import { RestaurantMetrics } from "@/components/admin/restaurants/RestaurantMetrics";
import { AddRestaurantForm } from "@/components/admin/restaurants/AddRestaurantForm";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { restaurants as initialRestaurants } from "@/data/restaurants";
import { Restaurant } from "@/types/restaurant";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (restaurant: Restaurant) => {
    console.log("Editing restaurant:", restaurant);
  };

  const handleMetricsUpdate = (metrics: Restaurant['metrics']) => {
    setSelectedRestaurant(prev => ({
      ...prev,
      metrics
    }));
  };

  return (
    <div className="space-y-4 p-4">
      <BackButton to="/" label="Back to Home" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Restaurants</h2>
          <p className="text-muted-foreground">
            Manage restaurant listings and details
          </p>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          Create New Restaurant
        </Button>
      </div>
      
      {showAddForm ? (
        <AddRestaurantForm onClose={() => setShowAddForm(false)} />
      ) : (
        <>
          <RestaurantMetrics 
            restaurant={selectedRestaurant}
            onMetricsUpdate={handleMetricsUpdate}
          />
          <RestaurantList 
            restaurants={restaurants}
            onEdit={handleEdit}
          />
        </>
      )}
    </div>
  );
}