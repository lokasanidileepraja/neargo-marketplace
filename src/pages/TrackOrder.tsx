import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const orderStatus = {
  status: "in_transit",
  steps: [
    {
      title: "Order Confirmed",
      time: "10:30 AM",
      completed: true,
      icon: CheckCircle,
    },
    {
      title: "Preparing",
      time: "10:45 AM",
      completed: true,
      icon: Package,
    },
    {
      title: "Out for Delivery",
      time: "11:15 AM",
      completed: true,
      icon: Truck,
    },
    {
      title: "Delivered",
      time: "Estimated 11:45 AM",
      completed: false,
      icon: Clock,
    },
  ],
  deliveryDetails: {
    orderNumber: "#12345",
    restaurant: "Burger Palace",
    driver: "John Smith",
    items: [
      { name: "Cheeseburger", quantity: 2 },
      { name: "French Fries", quantity: 1 },
      { name: "Coca Cola", quantity: 2 },
    ],
  },
};

export default function TrackOrder() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Track Order {orderStatus.deliveryDetails.orderNumber}</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {orderStatus.steps.map((step, index) => (
                  <div key={index} className="flex items-start mb-8 last:mb-0">
                    <div className={`rounded-full p-2 ${
                      step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Restaurant</h3>
                  <p className="text-gray-600">{orderStatus.deliveryDetails.restaurant}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Driver</h3>
                  <p className="text-gray-600">{orderStatus.deliveryDetails.driver}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Items</h3>
                  <ul className="space-y-2 mt-2">
                    {orderStatus.deliveryDetails.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-gray-600">
                        <span>{item.name}</span>
                        <span>x{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}