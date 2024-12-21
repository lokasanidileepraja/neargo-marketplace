import { AdminHeader } from "@/components/admin/AdminHeader";
import BackButton from "@/components/BackButton";
import { AddRestaurantForm } from "@/components/admin/restaurants/AddRestaurantForm";

export default function AddRestaurant() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/restaurants" label="Back to Restaurants" />
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Add New Restaurant</h1>
        <AddRestaurantForm />
      </main>
    </div>
  );
}