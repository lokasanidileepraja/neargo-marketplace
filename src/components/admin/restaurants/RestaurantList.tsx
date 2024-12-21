import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Star, Edit2, Trash2 } from "lucide-react";
import { Restaurant } from "@/types/restaurant";
import { useToast } from "@/hooks/use-toast";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onDelete?: (restaurant: Restaurant) => void;
}

export const RestaurantList = ({ restaurants, onEdit, onDelete }: RestaurantListProps) => {
  const { toast } = useToast();
  
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

  const handleEdit = (restaurant: Restaurant) => {
    onEdit(restaurant);
    toast({
      title: "Edit Restaurant",
      description: `Editing ${restaurant.name}`,
    });
  };

  const handleDelete = (restaurant: Restaurant) => {
    if (onDelete) {
      onDelete(restaurant);
      toast({
        title: "Delete Restaurant",
        description: `${restaurant.name} has been deleted`,
        variant: "destructive",
      });
    }
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
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(restaurant)}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                {onDelete && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(restaurant)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};