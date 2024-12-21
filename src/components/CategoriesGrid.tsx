import { ShoppingBag, Store, Package, Pill, Heart, Leaf, Clock } from "lucide-react";
import CategoryCard from "./CategoryCard";

export const categories = [
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

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;