import { VendorHeader } from "@/components/vendor/VendorHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, DollarSign, TrendingUp } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const metrics = [
  {
    title: "Total Orders",
    value: "156",
    change: "+12.5%",
    icon: ShoppingBag,
    color: "text-primary"
  },
  {
    title: "Products",
    value: "89",
    change: "+3.2%",
    icon: Package,
    color: "text-green-600"
  },
  {
    title: "Revenue",
    value: "₹45,231",
    change: "+8.1%",
    icon: DollarSign,
    color: "text-blue-600"
  },
  {
    title: "Growth",
    value: "29.4%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "text-purple-600"
  }
];

const revenueData = [
  { date: "Jan", revenue: 4000 },
  { date: "Feb", revenue: 3000 },
  { date: "Mar", revenue: 5000 },
  { date: "Apr", revenue: 4500 },
  { date: "May", revenue: 6000 },
  { date: "Jun", revenue: 5500 },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
      
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

      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis 
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${value}`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}