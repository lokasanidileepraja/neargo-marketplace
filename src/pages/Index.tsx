import { ShoppingBag, Utensils, Package, Pill } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const categories = [
    {
      title: "Food Delivery",
      icon: <Utensils className="h-6 w-6 text-primary" />,
      description: "Order from your favorite restaurants",
      path: "/food-delivery"
    },
    {
      title: "Groceries",
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      description: "Fresh groceries delivered to you",
      path: "/groceries"
    },
    {
      title: "Pharmacy",
      icon: <Pill className="h-6 w-6 text-primary" />,
      description: "Medicines and healthcare products",
      path: "/pharmacy"
    },
    {
      title: "Parcel Services",
      icon: <Package className="h-6 w-6 text-primary" />,
      description: "Send and receive packages",
      path: "/parcels"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to NearGo</h1>
            <p className="text-gray-500">Your one-stop shop for all daily needs</p>
          </div>

          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;