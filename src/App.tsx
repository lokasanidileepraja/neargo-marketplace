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
import AdminOrders from "@/pages/admin/Orders";
import AdminRestaurants from "@/pages/admin/Restaurants";
import AdminDrivers from "@/pages/admin/Drivers";
import AdminFinances from "@/pages/admin/Finances";
import AdminSettings from "@/pages/admin/Settings";
import AdminDeliveryCharges from "@/pages/admin/settings/DeliveryCharges";
import AdminPushNotifications from "@/pages/admin/settings/PushNotifications";
import AdminServiceSettings from "@/pages/admin/settings/ServiceSettings";
import AddRestaurant from "@/pages/admin/restaurants/AddRestaurant";
import BlockedRestaurants from "@/pages/admin/restaurants/BlockedRestaurants";
import RejectedRestaurants from "@/pages/admin/restaurants/RejectedRestaurants";
import UnapprovedRestaurants from "@/pages/admin/restaurants/UnapprovedRestaurants";
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
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/orders/:status" element={<AdminOrders />} />
          <Route path="/admin/restaurants" element={<AdminRestaurants />} />
          <Route path="/admin/restaurants/add" element={<AddRestaurant />} />
          <Route path="/admin/restaurants/blocked" element={<BlockedRestaurants />} />
          <Route path="/admin/restaurants/rejected" element={<RejectedRestaurants />} />
          <Route path="/admin/restaurants/unapproved" element={<UnapprovedRestaurants />} />
          <Route path="/admin/drivers" element={<AdminDrivers />} />
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/settings/delivery-charges" element={<AdminDeliveryCharges />} />
          <Route path="/admin/settings/notifications" element={<AdminPushNotifications />} />
          <Route path="/admin/settings/service" element={<AdminServiceSettings />} />
        </Routes>
        <Toaster />
      </CartProvider>
    </Router>
  );
}

export default App;