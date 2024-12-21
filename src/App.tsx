import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders";
import AdminRestaurants from "./pages/admin/Restaurants";
import AdminFinances from "./pages/admin/Finances";
import AdminSettings from "./pages/admin/Settings";
import Drivers from "./pages/admin/Drivers";
import AddDriver from "./pages/admin/drivers/AddDriver";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/restaurants" element={<AdminRestaurants />} />
          <Route path="/admin/drivers" element={<Drivers />} />
          <Route path="/admin/drivers/add" element={<AddDriver />} />
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;