import { AdminHeader } from "@/components/admin/AdminHeader";
import { RestaurantList } from "@/components/admin/restaurants/RestaurantList";
import { RestaurantMetrics } from "@/components/admin/restaurants/RestaurantMetrics";
import BackButton from "@/components/BackButton";

export default function Restaurants() {
  return (
    <div className="space-y-4">
      <BackButton to="/" label="Back to Home" />
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Restaurants</h2>
        <p className="text-muted-foreground">
          Manage restaurant listings and details
        </p>
      </div>
      <RestaurantMetrics />
      <RestaurantList />
    </div>
  );
}