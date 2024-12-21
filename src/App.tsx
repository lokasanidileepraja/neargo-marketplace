import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import Dispatcher from "@/pages/admin/Dispatcher";
import Drivers from "@/pages/admin/Drivers";
import Finances from "@/pages/admin/Finances";
import Promocodes from "@/pages/admin/Promocodes";
import Reviews from "@/pages/admin/Reviews";
import Documents from "@/pages/admin/Documents";
import Settings from "@/pages/admin/Settings";
import Pages from "@/pages/admin/Pages";
import Index from "@/pages/Index";
import FoodDelivery from "@/pages/FoodDelivery";
import ShopDetail from "@/pages/ShopDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/food-delivery" element={<FoodDelivery />} />
          <Route path="/food-delivery/:id" element={<ShopDetail />} />
          <Route path="/groceries" element={<FoodDelivery />} />
          <Route path="/groceries/:id" element={<ShopDetail />} />
          <Route path="/pharmacy" element={<FoodDelivery />} />
          <Route path="/pharmacy/:id" element={<ShopDetail />} />
          <Route path="/local-favorites" element={<FoodDelivery />} />
          <Route path="/local-favorites/:id" element={<ShopDetail />} />
          <Route path="/healthy-options" element={<FoodDelivery />} />
          <Route path="/healthy-options/:id" element={<ShopDetail />} />
          <Route path="/quick-meals" element={<FoodDelivery />} />
          <Route path="/quick-meals/:id" element={<ShopDetail />} />
          <Route path="/admin/*" element={
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dispatcher" element={<Dispatcher />} />
                <Route path="drivers" element={<Drivers />} />
                <Route path="finances" element={<Finances />} />
                <Route path="promocodes" element={<Promocodes />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="documents" element={<Documents />} />
                <Route path="settings" element={<Settings />} />
                <Route path="pages" element={<Pages />} />
              </Routes>
            </AdminLayout>
          } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;