import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import FoodDelivery from "@/pages/FoodDelivery";
import Groceries from "@/pages/Groceries";
import HealthyOptions from "@/pages/HealthyOptions";
import LocalFavorites from "@/pages/LocalFavorites";
import Pharmacy from "@/pages/Pharmacy";
import QuickMeals from "@/pages/QuickMeals";
import RestaurantMenu from "@/pages/RestaurantMenu";
import ShopDetail from "@/pages/ShopDetail";
import AdminDashboard from "@/pages/admin/Dashboard";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/food-delivery" element={<FoodDelivery />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/healthy-options" element={<HealthyOptions />} />
          <Route path="/local-favorites" element={<LocalFavorites />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/quick-meals" element={<QuickMeals />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </CartProvider>
    </Router>
  );
}

export default App;