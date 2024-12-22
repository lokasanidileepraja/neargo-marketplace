import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Activity {
  id: string;
  type: "order" | "restaurant" | "driver";
  status: "completed" | "pending" | "cancelled";
  message: string;
  timestamp: Date;
  icon: typeof Check | typeof Clock | typeof X;
  color: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "order",
    status: "completed",
    message: "Order #12345 delivered",
    timestamp: new Date(Date.now() - 5 * 60000),
    icon: Check,
    color: "text-green-500"
  },
  {
    id: "2",
    type: "restaurant",
    status: "pending",
    message: "New restaurant signup",
    timestamp: new Date(Date.now() - 10 * 60000),
    icon: Clock,
    color: "text-yellow-500"
  },
  {
    id: "3",
    type: "order",
    status: "cancelled",
    message: "Order #12344 cancelled",
    timestamp: new Date(Date.now() - 15 * 60000),
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
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-gray-50"
            >
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}