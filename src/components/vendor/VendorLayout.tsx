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
        <main className={`flex-1 p-6 ${!isMobile ? 'ml-[300px]' : ''} overflow-x-auto min-w-0`}>
          <div className="min-w-[768px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}