import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";
import Navbar from "../Navbar";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px] overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}