import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock } from "lucide-react";

const activities = [
  {
    type: "order",
    status: "completed",
    message: "Order #12345 delivered",
    time: "5 min ago",
    icon: Check,
    color: "text-green-500"
  },
  {
    type: "restaurant",
    status: "pending",
    message: "New restaurant signup",
    time: "10 min ago",
    icon: Clock,
    color: "text-yellow-500"
  },
  {
    type: "order",
    status: "cancelled",
    message: "Order #12344 cancelled",
    time: "15 min ago",
    icon: X,
    color: "text-red-500"
  }
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}