import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import BackButton from "@/components/BackButton";
import { Star, Search, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Restaurants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();
  
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      rating: 5,
      products: 45,
      orders: 1200,
      status: "verified",
      isOnline: true,
    },
    {
      id: 2,
      name: "Burger House",
      rating: 5,
      products: 30,
      orders: 800,
      status: "pending",
      isOnline: false,
    },
    {
      id: 3,
      name: "Sushi Express",
      rating: 5,
      products: 60,
      orders: 1500,
      status: "verified",
      isOnline: true,
    },
  ];

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    toast({
      title: "Filter Applied",
      description: `Showing ${status} restaurants`,
    });
  };

  const renderRating = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="container mx-auto">
            <BackButton to="/" label="Back to Home" />
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold dark:text-white">Restaurant Management</h1>
              <Button onClick={() => toast({
                title: "Coming Soon",
                description: "Restaurant onboarding feature will be available soon!",
              })}>
                Add New Restaurant
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Total Restaurants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{restaurants.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {restaurants.filter(r => r.status === "verified").length}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {restaurants.filter(r => r.status === "pending").length}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Online Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {restaurants.filter(r => r.isOnline).length}
                  </p>
                </CardContent>
              </Card>
            </div>

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
                            {renderRating(restaurant.rating)}
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
                              onClick={() => toast({
                                title: "View Restaurant",
                                description: "Restaurant details view coming soon!",
                              })}
                            >
                              View
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => toast({
                                title: "Edit Restaurant",
                                description: "Restaurant edit feature coming soon!",
                              })}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

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
                      disabled={true} // Disabled for demo, would normally check against total pages
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