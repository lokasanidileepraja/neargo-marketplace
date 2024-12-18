import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import FoodDelivery from "@/pages/FoodDelivery";
import RestaurantMenu from "@/pages/RestaurantMenu";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { shops } from "@/data/shops";
import KiranaShopCard from "@/components/KiranaShopCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/food-delivery/:id" element={<RestaurantMenu />} />
        <Route path="/groceries" element={<CategoryPage title="Groceries" category="groceries" />} />
        <Route path="/pharmacy" element={<CategoryPage title="Pharmacy" category="pharmacy" />} />
        <Route path="/local-favorites" element={<CategoryPage title="Local Favorites" category="local-favorites" />} />
        <Route path="/healthy-options" element={<CategoryPage title="Healthy Options" category="healthy-options" />} />
        <Route path="/quick-meals" element={<CategoryPage title="Quick Meals" category="quick-meals" />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

// Component for category pages
const CategoryPage = ({ title, category }: { title: string; category: string }) => {
  const categoryShops = shops.filter(shop => shop.category === category);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="container py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">Explore our selection of {title.toLowerCase()}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryShops.map((shop) => (
              <KiranaShopCard
                key={shop.id}
                shop={shop}
                onViewItems={() => {
                  // Handle view items action
                  console.log("View items for shop:", shop.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;