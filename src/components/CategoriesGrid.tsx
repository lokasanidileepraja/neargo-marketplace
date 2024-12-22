import { ShoppingBag, Store, Package, Pill, Heart, Leaf, Clock } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { memo } from "react";

export const categories = [
  {
    title: "Food Delivery",
    icon: <Store className="h-6 w-6 text-primary" />,
    description: "Order from your favorite restaurants",
    path: "/food-delivery"
  },
  {
    title: "Groceries",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    description: "Fresh groceries delivered daily",
    path: "/groceries"
  },
  {
    title: "Pharmacy",
    icon: <Pill className="h-6 w-6 text-primary" />,
    description: "Medicines and healthcare products",
    path: "/pharmacy"
  },
  {
    title: "Local Favorites",
    icon: <Heart className="h-6 w-6 text-primary" />,
    description: "Discover local gems near you",
    path: "/local-favorites"
  },
  {
    title: "Healthy Options",
    icon: <Leaf className="h-6 w-6 text-primary" />,
    description: "Nutritious and healthy choices",
    path: "/healthy-options"
  },
  {
    title: "Quick Meals",
    icon: <Clock className="h-6 w-6 text-primary" />,
    description: "Fast and convenient options",
    path: "/quick-meals"
  }
] as const;

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
};

// Memoize the component since categories are static
export default memo(CategoriesGrid);