import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="space-y-4">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}