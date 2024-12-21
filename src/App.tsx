import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import FoodDelivery from "@/pages/FoodDelivery";
import Groceries from "@/pages/Groceries";
import HealthyOptions from "@/pages/HealthyOptions";
import LocalFavorites from "@/pages/LocalFavorites";
import Pharmacy from "@/pages/Pharmacy";
import QuickMeals from "@/pages/QuickMeals";
import Menu from "@/pages/Menu";
import ShopDetail from "@/pages/ShopDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import Orders from "@/pages/Orders";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/food-delivery" element={<FoodDelivery />} />
          <Route path="/food-delivery/:id" element={<ShopDetail />} />
          <Route path="/groceries" element={<FoodDelivery />} />
          <Route path="/groceries/:id" element={<ShopDetail />} />
          <Route path="/healthy-options" element={<HealthyOptions />} />
          <Route path="/healthy-options/:id" element={<ShopDetail />} />
          <Route path="/local-favorites" element={<LocalFavorites />} />
          <Route path="/local-favorites/:id" element={<ShopDetail />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/pharmacy/:id" element={<ShopDetail />} />
          <Route path="/quick-meals" element={<QuickMeals />} />
          <Route path="/quick-meals/:id" element={<ShopDetail />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;