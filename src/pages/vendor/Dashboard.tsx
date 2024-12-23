import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const metrics = [
  {
    title: "Total Orders",
    value: "2,345",
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
    value: "₹145,231",
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
  { date: "Jul", revenue: 7000 },
  { date: "Aug", revenue: 6500 },
  { date: "Sep", revenue: 8000 },
  { date: "Oct", revenue: 7500 },
  { date: "Nov", revenue: 9000 },
  { date: "Dec", revenue: 8500 },
];

const recentOrders = [
  { id: "1", customer: "John Doe", items: 3, total: "₹450", status: "Delivered" },
  { id: "2", customer: "Jane Smith", items: 2, total: "₹280", status: "Processing" },
  { id: "3", customer: "Mike Johnson", items: 5, total: "₹890", status: "Pending" },
  { id: "4", customer: "Sarah Williams", items: 1, total: "₹150", status: "Delivered" },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back! Here's what's happening with your store today.</p>
      </div>
      
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
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500">{metric.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
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
                    stroke="#FF4B2B"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.items} items · {order.total}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}