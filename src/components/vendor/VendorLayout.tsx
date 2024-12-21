import { Outlet } from "react-router-dom";
import { VendorHeader } from "./VendorHeader";
import { VendorSidebar } from "./VendorSidebar";

export function VendorLayout() {
  return (
    <div className="min-h-screen bg-white">
      <VendorHeader />
      <div className="flex">
        <VendorSidebar />
        <main className="flex-1 p-6 ml-[300px] overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}