import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px] max-w-[calc(100%-300px)] bg-gray-50">
          <div className="container mx-auto space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}