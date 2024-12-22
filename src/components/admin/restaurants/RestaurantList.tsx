import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Star, Edit2, Trash2 } from "lucide-react";
import { Restaurant } from "@/types/restaurant";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onDelete?: (restaurant: Restaurant) => void;
}

export const RestaurantList = ({ restaurants, onEdit, onDelete }: RestaurantListProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
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

  if (isMobile) {
    return (
      <div className="space-y-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow p-4 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{restaurant.name}</h3>
                <div className="flex mt-1">
                  {[...Array(restaurant.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
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
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Products:</span>
                <span className="ml-2">{restaurant.products}</span>
              </div>
              <div>
                <span className="text-gray-500">Orders:</span>
                <span className="ml-2">{restaurant.orders}</span>
              </div>
              <div>
                <span className="text-gray-500">Status:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(restaurant.status)}`}>
                  {restaurant.status}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Online:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getOnlineStatusClass(restaurant.isOnline)}`}>
                  {restaurant.isOnline ? "online" : "offline"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
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
    </div>
  );
};