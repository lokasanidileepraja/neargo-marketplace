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
      <div className="flex relative">
        <AdminSidebar />
        <main className={`flex-1 p-4 sm:p-6 ${!isMobile ? 'ml-[300px]' : ''}`}>
          <AdminHeader />
          <div className="w-full min-w-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}