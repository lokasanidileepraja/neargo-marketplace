import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function AdminLayout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <div className="flex relative">
        <AdminSidebar />
        <main className={`flex-1 p-4 sm:p-6 ${!isMobile ? 'ml-[300px]' : ''}`}>
          <div className="w-full min-w-0">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}