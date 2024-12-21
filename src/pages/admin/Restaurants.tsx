import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RestaurantMetrics } from "@/components/admin/restaurants/RestaurantMetrics";
import { DocumentVerification } from "@/components/admin/restaurants/DocumentVerification";
import { RestaurantList } from "@/components/admin/restaurants/RestaurantList";
import { Restaurant } from "@/types/restaurant";
import BackButton from "@/components/BackButton";

// Dummy data
const initialRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Palace",
    rating: 5,
    products: 45,
    orders: 1200,
    status: "verified",
    isOnline: true,
    email: "info@pizzapalace.com",
    phone: "+1234567890",
    address: "123 Main St",
    cuisine: "Italian",
    openingHours: "09:00",
    closingHours: "22:00",
    deliveryRadius: 5,
    minimumOrder: 15,
    documents: {
      businessLicense: "https://example.com/license1.pdf",
      foodLicense: "https://example.com/food1.pdf",
      taxCertificate: "https://example.com/tax1.pdf",
    },
    metrics: {
      averageDeliveryTime: 30,
      customerSatisfaction: 95,
      orderAcceptanceRate: 98,
      revenue: 50000,
    },
  },
  // ... Add more dummy restaurants here
];

export default function Restaurants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [restaurants, setRestaurants] = useState<Restaurant[]>(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const { toast } = useToast();

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    toast({
      title: "Filter Applied",
      description: `Showing ${status} restaurants`,
    });
  };

  const handleMetricsUpdate = (restaurantId: number, metrics: Restaurant['metrics']) => {
    setRestaurants(restaurants.map(restaurant => 
      restaurant.id === restaurantId 
        ? { ...restaurant, metrics }
        : restaurant
    ));
    toast({
      title: "Metrics Updated",
      description: "Restaurant metrics have been updated successfully",
    });
  };

  const handleDocumentUpdate = (restaurantId: number, documents: Restaurant['documents']) => {
    setRestaurants(restaurants.map(restaurant => 
      restaurant.id === restaurantId 
        ? { ...restaurant, documents }
        : restaurant
    ));
    toast({
      title: "Documents Updated",
      description: "Restaurant documents have been updated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="container mx-auto">
            <BackButton to="/" label="Back to Home" />
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold dark:text-white">Restaurant Management</h1>
              <Button onClick={() => {
                setSelectedRestaurant(null);
                toast({
                  title: "Add Restaurant",
                  description: "Opening restaurant form...",
                });
              }}>
                Add New Restaurant
              </Button>
            </div>

            {selectedRestaurant && (
              <>
                <RestaurantMetrics
                  restaurant={selectedRestaurant}
                  onMetricsUpdate={(metrics) => handleMetricsUpdate(selectedRestaurant.id, metrics)}
                />
                <DocumentVerification
                  documents={selectedRestaurant.documents}
                  onDocumentUpdate={(documents) => handleDocumentUpdate(selectedRestaurant.id, documents)}
                />
              </>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Restaurants List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search restaurants..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select
                    value={statusFilter}
                    onValueChange={handleStatusChange}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <RestaurantList
                  restaurants={restaurants}
                  onEdit={setSelectedRestaurant}
                />

                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-500">
                    Showing {restaurants.length} restaurants
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={true}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
