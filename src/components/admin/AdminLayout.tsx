import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { useIsMobile } from "@/hooks/use-mobile";

export function AdminLayout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex relative">
        <AdminSidebar />
        <main className={`flex-1 p-4 sm:p-6 ${!isMobile ? 'ml-[300px]' : ''}`}>
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}