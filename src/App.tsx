import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";

// Pages
import Index from "@/pages/Index";
import FoodDelivery from "@/pages/FoodDelivery";
import Groceries from "@/pages/Groceries";
import Pharmacy from "@/pages/Pharmacy";
import LocalFavorites from "@/pages/LocalFavorites";
import HealthyOptions from "@/pages/HealthyOptions";
import QuickMeals from "@/pages/QuickMeals";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import ShopDetail from "@/pages/ShopDetail";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminOrders from "@/pages/admin/Orders";
import AdminRestaurants from "@/pages/admin/Restaurants";
import AdminDrivers from "@/pages/admin/Drivers";
import AdminFinances from "@/pages/admin/Finances";
import AdminSettings from "@/pages/admin/Settings";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/food-delivery/:id" element={<ShopDetail />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/groceries/:id" element={<ShopDetail />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/pharmacy/:id" element={<ShopDetail />} />
        <Route path="/local-favorites" element={<LocalFavorites />} />
        <Route path="/local-favorites/:id" element={<ShopDetail />} />
        <Route path="/healthy-options" element={<HealthyOptions />} />
        <Route path="/healthy-options/:id" element={<ShopDetail />} />
        <Route path="/quick-meals" element={<QuickMeals />} />
        <Route path="/quick-meals/:id" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/restaurants" element={<AdminRestaurants />} />
        <Route path="/admin/drivers" element={<AdminDrivers />} />
        <Route path="/admin/finances" element={<AdminFinances />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Routes>
      <Toaster />
    </CartProvider>
  );
};

export default App;