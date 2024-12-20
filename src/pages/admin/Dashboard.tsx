import { Card } from "@/components/ui/card";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <div className="flex">
        <div className="hidden md:block w-64">
          <AdminSidebar />
        </div>
        <main className="flex-1 p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">Active Orders</h3>
              <p className="text-3xl font-bold">56</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">Restaurants</h3>
              <p className="text-3xl font-bold">89</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <p className="text-3xl font-bold">₹45,678</p>
            </Card>
          </div>

          <Card className="mt-6 p-6">
            <h3 className="text-lg font-medium mb-4">Revenue Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#FF4B2B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}