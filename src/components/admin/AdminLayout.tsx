import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";
import Navbar from "../Navbar";
import { useIsMobile } from "@/hooks/use-mobile";

export function AdminLayout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AdminHeader />
      <div className="flex relative">
        <AdminSidebar />
        <main className={`flex-1 p-6 ${!isMobile ? 'ml-[300px]' : ''} overflow-x-auto min-w-0`}>
          <div className="min-w-[768px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}