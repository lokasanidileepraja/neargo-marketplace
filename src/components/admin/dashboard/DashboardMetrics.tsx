import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Store, 
  Truck, 
  DollarSign 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  colorClass: string;
}

const MetricCard = ({ title, value, change, icon: Icon, colorClass }: MetricCardProps) => (
  <Card className="transition-all duration-200 hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className={cn("h-4 w-4", colorClass)} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center text-xs text-muted-foreground mt-1">
        <span className={cn(
          "mr-1",
          change.startsWith('+') ? "text-green-600" : "text-red-600"
        )}>
          {change}
        </span>
        from last month
      </div>
    </CardContent>
  </Card>
);

const metrics = [
  {
    title: "Total Orders",
    value: "1,409",
    change: "+12.5%",
    icon: ShoppingBag,
    colorClass: "text-primary"
  },
  {
    title: "Active Restaurants",
    value: "156",
    change: "+3.2%",
    icon: Store,
    colorClass: "text-green-600"
  },
  {
    title: "Active Drivers",
    value: "89",
    change: "+5.8%",
    icon: Truck,
    colorClass: "text-blue-600"
  },
  {
    title: "Total Revenue",
    value: "₹89,012",
    change: "+8.1%",
    icon: DollarSign,
    colorClass: "text-purple-600"
  }
];

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}