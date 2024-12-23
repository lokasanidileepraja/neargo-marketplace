import { Bell, Package, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const notifications = [
  {
    id: 1,
    title: "Order Delivered",
    message: "Your order #123 has been delivered successfully",
    time: "2 minutes ago",
    icon: Package,
    read: false,
  },
  {
    id: 2,
    title: "New Offer",
    message: "Get 20% off on your next order",
    time: "1 hour ago",
    icon: ShoppingCart,
    read: false,
  },
  {
    id: 3,
    title: "Review Request",
    message: "Please rate your last order from Restaurant Name",
    time: "2 hours ago",
    icon: Star,
    read: true,
  },
];

export default function Notifications() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Notifications</h1>
            <Bell className="h-6 w-6 text-gray-600" />
          </div>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={notification.read ? "bg-gray-50" : "bg-white"}>
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}