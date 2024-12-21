import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardMetrics } from "@/components/admin/dashboard/DashboardMetrics";
import { RecentOrders } from "@/components/admin/dashboard/RecentOrders";
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart";
import { ActivityFeed } from "@/components/admin/dashboard/ActivityFeed";
import BackButton from "@/components/BackButton";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <BackButton to="/" label="Back to Home" />
            </div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
            <DashboardMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <ActivityFeed />
              </div>
            </div>
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
}