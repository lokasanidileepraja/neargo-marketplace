import { useNavigate } from "react-router-dom";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AddDriverForm } from "@/components/admin/drivers/AddDriverForm";
import BackButton from "@/components/BackButton";

export default function AddDriver() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/admin/drivers");
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="container mx-auto">
            <BackButton to="/admin/drivers" label="Back to Drivers" />
            <h1 className="text-3xl font-bold mb-8">Add New Driver</h1>
            <AddDriverForm onClose={handleClose} />
          </div>
        </main>
      </div>
    </div>
  );
}