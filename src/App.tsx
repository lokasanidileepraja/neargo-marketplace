import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import AdminDashboard from "@/pages/admin/Dashboard";
import Orders from "@/pages/admin/Orders";
import Restaurants from "@/pages/admin/Restaurants";
import Drivers from "@/pages/admin/Drivers";
import Finances from "@/pages/admin/Finances";
import Settings from "@/pages/admin/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/restaurants" element={<Restaurants />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/finances" element={<Finances />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;