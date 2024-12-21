import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Restaurant } from "@/types/restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
}

export const RestaurantList = ({ restaurants, onEdit }: RestaurantListProps) => {
  const getStatusBadgeClass = (status: string) => {
    return status === "verified"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  const getOnlineStatusClass = (isOnline: boolean) => {
    return isOnline
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Restaurant Name</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Online Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {restaurants.map((restaurant) => (
          <TableRow key={restaurant.id}>
            <TableCell>{restaurant.id}</TableCell>
            <TableCell>{restaurant.name}</TableCell>
            <TableCell>
              <div className="flex">
                {[...Array(restaurant.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </TableCell>
            <TableCell>{restaurant.products}</TableCell>
            <TableCell>{restaurant.orders}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(restaurant.status)}`}>
                {restaurant.status}
              </span>
            </TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs ${getOnlineStatusClass(restaurant.isOnline)}`}>
                {restaurant.isOnline ? "online" : "offline"}
              </span>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm" onClick={() => onEdit(restaurant)}>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};