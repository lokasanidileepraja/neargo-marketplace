import { Outlet } from "react-router-dom";
import { VendorHeader } from "./VendorHeader";
import { VendorSidebar } from "./VendorSidebar";
import Navbar from "../Navbar";
import { useIsMobile } from "@/hooks/use-mobile";

export function VendorLayout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <VendorHeader />
      <div className="flex relative">
        <VendorSidebar />
        <main className={`flex-1 p-4 sm:p-6 ${!isMobile ? 'ml-[300px]' : ''}`}>
          <div className="w-full min-w-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}