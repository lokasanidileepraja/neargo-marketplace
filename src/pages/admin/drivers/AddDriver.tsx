import { useNavigate } from "react-router-dom";
import { AdminHeader } from "@/components/admin/AdminHeader";
import BackButton from "@/components/BackButton";
import { AddDriverForm } from "@/components/admin/drivers/AddDriverForm";

export default function AddDriver() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/admin/drivers");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/drivers" label="Back to Drivers" />
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Add New Driver</h1>
        <AddDriverForm onClose={handleClose} />
      </main>
    </div>
  );
}