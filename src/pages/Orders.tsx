import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dummy data for testing
const userProfile = {
  name: "John Doe",
  phone: "9876543210",
  email: "john.doe@example.com"
};

const dummyOrders = [
  {
    orderId: "ORD192034658982756",
    date: "2024-03-21 08:27 PM",
    status: "Delivered",
    deliveredAt: "2024-03-21 08:53 PM",
    restaurant: "KFC",
    location: "BEML LAYOUT",
    total: 444,
    items: [
      { name: "Spicy Zinger Burger", quantity: 1 },
      { name: "Veg Patty", quantity: 2 }
    ]
  },
  {
    orderId: "ORD192032058176846",
    date: "2024-03-20 07:44 PM",
    status: "Cancelled",
    cancelledAt: "2024-03-20 08:27 PM",
    restaurant: "KFC",
    location: "BEML LAYOUT",
    total: 362,
    items: [
      { name: "Spicy Zinger Burger", quantity: 1 },
      { name: "Veg Patty", quantity: 2 }
    ]
  }
];

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{userProfile.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {userProfile.phone} • {userProfile.email}
                </p>
              </div>
              <Button onClick={() => navigate("/profile/edit")}>Edit Profile</Button>
            </CardHeader>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Order History</h2>
          
          {dummyOrders.map((order) => (
            <Card key={order.orderId} className="overflow-hidden">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{order.restaurant}</h3>
                    <p className="text-sm text-muted-foreground">{order.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Order #{order.orderId}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm">
                          {item.quantity}x {item.name}
                        </p>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{order.total}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" size="sm">View Details</Button>
                    {order.status === 'Delivered' && (
                      <Button variant="outline" size="sm">Reorder</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;