import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import Home from './pages/Home';
import FoodDelivery from './pages/FoodDelivery';
import Groceries from './pages/Groceries';
import Pharmacy from './pages/Pharmacy';
import HealthyOptions from './pages/HealthyOptions';
import QuickMeals from './pages/QuickMeals';
import LocalFavorites from './pages/LocalFavorites';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import RestaurantMenu from './pages/RestaurantMenu';
import ShopDetail from './pages/ShopDetail';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import { AdminLayout } from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminDispatcher from './pages/admin/Dispatcher';
import AdminDrivers from './pages/admin/Drivers';
import AdminOrders from './pages/admin/Orders';
import AdminRestaurants from './pages/admin/Restaurants';
import AdminFinances from './pages/admin/Finances';
import AdminPromocodes from './pages/admin/Promocodes';
import AdminReviews from './pages/admin/Reviews';
import AdminDocuments from './pages/admin/Documents';
import AdminSettings from './pages/admin/Settings';
import AdminPages from './pages/admin/Pages';
import { VendorLayout } from './components/vendor/VendorLayout';
import VendorDashboard from './pages/vendor/Dashboard';
import VendorOrders from './pages/vendor/Orders';
import VendorProducts from './pages/vendor/Products';
import VendorAnalytics from './pages/vendor/Analytics';
import VendorSettings from './pages/vendor/Settings';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import UserSettings from './pages/UserSettings';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RestaurantRegistration from './pages/RestaurantRegistration';
import DriverRegistration from './pages/DriverRegistration';
import TrackOrder from './pages/TrackOrder';
import Reviews from './pages/Reviews';
import Favorites from './pages/Favorites';
import AddressBook from './pages/AddressBook';
import PaymentMethods from './pages/PaymentMethods';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/food-delivery/:id" element={<ShopDetail />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/groceries/:id" element={<ShopDetail />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/pharmacy/:id" element={<ShopDetail />} />
        <Route path="/healthy-options" element={<HealthyOptions />} />
        <Route path="/healthy-options/:id" element={<ShopDetail />} />
        <Route path="/quick-meals" element={<QuickMeals />} />
        <Route path="/quick-meals/:id" element={<ShopDetail />} />
        <Route path="/local-favorites" element={<LocalFavorites />} />
        <Route path="/local-favorites/:id" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurant-menu" element={<RestaurantMenu />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/track-order/:id" element={<TrackOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/restaurant-registration" element={<RestaurantRegistration />} />
        <Route path="/driver-registration" element={<DriverRegistration />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/address-book" element={<AddressBook />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="dispatcher" element={<AdminDispatcher />} />
          <Route path="drivers" element={<AdminDrivers />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="restaurants" element={<AdminRestaurants />} />
          <Route path="finances" element={<AdminFinances />} />
          <Route path="promocodes" element={<AdminPromocodes />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="documents" element={<AdminDocuments />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="pages" element={<AdminPages />} />
        </Route>

        {/* Vendor Routes */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<VendorDashboard />} />
          <Route path="dashboard" element={<VendorDashboard />} />
          <Route path="orders" element={<VendorOrders />} />
          <Route path="products" element={<VendorProducts />} />
          <Route path="analytics" element={<VendorAnalytics />} />
          <Route path="settings" element={<VendorSettings />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;