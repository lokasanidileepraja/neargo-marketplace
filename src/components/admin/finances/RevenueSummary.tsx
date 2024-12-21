import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 55000 },
  { month: "Mar", revenue: 65000 },
  { month: "Apr", revenue: 75000 },
];

export function RevenueSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}