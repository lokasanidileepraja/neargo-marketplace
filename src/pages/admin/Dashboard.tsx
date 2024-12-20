import { useEffect, useState } from "react";
import {
  BarChart3,
  Users,
  Store,
  ShoppingBag,
  TrendingUp,
  Bell,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

const statsCards = [
  {
    title: "Total Orders",
    value: "1,234",
    change: "+12.5%",
    icon: ShoppingBag,
  },
  {
    title: "Active Users",
    value: "856",
    change: "+5.2%",
    icon: Users,
  },
  {
    title: "Total Revenue",
    value: "₹45,678",
    change: "+8.1%",
    icon: TrendingUp,
  },
  {
    title: "Active Restaurants",
    value: "48",
    change: "+3.1%",
    icon: Store,
  },
];

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="pl-64">
        <AdminHeader />
        <main className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card) => (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <card.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">{card.change}</span> from last
                    month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (!active || !payload) return null;
                            return (
                              <ChartTooltipContent>
                                <div className="text-sm font-bold">
                                  ₹{payload[0]?.value}
                                </div>
                              </ChartTooltipContent>
                            );
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}