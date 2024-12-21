import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import AdminDashboard from "@/pages/admin/Dashboard";
import Orders from "@/pages/admin/Orders";
import Restaurants from "@/pages/admin/Restaurants";
import AddRestaurant from "@/pages/admin/restaurants/AddRestaurant";
import UnapprovedRestaurants from "@/pages/admin/restaurants/UnapprovedRestaurants";
import BlockedRestaurants from "@/pages/admin/restaurants/BlockedRestaurants";
import RejectedRestaurants from "@/pages/admin/restaurants/RejectedRestaurants";
import Drivers from "@/pages/admin/Drivers";
import Finances from "@/pages/admin/Finances";
import Settings from "@/pages/admin/Settings";
import DeliveryCharges from "@/pages/admin/settings/DeliveryCharges";
import PushNotifications from "@/pages/admin/settings/PushNotifications";
import ServiceSettings from "@/pages/admin/settings/ServiceSettings";

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
        <Route path="/admin/orders/:status" element={<Orders />} />
        <Route path="/admin/restaurants" element={<Restaurants />} />
        <Route path="/admin/restaurants/add" element={<AddRestaurant />} />
        <Route
          path="/admin/restaurants/unapproved"
          element={<UnapprovedRestaurants />}
        />
        <Route
          path="/admin/restaurants/blocked"
          element={<BlockedRestaurants />}
        />
        <Route
          path="/admin/restaurants/rejected"
          element={<RejectedRestaurants />}
        />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/finances" element={<Finances />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route
          path="/admin/settings/delivery-charges"
          element={<DeliveryCharges />}
        />
        <Route
          path="/admin/settings/notifications"
          element={<PushNotifications />}
        />
        <Route path="/admin/settings/service" element={<ServiceSettings />} />
      </Routes>
    </Router>
  );
}

export default App;