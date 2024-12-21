import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Store, 
  Truck, 
  DollarSign 
} from "lucide-react";

const metrics = [
  {
    title: "Total Orders",
    value: "1,409",
    change: "+12.5%",
    icon: ShoppingBag,
    color: "text-primary"
  },
  {
    title: "Active Restaurants",
    value: "156",
    change: "+3.2%",
    icon: Store,
    color: "text-green-600"
  },
  {
    title: "Active Drivers",
    value: "89",
    change: "+5.8%",
    icon: Truck,
    color: "text-blue-600"
  },
  {
    title: "Total Revenue",
    value: "₹89,012",
    change: "+8.1%",
    icon: DollarSign,
    color: "text-purple-600"
  }
];

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">{metric.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}