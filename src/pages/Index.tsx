import { ShoppingBag, Store, Package, Pill, Heart, Leaf, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const categories = [
    {
      title: "Food Delivery",
      icon: <Store className="h-6 w-6 text-primary" />,
      description: "Your products will be showcased here",
      path: "/food-delivery"
    },
    {
      title: "Groceries",
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      description: "Your products will be showcased here",
      path: "/groceries"
    },
    {
      title: "Pharmacy",
      icon: <Pill className="h-6 w-6 text-primary" />,
      description: "Your products will be showcased here",
      path: "/pharmacy"
    },
    {
      title: "Local Favorites",
      icon: <Heart className="h-6 w-6 text-primary" />,
      description: "Explore Local Favorites",
      path: "/local-favorites"
    },
    {
      title: "Healthy Options",
      icon: <Leaf className="h-6 w-6 text-primary" />,
      description: "Welcome to Healthy Options",
      path: "/healthy-options"
    },
    {
      title: "Quick Meals",
      icon: <Clock className="h-6 w-6 text-primary" />,
      description: "Quick Meals for Busy Lives",
      path: "/quick-meals"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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