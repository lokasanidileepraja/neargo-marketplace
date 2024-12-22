import { DashboardMetrics } from "@/components/admin/dashboard/DashboardMetrics";
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart";
import { ActivityFeed } from "@/components/admin/dashboard/ActivityFeed";
import { RecentOrders } from "@/components/admin/dashboard/RecentOrders";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:gap-8">
        <DashboardMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <RevenueChart />
          <div className="lg:col-span-1 space-y-4 md:space-y-8">
            <ActivityFeed />
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
}